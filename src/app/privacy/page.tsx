import { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import PrivacyPage from '@/components/PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Amol Tracker',
  description:
    'Amol Tracker privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function Privacy() {
  return (
    <LanguageProvider>
      <PrivacyPage />
    </LanguageProvider>
  );
}
