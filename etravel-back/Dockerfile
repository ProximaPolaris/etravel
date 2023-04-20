FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

EXPOSE 3001

CMD [ "npm", "run", "start:dev"]

