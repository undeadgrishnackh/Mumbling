FROM node:current-alpine
# the build will deploy the app in node directory to avoid permission issues
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./package*.json ./
USER node
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8888

CMD [ "npm", "start" ]