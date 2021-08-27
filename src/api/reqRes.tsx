import axios from 'axios'

export const reqResApi  = axios.create({
    baseURL: 'https://servicios.inclubtest.online:2053/api'
})
