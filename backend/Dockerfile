FROM node:lts-alpine3.14
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run-script build
EXPOSE 9000
USER node
CMD [ "node", "dist/index.js" ]