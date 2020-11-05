import { Request, Response, NextFunction } from 'express'
import * as jwt from "jsonwebtoken"

export default function authMiddleware
    (request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers


    if (!authorization) {
        return response.sendStatus(401)
    }
    //trim remove espaços vazios de frente e traz da string
    const token = authorization.replace('Bearer', '').trim()

    try {
        //verify() pede pra verificar seu token, dando a chave secreta "setada" antes.
        jwt.verify(token, 'secret')
        return next()


    } catch {
        return response.sendStatus(401)
    }

}