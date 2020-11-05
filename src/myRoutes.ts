import {
    addProduct,
    editProduct,
    showProduct,
    showProducts,
    removeProduct,
    amountProducts,
} from './controller/ProductController'

import {
    addOrder,
    showOrder,
    showOrders,
    removeOrder,
    editOrder

} 
from './controller/OrderController'

import UserController from "./controller/UserController"
import AuthController from "./controller/AuthController"
import authMiddleware from "./app/middlewares/authMiddleware"


import { Router } from 'express'
const mainRouter = Router()


mainRouter.post('/users', UserController.store)
mainRouter.post('/auth', AuthController.authenticate)
mainRouter.get('/products:page?',authMiddleware, showProducts)
mainRouter.get('/product/:id',authMiddleware,showProduct)
mainRouter.get('/amountProducts',authMiddleware,amountProducts)
mainRouter.post('/product',authMiddleware, addProduct)
mainRouter.put('/product/:id',authMiddleware, editProduct)
mainRouter.delete('/product/:id', authMiddleware,removeProduct)

mainRouter.get('/orders:page?',authMiddleware,showOrders),
mainRouter.get('/order/:id',authMiddleware,showOrder)
mainRouter.post('/order',authMiddleware,addOrder)
mainRouter.put('/order/:id',authMiddleware,editOrder)
mainRouter.delete('/order/:id',authMiddleware,removeOrder)

export default mainRouter