FROM node:15-alpine

RUN apk update && apk add postgresql-client mongodb-tools

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY bin/* /usr/local/bin/

RUN chmod +x /usr/local/bin/backup
RUN chmod +x /usr/local/bin/restore
RUN chmod +x /usr/local/bin/sync
RUN chmod +x /usr/local/bin/migrate

RUN mkdir -p ./dumps/mg
RUN mkdir -p ./dumps/pg 

EXPOSE 3000

CMD ["yarn", "serve"]
