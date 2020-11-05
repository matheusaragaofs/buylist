import {Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn} from "typeorm";
import Product from './Product'
@Entity()
export default class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column({type:'float'})
    sum_price: number;

    @Column()
    product_id: number;
  
    @OneToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;
   

}


