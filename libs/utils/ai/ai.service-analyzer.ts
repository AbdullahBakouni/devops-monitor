import { GoogleGenerativeAI } from '@google/generative-ai';
export interface AnalysisResult {
  type: string;
  url: string;
  description: string;
  [key: string]: any;
  checkCode: string;
}
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY ?? '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
export async function analyzeService(data: {
  name: string;
  url: string;
  cluster: string;
  port?: number;
  image?: string;
  labels?: Record<string, string>;
  checkCode?: string;
}) {
  const prompt = `
  You are a DevOps AI assistant that understands Docker and Kubernetes services and determines how to check the health of any service.
  Given the metadata below,and generate JSON :
  {

  - "type": One of ["HTTP", "DATABASE", "REDIS", "KAFKA", "QUEUE", "WORKER", "UNKNOWN", etc..]
  - "url": The correct connection URL to access the service.
  - "description": Short human-readable description.
  - "checkCode": "async JS code that returns 'UP' or 'DOWN'"
  }

  The code must be valid and runnable inside Node.js with require().
  Prefer using 'axios' for HTTP, 'pg' for Postgres, 'ioredis' for Redis, etc.

  Metadata:
  ${JSON.stringify(data, null, 2)}
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const clean = text.replace(/```json|```/g, '').trim();

    return JSON.parse(clean) as AnalysisResult;
  } catch (error) {
    console.error('⚠️ analyzeService failed:', (error as Error).message);
    return {
      type: '',
      url: data.url,
      description: 'Unable to classify service automatically',
      checkCode: "return 'DOWN';",
    };
  }
}
// import { GoogleGenerativeAI } from '@google/generative-ai';

// export interface AnalysisResult {
//   type: string;
//   url: string;
//   description: string;
//   [key: string]: any;
//   checkCode: string;
// }

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY ?? '');
// const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

// export async function analyzeService(data: {
//   name: string;
//   url: string;
//   cluster: string;
//   port?: number;
//   image?: string;
//   labels?: Record<string, string>;
//   checkCode?: string;
// }) {
//   const prompt = `
// You are a DevOps AI assistant that analyzes services and generates health check code.

// Given the service metadata below, generate a JSON response with these fields:
// {
//   "type": "One of: HTTP, DATABASE, REDIS, KAFKA, QUEUE, WORKER, UNKNOWN",
//   "url": "The correct connection URL for this service",
//   "description": "Brief human-readable description of the service",
//   "checkCode": "JavaScript code that checks if the service is healthy"
// }

// CRITICAL REQUIREMENTS FOR checkCode:
// 1. The code will be executed in a Node.js VM sandbox
// 2. A variable called 'url' is already available in scope containing the connection URL
// 3. You can use require() to load modules: 'axios', 'pg', 'ioredis', 'mysql2'
// 4. The code MUST return the string 'UP' if healthy, or 'DOWN' if unhealthy
// 5. Use try-catch to handle errors gracefully
// 6. DO NOT wrap code in module.exports or function declarations
// 7. The code should be directly executable (will be wrapped in async IIFE automatically)
// 8. For PostgreSQL, use: const { Client } = require('pg'); const client = new Client({ connectionString: url });
// 9. Always close connections (client.end(), pool.end(), etc.) in finally blocks
// 10. Keep the code concise and focused on health checking only

// EXAMPLES OF CORRECT checkCode:

// For HTTP services:
// \`\`\`
// const axios = require('axios');
// try {
//   const response = await axios.get(url, { timeout: 5000 });
//   return response.status === 200 ? 'UP' : 'DOWN';
// } catch (error) {
//   console.error('HTTP check failed:', error.message);
//   return 'DOWN';
// }
// \`\`\`

// For PostgreSQL:
// \`\`\`
// const { Client } = require('pg');
// const client = new Client({ connectionString: url });
// try {
//   await client.connect();
//   await client.query('SELECT 1');
//   return 'UP';
// } catch (error) {
//   console.error('PostgreSQL check failed:', error.message);
//   return 'DOWN';
// } finally {
//   try { await client.end(); } catch {}
// }
// \`\`\`

// For Redis:
// \`\`\`
// const Redis = require('ioredis');
// const redis = new Redis(url);
// try {
//   await redis.ping();
//   return 'UP';
// } catch (error) {
//   console.error('Redis check failed:', error.message);
//   return 'DOWN';
// } finally {
//   redis.disconnect();
// }
// \`\`\`

// Service Metadata:
// ${JSON.stringify(data, null, 2)}

// Generate ONLY valid JSON, no markdown code blocks.
// `;

//   try {
//     const result = await model.generateContent(prompt);
//     const text = result.response.text();
//     const clean = text.replace(/```json|```/g, '').trim();
//     const parsed = JSON.parse(clean) as AnalysisResult;

//     // Validation: ensure checkCode doesn't have module.exports wrapper
//     if (parsed.checkCode && parsed.checkCode.includes('module.exports')) {
//       console.warn('⚠️ Removing module.exports wrapper from generated code');
//       parsed.checkCode = parsed.checkCode
//         .replace(/module\.exports\s*=\s*async\s*\(\)\s*=>\s*\{/, '')
//         .replace(/\};?\s*$/, '')
//         .trim();
//     }

//     return parsed;
//   } catch (error) {
//     console.error('⚠️ analyzeService failed:', (error as Error).message);
//     return {
//       type: 'UNKNOWN',
//       url: data.url,
//       description: 'Unable to classify service automatically',
//       checkCode: "return 'DOWN';",
//     };
//   }
// }
