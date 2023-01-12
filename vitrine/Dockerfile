FROM node:16

RUN npm i -g yalc

WORKDIR /var/www/
COPY package*.json ./

RUN npm install

COPY . .

RUN cd my-lib-ui && npm install yalc -g && npm install && npm run yalc:build
RUN yalc link my-lib-ui

EXPOSE 3000
CMD ["npm", "run", "dev"]