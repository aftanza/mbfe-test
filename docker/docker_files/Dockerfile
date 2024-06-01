# install python
FROM node:22.2.0

WORKDIR /app

RUN apt-get update && \
    apt-get install -y netcat-openbsd gettext

RUN npm i -g npm@latest

COPY ./package.json .
RUN npm install


COPY . .

RUN chmod +x ./docker/entrypoints/entrypoint.sh ;

EXPOSE 8000
# ENTRYPOINT ["./docker/entrypoints/entrypoint.sh"]


# W.I.P. Still doesn't work for npm run dev.