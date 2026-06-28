'use client';

import { ConfigProvider, App as AntdApp } from 'antd';
import { antdTheme } from '@/lib/theme';
import { StyleProvider } from '@ant-design/cssinjs';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={antdTheme}>
        <AntdApp>
          {children}
        </AntdApp>
      </ConfigProvider>
    </StyleProvider>
  );
}
