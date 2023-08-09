FROM node:16-alpine
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
RUN npm i
RUN npm cache clean --force
RUN npm install -g npm
RUN npm run build

EXPOSE 3000 

CMD ["npm", "run", "preview"]