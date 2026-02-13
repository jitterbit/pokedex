# Stage 1: Build
FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY app/package.json ./app/
COPY shared/package.json ./shared/

RUN pnpm install --frozen-lockfile

COPY app ./app/
COPY shared ./shared/

RUN pnpm --filter pokedex-app build

FROM nginx:alpine

COPY --from=builder /app/app/dist/pokedex-app/browser /usr/share/nginx/html

RUN echo 'server { 
    listen 80; 
    location / { 
        root /usr/share/nginx/html; 
        index index.html; 
        try_files $uri $uri/ /index.html; 
    } 
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
