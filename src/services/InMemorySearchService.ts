import { SearchService, SearchResult } from './SearchService';
import { deceased } from '../data/deceased';
import { cemeteries } from '../data/cemeteries';

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
