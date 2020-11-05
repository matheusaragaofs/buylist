
import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import User from "../entity/User"
class UserController {
 async store(request:Request,response:Response){
    const userRepo = getRepository(User)
    const { email, password } = request.body

    const userExists = await userRepo.findOne({where: { email }})
     //Se o email for igual ao do usuário que está mandando na requisição. 
    if (userExists) {
        return response.sendStatus(409); //409 = Conflict, já existe esse registro com esse email
    }
    const user = userRepo.create({email ,password})
    await userRepo.save(user)
    return response.json(user)
   
    }
}
export default new UserController()