FROM node:18.17.1-alpine3.18
WORKDIR /FrontEnd-Phase
COPY package.json .
RUN npm i --force
COPY . .
EXPOSE 8080
CMD ["npm" , "run" ,"dev","--","--host"]