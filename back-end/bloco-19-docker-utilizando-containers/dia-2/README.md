# Manipulação e Criação de Imagens no Docker

### Dockerfile
```docker
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
# COPY ["<ARQUIVO_1>","<ARQUIVO_2>",...,"<ARQUIVO_X>", "<PASTA-DESTINO>"]
# or COPY arquivo1 arquivo2 ./destino
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```
