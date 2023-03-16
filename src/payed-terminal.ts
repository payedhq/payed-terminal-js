type PrintLines = {[key: string]: string}

export class PayedTerminal {
    private printLines?: PrintLines = null

    constructor(protected applicationId: string) {

    }

    public getTerminalId() : string {
        return PayedPos.getTerminalId()
    }
    
    public appendToPrintOutOnSuccess(printLines: PrintLines) :  PayedTerminal {
        this.printLines = printLines;
        return this;
    }

    public initiatePayment(reference: string, totalPrice: number) : boolean {
        reference = reference.trim();
        if(reference == "") {
            throw new Error("reference can not be empty or blank")
        }

        if(totalPrice <= 0) {
            throw new Error("totalPrice can not be less than or equal to zero")
        }

        let printablesJson = null;
        if(this.printLines) {
            printablesJson = JSON.stringify(this.printLines);
        }

        PayedPos.initiatePayment(this.applicationId, reference, totalPrice, printablesJson);
        this.printLines = null
        return true;
    }
}