import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import './CheckoutForm.css'
import useSelectedClasses from "../../../../Hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const CheckoutForm = ({ classId }) => {
    const [selectedClasses, refetch] = useSelectedClasses();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate=useNavigate();
    const paymentClass = selectedClasses?.find(classItem => classItem._id == classId);
    const { price, _id, selectedId,className } = paymentClass;

    

    useEffect(() => {

        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
                
        }
        
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                _id,
                selectedId,
                className,
                status: 'Class pending',

            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `You have enrolled for the class ${className}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard',{replace:true});
                    }

                    axiosSecure.patch(`classes/enrolled/${selectedId}`)
                    .then(data=>{
                        if(data.data.modifiedCount){
                            // enrolled
                        }
                    })
                })
        }


    }

    return (
        <>
            <form className="w-full" onSubmit={handleSubmit}>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-prime w-full text-white mt-1 py-1.5 px-4 rounded-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 mt-1">{cardError}</p>}
            {transactionId && <p className="text-green-500">Payment Successful, transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;