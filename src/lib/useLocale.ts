// lib/useLocale.ts
import ru from '@/locales/ru/hero.json';
import en from '@/locales/en/hero.json';
import { useRouter } from 'next/router';

export function useHeroText() {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  return t;
}
