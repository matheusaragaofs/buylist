import {Entity, PrimaryGeneratedColumn, Column, Double, OneToMany, OneToOne} from "typeorm";

@Entity()
export default class Product {

    @PrimaryGeneratedColumn({ unsigned: true})
    id: number;


    @Column()
    name: string;


    @Column({type:"float"})
    price: number
    

    @Column()
    description: string;

    @Column()
    category: string


}


