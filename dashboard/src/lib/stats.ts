// Mock system stats — in production, these would come from Docker API + system metrics
export interface SystemStats {
  cpu: number;
  gpu: number;
  vram: { used: number; total: number };
  ram: { used: number; total: number };
  disk: { used: number; total: number };
  network: { up: number; down: number };
  gpuTemp: number;
  activeStreams: number;
  transcoding: boolean;
}

export function getMockStats(): SystemStats {
  return {
    cpu: 15 + Math.random() * 25,
    gpu: 5 + Math.random() * 30,
    vram: { used: 1.2 + Math.random() * 2, total: 32 },
    ram: { used: 14 + Math.random() * 8, total: 64 },
    disk: { used: 2100 + Math.random() * 200, total: 4000 },
    network: { up: Math.random() * 50, down: Math.random() * 200 },
    gpuTemp: 38 + Math.random() * 12,
    activeStreams: Math.floor(Math.random() * 3),
    transcoding: Math.random() > 0.6,
  };
}

export interface ContainerStatus {
  name: string;
  status: 'running' | 'stopped' | 'restarting';
  cpu: number;
  memory: number;
  uptime: string;
}

export function getMockContainers(): ContainerStatus[] {
  const containers = [
    { name: 'jellyfin', uptime: '5d 14h 23m' },
    { name: 'sonarr', uptime: '12d 8h 45m' },
    { name: 'radarr', uptime: '12d 8h 44m' },
    { name: 'tdarr', uptime: '8d 2h 11m' },
    { name: 'seerr', uptime: '3d 19h 30m' },
    { name: 'prowlarr', uptime: '12d 8h 46m' },
    { name: 'ollama', uptime: '1d 4h 12m' },
    { name: 'n8n', uptime: '6d 11h 8m' },
    { name: 'traefik', uptime: '12d 8h 47m' },
    { name: 'uptime-kuma', uptime: '10d 3h 55m' },
    { name: 'homeassistant', uptime: '14d 22h 3m' },
    { name: 'redis', uptime: '12d 8h 48m' },
    { name: 'tailscale', uptime: '14d 22h 1m' },
  ];

  return containers.map((c) => ({
    ...c,
    status: Math.random() > 0.05 ? 'running' : 'restarting',
    cpu: Math.random() * 15,
    memory: 200 + Math.random() * 1800,
  }));
}
