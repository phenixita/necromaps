import { SearchService, SearchResult } from './SearchService.js';
import { deceased } from '../data/deceased.js';
import { cemeteries } from '../data/cemeteries.js';

export class InMemorySearchService extends SearchService {
  searchByName(name: string): SearchResult[] {
    if (!name) return [];
    const lower = name.toLowerCase();
    return deceased
      .filter(d => d.name.toLowerCase().includes(lower))
      .map(d => ({
        ...d,
        cemetery: cemeteries.find(c => c.id === d.cemeteryId),
      }));
  }
}
