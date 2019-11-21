FROM node:latest

COPY . /webchat-frontend
WORKDIR /webchat-frontend

RUN ["yarn", "install"]
CMD ["yarn", "start"]
