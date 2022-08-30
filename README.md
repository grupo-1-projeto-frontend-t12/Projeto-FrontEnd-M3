![KenzieMED](https://user-images.githubusercontent.com/102538748/187487839-ad357099-dbe5-407e-adad-16204775d8bc.png)

Kenzie MED - API

Este é o backend da aplicação Kenzie MED - A kenzieMed é um sistema de agendamento de consultas e exames, facilitando a vida dos médicos e usuários. Um sistema fácil e simples de usar, trazendo agilidade na hora de escolher um médico e fazer o agendamento de consulta ou exame, sem a necessidade de entrar em contato com o teleatendimento, em poucos cliques você já tem sua consulta/exame agendada. 

Endpoints
A API tem um total de XXXX endpoints, podendo ser cadastrados novos usuarios para poder ter total acesso as funcionabilidades do site.


O url base da API é https://api-kenzie-med.herokuapp.com

                                                  **********************************************************
                                                  **********Rotas que não precisam de autenticação**********
                                                  **********************************************************

***************************
*****Listando usuários*****
***************************

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os profissionanis Médicos já cadastrados na plataforma, na API podemos acessar a lista dessa forma: Aqui conseguimos ver os usuários médicos e suas especialidades.

GET /doctors - FORMATO DA RESPOSTA - STATUS 200

[
 {
"userId": 2,
"name": " Albert Einstein",
"email": "fisicalbert@kenziemed.com",
"password": "123456",
"CRM": "12345678901",
"age": 80,
"sex": "Masculino",
"address": "Alemanha",
"speciality": " Traumatologista ",
"type": "medico",
"id": 1
},

{
"userId": 2,
"name": " Michael Joseph Jackson ",
"email": "menininhos@kenziemed.com",
"password": "123456",
"CRM": "12345678901",
"age": 58,
"sex": "Masculino",
"address": "Indiana",
"speciality": " Neurologista ",
"type": "medico",
"id": 2
},

{
"userId": 2,
"name": " Isabel Bowes-Lyon ",
"email": "queenelizabeth@kenziemed.com",
"password": "123456",
"CRM": "12345678901",
"age": 3750,
"sex": "Feminino",
"address": "Inglaterra",
"speciality": "Neurologista",
"type": "medico",
"id": 3
},
{
"userId": 2,
"name": " Osama Bin Mohammed Bin Awad Bin Laden ",
"email": "obmbabl@kenziemed.com",
"password": "123456",
"CRM": "12345678901",
"age": 57,
"sex": "Masculino",
"address": "Amazonas",
"speciality": "Pediatra",
"type": "Oftalmologista",
"id": 4
},

{
"userId": 2,
"name": " Arnold Schwarzenegger ",
"email": "reimaromba@kenziemed.com",
"password": "123456",
"CRM": "12345678901",
"age": 75,
"sex": "Masculino",
"address": "Espirito Santo",
"speciality": "Endocrinologista",
"type": "medico",
"id": 5
}
]

-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

Podemos utilizar os query params para mudar a lista, mudando a paginação, podemos alterar quantos usuários queremos no perPage, e alterar a página no parâmetro page. Uma requisição apenas no /doctors irá trazer xxx usuários na página 1. Com o parâmetro tech, podemos filtrar por tecnologia.

GET /doctors?perPage=  xxxx   &page=1&speciality= xxxx - FORMATO DA RESPOSTA - STATUS 200

[
  {
    xxx
    xxx
    xxx
    xxx
    
]

Lembrando que no cabeçalho da resposta, temos as informações sobre a paginação, e o nextUrl para acessar a próxima página.
Cabeçalho da resposta:

nextUrl: https://api-kenzie-med.herokuapp.com/doctors?perPage=10&page=2
page: 1
perPage: 10

-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

Podemos acessar um médico específico utilizando o endpoint:

GET /doctors/ ${ID}- FORMATO DA RESPOSTA - STATUS 200

{
	"userId": 2,
	"name": " Isabel Bowes-Lyon ",
	"email": "queenelizabeth@kenziemed.com",
	"password": "123456",
	"CRM": "12345678901",
	"age": 3750,
	"sex": "Feminino",
	"address": "Inglaterra",
	"speciality": "Neurologista",
	"type": "medico",
	"id": 6
}

-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
 
****************************
*****Criação de usuário*****
****************************

POST /users - FORMATO DA REQUISIÇÃO

{
 "name": " Frederico Rook ",
 "email": "Fredrook@kenziemed.com",
 "password": "123456",
 "CPF": "12345678901",
 "age":33,
 "sex": "Masculino",
 "address": "Pão de Queijo"
}

Caso dê tudo certo, a resposta será assim:

POST /users - FORMATO DA RESPOSTA - STATUS 201

{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkZyZWRyb29rQGtlbnppZW1lZC5jb20iLCJpYXQiOjE2NjE4Nzc1MzcsImV4cCI6MTY2MTg4MTEzNywic3ViIjoiMyJ9.
  3w4k_qbC1jaXbf1Wb1klvd55iBMqwM59qcHT99Fn9h0",
	"user": {
		"email": "Fredrook@kenziemed.com",
		"name": " Frederico Rook ",
		"CPF": "12345678901",
		"age": 33,
		"sex": "Masculino",
		"address": "Pão de Queijo",
		"id": 3
	}
  
-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

POST /users - FORMATO DA RESPOSTA - STATUS 400

{
  "status": "error",
  "message": ["password is required", "email is required"]
}
A senha necessita de 6 caracteres.

POST /users - FORMATO DA RESPOSTA - STATUS 400

{
  "status": "error",
  "message": ["password: minimum is 6 characters"]
}
Email já cadastrado:

POST /users - FORMATO DA RESPOSTA - STATUS 400

{
  "status": "error",
  "message": "Email already exists"
}

-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

***************
*****Login*****
***************

POST /sessions - FORMATO DA REQUISIÇÃO

{
  "email": "Fredrook@kenziemed.com",
  "password": "123456"
}

Caso dê tudo certo, a resposta será assim:

POST /sessions - FORMATO DA RESPOSTA - STATUS 201

{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkZyZWRyb29rQGtlbnppZW1lZC5jb20iLCJpYXQiOjE2NjE4Nzc4NjYsImV4cCI6MTY2MTg4MTQ2Niwic3ViIjoiMyJ9.
  sG7lIDEWxlsryqbhW13jlUIG-rPJhpEZHrH9Z6uCLYE",
	"user": {
		"email": "Fredrook@kenziemed.com",
		"name": " Frederico Rook ",
		"CPF": "12345678901",
		"age": 33,
		"sex": "Masculino",
		"address": "Pão de Queijo",
    "image": "url da Imagem do usuario" 
		"id": 3
	}
}

Com essa resposta, vemos que temos duas informações, o user.id e o token respectivo, dessa forma você pode guardar o token e o 
usuário logado no localStorage para fazer a gestão do usuário no seu frontend.

-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

                                            *********************************************
                                            *****Rotas que necessitam de autorização*****
                                            *********************************************

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir informar as especialidades que ele contratou até agora.

Buscar Perfil do usuário logado (token)
GET /  xxxxx - FORMATO DA REQUISIÇÃO

Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.

GET / xxxxxx - FORMATO DA RESPOSTA - STATUS 200

{
 xxxx
 xxxx
 xxxx
}

*********************************
*****Cadastrar nova consulta*****
*********************************

POST /users/doctors - FORMATO DA REQUISIÇÃO

{
 xxxx
 xxxx
 xxxx
}

Caso você tente criar uma tecnologia com o mesmo nome para o seu perfil, receberá este erro:

POST /users/techs - FORMATO DA RESPOSTA - STATUS 401

{
  "status": "error",
  "message": "O Senhor já tem uma consulta agendada com esté médico."
}

Ou seja, você pode apenas modificar a consulta que já estão no seu perfil. Utilizando este endpoint:

PUT / xxxxxx - FORMATO DA REQUISIÇÃO

{
  xxxxx
}

********************************************************
*****Deletar uma consulta, utilizando este endpoint*****
********************************************************

DELETE / xxxxx

OBSERVAÇÃO: Não é necessário um corpo da requisição.


**************************************************
*****Endpoint para atualizar a foto de perfil*****
**************************************************

PATCH /users/image - FORMATO DA REQUISIÇÃO

image: <Arquivo de imagem>
