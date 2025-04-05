# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /babalola_daniel_final_site
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine
COPY --from=builder /babalola_daniel_final_site/build /usr/share/nginx/html
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]
