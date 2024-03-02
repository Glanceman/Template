FROM alpine:latest

# install Node.js & npm
RUN apk add --no-cache --update nodejs npm

WORKDIR /usr/template-project

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "node", "index.js" ]