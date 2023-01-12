FROM node:16

RUN npm i -g yalc

WORKDIR /var/www/
COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /var/www/my-lib-ui/
RUN npm install yalc -g
RUN npm install
RUN npm run yalc:build

WORKDIR /var/www/
RUN yalc link my-lib-ui

EXPOSE 3000
CMD ["npm", "run", "dev"]