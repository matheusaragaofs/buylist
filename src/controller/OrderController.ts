import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import Order from '../entity/Order'
import Products from '../entity/Product'

export const showOrder = async (request,response:Response)=>{
    const { page } = request.query
    const result = await getRepository(Order).find({
        take:1,
        skip: 1 * page

    })
    try {
        return response.status(201).json(result)
        
    }catch (error) {
        console.error
    }
}

export const editOrder= async (request:Request, response:Response)=>{
    const { id } = request.params
    const { amount } = request.body

    const orderRepo = await getRepository(Order)
    const productRepo = await getRepository(Products)

    const order =  await orderRepo.findOne(id)
    const product_id = order.product_id
    const produto = await productRepo.findOne({where:{
        id: product_id
    }})    
    const product_price = produto.price
    const sum_price = amount * product_price

    // Dica: Posso atualizar mais de um item através de um objeto
    await orderRepo.update(id,{amount:amount, sum_price:sum_price})
    try {
    return response.status(200).json({
         message:'Order updated successfully'
     })
        
    } catch (error) {
        console.error
    }
}
    
export const removeOrder= async (request:Request, response:Response)=>{
    const { id } = request.params 
    const order = await getRepository(Order).findOne({where:{
        id
    }})
    await getRepository(Order).remove(order)
    try {
        
        return response.json({
            message: "Order was removed successfully",
        })
        
    } catch (error) {
            console.error
    }
    
}

export const addOrder= async (request:Request, response:Response)=>{
 const {product_id,amount}=  request.body
    try{
    
    const OrderRepository = await getRepository(Order)
    const productsRepository = await getRepository(Products)
    const product = await productsRepository.findOne(product_id)
    const price = product.price
    const sum_price = amount*price

    const order = await OrderRepository.create({
        product_id, 
        amount,
        sum_price
    })
    await OrderRepository.save(order)
    return response.status(201).json({message:"Order was added successfully"})
    }catch(err){
        console.log(err)
    }
}