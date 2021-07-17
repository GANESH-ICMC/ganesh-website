#!/bin/bash

echo -ne "ganesh.icmc.usp.br\n2\n" | sudo certbot certonly --manual

sudo mv /home/ganesh/ganesh-website/certs/chain.pem /home/ganesh/ganesh-website/certs/old-certs/

sudo mv /home/ganesh/ganesh-website/certs/privkey.pem /home/ganesh/ganesh-website/certs/old-certs/

sudo cp /etc/letsencrypt/live/ganesh.icmc.usp.br/fullchain.pem /home/ganesh/ganesh-website/certs/chain.pem

sudo cp /etc/letsencrypt/live/ganesh.icmc.usp.br/privkey.pem /home/ganesh/ganesh-website/certs/privkey.pem

# removing older mount
sudo docker container rm ganesh-mount

# running docker
sudo docker run -d -p 80:3000 -p 443:3001 --name ganesh-mount --mount type=bind,bind-propagation=shared,source="/home/ganesh/ganesh-website/ganesh-volume",target="/app/public/static/.well-known/" ganesh-website:1.0.1
