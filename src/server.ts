import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// serve built static files
const dist = path.join(__dirname, '../dist/browser'); // adjust if different
app.use(express.static(dist));

// --- SPA fallback (Express v5): use ONE of these ---
// app.get('(.*)', (_req, res) => res.sendFile(path.join(dist, 'index.html'))); // ✅
// app.get('/*',  (_req, res) => res.sendFile(path.join(dist, 'index.html')));  // ✅

const port =  4200;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
