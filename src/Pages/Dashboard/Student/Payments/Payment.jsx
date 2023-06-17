import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import SectionTopTitle from "../../../../Components/SectioTopTitle/SectionTopTitle";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { id } = useParams();

    return (
        <div>
            <SectionTopTitle sectionTitleTop='Pay Here' sectionTitle='Payment' sectionDesc='Secure payment method for students'></SectionTopTitle>
            <div className="lg:px-36 md:p-8 py-3">
                <div className="bg-dashboard sm:p-8 p-6">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm classId={id}></CheckoutForm>
                    </Elements>
                </div>

            </div>

        </div>
    );
};

export default Payment;