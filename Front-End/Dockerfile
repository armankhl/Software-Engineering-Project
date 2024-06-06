FROM node:18.17.1-alpine3.18
WORKDIR /FrontEnd-Phase
COPY package.json .
RUN npm i 
COPY . .
ENV API_URL=http://examole.com/API_URL
EXPOSE 3000
CMD ["npm" , "run" ,"dev"]
