import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";

export const HelpPage = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: "24/7",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us an email",
      action: "Send Email",
      available: "Response within 24h",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Call our support line",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text">
            {t("help.title")}
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            We're here to help you get the most out of Loopie
          </p>

          {/* FAQ Section */}
          <Card className="p-8 lg:p-12 glass-effect border-border/30 mb-12">
            <h2 className="text-3xl font-semibold mb-8 text-center gradient-text">
              {t("help.faq")}
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-border/30 rounded-2xl px-6 hover:border-golden/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-golden transition-colors duration-300">
                  {t("help.q1")}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  {t("help.a1")}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-border/30 rounded-2xl px-6 hover:border-golden/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-golden transition-colors duration-300">
                  {t("help.q2")}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  {t("help.a2")}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-border/30 rounded-2xl px-6 hover:border-golden/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-golden transition-colors duration-300">
                  {t("help.q3")}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  {t("help.a3")}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-border/30 rounded-2xl px-6 hover:border-golden/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-golden transition-colors duration-300">
                  How do I delete my account?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Go to Settings &gt; Account &gt; Delete Account. Your data
                  will be permanently removed within 30 days. This action cannot
                  be undone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-border/30 rounded-2xl px-6 hover:border-golden/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-golden transition-colors duration-300">
                  Can I use Loopie on multiple devices?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Yes! Your account syncs across all your devices. Simply log in
                  with your credentials on any device to access your photos and
                  friends.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border border-border/30 rounded-2xl px-6 hover:border-golden/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-golden transition-colors duration-300">
                  How do I report inappropriate content?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Long press on any post and select "Report". Our moderation
                  team reviews all reports within 24 hours. You can also block
                  users directly from their profile.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* Contact Support */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 gradient-text">
              Still Need Help?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our support team is here to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 glass-effect border-border/30 hover:border-golden/50 transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="text-golden mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-golden transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <div className="flex items-center justify-center text-xs text-muted-foreground mb-4">
                  <Clock className="h-3 w-3 mr-1" />
                  {method.available}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-golden text-golden hover:bg-golden hover:text-background transition-all duration-300"
                >
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
