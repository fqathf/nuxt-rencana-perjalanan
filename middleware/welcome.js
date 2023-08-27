import { get } from '@vercel/edge-config';

export default async function ({ res }) {
  if (process.client) {
    // This middleware will only run on the client side
    return;
  }

  const greeting = await get('greeting');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ greeting }));
}
