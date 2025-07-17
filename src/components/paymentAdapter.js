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
    processStripePayment(amountInRuppies){
        console.log(`Paid Rs:${amountInRuppies} using Stripe`);
    }
}
export class cashAdapter extends PaymentMethods{
    constructor(){
        super();
        this.cash = new cash();
    }
    pay(amount){
        this.cash.makePaymentCash(amount);
    }
}

export class PaypalAdapter extends PaymentMethods{
 constructor(){
    super();
    this.paypal = new paypal();
 }
 pay(amount){
    this.paypal.makePaymentPaypal(amount);
 }
 }   

export class StripeAdapter extends PaymentMethods{
    constructor(){
        super();
        this.stripe = new Stripe();
    }
    pay(amount){
        const amountInCenter = amount * 80;
       this.stripe.processStripePayment(amountInCenter);
    }
 }
 



export {PaymentMethods, cash, paypal, Stripe};