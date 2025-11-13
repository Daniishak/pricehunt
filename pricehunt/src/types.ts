// src/types.ts
export interface ProductOffer {
  id: number;
  name: string;        // Namnet på produkten (t.ex. "AirPods Pro")
  store: string;       // Butik (t.ex. "Elgiganten")
  price: number;       // Pris i SEK
  url: string;         // Länk till produkten
}
