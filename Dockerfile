FROM node:18-alpine AS base

ENV APP_NAME=field-admin \
    HOME=/app

RUN apk add --no-cache \
    bash

WORKDIR ${HOME}

COPY package.json ./

RUN yarn install

COPY . .
