# 🚀 DevOps Monitor

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)
[![Build Status](https://img.shields.io/github/actions/workflow/status/AbdullahBakouni/devops-monitor/ci.yml?branch=main)]()
[![Issues](https://img.shields.io/github/issues/AbdullahBakouni/devops-monitor)]()
[![Pull Requests](https://img.shields.io/github/issues-pr/AbdullahBakouni/devops-monitor)]()
[![Stars](https://img.shields.io/github/stars/AbdullahBakouni/devops-monitor?style=social)]()

> A real-time monitoring platform for DevOps pipelines, microservices, and Kubernetes clusters — powered by **Kafka**, **GraphQL Subscriptions**, and **TypeScript**.

---

## 🖥️ Overview

**DevOps Monitor** helps you visualize and track the health of distributed systems in real-time.  
It integrates with **Kubernetes**, **Kafka**, and **GraphQL** to stream service status, logs, and alerts directly to your dashboard.

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, TypeScript, GraphQL |
| Messaging | Apache Kafka |
| Database | PostgreSQL (via Prisma) |
| Infrastructure | Docker, Kubernetes, Helm, CI/CD |
| Cloud | AWS / Azure (optional) |
| Auth & Security | JWT, Role-based Access Control |

---

## ✨ Features

- Real-time system and service monitoring  
- GraphQL subscriptions for live updates  
- Kafka integration for event streaming  
- Scalable microservice-ready architecture  
- Customizable alerts and notifications  
- Easy Docker & Kubernetes deployment  

---

## 🗺️ Architecture Diagram

```mermaid
flowchart TD
    A[Kubernetes Cluster] --> B[DevOps Monitor Service]
    B -->|Subscribes| C[(Kafka Broker)]
    C --> D[Event Stream]
    B --> E[(PostgreSQL DB)]
    B --> F[GraphQL API]
    F --> G[Frontend Dashboard]
    G -->|Live Updates| F
```
# ⚙️ Installation
1️⃣ Clone the repository
```bash
git clone https://github.com/AbdullahBakouni/devops-monitor.git
cd devops-monitor
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Configure environment variables

Create a .env file:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/devops_monitor
KAFKA_BROKER_URL=localhost:9092
JWT_SECRET=your_secret
#PORTS
#MainPort
PORT=3000
#METRICS_PORT
METRICS_PORT=3001
#MONITOR_PORT
MONITOR_PORT=3002
#NOTIFICATION_PORT
NOTIFICATION_PORT=3003

#EVENTS-PROCESSOR_PORT
EVENTS_PROCESSOR_PORT=3004

ALLOWED_ORIGINS=http://myapp.com

GOOGLE_API_KEY=your api key


AI_REFRESH_INTERVAL_HOURS=24

#CRON SERVICES CASHED
SERVICE_CLEANUP_MINUTES=30
SERVICE_DB_CLEANUP_MINUTES=15

#REDIS
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
NOTIF_DEDUP_TTL=90

```
4️⃣ Run locally
```bash
npm run strat:all
```
🐳 Docker Setup
Build and run locally
```bash
docker build -t devops-monitor .
docker run -p 4000:4000 --env-file .env devops-monitor
```
Or run via Docker Compose
```bash
docker compose up -d
```
☁️ Kubernetes Deployment
1️⃣ Build Docker image
```bash
docker build -t your-dockerhub-username/devops-monitor:latest .
docker push your-dockerhub-username/devops-monitor:latest
```
2️⃣ Apply Kubernetes manifests
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```
# 🧪 API Examples

Get services
```graphql
query {
  getServiceEvents {
    id
    service
    status
    cluster
    createdAt
  }
}
```
Subscribe to service updates
```graphql
subscription OnServiceEventCreated {
  serviceEventCreated {
    id
    service
    status
    cluster
    message
    createdAt
  }
}
```
Subscribe to Notification
```graphql
subscription OnNotificationCreated {
  notificationCreated {
    id
    title
    message
    createdAt
  }
}
```
# 🛣️ Roadmap

 Add Slack & Email notifications

 Build a real-time web dashboard (Next.js)

 Support for Prometheus & Grafana metrics

 AI-based anomaly detection module

 # 🤝 Contributing

Contributions are welcome!
Fork the repo → Create a branch → Make changes → Submit a PR 🎉
```bash
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```
# 📜 License

Licensed under the MIT License © 2025 https://github.com/AbdullahBakouni
