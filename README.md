# Projeto Buylist

Primeiros passos:

1. Execute o comando  `npm i` ou `npm install` 
2. Configure as configurações do seu banco de dados no arquivo `ormconfig.json`
3. Execute o comando `npm run typeorm migration:run`
4. Execute o comando `npm start`

Você pode baixar as endpoints pré-configuradas do Insomnia. [Endpoints Buylist, Insomnia ](https://drive.google.com/drive/folders/1qfRBu14ErFbmdrSIPl64pg9RTW15X6N_?usp=sharing)
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

# /product:id [GET]
### Parâmetros:
id: number


Exemplo:

![](https://prnt.sc/ve850j, alt ='get')

 
 #/product [POST]
 Requisição via: Body/JSON
 ### Parâmetros:
 
**name**: string
**price**: number
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
