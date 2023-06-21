FROM nginx:latest

COPY index.html /usr/share/nginx/html/
COPY img/ /usr/share/nginx/html/img/
COPY js/ /usr/share/nginx/html/js/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY css/ /usr/share/nginx/html/css

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
