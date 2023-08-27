/*import { get } from '@vercel/edge-config';

export default async function (req, res) {
  if (req.method === 'GET' && req.url === '/welcome') {
    const greeting = await get('greeting');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ greeting }));
  }
}*/
