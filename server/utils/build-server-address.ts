type ServerAddressComponents = {
  protocol: string;
  host: string;
  port: number;
};

export function buildServerAddress({
  protocol,
  host,
  port,
}: ServerAddressComponents): string {
  return `${protocol}://${host}:${port}`;
}
