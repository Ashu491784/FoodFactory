import {PaymentMethods, StripeAdapter, PaypalAdapter, cashAdapter} from '../components/paymentAdapter';
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
       <div className='p-6 space-y-4'>
        <h2 className='text-xl font-semobold'>Payment</h2>
       <input
  type="number"
  value={amount}
  placeholder="Amount here"
  onChange={(e) => setAmount(e.target.value)}
/>
       <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className='border p-2'>
        <option value="">Select Method</option>
        <option value="cash">Cash</option>
        <option value="paypal">Paypal</option>
        <option value="stripe">Stripe</option>
       </select>
       <Link to="/">
       <button onClick={handlePayment} className='bg-blue-300 hover:bg-indigo-600 text-pink-950 px-4 py-2 rounded'>Pay</button>
       </Link>
       
       </div>
    )
};

export default PaymentComponents;