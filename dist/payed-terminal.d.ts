type PrintLines = {
    [key: string]: string;
};
export declare class PayedTerminal {
    protected applicationId: string;
    private printLines?;
    constructor(applicationId: string);
    getTerminalId(): String;
    appendToPrintOutOnSuccess(printLines: PrintLines): PayedTerminal;
    initiatePayment(reference: string, totalPrice: number): boolean;
}
export {};
