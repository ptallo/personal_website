FROM node:18-alpine
RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev