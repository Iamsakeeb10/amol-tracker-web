'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import type { Lang } from '@/lib/content';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (obj: { bn: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'bn',
  toggleLang: () => {},
  t: (obj) => obj.bn,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('bn');

  useEffect(() => {
    const saved = localStorage.getItem('amol_lang') as Lang | null;
    if (saved === 'bn' || saved === 'en') setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-bn', lang === 'bn');
    localStorage.setItem('amol_lang', lang);
  }, [lang]);

  const toggleLang = () =>
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));

  const t = (obj: { bn: string; en: string }) => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
