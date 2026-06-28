# Ultimate Home Media Centre — Brand Guidelines
### Version 1.0 — July 2026

---

## 1. BRAND IDENTITY

### 1.1 Brand Name
**Ultimate Home Media Centre**

### 1.2 Tagline
*"Your Content. Your Network. Zero Monthly Fees."*

### 1.3 Mission
A self-hosted, AI-assisted, GPU-powered entertainment hub — aggregating every movie, show, song, live stream and recording into one beautiful, family-friendly interface.

### 1.4 Brand Promise
- **Self-Hosted** — your media, your server, your rules
- **Zero Fees** — no subscriptions, no paywalls, no tracking
- **Family-Friendly** — one-tap access for every member of the household
- **AI-Powered** — smart recommendations, voice search, auto-organisation
- **GPU-Accelerated** — real-time transcoding on RTX 5090 NVENC/AV1/HEVC
- **Infinite Library** — from terabyte-scale storage to live TV and streaming

### 1.5 Brand Personality

| Trait | Expression |
|-------|------------|
| **Powerful** | Enterprise hardware, prosumer features, no compromises |
| **Simple** | One-tap access, intuitive UI, zero learning curve |
| **Private** | Everything stays on your network, no cloud dependency |
| **Infinite** | AI discovery, unlimited library, always-on |
| **Premium** | Polished, dark UI, subtle animations, attention to detail |

### 1.6 Tone of Voice
- **Confidential** — "Your media stays yours"
- **Confident** — "Every format. Every device. Every time."
- **Direct** — "Stream. Organise. Enjoy."
- **Technical but accessible** — "RTX 5090 NVENC transcoding" for power users, "It just works" for everyone else

---

## 2. LOGO SYSTEM

### 2.1 Primary Logo (Icon + Wordmark)
```
[ICON]  ULTIMATE HOME
        MEDIA CENTRE
        ── Your Content • Your Network • Zero Fees ──
```

### 2.2 Icon Mark (standalone)
The hub-and-play icon works as:
- Favicon
- App icon (mobile/desktop)
- Service tile avatar
- Loading spinner

### 2.3 Logo Variants

| Variant | File | Usage |
|---------|------|-------|
| Primary (full color) | `logo-primary.svg` | Hero sections, headers |
| Horizontal lockup | `logo-horizontal.svg` | Website headers, docs |
| Icon only | `logo-icon.svg` | Favicons, tiles, small spaces |
| White (monochrome) | `logo-white.svg` | Dark photo backgrounds |
| Black (monochrome) | `logo-black.svg` | Light backgrounds, print |
| Favicon 32px | `favicon-32.svg` | Browser tab |
| Apple Touch 180px | `apple-touch-icon.svg` | iOS home screen |

### 2.4 Logo Usage Rules
- **Clear space:** Minimum 16px padding on all sides (or 0.5× icon height)
- **Minimum size:** Icon alone: 24px. Horizontal lockup: 200px wide
- **Do not:** stretch, rotate, recolour (outside approved variants), add drop shadows, place on cluttered backgrounds
- **Animation:** The hub ring can pulse/rotate subtly (3s loop) in digital contexts to convey "always on"

---

## 3. COLOUR PALETTE

### 3.1 Primary Colours

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Deep Navy** | `#0F0F23` | 15, 15, 35 | Page background |
| **Dark Indigo** | `#1A1A2E` | 26, 26, 46 | Card/surface backgrounds |
| **Surface Highlight** | `#16213E` | 22, 33, 62 | Elevated surfaces, borders |
| **Cyber Cyan** | `#00E5FF` | 0, 229, 255 | Primary accent, links, active states |
| **Electric Violet** | `#7C4DFF` | 124, 77, 255 | Secondary accent, gradients |

### 3.2 Functional Colours

| Name | Hex | Usage |
|------|-----|-------|
| **Streaming Green** | `#00E676` | Online, healthy, playing |
| **Warm Amber** | `#FFAB00` | Warning, transcoding, queued |
| **Alert Red** | `#FF5252` | Error, down, stopped |
| **Info Blue** | `#40C4FF` | Tips, new content, info |

### 3.3 Text Colours

| Name | Hex | Usage |
|------|-----|-------|
| **Soft White** | `#F0F0F5` | Primary text, headings |
| **Muted Grey** | `#78909C` | Secondary text, labels, placeholders |
| **Disabled** | `#455A64` | Disabled states |

### 3.4 Gradients

| Name | From → To | CSS | Usage |
|------|-----------|-----|-------|
| **Hero** | `#0F0F23` → `#1A0033` | `linear-gradient(135deg, #0F0F23 0%, #1A0033 100%)` | Landing backgrounds |
| **CTA** | `#00E5FF` → `#651FFF` | `linear-gradient(135deg, #00E5FF 0%, #651FFF 100%)` | Primary buttons, highlights |
| **Live** | `#00E676` → `#00BFA5` | `linear-gradient(90deg, #00E676 0%, #00BFA5 100%)` | Now playing indicator |
| **Card Hover** | `#1A1A2E` → `#16213E` | `linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)` | Interactive hover states |

### 3.5 Accessibility
- All text meets WCAG AA contrast ratio (4.5:1 minimum) on dark backgrounds
- Cyber Cyan (#00E5FF) on Deep Navy (#0F0F23) = 8.1:1 ✓
- Streaming Green (#00E676) on Deep Navy = 9.2:1 ✓
- Alert Red (#FF5252) on Deep Navy = 5.8:1 ✓
- Never use colour alone to convey status — always pair with icon or text

---

## 4. TYPOGRAPHY

### 4.1 Typefaces

| Role | Font | Weights | Fallback |
|------|------|---------|----------|
| **Display** | Space Grotesk | 500 Medium, 700 Bold | `Inter, system-ui, sans-serif` |
| **Body** | Inter | 400 Regular, 500 Medium, 600 SemiBold | `system-ui, -apple-system, sans-serif` |
| **Mono** | JetBrains Mono | 500 Medium, 700 Bold | `"SF Mono", "Fira Code", monospace` |

### 4.2 Type Scale

| Level | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
| H1 | Space Grotesk | 40px / 2.5rem | 700 | 1.1 | Page hero title |
| H2 | Space Grotesk | 28px / 1.75rem | 700 | 1.2 | Section headers |
| H3 | Space Grotesk | 22px / 1.375rem | 600 | 1.2 | Card titles |
| H4 | Inter | 18px / 1.125rem | 600 | 1.3 | Sub-sections |
| Body | Inter | 16px / 1rem | 400 | 1.5 | Body copy |
| Small | Inter | 14px / 0.875rem | 400 | 1.4 | Labels, meta |
| Caption | Inter | 12px / 0.75rem | 500 | 1.4 | Timestamps, tags |
| Mono | JetBrains Mono | 14px | 500 | 1.4 | Ports, IPs, stats |

### 4.3 Typography Rules
- Display headings: UPPERCASE or Title Case, tracked slightly (+0.02em)
- Tabular numbers (`font-variant-numeric: tabular-nums`) for all stats, ports, timers
- Minimum body text: 14px on mobile
- Monospace for all technical data (container names, ports, resource usage)

---

## 5. UI/UX DESIGN SYSTEM

### 5.1 Design Principles
1. **Dashboard-first** — everything visible at a glance, no drilling required
2. **Status-aware** — colour + icon + text for every state (green/amber/red)
3. **One-tap access** — every service opens in one click
4. **Dark by default** — media consumption happens in dark rooms
5. **Responsive** — works on phone (control), tablet (browse), desktop (manage), TV (watch)

### 5.2 Layout Grid
- **Mobile:** 4 cols, 16px gutter, 16px margin
- **Tablet:** 8 cols, 20px gutter, 24px margin
- **Desktop:** 12 cols, 24px gutter, 32px margin
- **Max width:** 1440px centered
- **Breakpoints:** 375 / 768 / 1024 / 1280 / 1440 / 1920

### 5.3 Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Tight inline |
| `space-sm` | 8px | Within components |
| `space-md` | 16px | Between elements |
| `space-lg` | 24px | Between sections |
| `space-xl` | 32px | Section padding |
| `space-2xl` | 48px | Major breaks |

### 5.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Tags, badges |
| `radius-md` | 8px | Cards, buttons |
| `radius-lg` | 12px | Modals, large cards |
| `radius-xl` | 16px | Hero sections |
| `radius-full` | 9999px | Avatars, pills |

### 5.5 Shadows (dark mode)

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.3)` | Subtle elevation |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` | Cards, dropdowns |
| `shadow-lg` | `0 8px 32px rgba(0,0,0,0.5)` | Modals, popovers |
| `shadow-glow-cyan` | `0 0 20px rgba(0,229,255,0.15)` | Active/focused elements |
| `shadow-glow-violet` | `0 0 20px rgba(124,77,255,0.15)` | Secondary glow |

### 5.6 Component Library

| Component | Variant | Notes |
|-----------|---------|-------|
| Button | `type="primary"` | CTA gradient bg, white text |
| Button | `type="default"` | Ghost/outline for secondary |
| Button | `type="link"` | Inline text actions |
| Card | Custom dark | Dark Indigo bg, 8px radius, subtle border |
| Badge | Status dot | Green/amber/red with label |
| Badge | Service tag | Cyan outline, service name |
| Progress | GPU/RAM/Disk | Gradient fill, animated |
| Stat | Metric | Large number + label + sparkline |
| Tile | Service | Icon + name + status + port + launch |
| Skeleton | Shimmer | Loading states |
| Toast | Notification | Top-right, auto-dismiss |

---

## 6. SERVICE TILE SYSTEM

Each Docker container gets a service tile with:

```
┌──────────────────────┐
│ [ICON]  Service Name │  ← Icon + name
│ ● Running  |  :8096  │  ← Status dot + port
│ CPU 12%  RAM 1.2GB   │  ← Resource usage
│ [▶ Launch] [⟳] [⏹]  │  ← Quick actions
└──────────────────────┘
```

### Service Registry

| Service | Icon | Port | Color | Container |
|---------|------|------|-------|-----------|
| Jellyfin | 🎬 | 8096 | `#00E676` | jellyfin |
| Sonarr | 📺 | 8990 | `#FFAB00` | sonarr |
| Radarr | 🎥 | 7878 | `#40C4FF` | radarr |
| Tdarr | ⚡ | 8265 | `#7C4DFF` | tdarr |
| Seerr | 🔍 | 5055 | `#00E5FF` | seerr |
| Prowlarr | 🧲 | 9696 | `#FF6D00` | prowlarr |
| Traefik | 🌐 | 8080 | `#00BFA5` | traefik |
| Ollama | 🤖 | 11434 | `#E8A020` | ollama |
| n8n | ⚙️ | 5678 | `#FF5252` | n8n |
| Uptime Kuma | 💚 | 3001 | `#00E676` | uptime-kuma |
| Home Assistant | 🏠 | 8123 | `#1677FF` | homeassistant |
| Tailscale | 🔒 | — | `#7C4DFF` | tailscale |
| Redis | 📦 | 6379 | `#FF5252` | redis |

---

## 7. DASHBOARD LAYOUT

### 7.1 Header (sticky, 64px height)
```
[LOGO]  ULTIMATE HOME MEDIA CENTRE     🔍 Search    🔔 Alerts    ⚙️ Settings
```

### 7.2 Main Dashboard Sections (top to bottom)

1. **Now Playing Bar** — active streams, transcoding status, GPU utilization
2. **System Health** — CPU/GPU/RAM/Disk gauges with real-time sparklines
3. **Quick Launch** — 3×4 grid of service tiles (icon + name + status + launch button)
4. **Recently Added** — horizontal scroll of new media posters
5. **AI Recommendations** — Ollama-powered "Because you watched…" section
6. **System Logs** — recent events, errors, container restarts

### 7.3 Service Detail Panel (slide-out drawer)
Clicking a service tile opens a side panel with:
- Full resource graph (last 24h)
- Container logs (last 100 lines)
- Restart / Stop / Shell buttons
- Configuration link
- Port bindings and network info

---

## 8. ANIMATION & MOTION

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Status dot | Pulse | 2s infinite | ease-in-out |
| GPU gauge | Smooth fill | 500ms | ease-out |
| Card hover | Lift + glow | 200ms | ease-out |
| Page load | Fade up | 300ms | ease-out |
| Now Playing | Slide in | 400ms | spring |
| Logo hub ring | Slow rotate | 12s infinite | linear |
| Toast | Slide in/out | 300ms | ease-in-out |

- Respect `prefers-reduced-motion: reduce` — disable all non-essential animations
- All transitions: 200-400ms, never jarring

---

## 9. TECHNICAL SPECIFICATIONS

### 9.1 Frontend Stack
| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15 (App Router) | SSR, fast, modern |
| UI Library | Ant Design 5.x | Mature, dashboard-ready, custom theme |
| Styling | Tailwind CSS + CSS Custom Properties | Rapid, themeable |
| State | Zustand | Lightweight |
| Real-time | SWR + WebSocket | Live stats, now playing |
| Icons | Lucide React | Clean, consistent |
| Fonts | Google Fonts (Space Grotesk, Inter, JetBrains Mono) | Free, fast CDN |

### 9.2 Design Tokens (CSS Custom Properties)
```css
:root {
  --color-bg: #0F0F23;
  --color-surface: #1A1A2E;
  --color-surface-highlight: #16213E;
  --color-primary: #00E5FF;
  --color-secondary: #7C4DFF;
  --color-success: #00E676;
  --color-warning: #FFAB00;
  --color-error: #FF5252;
  --color-info: #40C4FF;
  --color-text: #F0F0F5;
  --color-text-muted: #78909C;
  --font-display: "Space Grotesk", Inter, system-ui, sans-serif;
  --font-body: Inter, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", monospace;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

### 9.3 Ant Design Theme Config
```ts
const theme = {
  token: {
    colorPrimary: '#00E5FF',
    colorInfo: '#40C4FF',
    colorSuccess: '#00E676',
    colorWarning: '#FFAB00',
    colorError: '#FF5252',
    colorBgContainer: '#1A1A2E',
    colorBgElevated: '#16213E',
    colorBgLayout: '#0F0F23',
    colorText: '#F0F0F5',
    colorTextSecondary: '#78909C',
    colorBorder: '#16213E',
    borderRadius: 8,
    fontFamily: 'Inter, system-ui, sans-serif',
  },
};
```

---

## 10. DELIVERABLES SUMMARY

| Asset | File | Status |
|-------|------|--------|
| Primary logo (full) | `logos/logo-primary.svg` | ✅ |
| Horizontal lockup | `logos/logo-horizontal.svg` | ✅ |
| Icon mark | `logos/logo-icon.svg` | ✅ |
| White variant | `logos/logo-white.svg` | ✅ |
| Black variant | `logos/logo-black.svg` | ✅ |
| Favicon 32px | `logos/favicon-32.svg` | ✅ |
| Apple touch icon | `logos/apple-touch-icon.svg` | ✅ |
| Brand guidelines | `BRAND-GUIDELINES.md` | ✅ |
| Design tokens | `tokens.json` | 🔲 |
| Ant Design theme | `theme.config.ts` | 🔲 |
| Dashboard app | Next.js project | 🔲 |
| Figma file | — | 🔲 |

---

*End of Brand Guidelines v1.0*
