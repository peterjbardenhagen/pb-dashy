'use client';

import React, { useState, useEffect } from 'react';
import {
  Layout,
  Card,
  Progress,
  Badge,
  Button,
  Typography,
  Space,
  Tag,
  Tooltip,
  Statistic,
  Row,
  Col,
  theme as antdTheme,
} from 'antd';
import {
  Play,
  Tv,
  Film,
  Search,
  Zap,
  Magnet,
  Bot,
  Workflow,
  Globe,
  Heart,
  Database,
  Home as HomeIcon,
  Shield,
  ExternalLink,
  RotateCcw,
  Power,
  Cpu,
  HardDrive,
  Thermometer,
  Wifi,
  Activity,
} from 'lucide-react';
import { services, type Service } from '@/lib/services';
import { getMockStats, getMockContainers, type SystemStats, type ContainerStatus } from '@/lib/stats';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Play: <Play size={24} />,
  Tv: <Tv size={24} />,
  Film: <Film size={24} />,
  Search: <Search size={24} />,
  Zap: <Zap size={24} />,
  Magnet: <Magnet size={24} />,
  Bot: <Bot size={24} />,
  Workflow: <Workflow size={24} />,
  Globe: <Globe size={24} />,
  Heart: <Heart size={24} />,
  Database: <Database size={24} />,
  Home: <HomeIcon size={24} />,
  Shield: <Shield size={24} />,
};

function ServiceTile({ service }: { service: Service }) {
  const [status, setStatus] = useState<'running' | 'stopped' | 'restarting'>('running');

  useEffect(() => {
    // Simulate status check
    const interval = setInterval(() => {
      setStatus(Math.random() > 0.05 ? 'running' : 'restarting');
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      hoverable
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        borderRadius: 12,
      }}
      styles={{
        body: { padding: '16px' },
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              background: `${service.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: service.color,
            }}
          >
            {iconMap[service.icon] || <Globe size={24} />}
          </div>
          <div>
            <Text strong style={{ color: 'var(--color-text)', fontSize: 15, display: 'block' }}>
              {service.name}
            </Text>
            <Space size={4} style={{ marginTop: 2 }}>
              <Badge
                status={status === 'running' ? 'processing' : 'warning'}
                color={status === 'running' ? '#00E676' : '#FFAB00'}
              />
              <Text type="secondary" style={{ fontSize: 12 }}>
                {status === 'running' ? 'Running' : 'Restarting'}
              </Text>
              {service.port > 0 && (
                <Text type="secondary" style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>
                  :{service.port}
                </Text>
              )}
            </Space>
          </div>
        </div>
        <Tooltip title="Launch">
          <Button
            type="text"
            icon={<ExternalLink size={16} />}
            href={service.url}
            target="_blank"
            style={{ color: 'var(--color-primary)' }}
            onClick={(e) => {
              if (service.url.startsWith('http')) {
                e.preventDefault();
                window.open(service.url, '_blank');
              }
            }}
          />
        </Tooltip>
      </div>
      <Text
        type="secondary"
        style={{ fontSize: 12, display: 'block', marginTop: 8, color: 'var(--color-text-muted)' }}
      >
        {service.description}
      </Text>
    </Card>
  );
}

function SystemHealth({ stats }: { stats: SystemStats }) {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Cpu size={16} style={{ color: 'var(--color-primary)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>CPU</Text>
          </div>
          <Progress
            percent={Math.round(stats.cpu)}
            strokeColor={{ from: '#00E5FF', to: '#7C4DFF' }}
            trailColor="#16213E"
            showInfo={false}
            size="small"
          />
          <Text style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            {stats.cpu.toFixed(1)}%
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Zap size={16} style={{ color: 'var(--color-secondary)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>GPU</Text>
          </div>
          <Progress
            percent={Math.round(stats.gpu)}
            strokeColor={{ from: '#7C4DFF', to: '#00E5FF' }}
            trailColor="#16213E"
            showInfo={false}
            size="small"
          />
          <Text style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            {stats.gpu.toFixed(1)}%
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Thermometer size={16} style={{ color: stats.gpuTemp > 45 ? 'var(--color-warning)' : 'var(--color-success)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>Temp</Text>
          </div>
          <Text style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            {stats.gpuTemp.toFixed(0)}°C
          </Text>
          <Text type="secondary" style={{ fontSize: 11, display: 'block' }}>
            RTX 5090
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Activity size={16} style={{ color: 'var(--color-success)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>VRAM</Text>
          </div>
          <Progress
            percent={Math.round((stats.vram.used / stats.vram.total) * 100)}
            strokeColor={{ from: '#00E676', to: '#00BFA5' }}
            trailColor="#16213E"
            showInfo={false}
            size="small"
          />
          <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            {stats.vram.used.toFixed(1)} / {stats.vram.total} GB
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Database size={16} style={{ color: 'var(--color-info)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>RAM</Text>
          </div>
          <Progress
            percent={Math.round((stats.ram.used / stats.ram.total) * 100)}
            strokeColor={{ from: '#40C4FF', to: '#00E5FF' }}
            trailColor="#16213E"
            showInfo={false}
            size="small"
          />
          <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            {stats.ram.used.toFixed(1)} / {stats.ram.total} GB
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <HardDrive size={16} style={{ color: 'var(--color-warning)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>Disk</Text>
          </div>
          <Progress
            percent={Math.round((stats.disk.used / stats.disk.total) * 100)}
            strokeColor={{ from: '#FFAB00', to: '#FF6D00' }}
            trailColor="#16213E"
            showInfo={false}
            size="small"
          />
          <Text style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            {(stats.disk.used / 1000).toFixed(1)} / {(stats.disk.total / 1000).toFixed(0)} TB
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Wifi size={16} style={{ color: 'var(--color-primary)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>Net</Text>
          </div>
          <Text style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            ↓{stats.network.down.toFixed(0)} Mbps
          </Text>
          <Text type="secondary" style={{ fontSize: 11, display: 'block' }}>
            ↑{stats.network.up.toFixed(0)} Mbps
          </Text>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <Card style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }} styles={{ body: { padding: '12px' } }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Play size={16} style={{ color: 'var(--color-success)' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>Streams</Text>
          </div>
          <Text style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-text)' }}>
            {stats.activeStreams}
          </Text>
          <Text type="secondary" style={{ fontSize: 11, display: 'block' }}>
            {stats.transcoding ? '⚡ Transcoding' : 'Idle'}
          </Text>
        </Card>
      </Col>
    </Row>
  );
}

export default function Home() {
  const [stats, setStats] = useState<SystemStats>(getMockStats());
  const [containers, setContainers] = useState<ContainerStatus[]>(getMockContainers());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(getMockStats());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { key: 'media', label: 'Media', icon: <Play size={14} /> },
    { key: 'management', label: 'Management', icon: <Search size={14} /> },
    { key: 'ai', label: 'AI & Automation', icon: <Bot size={14} /> },
    { key: 'infrastructure', label: 'Infrastructure', icon: <Globe size={14} /> },
    { key: 'smart-home', label: 'Smart Home', icon: <HomeIcon size={14} /> },
    { key: 'networking', label: 'Networking', icon: <Shield size={14} /> },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Header */}
      <Header
        style={{
          background: 'rgba(15, 15, 35, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Logo icon */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--cta-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Play size={18} color="#FFF" fill="#FFF" />
          </div>
          <div>
            <Title level={4} style={{ margin: 0, color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: 0.5 }}>
              ULTIMATE HOME MEDIA CENTRE
            </Title>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Tag color="success" style={{ borderRadius: 4, fontSize: 11 }}>
            🟢 All Systems Operational
          </Tag>
        </div>
      </Header>

      <Content style={{ padding: '24px', maxWidth: 1440, margin: '0 auto', width: '100%' }}>
        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          {/* Hero / Now Playing */}
          <div
            style={{
              background: 'var(--hero-gradient)',
              borderRadius: 16,
              padding: '24px 32px',
              border: '1px solid var(--color-border)',
            }}
          >
            <Row align="middle" gutter={[24, 16]}>
              <Col xs={24} md={16}>
                <Title level={2} style={{ margin: 0, color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
                  Welcome Home
                </Title>
                <Text style={{ color: 'var(--color-text-muted)', fontSize: 15 }}>
                  Your self-hosted entertainment hub. Every service is running. Your media is ready.
                </Text>
                <div style={{ marginTop: 16 }}>
                  <Space wrap>
                    <Tag color="cyan" style={{ borderRadius: 4 }}>RTX 5090 Ready</Tag>
                    <Tag color="purple" style={{ borderRadius: 4 }}>GPU Transcoding</Tag>
                    <Tag color="green" style={{ borderRadius: 4 }}>Tailscale Connected</Tag>
                    <Tag color="blue" style={{ borderRadius: 4 }}>AI Powered</Tag>
                  </Space>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div style={{ textAlign: 'right' }}>
                  <Text type="secondary" style={{ fontSize: 12 }}>Uptime</Text>
                  <div>
                    <Text style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-success)' }}>
                      14d 22h
                    </Text>
                  </div>
                  <Text type="secondary" style={{ fontSize: 12 }}>Since last restart</Text>
                </div>
              </Col>
            </Row>
          </div>

          {/* System Health */}
          <div>
            <Title level={4} style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)', marginBottom: 12 }}>
              System Health
            </Title>
            <SystemHealth stats={stats} />
          </div>

          {/* Services Grid */}
          <div>
            <Title level={4} style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)', marginBottom: 12 }}>
              Services
            </Title>
            {categories.map((cat) => {
              const catServices = services.filter((s) => s.category === cat.key);
              if (catServices.length === 0) return null;
              return (
                <div key={cat.key} style={{ marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ color: 'var(--color-primary)' }}>{cat.icon}</span>
                    <Text strong style={{ color: 'var(--color-text)', fontSize: 14 }}>
                      {cat.label}
                    </Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      ({catServices.length})
                    </Text>
                  </div>
                  <Row gutter={[16, 16]}>
                    {catServices.map((service) => (
                      <Col xs={24} sm={12} md={8} lg={6} key={service.name}>
                        <ServiceTile service={service} />
                      </Col>
                    ))}
                  </Row>
                </div>
              );
            })}
          </div>

          {/* Container Status Table */}
          <div>
            <Title level={4} style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)', marginBottom: 12 }}>
              Container Status
            </Title>
            <Row gutter={[8, 8]}>
              {containers.map((c) => (
                <Col xs={12} sm={8} md={6} lg={4} key={c.name}>
                  <div
                    style={{
                      background: 'var(--color-surface)',
                      borderRadius: 8,
                      padding: '10px 12px',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Badge
                      status={c.status === 'running' ? 'processing' : 'warning'}
                      color={c.status === 'running' ? '#00E676' : '#FFAB00'}
                    />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <Text style={{ fontSize: 12, color: 'var(--color-text)', display: 'block', fontFamily: 'var(--font-mono)' }}>
                        {c.name}
                      </Text>
                      <Text type="secondary" style={{ fontSize: 10 }}>
                        {c.cpu.toFixed(1)}% CPU · {(c.memory).toFixed(0)}MB
                      </Text>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Space>
      </Content>

      {/* Footer */}
      <Footer
        style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          textAlign: 'center',
          padding: '16px 24px',
        }}
      >
        <Text type="secondary" style={{ fontSize: 12 }}>
          Ultimate Home Media Centre · Your Content · Your Network · Zero Monthly Fees
        </Text>
        <br />
        <Text type="secondary" style={{ fontSize: 11 }}>
          Powered by RTX 5090 · Docker · Tailscale · Ollama
        </Text>
      </Footer>
    </Layout>
  );
}
