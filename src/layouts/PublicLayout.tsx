import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Learning path pages
const EsgOverview = lazy(() => import('../pages/esg-overview/EsgOverview'));
const Environmental = lazy(() => import('../pages/environmental/Environmental'));
const Social = lazy(() => import('../pages/social/Social'));
const Governance = lazy(() => import('../pages/governance/Governance'));
const Csr = lazy(() => import('../pages/csr/Csr'));
const SocialEconomy = lazy(() => import('../pages/social-economy/SocialEconomy'));
const EsgReporting = lazy(() => import('../pages/esg-reporting/EsgReporting'));
const SustainableInvest = lazy(() => import('../pages/sustainable-invest/SustainableInvest'));

const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<MyPage />} />

            {/* Learning Paths */}
            <Route path="/esg-overview" element={<EsgOverview />} />
            <Route path="/environmental" element={<Environmental />} />
            <Route path="/social" element={<Social />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/csr" element={<Csr />} />
            <Route path="/social-economy" element={<SocialEconomy />} />
            <Route path="/esg-reporting" element={<EsgReporting />} />
            <Route path="/sustainable-invest" element={<SustainableInvest />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
