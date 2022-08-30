![KenzieMED (1)](https://user-images.githubusercontent.com/102538748/187525599-a2f97112-e643-408a-ac72-e54516151816.png)

Kenzie MED - API

Este é o backend da aplicação Kenzie MED - A kenzieMed é um sistema de agendamento de consultas e exames, facilitando a vida dos médicos 
e usuários. Um sistema fácil e simples de usar, trazendo agilidade na hora de escolher um médico e fazer o agendamento de consulta ou exame,
sem a necessidade de entrar em contato com o teleatendimento, em poucos cliques você já tem sua consulta/exame agendada. 

Endpoints
A API tem um total de XXXX endpoints, podendo ser cadastrados novos usuarios para poder ter total acesso as funcionabilidades do site.


O url base da API é https://api-kenzie-med.herokuapp.com

                           **********************************************************
                           **********Rotas que não precisam de autenticação**********
                           **********************************************************

***************************
*****Listando Médicos*****
***************************

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os profissionanis Médicos já cadastrados na plataforma, na API podemos 
acessar a lista dessa forma: Aqui conseguimos ver os usuários médicos e suas especialidades.

![image (3)](https://user-images.githubusercontent.com/102538748/187532534-68ee5e10-4ba2-41ee-9572-cb5cf176662c.png)

GET /users/?type=doctor - FORMATO DA RESPOSTA - STATUS 200

![image (4)](https://user-images.githubusercontent.com/102538748/187525824-21066938-dec8-4926-bbb5-a1ded55b167b.png)

Podemos acessar um médico específico utilizando o endpoint:

GET /users/?id=6&type=doctor - FORMATO DA RESPOSTA - STATUS 200


 
****************************
*****Criação de usuário*****
****************************

POST /users - FORMATO DA REQUISIÇÃO

![image (2)](https://user-images.githubusercontent.com/102538748/187525087-c8c794ca-42b4-427a-8668-25d8090891fc.png)

Caso dê tudo certo, a resposta será assim:

POST /users - FORMATO DA RESPOSTA - STATUS 201

![image (5)](https://user-images.githubusercontent.com/102538748/187525860-b1586357-9aab-47f7-b42e-32818798db3d.png)

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

****************************
*****Criação de Médico*****
****************************

POST /users - FORMATO DA REQUISIÇÃO

![image](https://user-images.githubusercontent.com/102538748/187526123-44d58b01-8db2-4dd4-8b4d-0d3f0c8fe391.png)

Caso dê tudo certo, a resposta será assim:

POST /users - FORMATO DA RESPOSTA - STATUS 201

![image (1)](https://user-images.githubusercontent.com/102538748/187526171-263f3e9f-28e9-43d2-a92f-326b5100b81d.png)

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

POST /login - FORMATO DA REQUISIÇÃO

![image](https://user-images.githubusercontent.com/102538748/187526436-42cb9a20-1801-464c-a635-1d5934366b0e.png)

Caso dê tudo certo, a resposta será assim:

POST /login - FORMATO DA RESPOSTA - STATUS 201

![image (1)](https://user-images.githubusercontent.com/102538748/187526498-b8e71733-577d-4a9f-b859-5f5c90945434.png)

Com essa resposta, vemos que temos duas informações, o user.id e o token respectivo, dessa forma você pode guardar o token e o 
usuário logado no localStorage para fazer a gestão do usuário no seu frontend.


                                 *********************************************
                                 *****Rotas que necessitam de autorização*****
                                 *********************************************

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir informar as especialidades que ele contratou até agora.

Buscar Perfil do usuário logado (token)
GET /users/?id=${userId} - FORMATO DA REQUISIÇÃO

Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.

GET /users/?id=${userId} - FORMATO DA RESPOSTA - STATUS 200

![image](https://user-images.githubusercontent.com/102538748/187527230-1d55e964-8cb6-49c6-81d2-dc6aae6a8992.png)

*********************************
*****Cadastrar nova consulta*****
*********************************

POST /schedules - FORMATO DA REQUISIÇÃO

![image (1)](https://user-images.githubusercontent.com/102538748/187527613-1652dcd5-d9be-4a66-9b8f-4b5fd69dc6ee.png)

Caso dê tudo certo, a resposta será assim:

POST /schedules - FORMATO DA RESPOSTA - STATUS 201

![image (2)](https://user-images.githubusercontent.com/102538748/187527779-f5923a03-019f-414f-a9a9-c3a8fcb3501e.png)

Caso você tente criar uma tecnologia com o mesmo nome para o seu perfil, receberá este erro:

POST /schedules - FORMATO DA RESPOSTA - STATUS 401

{

  "status": "error",
  
  "message": "O Senhor já tem uma consulta agendada com esté médico."
  
}

***************************************
*****Modificar o perfil do Usuario*****
***************************************

Ou seja, você pode apenas modificar a consulta que já estão no seu perfil. Utilizando este endpoint:

PUT /users/${userId} - FORMATO DA REQUISIÇÃO

![image (3)](https://user-images.githubusercontent.com/102538748/187532660-a0ca902d-1883-4508-9959-3f08b8e8b808.png)

Caso dê tudo certo, a resposta será assim:

PUT /users/${userId} - FORMATO DA RESPOSTA - STATUS 201

![image](https://user-images.githubusercontent.com/102538748/187532795-82bd76cc-29cf-45e9-9fdd-3bf99a1152ed.png)

**************************** 
*****Deletar um usuario*****
****************************

DELETE /users/${userId}

OBSERVAÇÃO: Não é necessário um corpo da requisição.

Caso dê tudo certo, a resposta será assim:

![image](https://user-images.githubusercontent.com/102538748/187533082-329c6942-329d-497a-8898-67d7efa5021f.png)

********************************************************
*****Deletar uma consulta, utilizando este endpoint*****
********************************************************

DELETE schedules/${userId}

OBSERVAÇÃO: Não é necessário um corpo da requisição.

Caso dê tudo certo, a resposta será assim:

![image (1)](https://user-images.githubusercontent.com/102538748/187534182-ca8fa2d0-3a61-4201-95fc-f2ca83a40fd8.png)
