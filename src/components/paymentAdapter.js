class PaymentMethods {
    pay(amount){
        throw new Error ("payment method must be impoported");
    }
}

class cash {
    makePaymentCash(amountInRuppies){
        console.log(`Paid $${amountInRuppies} using Cash`);
    }
}

class paypal {
    makePaymentPaypal(amountInRuppies){
        console.log(`Paid Rs:${amountInRuppies} using Paypal`);
    }
}

class Stripe {
    makePaymentStripe(amountInRuppies){
        console.log(`Paid Rs:${amountInRuppies} using Stripe`);
    }
}


export {PaymentMethods, cash, paypal, Stripe};