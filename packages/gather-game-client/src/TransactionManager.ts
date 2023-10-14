const TXN_TIMEOUT_LENGTH_MS = 1000 * 60 * 10;

import { TransactionStatus } from "@gathertown/gather-game-common/dist/src/public/events";
import { logger } from "./Logger";

export class TransactionManager {
  private pendingTxns: {
    [txnId: number]: { res: (succeeded: boolean) => void; rej: (err: Error) => void };
  } = {};
  private txnTimeouts: { [txnId: number]: ReturnType<typeof setTimeout> } = {};

  isPending(txnId: number): boolean {
    return txnId in this.pendingTxns;
  }

  addTransaction(customTimeout?: number) {
    const timeoutLength = customTimeout ?? TXN_TIMEOUT_LENGTH_MS;
    const txnId = this.getRandomTxnId();
    const txnPromise = new Promise((res, rej) => {
      if (txnId === undefined) return;

      this.pendingTxns[txnId] = { res, rej };
      this.txnTimeouts[txnId] = setTimeout(() => {
        this.rejectTransaction(txnId, "Transaction timed out");
      }, timeoutLength);
    });
    return { txnId, txnPromise };
  }

  rejectTransaction(txnId: number, message?: string) {
    this.pendingTxns[txnId]?.rej(new Error(message ?? "Transaction was rejected"));
    const timeout = this.txnTimeouts[txnId];
    if (timeout) {
      clearTimeout(timeout);
    }
    delete this.pendingTxns[txnId];
    delete this.txnTimeouts[txnId];
  }

  /** Rejects ALL transactions, except those with their `txnId` marked in `exclude`. */
  rejectAllTransactions(exclude = new Set<number>(), message?: string) {
    Object.keys(this.pendingTxns).forEach((txnIdString) => {
      // We have to `parseInt` because plain object keys are actually always strings. We could refactor `pendingTxns`
      // to be a `Map` if we wanted to avoid this.
      const txnId = parseInt(txnIdString);

      if (!exclude.has(txnId)) {
        this.rejectTransaction(txnId, message);
      }
    });
  }

  handleTransactionStatusEvent(transactionStatus: TransactionStatus) {
    const { txnId, succeeded, reason } = transactionStatus;
    if (this.pendingTxns[txnId] === undefined) {
      logger.warn("Received a txnId for a non-pending transaction.");
      return;
    }
    if (succeeded) {
      this.pendingTxns[txnId]?.res(true);
    } else {
      this.pendingTxns[txnId]?.rej(new Error(`Transaction failed due to error. ${reason ?? ""}`));
    }
    const timeout = this.txnTimeouts[txnId];
    if (timeout) {
      clearTimeout(timeout);
    }
    delete this.pendingTxns[txnId];
    delete this.txnTimeouts[txnId];
  }

  // txnId is a uint32 so max possible is 2^32 - 1 = 4294967295
  private getRandomTxnId() {
    return Math.floor(Math.random() * 4294967295);
  }
}
