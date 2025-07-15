export interface Cemetery {
  id: string;
  city: string;
  name: string;
  street: string;
  coordinates: { lat: number; lng: number };
}

export const cemeteries: Cemetery[] = [
  {
    id: 'c1',
    city: 'Roma',
    name: 'Cimitero Monumentale del Verano',
    street: 'Piazzale del Verano 1',
    coordinates: { lat: 41.903, lng: 12.513 }
  },
  {
    id: 'c2',
    city: 'Milano',
    name: 'Cimitero Monumentale',
    street: 'Piazzale Cimitero Monumentale',
    coordinates: { lat: 45.485, lng: 9.181 }
  }
];
