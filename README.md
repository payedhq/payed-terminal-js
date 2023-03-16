# How to install

```bash
    npm install --save payed-terminal
```

# How to use

1. Import the library
```ts

import { PayedTerminal } from "payed-terminal"

```

2. Create an instance using your application id
```ts

const appId = "your-app-id" //gotten from the payed web portal
const terminalInstance = new PayedTerminal(appId);

```

3. Initiate a transaction
```ts

const transactionReference = "your-unique-transaction-reference"

const totalPrice = 120 //your price in Naira


//optionally call this endpoint to append lines to the printout
terminalInstance.appendToPrintOutOnSuccess({
    "Customer": "09064082341"
})


terminalInstance.initiatePayment(transactionReference, totalPrice)


```

4. You can retrieve the terminal id
```ts

const terminalId = terminalInstance.getTerminalId()

```
