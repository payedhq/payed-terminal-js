// @ts-nocheck
var PayedTerminal = /** @class */ (function () {
    function PayedTerminal(applicationId) {
        this.applicationId = applicationId;
    }
    PayedTerminal.prototype.getTerminalId = function () {
        return PayedPos.getTerminalId();
    };
    PayedTerminal.prototype.appendToPrintOutOnSuccess = function (printLines) {
        this.printLines = printLines;
        return this;
    };
    PayedTerminal.prototype.initiatePayment = function (reference, totalPrice) {
        reference = reference.trim();
        if (reference == "") {
            throw new Error("reference can not be empty or blank");
        }
        if (totalPrice <= 0) {
            throw new Error("totalPrice can not be less than or equal to zero");
        }
        var printablesJson = "";
        if (this.printLines) {
            printablesJson = JSON.stringify(this.printLines);
        }
        PayedPos.initiatePayment(this.applicationId, reference, totalPrice, printablesJson);
        this.printLines = null;
        return true;
    };
    return PayedTerminal;
}());
window.PayedTerminal = PayedTerminal;
