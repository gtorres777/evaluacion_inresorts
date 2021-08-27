import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes.interface"

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuariosFiltered, setUsuariosFiltered] = useState<Usuario[]>([])

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/suscription/all/state/10')

        setUsuarios(resp.data.objModel)
        setUsuariosFiltered([...resp.data.objModel])

    }

    const handleFilters = (filters: number[]) => {
        const filtered_users: Usuario[] = usuarios.filter( usuario => filters.includes(usuario.status) )

        setUsuariosFiltered(filtered_users)

    }

    return {
        usuarios,
        setUsuarios,
        usuariosFiltered,
        setUsuariosFiltered,
        handleFilters,
    }

}
