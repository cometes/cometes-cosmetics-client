FROM node:17

COPY ./package.json /maccosmetics/
COPY ./yarn.lock /maccosmetics/
WORKDIR /maccosmetics/
RUN yarn install

COPY . /maccosmetics/

RUN yarn build
CMD yarn start