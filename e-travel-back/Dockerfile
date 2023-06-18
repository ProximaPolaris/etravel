FROM node:18-alpine

RUN apk add --no-cache python3 g++ make

WORKDIR /app

COPY package*.json ./

RUN apk --no-cache --virtual build-dependencies add \
    python3 \
    make \
    g++
RUN yarn install --production

RUN npm install 

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start:dev"]
