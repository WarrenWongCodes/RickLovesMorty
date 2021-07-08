FROM node:alpine3.13

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

RUN ["yarn","start"]