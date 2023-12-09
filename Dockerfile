FROM node:18

COPY ./package.json /maccosmetics/
COPY ./yarn.lock /maccosmetics/
WORKDIR /maccosmetics/
RUN yarn install

COPY . /maccosmetics/

RUN yarn build
CMD yarn start