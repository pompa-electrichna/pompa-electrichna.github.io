import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AppLayout } from './layout/AppLayout';
import { HeadSection } from './sections/HeadSection';
import { HorizontalCardsSection } from './sections/HorizontalCardsSection';
import { InfoLabel } from './sections/InfoSection';
import { VerticalCardsSection } from './sections/VerticalCardsSection';
import { HowToOrderSection } from './sections/HowToOrderSection';
import { PreFootSection } from './sections/PreFootSection';
import { FooterSection } from './sections/FooterSection';
import { ToastContainer } from 'react-toastify';
import { useTranslate } from './hooks/useTranslate';
import locales from './constants/locales';
import { HeaderSection } from './sections/HeaderSection';

function App() {
  const { l, setLocale, locale } = useTranslate({ locales })

  return (
    <AppLayout>
      <HeaderSection
        setLocale={setLocale}
        locale={locale}
      />
      <HeadSection l={l} />
      <HorizontalCardsSection l={l} />
      <InfoLabel
        text={l('firstDescription')}
      />
      <VerticalCardsSection l={l} />
      <InfoLabel
        text={l('secondDescription')}
      />
      <HowToOrderSection l={l} />
      <PreFootSection l={l} />
      <FooterSection l={l} />

      <ToastContainer />
    </AppLayout>
  );
}

export default App;
