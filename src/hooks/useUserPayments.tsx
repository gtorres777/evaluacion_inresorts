import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { Payment, reqResPaymentsListado } from "../interfaces/reqResPayments.interface"

export const useUserPayments = () => {
    const [userPayments, setUserPayments] = useState<Payment[]>([])

    useEffect(() => {
        cargarUserPayments()
    }, [])

    const cargarUserPayments = async () => {
        const resp = await reqResApi.get<reqResPaymentsListado>('/payment/schedule/vouchers/383')

        setUserPayments(resp.data.objModel)

    }

    return {
        userPayments,
        setUserPayments,
    }

}
