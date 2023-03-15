export {};

declare global {
  interface PayedPosLib {
    initiatePayment(applicationId: string, reference: string, totalPrice: number, printablesJson?: string | null | undefined) : any;
    getTerminalId() : String
  }
  const PayedPos : PayedPosLib
}