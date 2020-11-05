
import {Request, response, Response} from 'express'
import { getRepository } from 'typeorm'
import User from "../entity/User"
import * as bcrypt from "bcryptjs"
import * as jwt from 'jsonwebtoken'

class AuthController {
 async authenticate(request:Request,response:Response){
    const userRepo = getRepository(User)
    const { email, password } = request.body

    const user = await userRepo.findOne({where: { email }})

    //Se não encontrou o email
    if (!user){
        return response.sendStatus(401)   
    }
    //compare -> 1º parâmetro é a senha que o usuário está passando na requisição do body.
        // ->2ª parâmetro é a senha que eu tenho armazenado no meu banco de dados.
    const isValidPassword = await  bcrypt.compare(password,user.password)

    //Se não encontrou a senha
        if (!isValidPassword){
            return response.sendStatus(401)
        }
        //Payload é o conteúdo enviado por um meio de transporte, ou carrier
        //O conteúdo JSON é o payload enviado via protocolo HTTP a partir do endpoint REST*;

    //jwt.sign()  1º parâmetro é o payload, informações que quer armazenar dentro dele
                // 2² argumento é a chave secreta (o que faz o token ser válido); 3º argumento é o tempo de expiração.
    const token = jwt.sign({id: user.id},'secret', {expiresIn: '1d'})
    
    //Só vai deletar pra não mostrar na response, mas irá salvar
    delete user.password


        return response.json({
            user,
            token
        })

    }
    
}
export default new AuthController()