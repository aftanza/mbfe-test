FROM node:22.2.0-alpine

WORKDIR /app

RUN apk update && apk add netcat-openbsd gettext

RUN npm i -g npm@10.8.0

# COPY package.json package-lock.json ./
COPY package.json ./

# RUN npm install -D @swc/cli @swc/core
# RUN npm install @swc/core-linux-arm64-gnu 
# RUN npm ci
RUN npm i -D @swc/cli @swc/core @swc/core-linux-musl
RUN npm install

COPY . .

# RUN chmod +x ./docker/entrypoints/entrypoint.sh ;

EXPOSE 8000
# ENTRYPOINT ["./docker/entrypoints/entrypoint.sh"]


# W.I.P. Still doesn't work for npm run dev.