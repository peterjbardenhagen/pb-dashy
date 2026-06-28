// Design tokens for the Ultimate Home Media Centre
export const tokens = {
  color: {
    bg: '#0F0F23',
    surface: '#1A1A2E',
    surfaceHighlight: '#16213E',
    primary: '#00E5FF',
    secondary: '#7C4DFF',
    success: '#00E676',
    warning: '#FFAB00',
    error: '#FF5252',
    info: '#40C4FF',
    text: '#F0F0F5',
    textMuted: '#78909C',
    textDisabled: '#455A64',
    border: '#16213E',
  },
  font: {
    display: '"Space Grotesk", Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", "Fira Code", monospace',
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  gradient: {
    hero: 'linear-gradient(135deg, #0F0F23 0%, #1A0033 100%)',
    cta: 'linear-gradient(135deg, #00E5FF 0%, #651FFF 100%)',
    live: 'linear-gradient(90deg, #00E676 0%, #00BFA5 100%)',
  },
} as const;

export type Tokens = typeof tokens;
