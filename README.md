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

![Get](data:image/png;base64,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)

 
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
