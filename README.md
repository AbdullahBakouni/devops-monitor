
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>DevOps Monitor – README</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b1220;
      --card: #121a2b;
      --muted: #9fb0d0;
      --text: #e6edf6;
      --accent: #7aa2ff;
      --border: #1f2a44;
      --green: #22c55e;
      --orange: #f59e0b;
      --red: #ef4444;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: radial-gradient(1200px 800px at 10% -10%, rgba(122,162,255,0.12), transparent 60%),
                  radial-gradient(1400px 900px at 100% 0%, rgba(34,197,94,0.08), transparent 50%),
                  var(--bg);
      color: var(--text);
      line-height: 1.65;
    }
    .container { max-width: 980px; margin: 48px auto; padding: 0 20px; }
    header.hero {
      background: linear-gradient(180deg, rgba(122,162,255,0.10), rgba(122,162,255,0.00));
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px 24px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    }
    h1 {
      margin: 8px 0 8px;
      font-size: 36px;
      letter-spacing: -0.02em;
    }
    p.lead { margin: 0; color: var(--muted); font-size: 16px; }
    .badges { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
    .badges img { height: 22px; }
    section {
      margin-top: 28px;
      background: rgba(18,26,43,0.6);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 22px 20px;
      backdrop-filter: blur(3px);
    }
    h2 { margin-top: 0; font-size: 22px; }
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .code {
      background: #0f172a;
      border: 1px solid #1f2a44;
      border-radius: 10px;
      padding: 12px 14px;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 14px;
      line-height: 1.55;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
    }
    th, td { padding: 10px 12px; border-bottom: 1px solid var(--border); }
    th { text-align: left; color: var(--muted); font-weight: 600; background: rgba(255,255,255,0.02); }
    .screens {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .screens img {
      width: 100%;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: #0f172a;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
    .pill {
      display: inline-block;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.03);
      font-size: 12px;
      color: var(--muted);
    }
    footer {
      margin: 28px 0 8px;
      color: var(--muted);
      font-size: 13px;
      text-align: center;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .callout {
      border-left: 4px solid var(--accent);
      padding: 12px 14px;
      background: rgba(122,162,255,0.08);
      border-radius: 8px;
    }
  </style>
  <script type="module">
    // Mermaid diagram initialization
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
    mermaid.initialize({ startOnLoad: true, theme: "dark" });
  </script>
</head>
<body>
  <div class="container">
    <header class="hero">
      <span class="pill">README • HTML</span>
      <h1>DevOps Monitor</h1>
      <p class="lead">
        A real-time monitoring platform for DevOps pipelines, microservices, and Kubernetes clusters — powered by
        <strong>Kafka</strong>, <strong>GraphQL Subscriptions</strong>, and <strong>TypeScript</strong>.
      </p>
      <div class="badges">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
        <img src="https://img.shields.io/github/actions/workflow/status/AbdullahBakouni/devops-monitor/ci.yml?branch=main" alt="Build Status">
        <img src="https://img.shields.io/github/issues/AbdullahBakouni/devops-monitor" alt="Issues">
        <img src="https://img.shields.io/github/issues-pr/AbdullahBakouni/devops-monitor" alt="PRs">
        <img src="https://img.shields.io/github/stars/AbdullahBakouni/devops-monitor?style=social" alt="Stars">
      </div>
    </header>

    <section>
      <h2>Overview</h2>
      <p>
        <strong>DevOps Monitor</strong> helps you visualize and track the health of distributed systems in real-time.
        It integrates with <strong>Kubernetes</strong>, <strong>Kafka</strong>, and <strong>GraphQL</strong> to stream service status, logs,
        and alerts directly to your dashboard.
      </p>
    </section>

    <section>
      <h2>Tech Stack</h2>
      <table>
        <thead>
          <tr><th>Layer</th><th>Technology</th></tr>
        </thead>
        <tbody>
          <tr><td>Backend</td><td>Node.js, TypeScript, GraphQL</td></tr>
          <tr><td>Messaging</td><td>Apache Kafka</td></tr>
          <tr><td>Database</td><td>PostgreSQL (via Prisma)</td></tr>
          <tr><td>Infrastructure</td><td>Docker, Kubernetes, Helm, CI/CD</td></tr>
          <tr><td>Cloud</td><td>AWS / Azure (optional)</td></tr>
          <tr><td>Auth & Security</td><td>JWT, Role-based Access Control</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Features</h2>
      <ul>
        <li>Real-time system and service monitoring</li>
        <li>GraphQL subscriptions for live updates</li>
        <li>Kafka integration for event streaming</li>
        <li>Scalable microservice-ready architecture</li>
        <li>Customizable alerts and notifications</li>
        <li>Easy Docker & Kubernetes deployment</li>
      </ul>
    </section>

    <section>
      <h2>Architecture Diagram</h2>
      <div class="callout" style="margin-bottom:12px;">
        Rendered with <a href="https://mermaid.js.org/" target="_blank" rel="noreferrer">Mermaid</a>. You can open this HTML locally and the diagram will render automatically.
      </div>
      <pre class="mermaid">
flowchart TD
    A[Kubernetes Cluster] --> B[DevOps Monitor Service]
    B -->|Subscribes| C[(Kafka Broker)]
    C --> D[Event Stream]
    B --> E[(PostgreSQL DB)]
    B --> F[GraphQL API]
    F --> G[Frontend Dashboard]
    G -->|Live Updates| F
      </pre>
    </section>

    <!--<section>
      <h2>Screenshots</h2>
      <p class="callout">Replace these placeholder paths with your actual screenshots at <code>docs/images/</code>.</p>
      <div class="screens">
        <img src="docs/images/dashboard.png" alt="Dashboard">
        <img src="docs/images/alerts.png" alt="Alerts">
      </div>
    </section>-->

    <section>
      <h2>Installation</h2>
      <div class="grid-2">
        <div>
          <h3>Clone</h3>
          <pre class="code">git clone https://github.com/AbdullahBakouni/devops-monitor.git
cd devops-monitor</pre>
        </div>
        <div>
          <h3>Install</h3>
          <pre class="code">npm install</pre>
        </div>
      </div>

      <h3>Environment Variables</h3>
      <pre class="code">DATABASE_URL=postgresql://user:password@localhost:5432/devops_monitor
KAFKA_BROKER_URL=localhost:9092
GRAPHQL_PORT=4000
JWT_SECRET=your_secret</pre>

      <h3>Run Locally</h3>
      <pre class="code">npm run dev</pre>
    </section>

    <section>
      <h2>Docker</h2>
      <h3>Build & Run</h3>
      <pre class="code">docker build -t devops-monitor .
docker run -p 4000:4000 --env-file .env devops-monitor</pre>

      <h3>Docker Compose</h3>
      <pre class="code">docker compose up -d</pre>
    </section>

    <section>
      <h2>Kubernetes Deployment</h2>
      <ol>
        <li>
          <strong>Build & push image</strong>
          <pre class="code">docker build -t your-dockerhub-username/devops-monitor:latest .
docker push your-dockerhub-username/devops-monitor:latest</pre>
        </li>
        <li>
          <strong>Apply manifests</strong>
          <pre class="code">kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml</pre>
        </li>
        <li>
          <strong>Helm (optional)</strong>
          <pre class="code">helm install devops-monitor ./helm</pre>
        </li>
      </ol>
    </section>

    <section>
      <h2>API Examples</h2>
      <h3>Get Services</h3>
      <pre class="code">query {
  getServices {
    id
    name
    status
  }
}</pre>

      <h3>Subscribe to Service Updates</h3>
      <pre class="code">subscription {
  serviceStatusChanged {
    id
    name
    status
  }
}</pre>
    </section>

    <section>
      <h2>Roadmap</h2>
      <ul>
        <li>Add Slack &amp; Email notifications</li>
        <li>Build a real-time web dashboard (Next.js)</li>
        <li>Support for Prometheus &amp; Grafana metrics</li>
        <li>AI-based anomaly detection module</li>
      </ul>
    </section>

    <section>
      <h2>Contributing</h2>
      <p>Contributions are welcome! Fork the repo → Create a branch → Make changes → Submit a PR 🎉</p>
      <pre class="code">git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature</pre>
    </section>

    <section>
      <h2>License</h2>
      <p>Licensed under the <strong>MIT License</strong> © 2025 <a href="https://github.com/AbdullahBakouni" target="_blank" rel="noreferrer">Abdullah Bakouni</a>.</p>
    </section>

    <footer>
      <p>Made with ♥ for <a href="https://github.com/AbdullahBakouni/devops-monitor" target="_blank" rel="noreferrer">devops-monitor</a>. Customize as needed.</p>
    </footer>
  </div>
</body>
</html>
