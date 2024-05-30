FROM node:latest
WORKDIR /var/www/html
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3223
CMD ["npm", "start"]
