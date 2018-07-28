FROM node:6-alpine

COPY dist ./dist
COPY server ./server
COPY package*.json ./
RUN npm install

CMD ["node", "server/server.js"]
EXPOSE 8080
