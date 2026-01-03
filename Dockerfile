FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

RUN npm install -g serve

CMD serve -s dist/frontend/browser -l tcp://0.0.0.0:${PORT}
