
# Microservicio en PHP

# Proyecto de Microservicio con Lumen y React

Este proyecto incluye un servicio de backend utilizando Lumen y un frontend en React para interactuar con el servicio.

## Requisitos

- Node.js v18.*+ (https://nodejs.org/)
- npm (viene con Node.js)
- PHP 8.2.12 (https://www.php.net/)
- Composer (https://getcomposer.org/)

## Estructura del Proyecto

microservice-project/
* backend/
* frontend/
* README.md

## Configuración del Backend (Lumen)

### Instalación

1. Navegar al directorio del backend:

   ```bash
   cd backend
2. Instalar las dependencias:

   ```bash
   composer install
3. Crear un archivo .env en el directorio del backend con el siguiente contenido:
    ```bash
    APP_NAME=Lumen
    APP_ENV=local
    APP_KEY=
    APP_DEBUG=true
    APP_URL=http://localhost

    LOG_CHANNEL=stack

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=

    CACHE_DRIVER=file
    QUEUE_CONNECTION=sync
## Uso
* Iniciar el servidor:
    ```bash
        php -S localhost:8000 -t public

* El servidor estará disponible en http://localhost:8000.

## Configuración del Frontend (React)

### Instalación
1. Navegar al directorio del backend:

   ```bash
   cd frontend
2. Instalar las dependencias:
   ```bash
   npm install
## Uso
* Iniciar el servidor:
    ```bash
        npm start

* La aplicación estará disponible en http://localhost:3000.

## Funcionalidades del Frontend
* Visualizar Películas
    - Lista todas las películas disponibles obtenidas del backend.
* Agregar Película
    - Formulario para agregar una nueva película.
* Editar Película
    - Formulario para editar una película existente.
* Eliminar Película
    - Opción para eliminar una película de la lista.
