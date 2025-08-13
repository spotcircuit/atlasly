import Typesense from 'typesense';

export function getTypesenseClient() {
  const apiKey = process.env.TYPESENSE_API_KEY;
  const hostEnv = process.env.TYPESENSE_HOST || '';
  const protocol = process.env.TYPESENSE_PROTOCOL || 'https';
  const portEnv = process.env.TYPESENSE_PORT;

  if (!apiKey || !hostEnv) {
    throw new Error('TYPESENSE_API_KEY and TYPESENSE_HOST must be set');
  }

  const hostNoScheme = hostEnv.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const [hostPart, portPart] = hostNoScheme.split(':');
  const port = portEnv ? Number(portEnv) : portPart ? Number(portPart) : protocol === 'https' ? 443 : 8108;

  return new Typesense.Client({
    nodes: [{ host: hostPart, port, protocol }],
    apiKey,
    connectionTimeoutSeconds: 8,
  });
}
