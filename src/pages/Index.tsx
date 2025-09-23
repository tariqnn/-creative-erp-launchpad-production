import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ERPOnDemand } from '@/components/sections/ERPOnDemand';
import { Contact } from '@/components/sections/Contact';
import { MobileShortcuts } from '@/components/MobileShortcuts';
import { Language } from '@/lib/i18n';

interface IndexProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Index = ({ lang, onLanguageChange }: IndexProps) => {
  return (
    <>
      <section id="home">
        <Hero lang={lang} />
      </section>
      
      <section id="services">
        <Services lang={lang} />
      </section>
      
      <HowItWorks lang={lang} />
      
      <section id="erp-on-demand">
        <ERPOnDemand lang={lang} />
      </section>
      
      <section id="contact">
        <Contact lang={lang} />
      </section>
      
      {/* Mobile Shortcuts */}
      <MobileShortcuts lang={lang} />
    </>
  );
};

export default Index;
