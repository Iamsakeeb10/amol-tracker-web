import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import SupportPage from '@/components/SupportPage';

export const metadata: Metadata = {
  title: 'Support — Amol Tracker',
  description:
    'Get help with Amol Tracker. Find answers to common questions, report bugs, or suggest features.',
};

export default function Support() {
  return (
    <LanguageProvider>
      <SupportPage />
    </LanguageProvider>
  );
}
