# Docker Multi-Tier App

This is a multi-tier application with:

- **React frontend** served via Nginx
- **Node.js backend** API
- **PostgreSQL database**
- **Docker Compose** for container orchestration

## Features

- Full-stack setup in Docker
- Backend API accessible from frontend
- Persistent PostgreSQL database

## Prerequisites

- Docker & Docker Compose
- Node.js & npm (for local development)

## Setup

1. **Clone the repository**
```bash
git clone https://github.com/amithy25/docker-multi-tier-app.git
cd docker-multi-tier-app

2. Configure API URL
Edit frontend/src/config.js with your backend endpoint:

export const API_URL = "http://<EC2_PUBLIC_IP>:5000/api";

3. Start the Application

docker-compose up --build -d

4. Verify docker containers

docker ps

Access

Frontend: http://<EC2_PUBLIC_IP>/

Backend API: http://<EC2_PUBLIC_IP>:5000/api/health

PostgreSQL: localhost:5432 (credentials in docker-compose.yml)

Notes

Ensure EC2 Security Group allows ports 80, 5000, and 5432 for access.

All containers share the docker-multi-tier-app_default Docker network.
