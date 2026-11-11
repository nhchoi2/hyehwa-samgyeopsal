import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { variants, type Variant } from '@/data/proposals';
import { Photo } from '@/components/proposals/Proposal';
import '@/components/proposals/proposals.css';
export const metadata: Metadata = {
  title: '대통령 · 홈페이지 디자인 시안',
  robots: { index: false, follow: false },
};
export default function Home() {
  if (process.env.SHOW_DRAFT_PROPOSALS !== '1') redirect('/a');
  return (
    <main id="main-content" className="pv-chooser">
      <header>
        <span>HYEHWA SAMGYEOPSAL PRESIDENT</span>
        <span>WEBSITE COLLECTION / 03</span>
      </header>
      <p className="pv-kicker">혜화 삼겹살 대통령</p>
      <h1>같은 맛, 세 가지 분위기.</h1>
      <p className="pv-chooser-intro">
        마음에 드는 분위기를 골라보세요.
        <br />각 시안에서 메뉴, 매장 소개, 오시는 길까지 직접 둘러볼 수
        있습니다.
      </p>
      <div className="pv-choices">
        {(Object.keys(variants) as Variant[]).map((key) => (
          <Link
            href={`/${key}`}
            key={key}
            className={`pv-choice pv-choice-${key}`}
          >
            <div className="pv-choice-photo">
              <Photo
                name={variants[key].image}
                alt={`${variants[key].name} 시안의 대표 음식 사진`}
                priority
              />
              <span>{key.toUpperCase()}</span>
            </div>
            <div className="pv-choice-copy">
              <p>{variants[key].english}</p>
              <h2>{variants[key].name} ↗</h2>
              <p>{variants[key].description}</p>
              <strong>시안 둘러보기 →</strong>
            </div>
          </Link>
        ))}
      </div>
      <footer>
        모바일에서도 확인해 보세요. 시안 상단의 A · B · C 버튼으로 같은 페이지를
        비교할 수 있습니다.
      </footer>
    </main>
  );
}
