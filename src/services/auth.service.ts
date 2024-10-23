import { User } from "../models/user"

const url = 'http://localhost:3030/auth/login'
const loggedKey = '@AULA_WEB_REACT:LOGGED_USER'

export function getLoggedUser() {
    const json = localStorage.getItem(loggedKey)
    if(json) return JSON.parse(json) as User
        return null
}

export async function login(username: string, password: string) {

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    const logged: User = await response.json()

    if(logged && logged.token){
        // salvar token
        // console.log(logged.token)
        localStorage.setItem(loggedKey, JSON.stringify(logged))
            return true
    }

    return false
}