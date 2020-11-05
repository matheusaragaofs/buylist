import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from 'typeorm'
import * as bcrypt from "bcryptjs"
@Entity('user')
export default class User {
    @PrimaryGeneratedColumn('uuid')
     id: string;
    
    @Column()
    email:string;

    @Column()
    password: string


    @BeforeInsert()
    @BeforeUpdate()
    //É pra ele encriptar a senha antes de inserir e atualizar a senha.
    hashPassword(){
        this.password = bcrypt.hashSync(this.password,8)
    }



}