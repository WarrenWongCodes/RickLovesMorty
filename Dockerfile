FROM node:alpine3.13

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080

RUN ["npm","start"]