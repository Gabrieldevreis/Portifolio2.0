# ================================
# Stage 1 – Build Angular
# ================================
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production


# ================================
# Stage 2 – Nginx (Runtime)
# ================================
FROM nginx:alpine

# Remove config default
RUN rm /etc/nginx/conf.d/default.conf

# 👇 USA TEMPLATE (ESSENCIAL NA RAILWAY)
COPY nginx.conf /etc/nginx/templates/default.conf.template

# 👇 Caminho correto do Angular
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
