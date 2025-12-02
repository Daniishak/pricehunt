export class PriceAgent {
  async run(url: URL, site: string): Promise<void> {
    console.log("=== PriceAgent v0.1 ===");
    console.log(`Källa: ${site}`);
    console.log(`URL:   ${url.href}`);
    console.log("");
    console.log("Plan (framtida steg):");
    console.log("- Hämta produktsida");
    console.log("- Extrahera produktnamn / modellnummer");
    console.log("- Sök efter samma produkt på andra sajter");
    console.log("- Sortera erbjudanden efter pris");
  }
}
