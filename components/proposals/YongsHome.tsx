import Image from 'next/image';
import Link from 'next/link';
import { restaurant } from '@/data/restaurant';
import { featuredMenus } from '@/data/menu';
import YongsHero from './YongsHero';
const stories = [
  {
    id: '060',
    title: '대나무에서 시작되는 한 점',
    description: '대나무통에서 초벌한 삼겹살. 대통령의 대표 메뉴를 만나보세요.',
  },
  {
    id: '069',
    title: '함께 앉아 나누는 이야기',
    description: '창가의 자리에서 좋은 사람들과 편안한 식사를 즐겨보세요.',
  },
  {
    id: '074',
    title: '반가운 모임을 위한 공간',
    description:
      '가족모임부터 회식까지. 모임 인원과 좌석 구성은 예약 시 상담해 드립니다.',
  },
  {
    id: '078',
    title: '여럿이 함께해도 편안하게',
    description:
      '룸과 단체석을 갖춘 대통령. 모임의 크기에 맞는 자리를 문의해 주세요.',
  },
  {
    id: '088',
    title: '대학로에서 만나는 대통령',
    description:
      restaurant.address + '\n맛있는 약속의 자리에서 기다리겠습니다.',
  },
];
const faqs = [
  {
    question: '어떤 메뉴부터 먹으면 좋을까요?',
    answer:
      '대나무통구이삼겹살과 숙성삼겹살, 여러 가지 고기를 함께 즐기는 세트 메뉴를 준비했습니다. 메뉴 페이지에서 구성과 가격을 확인해 주세요.',
  },
  {
    question: '단체 예약이나 대관이 가능한가요?',
    answer: restaurant.groupBooking,
  },
  {
    question: '영업시간과 브레이크타임은 언제인가요?',
    answer: restaurant.businessHours,
  },
  {
    question: '주차가 가능한가요?',
    answer: '주차가 가능합니다. 이용 방법은 방문 전 매장에 문의해 주세요.',
  },
  {
    question: '아이와 함께 방문해도 되나요?',
    answer:
      '유아의자를 준비하고 있습니다. 필요한 좌석과 이용 사항은 예약 시 말씀해 주세요.',
  },
];
export default function YongsHome() {
  return (
    <div className="ya-home">
      <YongsHero />
      <section className="ya-faq">
        <div>
          <span className="ya-question-icon" aria-hidden="true">
            ?
          </span>
          <p className="ya-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h2>대통령 자주 묻는 질문</h2>
          <p>
            방문 전 궁금한 내용을 모았습니다.
            <br />
            질문을 누르면 답변을 확인할 수 있어요.
          </p>
        </div>
        <div className="ya-faq-list">
          {faqs.map((faq, i) => (
            <details key={faq.question}>
              <summary>
                <span>Q{String(i + 1).padStart(2, '0')}</span>
                <strong>{faq.question}</strong>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="ya-signature">
        <div className="ya-section-heading">
          <div>
            <p className="ya-eyebrow">SIGNATURE MENU</p>
            <h2>처음 온다면 이 메뉴부터</h2>
            <p>대통령의 삼겹살과 세트, 든든한 식사 메뉴를 만나보세요.</p>
          </div>
          <Link href="/a/menu" className="ya-action ya-menu-link">
            전체 메뉴 보기
          </Link>
        </div>
        <div className="ya-featured">
          {featuredMenus.map((menu) => (
            <article key={menu.id}>
              <div className="ya-featured-image">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  sizes="(max-width:760px) 90vw, 33vw"
                />
                <span>대표 메뉴</span>
              </div>
              <div className="ya-featured-copy">
                <h3>{menu.name}</h3>
                <p>{menu.description}</p>
                <strong>{menu.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="ya-stories" aria-label="대통령 음식과 공간">
        {stories.map((story) => (
          <article key={story.id}>
            <div className="ya-story-image">
              <Image
                src={`/images/materials/business/business-${story.id}.webp`}
                alt={story.title}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 90vw"
              />
            </div>
            <div>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              {story.id === '088' && (
                <Link className="ya-action ya-menu-link" href="/a/location">
                  오시는 길 ↗
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
