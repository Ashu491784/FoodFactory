import {PaymentMethods, StripeAdapter, PaypalAdapter, cashAdapter} from '../components/paymentAdapter';
import { useState } from 'react';

const PaymentComponents = () => {
    const [amount, setAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handlePayment = () => {
        let Adapterpay;

        switch(paymentMethod){
            case 'cash' :
                Adapterpay = new cashAdapter();
                break;
            case 'stripe' :
                Adapterpay = new StripeAdapter();
                break;
            case 'paypal' :
                Adapterpay = new PaypalAdapter();
                break;
            default: 
                alert('please Select payment method');
            return;    
        }
        Adapterpay.pay(parseFloat(amount));
        alert(`Payment of Rs:${amount} using ${paymentMethod} is successful`);
    };
    return (
        <div>
            <h2>Payment Now</h2>
            <input type='number' placeholder='Amount here' value={amount} onChange={(e) => setAmount(e.target.value)}>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}> 
               <option value="">Select Payment Method</option>
                <option value="cash">Cash</option>
                <option value="stripe">Stripe</option>
                <option value="paypal">Paypal</option>
                <button onClick={handlePayment}>Pay Now</button>
            </select>
            <button onClick={handlePayment}>Pay Now</button>
            </input>
        </div>
    )
}