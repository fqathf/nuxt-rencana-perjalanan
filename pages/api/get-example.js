/*import { getAll } from '@vercel/edge-config';
 
export const config = {
  runtime: 'edge',
};
 
export default async function handler() {
  const configItems = await getAll();
  return Response.json({
    label: `These are all the values in my Edge Config.`,
    value: configItems,
  });
}*/