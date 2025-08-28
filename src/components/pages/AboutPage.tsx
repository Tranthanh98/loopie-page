import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Shield, Users, Download, ArrowRight } from 'lucide-react';

export const AboutPage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('about.feature1'),
      description: 'Share genuine moments without filters or fake engagement'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('about.feature2'),
      description: 'Your data is protected with industry-leading security'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.feature3'),
      description: 'Built specifically for Gen Z social needs and preferences'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-golden/10 via-transparent to-surface/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text floating-animation">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-golden hover:bg-golden-glow text-background font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 glow-effect"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('hero.cta')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-golden text-golden hover:bg-golden hover:text-background px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                {t('hero.secondary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-golden/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-golden/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 gradient-text">
              {t('about.title')}
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 leading-relaxed">
              {t('about.intro')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-16">
              {t('about.description')}
            </p>

            {/* Features Grid */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
                {t('about.features')}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card 
                    key={index}
                    className="p-8 glass-effect border-border/30 hover:border-golden/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-golden/20 group"
                  >
                    <div className="text-golden mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-golden transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};