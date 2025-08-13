import { reindexListings } from '../lib/indexer';

// Execute when run directly via `npm run index:typesense`
(async () => {
  try {
    await reindexListings();
    // eslint-disable-next-line no-console
    console.log('Typesense indexing complete');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Typesense indexing failed:', err);
    process.exitCode = 1;
  }
})();
