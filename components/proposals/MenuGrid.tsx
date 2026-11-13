'use client';
import copy from '@/data/locales/ko/menu-ui.json';
import drinkNames from '@/data/locales/ko/drinks.json';
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { MenuItem } from '@/types/menu';
import { corkage } from '@/data/menu';
import { MenuCards } from './MenuCards';
import YongsMenuCards from './YongsMenuCards';

const categoryOptions = [
  {
    label: copy.sets,
    value: '세트 메뉴',
    intro: copy.setsIntro,
  },
  {
    label: copy.meat,
    value: '고기 메뉴',
    intro: copy.meatIntro,
  },
  {
    label: copy.meals,
    value: '식사 메뉴',
    intro: copy.mealsIntro,
  },
  {
    label: copy.sides,
    value: '곁들임',
    intro: copy.sidesIntro,
  },
  { label: copy.drinks, value: '주류', intro: copy.drinksIntro },
];
const softDrinks = [
  { name: drinkNames.lemonAde, price: '6,000원' },
  { name: drinkNames.grapefruitAde, price: '6,000원' },
  { name: drinkNames.singha, price: '4,000원' },
  { name: drinkNames.coke, price: '3,000원' },
  { name: drinkNames.cokeZero, price: '3,000원' },
  { name: drinkNames.sprite, price: '3,000원' },
  { name: drinkNames.fanta, price: '3,000원' },
  { name: drinkNames.tonic, price: '3,000원' },
];

const drinkGroups: {
  title: string;
  items: { name: string; price: string; image?: string }[];
  photoIds?: string[];
}[] = [
  {
    title: copy.beer,
    items: [
      { name: drinkNames.draft300, price: '3,000원', image: '/images/menu/draft-300cc.webp' },
      { name: drinkNames.hanmac420, price: '5,000원', image: '/images/menu/hanmac-420cc.webp' },
      { name: drinkNames.cassZero, price: '4,000원', image: '/images/menu/cass-zero.webp' },
      { name: drinkNames.cassZeroLemon, price: '4,000원', image: '/images/menu/cass-zero-lemon.webp' },
      { name: drinkNames.cass, price: '6,000원', image: '/images/menu/cass.webp' },
      { name: drinkNames.hanmac, price: '6,000원' },
      { name: drinkNames.budweiser, price: '6,000원', image: '/images/menu/budweiser.webp' },
      { name: drinkNames.stella, price: '6,000원', image: '/images/menu/stella.webp' },
    ],
  },
  {
    title: copy.spirits,
    photoIds: ['menu-31', 'menu-33'],
    items: [
      { name: drinkNames.chamisulOriginal, price: '5,000원', image: '/images/menu/chamisul-original.webp' },
      { name: drinkNames.chamisulFresh, price: '5,000원', image: '/images/menu/chamisul-fresh.webp' },
      { name: drinkNames.saeroOmija, price: '5,000원', image: '/images/menu/saero-omija.webp' },
      { name: drinkNames.saero, price: '5,000원', image: '/images/menu/saero.webp' },
      { name: drinkNames.jinro, price: '5,000원', image: '/images/menu/jinro-is-back.webp' },
      { name: drinkNames.challang, price: '5,000원', image: '/images/menu/challang.webp' },
      { name: drinkNames.chumChurum, price: '5,000원', image: '/images/menu/chum-churum.webp' },
      { name: drinkNames.ilpoomJinro, price: '30,000원', image: '/images/menu/ilpoom-jinro.webp' },
      { name: drinkNames.hwayo, price: '30,000원', image: '/images/menu/hwayo.webp' },
    ],
  },
  {
    title: copy.traditional,
    photoIds: ['menu-32'],
    items: [
      { name: drinkNames.sansachun, price: '10,000원', image: '/images/menu/sansachun.webp' },
      { name: drinkNames.bokbunja, price: '15,000원', image: '/images/menu/bokbunja.webp' },
      { name: drinkNames.baekseju, price: '10,000원', image: '/images/menu/baekseju.webp' },
      { name: drinkNames.maehwasoo, price: '6,000원', image: '/images/menu/maehwasoo.webp' },
      { name: drinkNames.chungha, price: '7,000원', image: '/images/menu/chungha.webp' },
      { name: drinkNames.mildam, price: '10,000원', image: '/images/menu/mildam.webp' },
    ],
  },
  {
    title: copy.sake,
    items: [
      { name: drinkNames.banshaku, price: '7,000원', image: '/images/menu/banshaku.webp' },
      { name: drinkNames.hotTokkuri, price: '7,000원', image: '/images/menu/hot-tokkuri.webp' },
      { name: drinkNames.junmai, price: '38,000원', image: '/images/menu/junmai-pack.webp' },
      { name: drinkNames.kijuro, price: '49,000원', image: '/images/menu/kijuro.webp' },
    ],
  },
  {
    title: copy.highball,
    items: [
      { name: drinkNames.highball, price: '8,000원', image: '/images/menu/hwayo-highball.webp' },
    ],
  },
  { title: copy.wine, photoIds: ['menu-28', 'menu-29'], items: [] },
  { title: copy.softDrinks, items: softDrinks },
];

export default function MenuGrid({
  items,
  overlay = false,
}: {
  items: MenuItem[];
  overlay?: boolean;
}) {
  const [category, setCategory] = useState(categoryOptions[0]);
  const selected = category.value;
  const menuBrowser = useRef<HTMLDivElement>(null);
  const previousCategory = useRef(selected);

  useLayoutEffect(() => {
    if (previousCategory.current === selected) return;
    previousCategory.current = selected;

    const browser = menuBrowser.current;
    if (browser && browser.getBoundingClientRect().top < 0) {
      browser.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, [selected]);

  const visibleItems = items.filter((item) => item.category === selected);
  const MenuPhotos = overlay ? YongsMenuCards : MenuCards;
  return (
    <div className="pv-menu-browser" ref={menuBrowser}>
      <nav className="pv-category-sidebar" aria-label={copy.categories}>
        {categoryOptions.map((category) => (
          <button
            key={category.value}
            type="button"
            aria-pressed={selected === category.value}
            aria-controls="menu-results"
            onClick={() => setCategory(category)}
          >
            {category.label}
          </button>
        ))}
      </nav>
      <div className="pv-menu-results" id="menu-results">
        <section
          className="pv-menu-category"
          aria-labelledby="menu-category-title"
        >
          <div className={overlay ? 'ya-sr-only' : 'pv-section-heading'}>
            <h1 id="menu-category-title" aria-live="polite">
              {overlay ? selected : category.intro}
            </h1>
          </div>
          {selected !== '주류' && (
            <MenuPhotos key={selected} items={visibleItems} splitPrice />
          )}
          {selected === '주류' && drinkGroups.map((group) => {
            const photos = visibleItems.filter((item) => group.photoIds?.includes(item.id));
            for (const item of group.items) {
              if (item.image) {
                photos.push({
                  ...item,
                  id: item.image,
                  image: item.image,
                  category: selected,
                  description: '',
                  featured: false,
                });
              }
            }
            const textItems = group.items.filter((item) => !item.image);
            return (
              <section className="pv-soft-drinks" key={group.title}>
                <h2>{group.title}</h2>
                {photos.length > 0 && <MenuPhotos items={photos} splitPrice />}
                {textItems.length > 0 && (
                  <ul>
                    {textItems.map(({ name, price }) => (
                      <li key={name}>
                        <span>{name}</span>
                        <strong>{price}</strong>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </section>
        {selected === '주류' && (
          <section className="pv-corkage">
            <div className="pv-corkage-image">
              <Image
                src={corkage.image}
                alt={copy.corkagePhoto}
                fill
                sizes="(max-width:760px) 88vw, 240px"
                className="pv-photo"
              />
            </div>
            <div>
              <p className="pv-kicker">{copy.corkageKicker}</p>
              <h2>{copy.corkageHeading}</h2>
              <p>{copy.corkageDescription}</p>
              <p>
                {copy.corkageLimit}
              </p>
            </div>
          </section>
        )}
        {selected === '식사 메뉴' && (
          <p className="pv-menu-source">
            {copy.lunchHours}
          </p>
        )}
      </div>
    </div>
  );
}
