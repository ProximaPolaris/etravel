FROM node:18-alpine

RUN apk add --no-cache python3 g++ make

WORKDIR /app

COPY package*.json ./

RUN apk --no-cache --virtual build-dependencies add \
    python3 \
    make \
    g++
RUN yarn install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
