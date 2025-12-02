import Anthropic from '@anthropic-ai/sdk';
import { PriceAgent } from './agents/priceAgent';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const priceAgent = new PriceAgent();

export async function runPriceHuntAgent(userQuery: string) {
  console.log('🔍 User Query:', userQuery);
  
  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    system: priceAgent.systemPrompt,
    messages: [
      {
        role: 'user',
        content: userQuery,
      },
    ],
  });

  const response = message.content,[object Object],;
  
  if (response.type === 'text') {
    return response.text;
  }
  
  return 'No response';
}