# stage 1 - angular application
FROM node:16

# install angular cli
RUN npm install -g @angular/cli

# copy app files
WORKDIR /app
COPY . .

# install dependencies and build
WORKDIR /app/purple-cow-app
RUN npm install
RUN ng build --prod

# stage 2 - nginx
FROM nginx:1.17.1-alpine

# copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# copy app files from stage 1
COPY --from=0 /app/purple-cow-app/dist /app

# export nginx port
EXPOSE 80

# start nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
