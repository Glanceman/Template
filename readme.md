# Guide

OS: Ubuntu

---
## Setup

1. Install [Docker](https://docs.docker.com/engine/install/ubuntu/) 
2. [**Optional**] set host name `hostnamectl set-hostname master` 
3. Setup K3s server with Docker `curl -sfL https://get.k3s.io | sh -s - --docker`
4. [**Optional**] restart k3s `sudo systemctl restart k3s` for later use smoothly
5. Add agent node `curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://k3s.example.com --token mypassword" sh -s -`

---
## Deployment
