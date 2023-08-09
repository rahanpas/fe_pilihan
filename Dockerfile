FROM node:18.15
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
RUN npm i
RUN npm cache clean --force
RUN npm run build
RUN npm install -g npm

EXPOSE 3000 

CMD ["npm", "run", "preview"]