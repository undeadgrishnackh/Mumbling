FROM node:current-alpine
# the build will deploy the app in node directory to avoid permission issues
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./package*.json ./
USER node
RUN npm install
COPY --chown=node:node ./ .
EXPOSE 8888
CMD [ "node", "src/mumbling.js", "--word=abcd" ] .

#docker build -t undeadgrishnackh/codewars_mumbling .
#docker run -it --rm undeadgrishnackh/codewars_mumbling
#docker login && docker push undeadgrishnackh/codewars_mumbling