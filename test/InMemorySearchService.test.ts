import assert from 'node:assert/strict';
import { test } from 'node:test';
import { InMemorySearchService } from '../src/services/InMemorySearchService.js';

const service = new InMemorySearchService();

test('returns results for existing name', () => {
  const results = service.searchByName('Verdi');
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].name, 'Giuseppe Verdi');
});

test('returns empty array for unknown name', () => {
  const results = service.searchByName('Unknown');
  assert.deepEqual(results, []);
});
