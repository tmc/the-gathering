import { TransactionStatus } from "@gathertown/gather-game-common/dist/src/public/events";
export declare class TransactionManager {
    private pendingTxns;
    private txnTimeouts;
    isPending(txnId: number): boolean;
    addTransaction(customTimeout?: number): {
        txnId: number;
        txnPromise: Promise<unknown>;
    };
    rejectTransaction(txnId: number, message?: string): void;
    rejectAllTransactions(exclude?: Set<number>, message?: string): void;
    handleTransactionStatusEvent(transactionStatus: TransactionStatus): void;
    private getRandomTxnId;
}
