import React from 'react'
import { useHistory } from "react-router-dom";
import { useUserPayments } from '../hooks/useUserPayments';
import { Payment } from '../interfaces/reqResPayments.interface';
import no_image from '../assets/images/image_not_found.png'


export const UserPayments = ( props: any ) => {

    const { userPayments } = useUserPayments()

    let history: any = useHistory();

    const handleHome = () => {
        history.push('/')
    }

    const renderUserPayments = ({idPayment,quoteDescription,payDate,paymentVouchers}:Payment) => {
        return (
            <div className="card mb-3"
                style={{
                    maxWidth:"1200px",
                }}
                key={idPayment.toString()}>
                <div className="row g-0">
                    <div className="col-md-4">
                        { (paymentVouchers[0].base64 === "") ?
                            <img
                                className="img-fluid rounded-start"
                                src={no_image}
                                alt={paymentVouchers[0].idPaymentVoucher.toString()}
                            />
                            :

                            <img
                                className="img-fluid rounded-start"
                                src={`data:image/png;base64,${paymentVouchers[0].base64}`}
                                alt={paymentVouchers[0].idPaymentVoucher.toString()}
                            />

                        }
                    </div>
                    <div className="col-md-8">
                    <div className="card-body"
                        >
                        <h5 className="card-title">{quoteDescription}</h5>
                        <p className="card-text">Banco: {paymentVouchers[0].nameMethodTipoPago}</p>
                        <p className="card-text">Método de pago: {paymentVouchers[0].nameMethodSubTipoPago}</p>
                        <p className="card-text"><small className="text-muted">Fecha de pago: {payDate}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>


            <h3>Cronograma de pagos del usuario: {history.location.state.user}</h3>

            <div>
                {
                    userPayments.map( payment => renderUserPayments(payment))
                }
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-success col-6" onClick={ handleHome }>
                            Volver a la Lista de Usuarios
                    </button>
                </div>
            </div>

        </div>
    )
}
