"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayedTerminal = void 0;
class PayedTerminal {
    constructor(applicationId) {
        this.applicationId = applicationId;
        this.printLines = null;
    }
    getTerminalId() {
        return PayedPos.getTerminalId();
    }
    appendToPrintOutOnSuccess(printLines) {
        this.printLines = printLines;
        return this;
    }
    initiatePayment(reference, totalPrice) {
        reference = reference.trim();
        if (reference == "") {
            throw new Error("reference can not be empty or blank");
        }
        if (totalPrice <= 0) {
            throw new Error("totalPrice can not be less than or equal to zero");
        }
        let printablesJson = null;
        if (this.printLines) {
            printablesJson = JSON.stringify(this.printLines);
        }
        PayedPos.initiatePayment(this.applicationId, reference, totalPrice, printablesJson);
        this.printLines = null;
        return true;
    }
}
exports.PayedTerminal = PayedTerminal;
