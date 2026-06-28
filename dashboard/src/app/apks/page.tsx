'use client';

import { Card, Button, Tag, Space, Typography, Row, Col } from 'antd';
import { Download, Calendar, Package, Info } from 'lucide-react';
import { apkReleases, type ApkRelease } from '@/lib/apks';

const { Title, Text } = Typography;

function ApkCard({ apk }: { apk: ApkRelease }) {
  const isExternal = apk.downloadUrl.startsWith('http');
  
  return (
    <Card
      hoverable
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        borderRadius: 12,
        height: '100%',
      }}
      styles={{ body: { padding: '20px' } }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            background: 'rgba(0, 229, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
          }}
        >
          {apk.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Text strong style={{ color: 'var(--color-text)', fontSize: 16, display: 'block' }}>
            {apk.name}
          </Text>
          <Text type="secondary" style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
            {apk.packageName}
          </Text>
        </div>
      </div>

      <Text style={{ color: 'var(--color-text-muted)', fontSize: 13, display: 'block', marginTop: 12 }}>
        {apk.description}
      </Text>

      <div style={{ marginTop: 16 }}>
        <Space wrap size={[8, 8]}>
          <Tag color="cyan" style={{ borderRadius: 4, fontSize: 11 }}>
            <Package size={10} style={{ marginRight: 4 }} />
            {apk.size}
          </Tag>
          <Tag color="purple" style={{ borderRadius: 4, fontSize: 11 }}>
            v{apk.version}
          </Tag>
          <Tag style={{ borderRadius: 4, fontSize: 11, background: 'var(--color-surface-highlight)', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
            <Calendar size={10} style={{ marginRight: 4 }} />
            {apk.date}
          </Tag>
        </Space>
      </div>

      <Button
        type="primary"
        icon={<Download size={16} />}
        block
        style={{ marginTop: 16, background: 'var(--cta-gradient)', border: 'none', borderRadius: 8 }}
        href={apk.downloadUrl}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        Download APK
      </Button>
      
      <Text type="secondary" style={{ fontSize: 10, display: 'block', marginTop: 6, color: 'var(--color-text-muted)' }}>
        Source: {apk.source}
      </Text>
    </Card>
  );
}

export default function ApksPage() {
  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      {/* Header */}
      <div>
        <Title level={3} style={{ margin: 0, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
          📱 APK Downloads
        </Title>
        <Text type="secondary" style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>
          Latest app builds for Android. Tap download to install.
        </Text>
      </div>

      {/* APK Grid */}
      <Row gutter={[16, 16]}>
        {apkReleases.map((apk) => (
          <Col xs={24} sm={12} md={12} lg={8} key={apk.id}>
            <ApkCard apk={apk} />
          </Col>
        ))}
      </Row>

      {/* Info box */}
      <Card
        style={{
          background: 'rgba(64, 196, 255, 0.05)',
          borderColor: 'rgba(64, 196, 255, 0.2)',
          borderRadius: 12,
        }}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <Info size={20} style={{ color: 'var(--color-info)', flexShrink: 0, marginTop: 2 }} />
          <div>
            <Text style={{ color: 'var(--color-text)', fontSize: 13 }}>
              <strong>Install instructions:</strong> Download the APK → tap the file → allow "Install from unknown sources" → install.
            </Text>
            <br />
            <Text style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>
              APKs are hosted on your Tailscale LAN at <code style={{ background: 'var(--color-surface)', padding: '2px 6px', borderRadius: 4 }}>http://pb-legion:8082/</code>. 
              Not on WiFi? I can send them via Telegram instead.
            </Text>
          </div>
        </div>
      </Card>
    </Space>
  );
}
