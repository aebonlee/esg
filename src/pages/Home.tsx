import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LEARNING_PATHS } from '../config/site';
import SEOHead from '../components/SEOHead';
import HeroBackground from '../components/HeroBackground';
import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  const carouselSlides = [
    {
      title: isKo ? 'ESG 개론부터 지속가능 투자까지' : 'From ESG Overview to Sustainable Investment',
      description: isKo
        ? '환경(E), 사회(S), 지배구조(G) 전략과 CSR, 사회적 경제까지 — ESG 경영의 모든 것을 체계적으로 배웁니다.'
        : 'E, S, G strategies plus CSR and social economy — learn everything about ESG management systematically.',
    },
    {
      title: isKo ? '글로벌 ESG 보고 표준 마스터' : 'Master Global ESG Reporting Standards',
      description: isKo
        ? 'GRI, SASB, TCFD, EU 택소노미 등 글로벌 보고 표준과 실무 작성법을 학습하세요.'
        : 'Learn global reporting standards including GRI, SASB, TCFD, and EU Taxonomy with practical writing methods.',
    },
    {
      title: isKo ? '지속가능한 미래를 위한 투자' : 'Investment for a Sustainable Future',
      description: isKo
        ? '책임투자 원칙(PRI), ESG 스크리닝, 녹색채권, ESG 포트폴리오 구축 전략을 배워보세요.'
        : 'Learn PRI principles, ESG screening, green bonds, and ESG portfolio construction strategies.',
    },
  ];

  return (
    <>
      <SEOHead path="/" />

      {/* Hero */}
      <section className="hero">
        <HeroBackground />
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-globe" />
            {t('hero.badge')}
          </div>
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <Link to="/esg-overview" className="btn btn-primary-large">{t('hero.cta')}</Link>
            <Link to="/environmental" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              {t('hero.ctaSecondary')}
            </Link>
          </div>
          <HeroCarousel slides={carouselSlides} />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>
          <div className="features-grid">
            <FeatureCard icon="fa-leaf" title={t('features.habits.title')} description={t('features.habits.desc')} />
            <FeatureCard icon="fa-handshake" title={t('features.memory.title')} description={t('features.memory.desc')} />
            <FeatureCard icon="fa-chart-line" title={t('features.strategy.title')} description={t('features.strategy.desc')} />
            <FeatureCard icon="fa-coins" title={t('features.balance.title')} description={t('features.balance.desc')} />
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="paths-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.pathsTitle')}</h2>
            <p className="section-subtitle">{t('home.pathsSubtitle')}</p>
          </div>
          <div className="paths-grid">
            {LEARNING_PATHS.map(path => (
              <Link key={path.id} to={path.path} className="path-card">
                <div className="path-card-header">
                  <div className="path-icon" style={{ background: path.color }}>
                    <i className={`fa-solid ${path.icon}`} />
                  </div>
                  <h3 className="path-name">{isKo ? path.nameKo : path.nameEn}</h3>
                </div>
                <p className="path-desc">{isKo ? path.descKo : path.descEn}</p>
                <div className="path-topics">
                  {path.topics.map((topic, i) => (
                    <span key={i} className="path-topic">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">{t('stats.guides')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">48+</div>
              <div className="stat-label">{t('stats.topics')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">{t('stats.categories')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.workflowTitle')}</h2>
            <p className="section-subtitle">{t('home.workflowSubtitle')}</p>
          </div>
          <div className="workflow-grid">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="workflow-step">
                <div className="workflow-number">{n}</div>
                <h3 className="workflow-title">{t(`home.step${n}`)}</h3>
                <p className="workflow-desc">{t(`home.step${n}desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-description">{t('cta.description')}</p>
          <Link to="/esg-overview" className="btn btn-primary-large">{t('cta.button')}</Link>
        </div>
      </section>
    </>
  );
}
