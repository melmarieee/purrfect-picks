import '../../css/alert.css'
import { Alert } from 'reactstrap';
import { useState } from 'react'



const AlertMessage = (props) => {

    const [alert, setModal] = useState(props.open);
    setTimeout(function() { 
        setModal(false)
     }, 2000);

    return(
    <>
        {
        <Alert color={props.color} className="alert-container py-3 my-4" isOpen={alert}>
            {props.name}
        </Alert>
        }
    </>
    )
}

export default AlertMessage;