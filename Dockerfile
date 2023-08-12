FROM node:16-alpine
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY package.json /usr/src/nuxt-app/
COPY package-lock.json /usr/src/nuxt-app/

RUN npm i
RUN npm cache clean --force
RUN npm install -g npm
RUN npm run build

EXPOSE 3000 

CMD ["npm", "run", "preview"]