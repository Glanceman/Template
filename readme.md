# Guide

OS: Ubuntu

---
## Setup

**Server : >= 2 CPUs**

1. Install [Docker](https://docs.docker.com/engine/install/ubuntu/) 
2. [**Optional**] set host name `hostnamectl set-hostname master` 
3. Setup K3s server with Docker `curl -sfL https://get.k3s.io | sh -s - --docker`
4. Add agent node `curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://k3s.example.com --token mypassword" sh -s -  --docker`

Server : ``` cat /var/lib/rancher/k3s/server/token```

Agent : ``` cat /var/lib/rancher/k3s/server/agent-token```

---
## Deployment
1. apply config file `sudo kubectl apply -f ./deploy/web-deployment.yaml`
2. check status `sudo kubectl get all -n=dev`

---

## build docker image
1. `cd /template-project`
2. `docker build -t webimage .`
