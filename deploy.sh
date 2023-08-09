#!/bin/bash

# Add this line to get the GID of the Docker group on the host
DOCKER_GROUP_GID=$(stat -c '%g' /var/run/docker.sock)

CURRENT_INSTANCE=$(sudo docker ps -a -q --filter ancestor="$IMAGE_NAME" --format="{{.ID}}")

if [ -n "$CURRENT_INSTANCE" ]; then 
  sudo docker stop "$CURRENT_INSTANCE"
  sudo docker rm "$CURRENT_INSTANCE"
fi

sudo docker pull "$IMAGE_NAME"

CONTAINER_EXISTS=$(sudo docker ps -a | grep "$CONTAINER_NAME")
if [ -n "$CONTAINER_EXISTS" ]; then 
  sudo docker rm "$CONTAINER_NAME"
fi

# Add this line to create a new group inside the container with the same GID as the Docker group on the host
sudo groupadd -g $DOCKER_GROUP_GID docker-host

# Add this line to add the user inside the container to the newly created group
sudo usermod -aG docker-host $EC2_USERNAME

# Now, you should be able to run Docker commands inside the container without permission issues
sudo docker run -p 8080:8080 -d --name "$CONTAINER_NAME" "$IMAGE_NAME"
