FROM node:lts-alpine3.14 as build

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build


# Stage 2: Serve app with nginx server

FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8080