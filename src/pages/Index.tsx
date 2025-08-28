import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutPage } from '@/components/pages/AboutPage';
import { TermsPage } from '@/components/pages/TermsPage';
import { PrivacyPage } from '@/components/pages/PrivacyPage';
import { HelpPage } from '@/components/pages/HelpPage';
import { CookiesPage } from '@/components/pages/CookiesPage';

const Index = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [currentPage, setCurrentPage] = useState('about');

  // Handle language from URL
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length >= 1) {
      const langFromUrl = pathSegments[0];
      if (langFromUrl === 'en' || langFromUrl === 'vn') {
        setLanguage(langFromUrl);
        if (pathSegments.length >= 2) {
          setCurrentPage(pathSegments[1]);
        }
      }
    }
  }, [location.pathname, setLanguage]);

  // Handle navigation
  const handleNavigate = (newPage: string) => {
    setCurrentPage(newPage);
    navigate(`/${language}/${newPage}`);
  };

  // Handle initial load
  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/${language}/about`);
    }
  }, [navigate, language, location.pathname]);

  const renderPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'help':
        return <HelpPage />;
      case 'cookies':
        return <CookiesPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
