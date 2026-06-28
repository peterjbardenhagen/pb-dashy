// APK releases metadata
// All APKs hosted on Tailscale LAN at pb-legion:8082/
// (GitHub rejects files >100MB even with LFS)
export interface ApkRelease {
  id: string;
  name: string;
  version: string;
  size: string;
  date: string;
  description: string;
  packageName: string;
  icon: string;
  downloadUrl: string;
  source: string;
}

export const apkReleases: ApkRelease[] = [
  {
    id: 'phoneclaw',
    name: 'PhoneClaw',
    version: '1.0.0',
    size: '8.2 MB',
    date: '2026-06-10',
    description: 'OpenClaw mobile companion — gateway control, bot management, relay pairing',
    packageName: 'ai.openclaw.phone',
    icon: '📱',
    downloadUrl: 'http://pb-legion:8082/PhoneClaw.apk',
    source: 'Tailscale LAN',
  },
  {
    id: 'hermes-relay',
    name: 'Hermes Relay',
    version: '1.0.0',
    size: '124 MB',
    date: '2026-06-10',
    description: 'Hermes AI agent relay — connects mobile to Hermes gateway for AI chat, tool execution',
    packageName: 'ai.hermes.relay',
    icon: '🔗',
    downloadUrl: 'http://pb-legion:8082/Hermes-Relay.apk',
    source: 'Tailscale LAN',
  },
  {
    id: 'home-intrusion',
    name: 'Home Intrusion Detection',
    version: '5.2.0',
    size: '18 MB',
    date: '2026-06-27',
    description: 'Security camera AI detection — intrusion alerts, motion zones, object recognition',
    packageName: 'au.com.digitalresponse.homeintrusion',
    icon: '🏠',
    downloadUrl: 'http://pb-legion:8082/home-intrusion-detection-v5.2.0-debug.apk',
    source: 'Tailscale LAN',
  },
  {
    id: 'ibop',
    name: 'IBOP',
    version: '1.0.0',
    size: '78 MB',
    date: '2026-06-25',
    description: 'IoT device management — sensor monitoring, automation rules, alert dashboard',
    packageName: 'au.com.digitalresponse.ibop',
    icon: '📡',
    downloadUrl: 'http://pb-legion:8082/ibop.apk',
    source: 'Tailscale LAN',
  },
];
