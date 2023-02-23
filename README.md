<div align="center"><img src="https://i.imgur.com/6d15hEc.png"></img></div>
<hr>
<h1 align=center>Case Take a Bus API</h1>

Esse projeto é parte de um processo seletivo da Take a Bus para a vaga de Full Stack Engineer.

O objetivo dessa case era criar uma aplicação em React Native contendo um mapa, sem nenhuma outra informação, apenas com um botão switch
que controla a visualização de pontos de ônibus próximos a localização atual do usuário.

## Requisitos do case:
- [x] Conter um mapa
- [x] Um botão switch para controlar a visualização
dos pontos de ônibus próximos
- [x] Visualizar os pontos de ônibus mais próximos

## Funcionalidades da API
- [x] Retorna os pontos de ônibus mais próximos do usuário/dispositivo

Para pegar os dados dos pontos de ônibus mais próximos do usuário, usei uma api chamada Places API do Google Cloud Platform. Especificamente, utilizei uma das solicitações da API, a **Nearby Search**: <a href="https://developers.google.com/maps/documentation/places/web-service/search-nearby?hl=en">Confira a documentação por aqui.</a>

### Como rodar a API
<hr>

OBS: Para rodar esse projeto localmente, você **PRECISA** de uma chave api do google, essa aplicação usa uma API externa do google 
(PLACES API), e para isso, é necessário uma API KEY do google. 
<a target="_blank" href="https://maplink.global/blog/como-obter-chave-api-google-maps/">Siga este tutorial para criar uma Chave API do Google.</a>

Recomendo apenas utilizar o deploy da API, disponibilizado no repositório completo da aplicação. <a href="https://github.com/vinicbarros/case-take-a-bus">Confira aqui</a>.

<br/>

1. Clone o projeto

```bash
  git clone https://github.com/vinicbarros/case-take-a-bus-api.git
```

2. Vá para o diretório do projeto

```bash
  cd case-take-a-bus-api
```

3. Instale as dependências

```bash
  npm install
```

4. Crie um arquivo chamado `.env` na pasta raiz do projeto (onde fica o `package.json` e o `.env.example`)

5. Popule o `.env` de acordo com o `.env.example`

```bash
  PORT= por padrão, a porta é 4000, mas fique à vontade para colocar qual quiser
  GOOGLE_API_KEY= cole aqui sua chave de api goole
```

6. Rode o servidor

```bash
  npm run dev
```

## Documentação da API:

### Retorna todos os pontos de ônibus próximos a localização do usuário

```http
  POST /location
```

Body:

```json
{
  "latitude": 40.758896,
  "longitude": -73.985130
}
```

Resposta:

- Body inválido

```json
"status": 400
```

- Body válido

```json
[
  {
    "business_status": "OPERATIONAL",
    "geometry": {
      "location": {
        "lat": 40.7578346,
        "lng": -73.99146259999999
      },
      "viewport": {
        "northeast": {
          "lat": 40.75922202989272,
          "lng": -73.99008232010728
        },
        "southwest": {
          "lat": 40.75652237010727,
          "lng": -73.99278197989273
        }
      }
    },
    "icon": string,
    "icon_background_color": string,
    "icon_mask_base_uri": string,
    "name": string,
    "photos": [],
    "place_id": string,
    "plus_code": {
      "compound_code": string,
      "global_code": string
    },
    "rating": number,
    "reference": string,
    "scope": string,
    "types": [
      "bus_station",
      "transit_station",
      "point_of_interest",
      "establishment"
    ],
    "user_ratings_total": number,
    "vicinity": string
  },
]
```

<br>

## Ferramentas utilizadas:

- [x] NodeJs 
- [x] TypeScript
- [x] Express
- [x] Jest
- [x] Eslint e Prettier
- [x] Joi
- [x] Places API (Google Cloud Platform)
