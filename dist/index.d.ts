declare class PayedTerminal {
    printLines: any;
    applicationId: any;
    constructor(applicationId: any);
    getTerminalId(): any;
    appendToPrintOutOnSuccess(printLines: any): this;
    initiatePayment(reference: any, totalPrice: any): boolean;
}
