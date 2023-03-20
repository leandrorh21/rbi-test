FROM node:16.16.0-alpine

WORKDIR /usr

# ENV PORT=4000
# ENV DATABASE_NAME=rbidb
# ENV DATABASE_USER=leandro
# ENV DATABASE_PASSWORD=asdfgh
# ENV DATABASE_HOST=localhost
# ENV EXT_API_URL=https://api.football-data.org/v4/competitions/
# ENV AUTH_EXT_API_TOKEN=632dcd4c074a4389bb5b19284dc324fe

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

COPY source ./source
RUN yarn install

RUN yarn build

CMD ["node", "dist/main.js"]

