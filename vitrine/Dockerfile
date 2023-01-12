FROM node:14

RUN npm install -g yarn --force

WORKDIR /var/www/
COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]