# Projeto API Buylist

Primeiros passos:

1. Execute o comando  `npm i` ou `npm install` 
2. Configure as configurações do seu banco de dados no arquivo `ormconfig.json`
3. Execute o comando `npm run typeorm migration:run`
4. Execute o comando `npm start`

Você pode baixar as endpoints pré-configuradas do Insomnia. [Endpoints Buylist, Insomnia ](https://drive.google.com/drive/folders/1qfRBu14ErFbmdrSIPl64pg9RTW15X6N_?usp=sharing) <br> 
Tutorial de como importar se não souber: **https://prnt.sc/ve8fx3**  , **https://prnt.sc/ve8ga1**
## Esse projeto foi feito para avaliação.

# Endpoints

# /users [POST]

Essa endpoint irá cadastrar o usuário.
### Parâmetros:
**email** : string <br>
**password**: string <br>

Exemplo:
```
{
	"email": "matheus@gmail.com",
	"password": "123"
}
```

# /auth [POST]

Essa endpoint irá autenticar o usuário cadastado para que ele receba o token.
### Parâmetros:
**email** : string <br>
**password**: string <br>

Exemplo:
```
{
	"email": "matheus@gmail.com",
	"password": "123"
}
```
 # /product [POST]
 Essa endpoint irá adicionar o produto no banco de dados
 ### Parâmetros:
 
**name**: string <br>
**price**: number <br>
**description**: string <br>
**category**:  string <br>

Exemplo:

 ```
 {
	"name": "Buzz Lightyear",
	"price": 130,
	"description": "To infinity and beyond",
	"category": "toy"
}
 ```






# /product/:id [GET]
Essa endpoint irá dar informações sobre um produto.
### Parâmetros:
**id**: number

Exemplo:
`http://localhost:3000/product/2` <br>


# /products:page? [GET]
Essa endpoint irá dar informações sobre vários produtos.
### Parâmetros:
**page**: number

Exemplo:
`localhost:3000/products?page=0`

# /amountProducts [GET]
Essa endpoint irá mostrar quantidade de produtos cadastrados
### Parâmetros
**nenhum**



# /product [PUT]
Essa endpoint irá editar o produto registrado no banco de dados.
### Parâmetros:
**id**: number <br>
**name**: string <br>
**price**: number <br>
**description**: string <br>
**category**:  string <br>

Exemplo:
`http://localhost:3000/product/1`
 ```
 {
	"name": "Buzz Darkyear",
	"price": 150,
	"description": "To the darkness and beyond",
	"category": "dark_toy"
}
 ```

# /product/:id [DELETE]
Essa endpoint irá deletar o produto registrado no banco de dados.
### Parâmetros:
**id**: number <br>
Exemplo:
`http://localhost:3000/product/1`


# /order [POST]
Essa endpoint irá adicionar o pedido.
### Parâmetros
**product_id**: number >(id do produto existente no banco de dados) <br>
**amount**: number <br>

Exemplo: 
```
{
	"product_id": 2,
	"amount": 25
}
```

# /order [GET]
Essa endpoint irá dar informações sobre um pedido.
### Parâmetros
**id**: number <br>

Exemplo:
`localhost:3000/order/2`

# /orders:page? [GET]
Essa endpoint irá informações sobre vários pedidos
### Parâmetros
**page**:number <br>

Exemplo:
`http://localhost:3000/orders/?page=0`

# /order/:id [PUT]
Essa endpoint irá atualizar o pedido
### Parâmetros
**id**:number <br>
**amount**:number <br>

Exemplo: 
`http://localhost:3000/order/3`

```
{
	"amount": 40
}
```

# /order/:id [DELETE]
Essa endpoint irá deletar o pedido.

### Parâmetros
**id**: number <br>

Exemplo:
`http://localhost:3000/order/9`





