import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

console.log('🚀 Startar test av Claude Agent... (NY VERSION)\n');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function testAgent() {
  try {
    const model = 'claude-3-haiku-20240307';

    console.log('📡 SKICKAR FRÅGAN TILL CLAUDE MED MODELL:', model, '\n');

    const message = await client.messages.create({
      model,
      max_tokens: 256,
      messages: [
        {
          role: 'user',
          content: 'Skriv bara: "Hej från Claude-agenten!"',
        },
      ],
    });

    console.log('✅ Svar från Claude:');
    console.log(JSON.stringify(message.content, null, 2));
  } catch (error) {
    console.error('❌ FEL I NY VERSION AV testClaude.ts:');
    console.error(error);
  }
}

testAgent();
