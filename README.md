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
