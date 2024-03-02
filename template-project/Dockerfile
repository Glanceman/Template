FROM node:20.11.1

WORKDIR /template-project

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "node", "index.js" ]