import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, Settings, Shield, BarChart } from 'lucide-react';

export const CookiesPage = () => {
  const { t } = useLanguage();

  const cookieTypes = [
    {
      icon: <Cookie className="h-6 w-6" />,
      title: 'Essential Cookies',
      description: 'Required for the website to function properly',
      required: true
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      required: false
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Analytics Cookies',
      description: 'Help us understand how you use our app',
      required: false
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      required: false
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text">
            {t('cookies.title')}
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            {t('cookies.lastUpdated')}
          </p>

          <Card className="p-8 lg:p-12 glass-effect border-border/30 space-y-8 mb-12">
            <div className="bg-golden/10 border border-golden/30 rounded-2xl p-6">
              <p className="text-lg font-medium text-golden">
                {t('cookies.intro')}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                {t('cookies.section1')}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {t('cookies.content1')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                {t('cookies.section2')}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {t('cookies.content2')}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-golden">Types of cookies we use:</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device for a set period of time</li>
                  <li><strong>First-party cookies:</strong> Set directly by our website</li>
                  <li><strong>Third-party cookies:</strong> Set by external services we use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                3. Managing Your Cookie Preferences
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                You can control and manage cookies in various ways. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed.
              </p>
            </section>
          </Card>

          {/* Cookie Preferences */}
          <Card className="p-8 lg:p-12 glass-effect border-border/30 mb-8">
            <h2 className="text-3xl font-semibold mb-8 text-center gradient-text">
              Cookie Preferences
            </h2>
            
            <div className="space-y-6">
              {cookieTypes.map((cookieType, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-6 border border-border/30 rounded-2xl hover:border-golden/50 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-golden mt-1">
                      {cookieType.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        {cookieType.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cookieType.description}
                      </p>
                      {cookieType.required && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-golden/20 text-golden rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  <Switch 
                    checked={cookieType.required}
                    disabled={cookieType.required}
                    className="data-[state=checked]:bg-golden"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                className="bg-golden hover:bg-golden-glow text-background font-semibold px-8 py-2 rounded-full"
              >
                Save Preferences
              </Button>
              <Button 
                variant="outline" 
                className="border-golden text-golden hover:bg-golden hover:text-background px-8 py-2 rounded-full"
              >
                Accept All
              </Button>
            </div>
          </Card>

          {/* Additional Information */}
          <Card className="p-6 glass-effect border-border/30">
            <h3 className="text-xl font-semibold mb-4 text-golden">
              Need More Information?
            </h3>
            <p className="text-foreground/80 mb-4">
              If you have any questions about our use of cookies, please contact us at privacy@myapp.com
            </p>
            <p className="text-sm text-muted-foreground">
              For more information about cookies in general, visit: 
              <a href="https://www.allaboutcookies.org" className="text-golden hover:underline ml-1">
                www.allaboutcookies.org
              </a>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};