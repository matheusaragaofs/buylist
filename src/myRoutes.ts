import {
    addProduct,
    editProduct,
    showProduct,
    removeProduct,
    amountProducts,
} from './controller/ProductController'

import {
    addOrder,
    showOrder,
    removeOrder,
    editOrder

} 
from './controller/OrderController'

import UserController from "./controller/UserController"
import AuthController from "./controller/AuthController"
import authMiddleware from "./app/middlewares/authMiddleware"


import { Router } from 'express'
const mainRouter = Router()

mainRouter.use(authMiddleware)

mainRouter.post('/users', UserController.store)
mainRouter.post('/auth', AuthController.authenticate)
mainRouter.get('/product:page?', showProduct)
mainRouter.get('/amountProducts',amountProducts)
mainRouter.post('/product', addProduct)
mainRouter.put('/product/:id', editProduct)
mainRouter.delete('/product/:id', removeProduct)

mainRouter.get('/orders:page?',showOrder)
mainRouter.post('/order',addOrder)
mainRouter.put('/order/:id',editOrder)
mainRouter.delete('/order/:id',removeOrder)

export default mainRouter