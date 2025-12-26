FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 2800

CMD ["npm", "start"]
