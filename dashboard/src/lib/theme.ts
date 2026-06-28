import { theme, type ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
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
    colorTextTertiary: '#455A64',
    colorBorder: '#16213E',
    colorBorderSecondary: '#243447',
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 4,
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 40,
    fontSizeHeading2: 28,
    fontSizeHeading3: 22,
    fontSizeLG: 16,
    fontSizeSM: 12,
    lineHeight: 1.5,
    lineHeightHeading1: 1.1,
    lineHeightHeading2: 1.2,
    lineHeightHeading3: 1.2,
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    boxShadowSecondary: '0 8px 32px rgba(0,0,0,0.5)',
  },
  components: {
    Card: {
      colorBgContainer: '#1A1A2E',
      colorBorderSecondary: '#16213E',
    },
    Button: {
      primaryShadow: '0 2px 8px rgba(0,229,255,0.2)',
    },
    Layout: {
      colorBgBody: '#0F0F23',
      colorBgHeader: 'rgba(15,15,35,0.95)',
    },
    Menu: {
      darkItemBg: '#0F0F23',
      darkSubMenuItemBg: '#1A1A2E',
    },
  },
};
