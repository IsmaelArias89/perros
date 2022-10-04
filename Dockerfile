FROM node:14-alpine as test

WORKDIR /app

# BUILD APP
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# TEST APP
RUN npm run lint
RUN npm run test:cov
ENTRYPOINT npm run test:cov


FROM node:14-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./

RUN npm run build && npm prune --production


FROM node:14-alpine

WORKDIR /app

# ADD MADRID TIMEZONE
RUN apk --update add tzdata git\
 && rm -rf /var/lib/apt/lists/* \
 && rm /var/cache/apk/*

RUN cp /usr/share/zoneinfo/Europe/Madrid /etc/localtime \
 && echo "Europe/Madrid" > /etc/timezone

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules

ENTRYPOINT [ "node" ]
CMD [ "dist/main.js" ]