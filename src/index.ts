// @ts-nocheck
class PayedTerminal {
    printLines;
    applicationId;
    constructor(applicationId) {
        this.applicationId = applicationId;
    }
    getTerminalId() {
        return PayedPos.getTerminalId()
    }
    appendToPrintOutOnSuccess(printLines) {
        this.printLines = printLines;
        return this;
    }
    initiatePayment(reference, totalPrice) {
        reference = reference.trim();
        if(reference == "") {
            throw new Error("reference can not be empty or blank")
        }

        if(totalPrice <= 0) {
            throw new Error("totalPrice can not be less than or equal to zero")
        }

        let printablesJson: string = "";
        if(this.printLines) {
            printablesJson = JSON.stringify(this.printLines);
        }
        PayedPos.initiatePayment(this.applicationId, reference, totalPrice, printablesJson);
        this.printLines = null
        return true;
    }
}

window.PayedTerminal = PayedTerminal;
