# Projeto Buylist

Primeiros passos:

1. Execute o comando  `npm i` ou `npm install` 
2. Configure as configurações do seu banco de dados no arquivo `ormconfig.json`
3. Execute o comando `npm run typeorm migration:run`
4. Execute o comando `npm start`

Você pode baixar as endpoints pré-configuradas do Insomnia. [Endpoints Buylist, Insomnia ](https://drive.google.com/drive/folders/1qfRBu14ErFbmdrSIPl64pg9RTW15X6N_?usp=sharing)
## Esse projeto foi feito para avaliação.

# Endpoints

# /users
Essa endpoint irá cadastrar o usuário para que ele receba o token futuramente.
### Parâmetros:
email : string,
password: string
Exemplo:
```
{
	"email": "matheus@gmail.com",
	"password": "123"
}
```
