export function normalizeUrl(raw: string): string {
  return raw.trim();
}

export function tryParseUrl(raw: string): URL | null {
  try {
    return new URL(raw);
  } catch {
    return null;
  }
}

export function detectSite(url: URL): string {
  const host = url.hostname.toLowerCase();

  if (host.includes("elgiganten")) return "elgiganten";
  if (host.includes("netonnet")) return "netonnet";
  if (host.includes("amazon")) return "amazon";

  return host;
}
