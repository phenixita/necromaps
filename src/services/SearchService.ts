export interface SearchResult {
  id: string;
  name: string;
  birthDate: string;
  deathDate: string;
  description: string;
  cemeteryId: string;
  cemeteryCode: string;
  cemetery?: import('../data/cemeteries').Cemetery;
}

export class SearchService {
  // Search deceased by name and surname
  searchByName(name: string): SearchResult[] {
    throw new Error('Not implemented');
  }
}
