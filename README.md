# 🏠 pb-dashy — Ultimate Home Media Centre

Self-hosted entertainment dashboard. Two components:

| Component | What | Where |
|-----------|------|-------|
| **Next.js Dashboard** | Custom React UI with system health, service tiles, real-time stats | `dashboard/` → deploys to [pb-dashy.vercel.app](https://pb-dashy.vercel.app) |
| **Docker Homepage** | gethomepage/homepage config (YAML-based) | `homepage/config/` → bind-mounted into Docker container at `:3002` |

---

## 🚀 CI/CD Pipeline

```
Push to develop ──→ Build + Lint + Type Check ──→ Vercel Preview Deploy
                                                            └── PR comment with preview URL

Push to main ────→ Build + Lint + Type Check ──→ Vercel Production Deploy
                  └── Homepage YAML validation
```

### Jobs:
1. **Build & Test** — `npm ci` → lint → type check → `next build` (runs on every push)
2. **Deploy Preview** — Vercel preview deploy (PRs + develop branch)
3. **Deploy Production** — Vercel production deploy (main branch only)
4. **Validate Homepage Config** — YAML syntax check + link validation

### Required Secrets:
| Secret | Where to get it |
|--------|-----------------|
| `VERCEL_TOKEN` | Vercel → Account → Tokens |
| `VERCEL_ORG_ID` | Vercel → Project → Settings → General |
| `VERCEL_PROJECT_ID` | Vercel → Project → Settings → General |

---

## 📁 Repository Structure

```
pb-dashy/
├── .github/workflows/ci-cd.yml    # GitHub Actions CI/CD
├── dashboard/                      # Next.js 16 + Ant Design + Tailwind
│   ├── src/
│   │   ├── app/                   # Pages, layout, globals
│   │   ├── components/            # ThemeProvider, etc.
│   │   └── lib/                   # tokens, services, stats, theme
│   └── package.json
├── homepage/                       # Docker Homepage config
│   └── config/
│       ├── settings.yaml
│       ├── services.yaml
│       ├── widgets.yaml
│       ├── bookmarks.yaml
│       └── docker.yaml
└── brand/                          # Logos, design tokens
    ├── logos/*.svg
    ├── tokens.json
    └── BRAND-GUIDELINES.md
```

---

## 🛠️ Local Development

### Next.js Dashboard (port 3005):
```bash
cd dashboard
npm install
npm run dev     # → http://localhost:3005
```

### Docker Homepage (port 3002):
```bash
# Config is bind-mounted — edit YAMLs then restart container
docker restart homepage
```

---

## 🔧 Homepage Config Sync

The YAML configs in `homepage/config/` are the source of truth. They're bind-mounted into Docker at:

```
./homepage/config/  →  /app/config/ (inside homepage container)
```

After editing configs, restart:
```bash
docker restart homepage
```

---

## 🎨 Brand

See [brand/BRAND-GUIDELINES.md](brand/BRAND-GUIDELINES.md) for full identity system.

---

## 📊 Architecture

```
                    ┌─────────────────────────────┐
                    │     pb-dashy.vercel.app     │
                    │   Next.js Dashboard (3005)  │
                    └──────────────┬──────────────┘
                                   │ GitHub Actions CI/CD
                    ┌──────────────▼──────────────┐
                    │     peterjbardenhagen/       │
                    │        pb-dashy repo         │
                    └──────────────┬──────────────┘
                                   │ bind-mount
          ┌────────────────────────┼────────────────────────┐
          │                        │                        │
┌─────────▼─────────┐  ┌──────────▼──────────┐  ┌──────────▼──────────┐
│ Homepage (3002)   │  │  Next.js Dev (3005) │  │   Brand Assets       │
│ gethomepage/       │  │  Ant Design +       │  │   Logos / Tokens /   │
│ homepage:latest    │  │  Tailwind + Lucide  │  │   Guidelines         │
└───────────────────┘  └─────────────────────┘  └─────────────────────┘
```
