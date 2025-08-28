import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export const PrivacyPage = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Data Protection',
      description: 'We use industry-standard encryption to protect your data'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Transparency',
      description: 'We are clear about what data we collect and how we use it'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Security',
      description: 'Your information is stored securely and accessed only when necessary'
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'User Control',
      description: 'You have full control over your data and privacy settings'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text">
            {t('privacy.title')}
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            {t('privacy.lastUpdated')}
          </p>

          <Card className="p-8 lg:p-12 glass-effect border-border/30 space-y-8 mb-12">
            <div className="bg-golden/10 border border-golden/30 rounded-2xl p-6">
              <p className="text-lg font-medium text-golden">
                {t('privacy.intro')}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                {t('privacy.section1')}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {t('privacy.content1')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Account information (email, username, profile picture)</li>
                <li>Photos and content you share</li>
                <li>Device information and app usage data</li>
                <li>Location data (if you enable location services)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                {t('privacy.section2')}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {t('privacy.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                3. Data Sharing
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties. This does not include trusted third parties who assist us in operating our app, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                4. Data Retention
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We retain your information for as long as your account is active or as needed to provide you services. You may delete your account at any time, and we will delete your personal information within 30 days.
              </p>
            </section>
          </Card>

          {/* Privacy Principles */}
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card 
                key={index}
                className="p-6 glass-effect border-border/30 hover:border-golden/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-golden mt-1 group-hover:scale-110 transition-transform duration-300">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-golden transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};