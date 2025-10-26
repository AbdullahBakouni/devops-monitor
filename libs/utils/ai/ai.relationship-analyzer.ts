import { GoogleGenerativeAI } from '@google/generative-ai';
import { Logger } from '@nestjs/common';
export interface ServiceRelationship {
  from: string;
  to: string;
  reason: string;
}
const logger = new Logger('AIRelationshipAnalyzer');
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY ?? '');

export async function analyzeRelationships(
  services: any[],
): Promise<{ from: string; to: string; reason: string }[]> {
  const prompt = `
You are a microservices dependency analyzer.
Given this list of services, detect dependencies among them.
Return JSON like:
[
  { "from": "auth-service", "to": "postgres", "reason": "uses database" },
  { "from": "metrics-service", "to": "redis", "reason": "caches metrics" }
]

Services:
${JSON.stringify(services, null, 2)}
`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const result = await model.generateContent(prompt);
    let text = result.response.text();
    text = text
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .replace(/[\r\n]+/g, ' ')
      .trim();
    let json: ServiceRelationship[];
    try {
      json = JSON.parse(text) as ServiceRelationship[];
    } catch {
      logger.warn(
        `⚠️ AI returned invalid JSON for relationships, raw text: ${text.slice(0, 150)}...`,
      );
      return [];
    }
    if (!Array.isArray(json)) {
      logger.warn('⚠️ AI returned non-array structure for relationships');
      return [];
    }

    return json.map((rel) => ({
      from: rel.from || 'unknown',
      to: rel.to || 'unknown',
      reason: rel.reason || 'unspecified',
    }));
  } catch (error) {
    const err = error as Error;
    logger.warn(`⚠️ analyzeRelationships failed: ${err.message}`);
    return [];
  }
}
