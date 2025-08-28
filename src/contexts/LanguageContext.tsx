import React, { createContext, ReactNode, useContext, useState } from "react";

type Language = "en" | "vn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.terms": "Terms",
    "nav.privacy": "Privacy",
    "nav.help": "Help",
    "nav.cookies": "Cookies",

    // Hero Section
    "hero.title": "Share Your World",
    "hero.subtitle":
      "The next generation photo sharing app designed for Gen Z. Connect, express, and capture every moment.",
    "hero.cta": "Download Now",
    "hero.secondary": "Learn More",

    // About Page
    "about.title": "About Loopie",
    "about.intro":
      "Loopie is revolutionizing how Gen Z shares and connects through photos.",
    "about.description":
      "Built with privacy and authenticity in mind, Loopie allows you to share genuine moments with your closest friends. No algorithms, no fake engagement - just real connections.",
    "about.features": "Features",
    "about.feature1": "Authentic Sharing",
    "about.feature2": "Privacy First",
    "about.feature3": "Gen Z Focused",

    // Terms Page
    "terms.title": "Terms of Service",
    "terms.lastUpdated": "Last updated: January 1, 2025",
    "terms.acceptance": "By using Loopie, you agree to these terms.",
    "terms.section1": "1. Acceptance of Terms",
    "terms.content1":
      "By accessing and using Loopie, you accept and agree to be bound by the terms and provision of this agreement.",
    "terms.section2": "2. Use License",
    "terms.content2":
      "Permission is granted to temporarily use Loopie for personal, non-commercial transitory viewing only.",

    // Privacy Page
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last updated: January 1, 2025",
    "privacy.intro":
      "Your privacy is important to us. This policy describes how we collect and use your information.",
    "privacy.section1": "1. Information We Collect",
    "privacy.content1":
      "We collect information you provide directly to us, such as when you create an account or contact us.",
    "privacy.section2": "2. How We Use Information",
    "privacy.content2":
      "We use the information we collect to provide, maintain, and improve our services.",

    // Help Page
    "help.title": "Help Center",
    "help.faq": "Frequently Asked Questions",
    "help.q1": "How do I create an account?",
    "help.a1":
      "Download the app and follow the simple onboarding process. You can sign up with your email or phone number.",
    "help.q2": "How do I add friends?",
    "help.a2":
      "Use the search function or share your profile link with friends. You can also sync your contacts to find friends already on Loopie.",
    "help.q3": "Is my data secure?",
    "help.a3":
      "Yes, we use industry-standard encryption and never share your personal data with third parties.",

    // Cookies Page
    "cookies.title": "Cookie Policy",
    "cookies.lastUpdated": "Last updated: January 1, 2025",
    "cookies.intro":
      "This Cookie Policy explains how Loopie uses cookies and similar technologies.",
    "cookies.section1": "1. What Are Cookies",
    "cookies.content1":
      "Cookies are small text files that are stored on your device when you visit our website.",
    "cookies.section2": "2. How We Use Cookies",
    "cookies.content2":
      "We use cookies to improve your experience, analyze usage, and provide personalized content.",

    // Footer
    "footer.copyright": "© 2025 Loopie. All rights reserved.",
  },
  vn: {
    // Navigation
    "nav.about": "Giới thiệu",
    "nav.terms": "Điều khoản",
    "nav.privacy": "Bảo mật",
    "nav.help": "Trợ giúp",
    "nav.cookies": "Cookie",

    // Hero Section
    "hero.title": "Chia Sẻ Thế Giới Của Bạn",
    "hero.subtitle":
      "Ứng dụng chia sẻ ảnh thế hệ mới được thiết kế cho Gen Z. Kết nối, thể hiện và ghi lại mọi khoảnh khắc.",
    "hero.cta": "Tải Ngay",
    "hero.secondary": "Tìm Hiểu Thêm",

    // About Page
    "about.title": "Giới thiệu Loopie",
    "about.intro":
      "Loopie đang cách mạng hóa cách Gen Z chia sẻ và kết nối qua ảnh.",
    "about.description":
      "Được xây dựng với tư duy bảo mật và tính xác thực, Loopie cho phép bạn chia sẻ những khoảnh khắc thật với những người bạn thân nhất. Không có thuật toán, không có tương tác giả - chỉ có những kết nối thực sự.",
    "about.features": "Tính năng",
    "about.feature1": "Chia Sẻ Chân Thực",
    "about.feature2": "Bảo Mật Ưu Tiên",
    "about.feature3": "Tập Trung Gen Z",

    // Terms Page
    "terms.title": "Điều Khoản Dịch Vụ",
    "terms.lastUpdated": "Cập nhật lần cuối: 1 tháng 1, 2025",
    "terms.acceptance":
      "Bằng cách sử dụng Loopie, bạn đồng ý với các điều khoản này.",
    "terms.section1": "1. Chấp Nhận Điều Khoản",
    "terms.content1":
      "Bằng cách truy cập và sử dụng Loopie, bạn chấp nhận và đồng ý bị ràng buộc bởi các điều khoản và điều kiện của thỏa thuận này.",
    "terms.section2": "2. Giấy Phép Sử Dụng",
    "terms.content2":
      "Được cấp phép sử dụng tạm thời Loopie chỉ cho mục đích xem cá nhân, phi thương mại.",

    // Privacy Page
    "privacy.title": "Chính Sách Bảo Mật",
    "privacy.lastUpdated": "Cập nhật lần cuối: 1 tháng 1, 2025",
    "privacy.intro":
      "Quyền riêng tư của bạn rất quan trọng đối với chúng tôi. Chính sách này mô tả cách chúng tôi thu thập và sử dụng thông tin của bạn.",
    "privacy.section1": "1. Thông Tin Chúng Tôi Thu Thập",
    "privacy.content1":
      "Chúng tôi thu thập thông tin bạn cung cấp trực tiếp cho chúng tôi, chẳng hạn như khi bạn tạo tài khoản hoặc liên hệ với chúng tôi.",
    "privacy.section2": "2. Cách Chúng Tôi Sử Dụng Thông Tin",
    "privacy.content2":
      "Chúng tôi sử dụng thông tin thu thập được để cung cấp, duy trì và cải thiện dịch vụ của mình.",

    // Help Page
    "help.title": "Trung Tâm Trợ Giúp",
    "help.faq": "Câu Hỏi Thường Gặp",
    "help.q1": "Làm sao để tạo tài khoản?",
    "help.a1":
      "Tải ứng dụng và làm theo quy trình đăng ký đơn giản. Bạn có thể đăng ký bằng email hoặc số điện thoại.",
    "help.q2": "Làm sao để thêm bạn bè?",
    "help.a2":
      "Sử dụng chức năng tìm kiếm hoặc chia sẻ liên kết hồ sơ của bạn với bạn bè. Bạn cũng có thể đồng bộ danh bạ để tìm bạn bè đã có trên Loopie.",
    "help.q3": "Dữ liệu của tôi có an toàn không?",
    "help.a3":
      "Có, chúng tôi sử dụng mã hóa tiêu chuẩn ngành và không bao giờ chia sẻ dữ liệu cá nhân của bạn với bên thứ ba.",

    // Cookies Page
    "cookies.title": "Chính Sách Cookie",
    "cookies.lastUpdated": "Cập nhật lần cuối: 1 tháng 1, 2025",
    "cookies.intro":
      "Chính sách Cookie này giải thích cách Loopie sử dụng cookie và các công nghệ tương tự.",
    "cookies.section1": "1. Cookie Là Gì",
    "cookies.content1":
      "Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn khi bạn truy cập trang web của chúng tôi.",
    "cookies.section2": "2. Cách Chúng Tôi Sử Dụng Cookie",
    "cookies.content2":
      "Chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn, phân tích việc sử dụng và cung cấp nội dung được cá nhân hóa.",

    // Footer
    "footer.copyright": "© 2025 Loopie. Tất cả quyền được bảo lưu.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
