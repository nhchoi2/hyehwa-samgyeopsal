import { restaurant } from './restaurant';

export const links = {
  reservationUrl: '',
  naverReservationUrl: '',
  kakaoTalkUrl: '',
  instagramUrl: '',
  naverMapUrl: '',
  kakaoMapUrl: '',
};

export const contactLinks = [
  { label: '예약하기', href: links.reservationUrl },
  { label: '네이버 예약', href: links.naverReservationUrl },
  {
    label: '전화 문의',
    href: restaurant.phone
      ? `tel:${restaurant.phone.replace(/[^+\d]/g, '')}`
      : '',
  },
  { label: '카카오톡', href: links.kakaoTalkUrl },
].filter((link) => link.href);

export const mapLinks = [
  { label: '네이버지도', href: links.naverMapUrl },
  { label: '카카오맵', href: links.kakaoMapUrl },
].filter((link) => link.href);
