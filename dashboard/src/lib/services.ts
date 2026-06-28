// Service configuration — all Docker containers in the media stack
export interface Service {
  name: string;
  icon: string;
  port: number;
  color: string;
  container: string;
  category: 'media' | 'management' | 'ai' | 'infrastructure' | 'smart-home' | 'networking';
  url: string;
  description: string;
}

export const services: Service[] = [
  // Core Media
  {
    name: 'Jellyfin',
    icon: 'Play',
    port: 8096,
    color: '#00E676',
    container: 'jellyfin',
    category: 'media',
    url: 'http://localhost:8096',
    description: 'Unified media front-end — movies, TV, music, live TV',
  },
  {
    name: 'Tdarr',
    icon: 'Zap',
    port: 8265,
    color: '#7C4DFF',
    container: 'tdarr',
    category: 'media',
    url: 'http://localhost:8265',
    description: 'GPU-accelerated media transcoding (RTX 5090 NVENC)',
  },
  // Management
  {
    name: 'Sonarr',
    icon: 'Tv',
    port: 8990,
    color: '#FFAB00',
    container: 'sonarr',
    category: 'management',
    url: 'http://localhost:8990',
    description: 'TV show management & automatic downloads',
  },
  {
    name: 'Radarr',
    icon: 'Film',
    port: 7878,
    color: '#40C4FF',
    container: 'radarr',
    category: 'management',
    url: 'http://localhost:7878',
    description: 'Movie management & automatic downloads',
  },
  {
    name: 'Seerr',
    icon: 'Search',
    port: 5055,
    color: '#00E5FF',
    container: 'seerr',
    category: 'management',
    url: 'http://localhost:5055',
    description: 'Media request management for the family',
  },
  {
    name: 'Prowlarr',
    icon: 'Magnet',
    port: 9696,
    color: '#FF6D00',
    container: 'prowlarr',
    category: 'management',
    url: 'http://localhost:9696',
    description: 'Indexer manager for Usenet & torrent trackers',
  },
  // AI &amp; Automation
  {
    name: 'Ollama',
    icon: 'Bot',
    port: 11434,
    color: '#E8A020',
    container: 'ollama',
    category: 'ai',
    url: 'http://localhost:11434',
    description: 'Local LLM inference (Qwen3:32b on GPU)',
  },
  {
    name: 'n8n',
    icon: 'Workflow',
    port: 5678,
    color: '#FF5252',
    container: 'n8n',
    category: 'ai',
    url: 'http://localhost:5678',
    description: 'Workflow automation — webhook pipelines, notifications',
  },
  // Infrastructure
  {
    name: 'Traefik',
    icon: 'Globe',
    port: 8080,
    color: '#00BFA5',
    container: 'traefik',
    category: 'infrastructure',
    url: 'http://localhost:8080',
    description: 'Reverse proxy &amp; SSL termination',
  },
  {
    name: 'Uptime Kuma',
    icon: 'Heart',
    port: 3001,
    color: '#00E676',
    container: 'uptime-kuma',
    category: 'infrastructure',
    url: 'http://localhost:3001',
    description: 'Service uptime monitoring &amp; alerts',
  },
  {
    name: 'Redis',
    icon: 'Database',
    port: 6379,
    color: '#FF5252',
    container: 'redis',
    category: 'infrastructure',
    url: 'redis://localhost:6379',
    description: 'In-memory cache &amp; session store',
  },
  // Smart Home
  {
    name: 'Home Assistant',
    icon: 'Home',
    port: 8123,
    color: '#40C4FF',
    container: 'homeassistant',
    category: 'smart-home',
    url: 'http://localhost:8123',
    description: 'Home automation hub — lights, sensors, scenes',
  },
  // Networking
  {
    name: 'Tailscale',
    icon: 'Shield',
    port: 0,
    color: '#7C4DFF',
    container: 'tailscale',
    category: 'networking',
    url: 'https://login.tailscale.com/admin/machines',
    description: 'Secure mesh VPN — access from anywhere',
  },
];
