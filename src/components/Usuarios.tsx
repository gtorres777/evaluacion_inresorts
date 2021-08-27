import React from 'react'
import { useUsuarios } from '../hooks/useUsuarios'
import { Usuario } from '../interfaces/reqRes.interface'
import default_avatar from '../assets/images/default_avatar.png'
import Filter from './Filter'
import { useHistory } from "react-router-dom";

export const Usuarios = () => {

    const {  handleFilters, usuariosFiltered } = useUsuarios()

    let history = useHistory();

    const handleDetails = (user:string) => {
        history.push({
        pathname: '/users_payments',
        state: { user: user }
        })
    }

    const renderUsuario = ({id,userResponseDto}:Usuario) => {
        return (
            <tr key={id.toString()}>

                { (userResponseDto.profilePicture === null) ?

                    <td>
                        <img
                            src={default_avatar}
                            alt={userResponseDto.name}
                            style={{
                                width:37,
                                borderRadius:100
                            }}
                        />
                    </td>
                    :

                    <td>
                        <img
                            src={`userResponseDto.profilePicture`}
                            alt={userResponseDto.name}
                            style={{
                                width:37,
                                borderRadius:100
                            }}
                        />
                    </td>
                }
                <td>{userResponseDto.name} {userResponseDto.lastname}</td>
                <td>{userResponseDto.username}</td>
                <td>{userResponseDto.email}</td>
                <td>{userResponseDto.stateName}</td>
                <td>{userResponseDto.nroTelf}</td>
                <td>
                <button className="btn btn-primary" onClick={ () => handleDetails(userResponseDto.name) }>
                        Ver Detalle
                </button>
                </td>
            </tr>
        )
    }



    return (
        <>

            <Filter handleFilters={ (filters: number[]) => handleFilters(filters)}/>

            <h3>Usuarios</h3>

            {
                (usuariosFiltered.length === 0 ?

                    <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Nombres y Apellidos</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Estado</th>
                                <th>N° Teléfono</th>
                                <th>Detalles </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>

                    <div style={{display:"flex", justifyContent:"center"}} >
                        <h1> No existen usuarios con ese estado </h1>
                    </div>
                    </>

                    :

                <table className="table">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Nombres y Apellidos</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Estado</th>
                            <th>N° Teléfono</th>
                            <th>Detalles </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                usuariosFiltered.map( usuario => renderUsuario(usuario))
                        }
                    </tbody>
                </table>
                )
            }


        </>
    )
}
