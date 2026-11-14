import navigation0 from './ko/navigation.json';
import about0 from './ko/about.json';
import buttons0 from './ko/buttons.json';
import home0 from './ko/home.json';
import location0 from './ko/location.json';
import drinks0 from './ko/drinks.json';
import menuUi0 from './ko/menu-ui.json';
import menu0 from './ko/menu.json';
import restaurant0 from './ko/restaurant.json';
import reviews0 from './ko/reviews.json';
import navigation1 from './en/navigation.json';
import about1 from './en/about.json';
import buttons1 from './en/buttons.json';
import home1 from './en/home.json';
import location1 from './en/location.json';
import drinks1 from './en/drinks.json';
import menuUi1 from './en/menu-ui.json';
import menu1 from './en/menu.json';
import restaurant1 from './en/restaurant.json';
import reviews1 from './en/reviews.json';
import faq1 from './en/faq.json';
import navigation2 from './ja/navigation.json';
import about2 from './ja/about.json';
import buttons2 from './ja/buttons.json';
import home2 from './ja/home.json';
import location2 from './ja/location.json';
import drinks2 from './ja/drinks.json';
import menuUi2 from './ja/menu-ui.json';
import menu2 from './ja/menu.json';
import restaurant2 from './ja/restaurant.json';
import reviews2 from './ja/reviews.json';
import faq2 from './ja/faq.json';
import navigation3 from './zh-Hans/navigation.json';
import about3 from './zh-Hans/about.json';
import buttons3 from './zh-Hans/buttons.json';
import home3 from './zh-Hans/home.json';
import location3 from './zh-Hans/location.json';
import drinks3 from './zh-Hans/drinks.json';
import menuUi3 from './zh-Hans/menu-ui.json';
import menu3 from './zh-Hans/menu.json';
import restaurant3 from './zh-Hans/restaurant.json';
import reviews3 from './zh-Hans/reviews.json';
import faq3 from './zh-Hans/faq.json';
import navigation4 from './zh-Hant/navigation.json';
import about4 from './zh-Hant/about.json';
import buttons4 from './zh-Hant/buttons.json';
import home4 from './zh-Hant/home.json';
import location4 from './zh-Hant/location.json';
import drinks4 from './zh-Hant/drinks.json';
import menuUi4 from './zh-Hant/menu-ui.json';
import menu4 from './zh-Hant/menu.json';
import restaurant4 from './zh-Hant/restaurant.json';
import reviews4 from './zh-Hant/reviews.json';
import faq4 from './zh-Hant/faq.json';

export const languageNames = { ko: '한국어', en: 'English', ja: '日本語', 'zh-Hans': '简体中文', 'zh-Hant': '繁體中文' } as const;
export type Locale = keyof typeof languageNames;
export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && Object.hasOwn(languageNames, value);
}

const dictionaries = {
  'ko': { navigation: navigation0, about: about0, buttons: buttons0, home: home0, location: location0, drinks: drinks0, menuUi: menuUi0, menu: menu0, restaurant: restaurant0.restaurant, reviews: reviews0, faq: [] },
  'en': { navigation: { ...navigation0, ...navigation1 }, about: { ...about0, ...about1 }, buttons: { ...buttons0, ...buttons1 }, home: { ...home0, ...home1 }, location: { ...location0, ...location1 }, drinks: { ...drinks0, ...drinks1 }, menuUi: { ...menuUi0, ...menuUi1 }, menu: menu1, restaurant: restaurant1, reviews: { ...reviews0, ...reviews1 }, faq: faq1 },
  'ja': { navigation: { ...navigation0, ...navigation2 }, about: { ...about0, ...about2 }, buttons: { ...buttons0, ...buttons2 }, home: { ...home0, ...home2 }, location: { ...location0, ...location2 }, drinks: { ...drinks0, ...drinks2 }, menuUi: { ...menuUi0, ...menuUi2 }, menu: menu2, restaurant: restaurant2, reviews: { ...reviews0, ...reviews2 }, faq: faq2 },
  'zh-Hans': { navigation: { ...navigation0, ...navigation3 }, about: { ...about0, ...about3 }, buttons: { ...buttons0, ...buttons3 }, home: { ...home0, ...home3 }, location: { ...location0, ...location3 }, drinks: { ...drinks0, ...drinks3 }, menuUi: { ...menuUi0, ...menuUi3 }, menu: menu3, restaurant: restaurant3, reviews: { ...reviews0, ...reviews3 }, faq: faq3 },
  'zh-Hant': { navigation: { ...navigation0, ...navigation4 }, about: { ...about0, ...about4 }, buttons: { ...buttons0, ...buttons4 }, home: { ...home0, ...home4 }, location: { ...location0, ...location4 }, drinks: { ...drinks0, ...drinks4 }, menuUi: { ...menuUi0, ...menuUi4 }, menu: menu4, restaurant: restaurant4, reviews: { ...reviews0, ...reviews4 }, faq: faq4 },
};

export function getCopy(locale: Locale) {
  const copy = dictionaries[locale];
  return { ...copy, menu: copy.menu as Record<string, { name: string; description: string }> };
}
