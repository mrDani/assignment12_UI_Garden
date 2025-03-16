
# Stage 1: Build Storybook
FROM node:18-alpine AS builder
WORKDIR /babalola_daniel_ui_garden_build_checks
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-storybook

# Stage 2: Serve using Nginx
FROM nginx:alpine
COPY --from=builder /babalola_daniel_ui_garden_build_checks/storybook-static /usr/share/nginx/html
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]
