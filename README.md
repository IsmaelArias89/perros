[![Contributors][contributors-shield]][contributors-url]

# Nest API Starter

Este es un proyecto que sirve como punto de partida para poder crear una API con el framework [Nest](https://github.com/nestjs/nest).

Clona este proyecto y utilízalo para crear tu propio proyecto Nest.

## Características

- API Nest con Clean Architecture.
- Generación de documentación swagger.
- Endpoint /health.
- Nodemon para el reinicio automático al detectar cambios en el código.
- Test unitarios con Jest.
- Configuración de Linter con ESlint.
- Formato de código con Prettier.
- Plantillas de changelog y pull request.
- Dockerfile de la app.
- Librería de Helmet para establecer las cabeceras de seguridad.
- Dotenv para cargar las variables de entorno.
- Control de excepciones con filtro de errores.
- Configuración de modo cluster.

## Arquitectura

Este proyecto sigue la Clean Architecture para la organización del código del proyecto.

La aplicación está estructurada en 3 capas:

- App
- Domain
- Infrastructure

## Estructura de  la aplicación

```
├── src
│   ├── app
│   ├── domain
│   └── infrastructure
├── test
│   └── e2e
├── .env.example
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettier
├── changelog-template.hbs
├── docker-compose.yml
├── Dockerfile
├── nest-cli.json
├── nodemon-debug.json
├── nodemon.json
├── package-lock.json
├── package.json
├── pull_request_template.md
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

## Instalación y configuración

### Prerrequisitos

- Node
- Docker

### Gestión de claves

Para el desarrollo en local es necesario copiar el fichero `.env.example` a `.env` y sustituir las variables necesarias.
### Variables de Configuración

|                                                | key                   |
| -----------------------------------------------| ----------------------|
| Entorno activo                                 | NODE_ENV              |
| Configuración de clusters (Opcional)           | CLUSTER_CPU: number   |


**Configuración de clusters:**

Es opcional, si no se configura dicha variable, Nest se iniciará sin modo cluster.

Si esa variable tiene el valor 0, Nestjs se iniciará sin modo cluster.

Si esa variable tiene un valor superior a 0, se iniciarán tantos workers como se indiquen siempre y cuando sean menores o iguales que los totales de la máquina donde se ejecuta. En ese caso, como máximo serán tantos workers como CPU's tenga la máquina donde ejecutamos el código.

### Instalación

```bash
$ npm install
```

### Arrancando la App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Lint

```bash
$ npm run lint
```

### Docker

El dockerfile contiene las instrucciones para crear dos imágenes diferentes.

```bash
# Test: Imagen para lanzar los tests y lint
$ docker build --target test .

# Producción: Imagen usando el proceso multi-stage para que contenga sólo lo necesario para el funcionamiento de la aplicación
$ docker build .

```