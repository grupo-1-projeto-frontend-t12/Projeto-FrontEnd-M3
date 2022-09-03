![KenzieMED (1)](https://user-images.githubusercontent.com/102538748/187525599-a2f97112-e643-408a-ac72-e54516151816.png)



<div style='background-color:white'>

</div>
<h1 style='color: #00A48B'>KenzieMed</h1>
<h2 style='color: #00A48B'>Projeto final do modulo de Front-end</h2>

<p>A kenzieMed é um sistema de agendamento de consultas e exames, facilitando a vida dos médicos 
e usuários. Um sistema fácil e simples de usar, trazendo agilidade na hora de escolher um médico e fazer o agendamento de consulta ou exame,
sem a necessidade de entrar em contato com o teleatendimento, em poucos cliques você já tem sua consulta/exame agendada. </p>


<details>
  <summary><h2 style='color: white; background-color:#00A48B '>KenzieMED - Documentação da API</h2></summary>

  Endpoints
A API tem um total de XXXX endpoints, podendo ser cadastrados novos usuarios para poder ter total acesso as funcionabilidades do site.


<h2>O url base da API é:</h2>
<h2  style='color: #00A48B'>https://api-kenzie-med.herokuapp.com</h2>


<h2 style='font-weight: 800'>Rotas que não precisam de autenticação</h2>
<h3 style='font-weight: 600; font-size:20px;'>Listando Médicos</h3>
<p>Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os profissionanis Médicos já cadastrados na plataforma, na API podemos 
acessar a lista dessa forma: Aqui conseguimos ver os usuários médicos e suas especialidades.</p>



![image (3)](https://user-images.githubusercontent.com/102538748/187532534-68ee5e10-4ba2-41ee-9572-cb5cf176662c.png)


<div style='color: white; background-color:green'>
GET /users/?type=doctor - FORMATO DA RESPOSTA - STATUS 200
</div>


![image (4)](https://user-images.githubusercontent.com/102538748/187525824-21066938-dec8-4926-bbb5-a1ded55b167b.png)

<h3 style='font-weight: 600'>Podemos acessar um médico específico utilizando o endpoint:</h3>

<div style='color: white; background-color:green'>
GET /users/?id=6&type=doctor - FORMATO DA RESPOSTA - STATUS 200
</div>



 <h style='font-weight: 600; font-size:20px;'>Criação de usuário</h>

<div style='color: white; background-color:grey'>
POST /users - FORMATO DA REQUISIÇÃO
</div>



![image (2)](https://user-images.githubusercontent.com/102538748/187525087-c8c794ca-42b4-427a-8668-25d8090891fc.png)

<h2 style='font-weight: 600'>Caso dê tudo certo, a resposta será assim:</h2>

<div style='color: white; background-color:green'>
POST /users - FORMATO DA RESPOSTA - STATUS 201
</div>


![image (5)](https://user-images.githubusercontent.com/102538748/187525860-b1586357-9aab-47f7-b42e-32818798db3d.png)

<div style='color: white; background-color:red'>
POST /users - FORMATO DA RESPOSTA - STATUS 400
</div>
<br>
<div style='color: white; background-color:red'>
POST /users - FORMATO DA RESPOSTA - STATUS 400
</div></br>


<br>
<div style='color: white; background-color:#373737'>
{

"status": "error",

"message": ["password is required", "email is required"]

}
</div></br>

<h3 style='font-weight: 600'>A senha necessita de 6 caracteres.:</h3>

<br>
<div style='color: white; background-color:red'>
POST /users - FORMATO DA RESPOSTA - STATUS 400
</div></br>

<br>
<div style='color: white; background-color:#373737'>
{
{

  "status": "error",
  
  "message": ["password: minimum is 6 characters"]
  
}
</div></br>

<h3 style='font-weight: 600'>Email já cadastrado:</h3>


<br>
<div style='color: white; background-color:red'>
POST /users - FORMATO DA RESPOSTA - STATUS 400
</div></br>

<br>
<div style='color: white; background-color:#373737'>
{

  "status": "error",
  
  "message": "Email already exists"
  
}
</div></br>


<h2 style='font-weight: 800; font-size:20px;'>Criação de Médico</h2>

<br>
<div style='color: white; background-color:grey'>
POST /users - FORMATO DA REQUISIÇÃO
</div></br>


![image](https://user-images.githubusercontent.com/102538748/187526123-44d58b01-8db2-4dd4-8b4d-0d3f0c8fe391.png)


<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>

<br>
<div style='color: white; background-color:green'>
POST /users - FORMATO DA RESPOSTA - STATUS 201
</div></br>





![image (1)](https://user-images.githubusercontent.com/102538748/187526171-263f3e9f-28e9-43d2-a92f-326b5100b81d.png)

<br>
<div style='color: white; background-color:red'>
POST /users - FORMATO DA RESPOSTA - STATUS 400
</div></br>


<br>
<div style='color: white; background-color:#373737'>
{

"status": "error",

"message": ["password is required", "email is required"]

}
</div></br>

<h3 style='font-weight: 600; font-size:20px;'>A senha necessita de 6 caracteres:</h3>

<br>
<div style='color: white; background-color:red'>
POST /users - FORMATO DA RESPOSTA - STATUS 400
</div></br>






<br>
<div style='color: white; background-color:#373737'>
{

  "status": "error",
  
  "message": ["password: minimum is 6 characters"]
  
}
</div></br>

<h3 style='font-weight: 600; font-size:20px;'>Email já cadastrado::</h3>

<br>
<div style='color: white; background-color:red'>
POST /users - FORMATO DA RESPOSTA - STATUS 400
</div></br>



<br>
<div style='color: white; background-color:#373737'>
{

  "status": "error",
  
  "message": "Email already exists"
  
}
</div></br>

<h2 style='font-weight: 800; font-size:20px;'>Login</h2>

<br>
<div style='color: white; background-color:grey'>
POST /login - FORMATO DA REQUISIÇÃO
</div></br>



![image](https://user-images.githubusercontent.com/102538748/187526436-42cb9a20-1801-464c-a635-1d5934366b0e.png)
<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>

<br>
<div style='color: white; background-color:green'>
POST /login - FORMATO DA RESPOSTA - STATUS 201
</div></br>





![image (1)](https://user-images.githubusercontent.com/102538748/187526498-b8e71733-577d-4a9f-b859-5f5c90945434.png)

<p>Com essa resposta, vemos que temos duas informações, o user.id e o token respectivo, dessa forma você pode guardar o token e o 
usuário logado no localStorage para fazer a gestão do usuário no seu frontend.</p>

<h2 style='font-weight: 800'>Rotas que necessitam de autorização</h2>

<p>Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:</p>

<br>
<div style='color: white; background-color:grey'>
Authorization: Bearer {token}
</div></br>


<p>Após o usuário estar logado, ele deve conseguir informar as especialidades que ele contratou até agora.</p>
<h2 style='font-weight: 600'>Buscar Perfil do usuário logado (token)</h2>


<br>
<div style='color: white; background-color:grey'>
GET /users/?id=${userId} - FORMATO DA REQUISIÇÃO
</div></br>

<p>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</p>
<br>
<div style='color: white; background-color:gren'>
GET /users/?id=${userId} - FORMATO DA RESPOSTA - STATUS 200
</div></br>



![image](https://user-images.githubusercontent.com/102538748/187527230-1d55e964-8cb6-49c6-81d2-dc6aae6a8992.png)

<h2 style='font-weight: 600; font-size:20px;'>Cadastrar nova consulta</h2>

<br>
<div style='color: white; background-color:grey'>
POST /schedules - FORMATO DA REQUISIÇÃO
</div></br>


![image (1)](https://user-images.githubusercontent.com/102538748/187527613-1652dcd5-d9be-4a66-9b8f-4b5fd69dc6ee.png)

Caso dê tudo certo, a resposta será assim:




<br>
<div style='color: white; background-color:green'>
POST /schedules - FORMATO DA RESPOSTA - STATUS 201
</div></br>

![image (2)](https://user-images.githubusercontent.com/102538748/187527779-f5923a03-019f-414f-a9a9-c3a8fcb3501e.png)

Caso você tente criar uma tecnologia com o mesmo nome para o seu perfil, receberá este erro:

<br>
<div style='color: white; background-color:red'>
POST /schedules - FORMATO DA RESPOSTA - STATUS 401
</div></br>

<br>
<div style='color: white; background-color:#373737'>
{

  "status": "error",
  
  "message": "O Senhor já tem uma consulta agendada com esté médico."
  
}
</div></br>




<h2 style='font-weight: 600; font-size:20px;'>Modificar o perfil do Usuario*</h2>


<p>Ou seja, você pode apenas modificar a consulta que já estão no seu perfil. Utilizando este endpoint:</p>

<br>
<div style='color: white; background-color:grey'>
PUT /users/${userId} - FORMATO DA REQUISIÇÃO
</div></br>


![image (3)](https://user-images.githubusercontent.com/102538748/187532660-a0ca902d-1883-4508-9959-3f08b8e8b808.png)

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>
<br>
<div style='color: white; background-color:green'>
PUT /users/${userId} - FORMATO DA RESPOSTA - STATUS 201
</div></br>



![image](https://user-images.githubusercontent.com/102538748/187532795-82bd76cc-29cf-45e9-9fdd-3bf99a1152ed.png)

<h2 style='font-weight: 600; font-size:20px;'>Deletar um usuario</h2>

<br>
<div style='color: white; background-color:grey'>
DELETE /users/${userId}
</div></br>

<p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p>

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>



![image](https://user-images.githubusercontent.com/102538748/187533082-329c6942-329d-497a-8898-67d7efa5021f.png)



<h2 style='font-weight: 600; font-size:20px;'>Deletar uma consulta, utilizando este endpoint</h2>

<br>
<div style='color: white; background-color:grey'>
DELETE schedules/${userId}
</div></br>

<p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p>

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>



![image (1)](https://user-images.githubusercontent.com/102538748/187534182-ca8fa2d0-3a61-4201-95fc-f2ca83a40fd8.png)
  
</details>


<h2 style='color: #00A48B'> Tecnologias utilizadas</h2>

<div style='display:flex; gap: 5px;'><br>
 <img align="center" alt="Html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

 <img align="center" alt="css" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">


   <img align="center" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

   <img align="center" alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

<h2 style='color: #00A48B'> Ferramentas utilizadas</h2>
 <img align="center" alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
<img align="center" alt="Trello" src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white">
<img align="center" alt="figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=whitee">

 
   
</div></br>




<h2 style='color: #00A48B; font-size: 25px'>Equipe</h2>
<h3 ><a href="https://github.com/annekarolle">Anne K R Oliveira</a></h3> 
  <h3><a href="https://github.com/DnlGalvan" >Daniel Galvan</a></h3> 
  <h3 ><a href="https://github.com/fredericosafebox" >Frederico Costa</a></h3> 
  <h3><a href="https://github.com/fredrook" >Frederico Rook Chaves</a></h3> 
  <h3><a href="https://github.com/marcuspvh" >Marcus Roberto Ribeiro</a></h3> 
