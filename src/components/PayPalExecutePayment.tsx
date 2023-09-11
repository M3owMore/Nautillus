import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";

function PayPalExecutePayment(props:any) {
  const [executionStatus, setExecutionStatus]:any = useState(null);
  let { token } = useParams();

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const paymentId = queryParameters.get("paymentId")
    const PayerID = queryParameters.get("PayerID")

    const executePayment = async () => {
      try {
        const response = await axios.post(props.app.backendURL + `api/user/paypal/execute/`, {payment_id : paymentId, payer_id: PayerID, course_id: token} , {headers: {Authorization: 'Bearer ' + props.app.cookies.get('access')}});
        setExecutionStatus(response.data.success);
      } catch (error) {
        console.error('Payment execution failed:', error);
        setExecutionStatus('Payment execution failed');
      }
    };

    executePayment();
  }, []);

  return (
    <div className='absolute top-20 bottom-0 left-0 right-0 text-2xl text-secondary flex items-center justify-center'>
      {executionStatus ? (
        <p>{executionStatus}</p>
      ) : (
        <p>Executing PayPal payment...</p>
      )}
    </div>
  );
}

export default PayPalExecutePayment;