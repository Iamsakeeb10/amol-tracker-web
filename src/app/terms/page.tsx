import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import TermsPage from '@/components/TermsPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Amol Tracker',
  description:
    'Amol Tracker terms and conditions. Read our usage terms and policies.',
};

export default function Terms() {
  return (
    <LanguageProvider>
      <TermsPage />
    </LanguageProvider>
  );
}
