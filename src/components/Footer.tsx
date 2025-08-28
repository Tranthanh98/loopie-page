import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold gradient-text">Loopie</span>
          </div>
          <p className="text-muted-foreground text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
