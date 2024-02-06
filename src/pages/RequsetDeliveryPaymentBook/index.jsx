import { useLocation } from "react-router-dom"

const RequsetDeliveryPaymentBook = () => {
const item=useLocation()?.state?.item
console.log(item);
return (
    <div>
        RequsetDeliveryPaymentBook</div>
  )
}

export default RequsetDeliveryPaymentBook