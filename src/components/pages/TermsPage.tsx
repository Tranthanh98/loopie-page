import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text">
            {t('terms.title')}
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            {t('terms.lastUpdated')}
          </p>

          <Card className="p-8 lg:p-12 glass-effect border-border/30 space-y-8">
            <div className="bg-golden/10 border border-golden/30 rounded-2xl p-6">
              <p className="text-lg font-medium text-golden">
                {t('terms.acceptance')}
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                {t('terms.section1')}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {t('terms.content1')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                {t('terms.section2')}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {t('terms.content2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                3. Prohibited Uses
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You may not use our service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                4. Account Termination
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-golden">
                5. Contact Information
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@myapp.com
              </p>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};