FROM node:alpine

WORKDIR /react-app

# COPY ./package.json ./

COPY ./dist/ ./

RUN npm install -g serve

CMD ["serve", "./", "-p", "3000"]