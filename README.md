# FIPE API

API para leitura de tipos, marcas e modelos de veículos da Tabela FIPE brasileira.
Mantive os mesmos padrões de nomenclatura de propriedades dos dados recebidos pela FIPE para facilitar a transposição entre sistemas.

Veja que não estou gerando os dados totais finais dos veículos pois o intuito ( até aqui ) é permitir gerar dados confiáveis para `Tipo/Marca/Modelo/`.

### Linguagem
NodeJs

**Tabela FIP atualizada : 03/2023**

Segue abaixo passo a passo para rodar a FIPE API em sua máquina local.

### Dependências globais


```bash
yarn install 
```

### Rodar o projeto

Para rodar o projeto localmente, basta rodar o comando abaixo:

```bash
yarn start
```

Para rodar em modo DEV utilize o comando abaixo :

```bash
yarn dev
```
Desta forma o nodemon será ativado e você poderá trabalhar em atualizações enquanto o server está rodando, em modo live-reload.

Para rodar `tests` utilize comando abaixo :

```bash
yarn test
```

Acesse através do endereço abaixo:

```bash
http://localhost:3000/v1/
```

Observações:

Para derrubar todos os serviços, basta utilizar as teclas `CTRL+C`, que é o padrão dos terminais para matar processos.

### Endpoints

São <3 endpoints simples 

Usage : /type
GET **types**

#### Result
```json
{
	"success": true,
	"data": [
		{
			"Value": 1,
			"Label": "carros"
		},
		{
			"Value": 2,
			"Label": "motos"
		},
		{
			"Value": 3,
			"Label": "caminhões"
		}
	]
}
```

GET **brands**
#### Usage
/brands/:type ( sendo `type` o Value to tipo desejado )

#### Result
```json
{
	"success": true,
	"updatedAt": "2023-03-01T00:00:00.000Z",
	"type": "1",
	"type_label": "carros",
	"data": [
		{
			"Label": "Acura",
			"Value": "1"
		}
  ]
}
```

GET **models**
#### Usage
/models/:type/:brand ( sendo `type` o Value to tipo desejado e `brand` o Value da marca desejada )

#### Result
```json
{
	"success": true,
	"updatedAt": "2023-03-01T00:00:00.000Z",
	"type": "1",
	"type_label": "carros",
	"brand": "1",
	"data": [
		{
			"Label": "Integra GS 1.8",
			"Value": 1
		}
	]
}
```

## Motivação

Criei esta API simples pois em meus projetos, assim como em projetos de amigos, sempre há a necessidade de carregar dados atualizados de veículos e muitas vezes os sistemas terceiros acabam ficando fora do ar e derrubando funções importantes de aplicações que os utilizam.

Espero que seja útil ;)


## Linkedin
[Bora nos conectar no Linkedin ! 😉🔥](https://www.linkedin.com/in/olavo-mello/)
