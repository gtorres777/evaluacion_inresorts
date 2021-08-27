export interface reqResPaymentsListado {
    status:      number;
    description: string;
    objModel:    Payment[];
}

export interface Payment {
    idPayment:          number;
    quoteDescription:   string;
    nextExpiration:     Date;
    dollarExchange:     number;
    quoteUsd:           number;
    quote:              number;
    amortization:       number;
    capitalBalance:     number;
    porcentaje:         number;
    interested:         number;
    verif:              number;
    obs:                null;
    isQuoteInitial:     number;
    payDate:            Date;
    pts:                number;
    numberQuotePay:     number;
    idSuscription:      number;
    positionOnSchedule: number;
    amortizationUsd:    number;
    capitalbalanceUsd:  number;
    paymentVouchers:    PaymentVoucher[];
}

export interface PaymentVoucher {
    idPaymentVoucher:      number;
    paymentId:             number;
    suscriptionId:         number;
    operationNumber:       string;
    methodSubTipoPagoId:   number;
    note:                  null;
    paymentCoinCurrencyId: number;
    subTotalAmount:        number;
    comissionSubTipoPago:  number;
    totalAmount:           number;
    creationDate:          Date;
    nameMethodTipoPago:    NameMethodTipoPago;
    nameMethodSubTipoPago: NameMethodSubTipoPago;
    idRefeferenciaClass:   number;
    base64:                string;
    namePicture:           string;
    pathPicture:           null;
    statusSave:            boolean;
}

export enum NameMethodSubTipoPago {
    BancaPorInternet = "Banca por Internet",
    CuentaBCPYape = "Cuenta BCP Yape",
}

export enum NameMethodTipoPago {
    Bcp = "BCP",
    Interbank = "INTERBANK",
}
