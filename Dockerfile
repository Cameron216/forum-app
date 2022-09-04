FROM node:16 AS install

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 6006

CMD [ "npm", "start" ]
