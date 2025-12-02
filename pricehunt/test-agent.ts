import Anthropic from '@anthropic-ai/sdk';

console.log('🚀 Startar test av Claude Agent...\n');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || 'din-api-nyckel-här',
});

async function testAgent() {
  try {
    console.log('📡 Skickar förfrågan till Claude...\n');

    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: 'Hej! Vad är priset på en iPhone 15 Pro?',
        },
      ],
    });

    console.log('✅ Svar från Claude:');
    console.log(JSON.stringify(message.content, null, 2));
  } catch (error) {
    console.error('❌ Fel uppstod:');
    console.error(error);
  }
}

testAgent();