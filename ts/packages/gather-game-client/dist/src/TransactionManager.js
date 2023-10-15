"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionManager = void 0;
const TXN_TIMEOUT_LENGTH_MS = 1000 * 60 * 10;
const Logger_1 = require("./Logger");
class TransactionManager {
    constructor() {
        this.pendingTxns = {};
        this.txnTimeouts = {};
    }
    isPending(txnId) {
        return txnId in this.pendingTxns;
    }
    addTransaction(customTimeout) {
        const timeoutLength = customTimeout ?? TXN_TIMEOUT_LENGTH_MS;
        const txnId = this.getRandomTxnId();
        const txnPromise = new Promise((res, rej) => {
            if (txnId === undefined)
                return;
            this.pendingTxns[txnId] = { res, rej };
            this.txnTimeouts[txnId] = setTimeout(() => {
                this.rejectTransaction(txnId, "Transaction timed out");
            }, timeoutLength);
        });
        return { txnId, txnPromise };
    }
    rejectTransaction(txnId, message) {
        this.pendingTxns[txnId]?.rej(new Error(message ?? "Transaction was rejected"));
        const timeout = this.txnTimeouts[txnId];
        if (timeout) {
            clearTimeout(timeout);
        }
        delete this.pendingTxns[txnId];
        delete this.txnTimeouts[txnId];
    }
    rejectAllTransactions(exclude = new Set(), message) {
        Object.keys(this.pendingTxns).forEach((txnIdString) => {
            const txnId = parseInt(txnIdString);
            if (!exclude.has(txnId)) {
                this.rejectTransaction(txnId, message);
            }
        });
    }
    handleTransactionStatusEvent(transactionStatus) {
        const { txnId, succeeded, reason } = transactionStatus;
        if (this.pendingTxns[txnId] === undefined) {
            Logger_1.logger.warn("Received a txnId for a non-pending transaction.");
            return;
        }
        if (succeeded) {
            this.pendingTxns[txnId]?.res(true);
        }
        else {
            this.pendingTxns[txnId]?.rej(new Error(`Transaction failed due to error. ${reason ?? ""}`));
        }
        const timeout = this.txnTimeouts[txnId];
        if (timeout) {
            clearTimeout(timeout);
        }
        delete this.pendingTxns[txnId];
        delete this.txnTimeouts[txnId];
    }
    getRandomTxnId() {
        return Math.floor(Math.random() * 4294967295);
    }
}
exports.TransactionManager = TransactionManager;
//# sourceMappingURL=TransactionManager.js.map