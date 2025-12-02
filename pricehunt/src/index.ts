/// <reference types="node" />

import { normalizeUrl, tryParseUrl, detectSite } from "./core/urlUtils";
import { PriceAgent } from "./agents/priceAgent";

async function main() {
  const rawUrl = process.argv[2];

  if (!rawUrl) {
    console.error("Användning: npm run pricehunt -- <produkt-url>");
    process.exit(1);
    return; // för TS, även om process.exit aldrig kommer tillbaka
  }

  const normalized = normalizeUrl(rawUrl);
  const parsed = tryParseUrl(normalized);

  if (!parsed) {
    console.error(
      "Ogiltig URL. Försök igen med en fullständig länk, t.ex. https://..."
    );
    process.exit(1);
    return; // för att TS ska förstå att parsed inte kan vara null efter detta
  }

  const site = detectSite(parsed);
  const agent = new PriceAgent();

  await agent.run(parsed, site);
}

main().catch((err) => {
  console.error("Ett fel uppstod:", err);
  process.exit(1);
});
