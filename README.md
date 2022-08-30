![KenzieMED (1)](https://user-images.githubusercontent.com/102538748/187499688-9e96dfd9-9acd-496e-8d87-7529acf06d14.png)


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

![111](https://user-images.githubusercontent.com/102538748/187497062-ceda362e-7774-4634-9192-eeda71a6b862.png)



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


Podemos acessar um médico específico utilizando o endpoint:

GET /doctors/ ${ID}- FORMATO DA RESPOSTA - STATUS 200

![222](https://user-images.githubusercontent.com/102538748/187497589-ee978cc1-30ad-4e86-80b7-11b71e4d2014.png)

 
****************************
*****Criação de usuário*****
****************************

POST /users - FORMATO DA REQUISIÇÃO

![333](https://user-images.githubusercontent.com/102538748/187497988-09d1cb6b-f44c-4e29-ba34-68367a5e07bf.png)


Caso dê tudo certo, a resposta será assim:

POST /users - FORMATO DA RESPOSTA - STATUS 201

![444](https://user-images.githubusercontent.com/102538748/187498169-26d5d60b-9dcb-4258-b6ff-d84a360468f7.png)



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


***************
*****Login*****
***************

POST /sessions - FORMATO DA REQUISIÇÃO

![555](https://user-images.githubusercontent.com/102538748/187498569-01864803-d40f-42cc-8797-8c8cb1c3f63c.png)


Caso dê tudo certo, a resposta será assim:

POST /sessions - FORMATO DA RESPOSTA - STATUS 201

![666](https://user-images.githubusercontent.com/102538748/187498712-5bec5b41-b5ec-4e01-8d14-62acdbb395dc.png)


Com essa resposta, vemos que temos duas informações, o user.id e o token respectivo, dessa forma você pode guardar o token e o 
usuário logado no localStorage para fazer a gestão do usuário no seu frontend.


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
