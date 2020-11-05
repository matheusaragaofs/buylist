import { getRepository } from 'typeorm';
import Product from "../entity/Product"
import { Request, Response } from "express"


export const addProduct = async (request: Request, response: Response) => {
    const product = await getRepository(Product).save(request.body)
    try {
    return response.status(201).json(product)
        
    } catch (error) {
        console.error
    }
}
//Pagination
export const showProducts = async (request,response:Response)=>{
    const {page} = request.query
    const result = await getRepository(Product).find({
        take:4,
        skip: 4 * page,
    })
    try {
    return response.status(201).json(result)
        
    } catch (error) {
        console.error        
    }
}

export const showProduct = async (request:Request,response:Response)=>{
    const { id } = request.params
    const productRepo = await getRepository(Product)
    const product = await productRepo.find({where:{
        id
    }})

    try {
        return response.status(200).json(product)
    } catch (error) {
        console.error
    }

}

export const removeProduct = async (request: Request, response: Response) => {
    const { id } = request.params
    const product = await getRepository(Product).findOne({
        where: {
            id: id
        }
    })
    await getRepository(Product).remove(product)
    try {
        return response.json({
            message: "Product successfully removed ",
            product: product
        })
    } catch (error) {
        console.error
    }
}

export const editProduct = async (request: Request, response: Response) => {
    const { id } = request.params
    await getRepository(Product).update(id, request.body)
    try {
        return response.status(201).json({
            message: "Product successfully changed",
            changed_product: await getRepository(Product).findOne(id)
        })
    } catch (error) {
        console.error
    }
    
}

export const amountProducts = async (request: Request, response: Response) => {
    const qtd = await getRepository(Product).count()
    try {
        return response.status(200).json({
            message: `The number of registered products is ${qtd}`
        })
    } catch (error) {
        console.error
    }
  

}






