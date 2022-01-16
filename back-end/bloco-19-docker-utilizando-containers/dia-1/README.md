# Utilizando Containers

```Bash
# Create ubuntu image and run terminal (-ti)
docker container run -ti ubuntu

# Create container without executing it
docker container create -it <image>:<tag> # it for terminal

# List containers
docker container ls -a # a for all

# Start container
docker container start <CONTAINER ID || NAMES>

# Or
docker container <restart || pause || unpause || stop> <CONTAINER ID || NAMES>

# Case Daemon (-d)
docker container attach <CONTAINER ID || NAMES> 

# Removing
docker container rm -f <CONTAINER ID || NAMES> # -f to force if active

# Remove all inactives
docker container prune

# Container processes
docker container top <CONTAINER ID || NAMES>
```
