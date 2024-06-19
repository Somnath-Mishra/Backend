FROM node:18 as builder

WORKDIR /build

COPY package*.json .
COPY . .

RUN npm install

FROM node:18 as runner

WORKDIR /app

COPY --from=builder  build/package*.json .
COPY --from=builder build/node_modules node_modules
COPY --from=builder build/public /public
COPY --from=builder build/src src/


CMD [ "npm","start" ]
