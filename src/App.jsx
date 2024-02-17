import React from 'react';
import { AppLayout } from './layout/AppLayout';
import { HeadSection } from './sections/HeadSection';
import { HorizontalCardsSection } from './sections/HorizontalCardsSection';
import { InfoLabel } from './sections/InfoSection';
import { VerticalCardsSection } from './sections/VerticalCardsSection';
import { HowToOrderSection } from './sections/HowToOrderSection';
import { PreFootSection } from './sections/PreFootSection';
import { FooterSection } from './sections/FooterSection';

const firstDescription = `Базово помпа може бути встановлена на бутилі: 10л, 11.3л, 15л, 18.9л`;
const secondDescription = `Наша помпа має подвійний насос, покращений електродвигун і високу якість сбірки`;

function App() {
  return (
    <AppLayout>
      <HeadSection />
      <HorizontalCardsSection />
      <InfoLabel
        text={firstDescription}
      />
      <VerticalCardsSection />
      <InfoLabel
        text={secondDescription}
      />
      <HowToOrderSection />
      <PreFootSection />
      <FooterSection />
    </AppLayout>
  );
}

export default App;
