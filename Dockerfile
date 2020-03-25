FROM node:8

EXPOSE 65200

RUN mkdir /dockerbook
COPY ./ /dockerbook
WORKDIR /dockerbook

RUN npm run build-storybook