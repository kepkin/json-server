FROM node:10-alpine
MAINTAINER Alexander Nevskiy <kepkin@gmail.com>

WORKDIR /data

RUN npm install json-server
ADD server.js server.js

VOLUME /data

EXPOSE 80

CMD node server.js 
