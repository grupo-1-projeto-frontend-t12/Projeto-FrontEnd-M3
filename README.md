![KenzieMED (1)](https://user-images.githubusercontent.com/102538748/187525599-a2f97112-e643-408a-ac72-e54516151816.png)

<div style='background-color:white'>

</div>
<h1 style='color: #00A48B'>KenzieMed</h1>
<h2 style='color: #00A48B'>Projeto final do modulo de Front-end</h2>

<p>A kenzieMed é um sistema de agendamento de consultas e exames, facilitando a vida dos médicos 
e usuários. Um sistema fácil e simples de usar, trazendo agilidade na hora de escolher um médico e fazer o agendamento de consulta ou exame,
sem a necessidade de entrar em contato com o teleatendimento, em poucos cliques você já tem sua consulta/exame agendada. </p>


<details>
  <summary><h2>KenzieMED - Documentação da API</h2></summary>

  Endpoints
A API tem um total de XXXX endpoints, podendo ser cadastrados novos usuarios para poder ter total acesso as funcionabilidades do site.


<h2>O url base da API é:</h2>
<h3  style='color: #00A48B'>https://api-kenzie-med.herokuapp.com</h2>


# Rotas que não precisam de autenticação
<h3 style='font-weight: 600; font-size:20px;'>Listando Médicos</h3>
<p>Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os profissionanis Médicos já cadastrados na plataforma, na API podemos 
acessar a lista dessa forma: Aqui conseguimos ver os usuários médicos e suas especialidades.</p>


## GET /doctors - FORMATO DA RESPOSTA - STATUS 200

```
[
{
		"id": 2,
		"name": "Dra. Aline Rabech",
		"email": "medaline@kenziemed.com",
		"password": "fred123",
		"CPF": "12312312312",
		"CRM": "1991-SE",
		"age": 24,
		"sex": "F",
		"type": "doctor",
		"speciality": "Pneumologista",
		"exames": [
			{
				"id": 1,
				"exame": "Raio X do Tórax",
				"dia": "Segunda-feira",
				"hora": "9:00"
			},
			{
				"id": 2,
				"exame": "Volumes Pulmonares/Pletismografia",
				"dia": "Segunda-feira",
				"hora": "10:00"
			}
}
...
]

```

<h3 style='font-weight: 600'>Podemos acessar um médico específico utilizando o endpoint:</h3>

## GET /doctor/id - FORMATO DA RESPOSTA - STATUS 200
```
{
	"id": 5,
	"name": "Dr. Bruno Rabelo",
	"email": "mebruno@kenziemed.com",
	"password": "fred123",
	"CPF": "12312312312",
	"CRM": "1790-AL",
	"age": 32,
	"sex": "M",
	"type": "doctor",
	"speciality": "Cardiologista",
	"address": "Unidade - Campo Largo",
	"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png",
	"schedules": [
		{
			"id": 1,
			"dia": "01/09/2022",
			"hora": "13:00"
		},
		{
			"id": 2,
			"dia": "01/09/2022",
			"hora": "14:00"
		},
		{
			"id": 3,
			"dia": "01/09/2022",
			"hora": "15:00"
		},
		{
			"id": 4,
			"dia": "01/09/2022",
			"hora": "16:00"
		}
	]
}
```


 <h2 style='font-weight: 600; font-size:20px;'>Criação de usuário</h2>

## POST /users - FORMATO DA REQUISIÇÃO

```
{
		"name": "Kenzie Med",
		"email": "kenzie@kenziemed.com",
		"password": "Senha1234@",
		"CPF": "12312312312",
		"age": 20,
		"sex": "M",
		"type": "patient",
		"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
		"address": "kenzie academy"
	}
  ```

<h2 style='font-weight: 600'>Caso dê tudo certo, a resposta será assim:</h2>


## POST /users - FORMATO DA RESPOSTA - STATUS 201
```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppZUBrZW56aWVtZWQuY29tIiwiaWF0IjoxNjYyMzg0MjgwLCJleHAiOjE2NjIzODc4ODAsInN1YiI6IjMifQ.JnqUtIba1wA1mV7SS4AJ5StKspPLp4YShUM_SRc7T10",
	"user": {
		"email": "kenzie@kenziemed.com",
		"name": "Kenzie Med",
		"CPF": "12312312312",
		"age": 20,
		"sex": "M",
		"type": "patient",
		"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
		"address": "kenzie academy",
		"id": 3
	}
}
```


## POST /users - FORMATO DA RESPOSTA - STATUS 400


```
{

"status": "error",

"message": ["password is required", "email is required"]

}
```

<h3 style='font-weight: 600'>A senha necessita de 6 caracteres.:</h3>


## POST /users - FORMATO DA RESPOSTA - STATUS 400

```
{

  "status": "error",
  
  "message": ["password: minimum is 6 characters"]
  
}
```


<h3 style='font-weight: 600'>Email já cadastrado:</h3>


## POST /users - FORMATO DA RESPOSTA - STATUS 400


```
{

  "status": "error",
  
  "message": "Email already exists"
  
}
```


<h2 style='font-weight: 600; font-size:20px;'>Criação de Médico</h2>


## POST /users - FORMATO DA REQUISIÇÃO


<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>


## POST /users - FORMATO DA RESPOSTA - STATUS 201





## POST /users - FORMATO DA RESPOSTA - STATUS 400


```
{

"status": "error",

"message": ["password is required", "email is required"]

}
```

<h3 style='font-weight: 600; font-size:20px;'>A senha necessita de 6 caracteres:</h3>


## POST /users - FORMATO DA RESPOSTA - STATUS 400

```
{

  "status": "error",
  
  "message": ["password: minimum is 6 characters"]
  
}
```

<h3 style='font-weight: 600; font-size:20px;'>Email já cadastrado:</h3>


## POST /users - FORMATO DA RESPOSTA - STATUS 400

```
{

  "status": "error",
  
  "message": "Email already exists"
  
}
```

<h2 style='font-weight: 800; font-size:20px;'>Login</h2>


## POST /login - FORMATO DA REQUISIÇÃO
```
{
	"email": "kenzie@kenziemed.com",
	"password": "Senha1234@"
}
```


<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>

## POST /login - FORMATO DA RESPOSTA - STATUS 201

```

{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppZUBrZW56aWVtZWQuY29tIiwiaWF0IjoxNjYyMzg0NDYzLCJleHAiOjE2NjIzODgwNjMsInN1YiI6IjMifQ.VsuNhaDkdq26TjQqUSUjDEqEv63CvtCIZjTN7JwcNZY",
	"user": {
		"email": "kenzie@kenziemed.com",
		"name": "Kenzie Med",
		"CPF": "12312312312",
		"age": 20,
		"sex": "M",
		"type": "patient",
		"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
		"address": "kenzie academy",
		"id": 3
	}
}
```
<br>
<p>Com essa resposta, vemos que temos duas informações, o user.id e o token respectivo, dessa forma você pode guardar o token e o 
usuário logado no localStorage para fazer a gestão do usuário no seu frontend.</p></br>

# Rotas que necessitam de autorização

<br>
<p>Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo <strong> "Authorization"</strong> , dessa forma:</p></br>


## Authorization: Bearer {token}
<br>
<p>Após o usuário estar logado, ele deve conseguir informar as especialidades que ele contratou até agora.</p></br>

<h2 style='font-weight: 600'>Buscar Perfil do usuário logado (token)</h2>

## GET /users/userId - FORMATO DA REQUISIÇÃO

<br><p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p></br>

### GET /users/userId - FORMATO DA RESPOSTA - STATUS 200

```
{
	"email": "kenzie@kenziemed.com",
	"password": "$2a$10$9oMvNj1E6pey6J7SpEqBo.R7aeNKMXV7lZ0mhxw4GXpfnbYHL1Chu",
	"name": "Kenzie Med",
	"CPF": "12312312312",
	"age": 20,
	"sex": "M",
	"type": "patient",
	"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
	"address": "kenzie academy",
	"id": 3
}
```

<br><p>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</p>
</br>


<h2 style='font-weight: 600; font-size:20px;'>Marcar consulta:</h2>

## POST /appointment - FORMATO DA REQUISIÇÃO

```
{
      userId: 1,
      doctor: 6
      dia: "19-08-2022",
      horario: "9:00",
      address: "Unidade - Campo Largo",
      speciality: "Cardiologista",
      name: "Dr. Roberto Marcelo",
    }

```

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>

### POST /appointment - FORMATO DA RESPOSTA - STATUS 201


Caso você tente agendar com o mesmo médico, receberá este erro:


## POST /appointment - FORMATO DA RESPOSTA - STATUS 401


```
{

  "status": "error",
  
  "message": "Já possui uma consulta agendada com esté médico."
  
}
```


<h2 style='font-weight: 600; font-size:20px;'>Editar o perfil do Usuario</h2>

<br><p>Ou seja, você pode apenas modificar a consulta que já estão no seu perfil. Utilizando este endpoint:</p></br>


## PATCH /users/userId - FORMATO DA REQUISIÇÃO
{

}



<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>

## PATCH /users/userId- FORMATO DA RESPOSTA - STATUS 201


```
{
name:"Daniel Galvan", 
CPF:"99999999999",
contact:"qualquer",
address:"Rua 224, nº 255 - Apto.501"
age:"39",
password: "$2a$10$i6vsYy8/B6nz6Mpo4Sktz.4JxjXEI3VmlwxMPT6FM8QKqAcjJGLE.",
confirmPassword:"830501Dg*",
email:"daniel@mail.com"
id:
img:"https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png", 
sex:"M"
}
```

<h2 style='font-weight: 600; font-size:20px;'>Deletar um usuario</h2>

## DELETE /users/userId

<br><p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p></br>

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>


``` 
{}
``` 


<h2 style='font-weight: 600; font-size:20px;'>Deletar uma consulta, utilizando este endpoint</h2>


## DELETE appointment/id

<br><p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p></br>

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>


``` 
{}
``` 
  
</details>

<br>
<h2 style='color: #00A48B; font-size: 25px'>Equipe</h2>

<h3 ><a href="https://github.com/annekarolle">Anne K R Oliveira</a></h3> 
  <h3><a href="https://github.com/DnlGalvan" >Daniel Galvan</a></h3> 
  <h3 ><a href="https://github.com/fredericosafebox" >Frederico Costa</a></h3> 
  <h3><a href="https://github.com/fredrook" >Frederico Rook Chaves</a></h3> 
  <h3><a href="https://github.com/marcuspvh" >Marcus Roberto Ribeiro</a></h3> </br>

