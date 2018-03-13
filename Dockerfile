FROM nginx:1.12-alpine

# Copy contents from current folder into the container
COPY . /usr/share/nginx/html
