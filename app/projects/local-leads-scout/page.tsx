import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Local Leads Scout — кейс RELAYBIT',
  description: 'Telegram-инструмент, который находит небольшие тематические сообщества, фильтрует результаты и сохраняет их в базу.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function LocalLeadsScoutPage() {
  return <main>
    <SiteHeader />
    <section className="case-hero shell">
      <div className="case-kicker"><span>Кейс 01</span><b><i /> Рабочий прототип</b></div>
      <h1>Local Leads<br/><em>Scout.</em></h1>
      <p>Инструмент для поиска небольших публичных Telegram-сообществ: собирает открытые данные, отсеивает нерелевантные результаты и присылает подходящие варианты администратору.</p>
      <div className="case-actions"><a className="button primary" href="https://t.me/leonid_relaybit" target="_blank" rel="noreferrer">Обсудить похожую задачу <span>→</span></a><a className="button ghost" href="/projects">Все проекты</a></div>
    </section>

    <section className="case-metrics shell" aria-label="Показатели проекта">
      <article><small>В базе</small><strong>28</strong><span>уникальных групп</span></article>
      <article><small>Охват поиска</small><strong>11</strong><span>тематических запросов</span></article>
      <article><small>Диапазон</small><strong>41–4 895</strong><span>участников в группе</span></article>
      <article><small>Цикл</small><strong>6 ч</strong><span>между проверками</span></article>
    </section>

    <section className="case-story shell">
      <div className="case-story-title"><span>01 / Задача</span><h2>Найти нужные сообщества<br/><em>без ручного перебора.</em></h2></div>
      <div className="case-copy"><p>Поиск потенциальных площадок в Telegram быстро превращается в рутину: одинаковые запросы, десятки неподходящих результатов и постоянная проверка размера каждой группы.</p><p>Scout выполняет этот цикл автоматически и оставляет человеку только осмысленную работу с готовой подборкой.</p></div>
    </section>

    <section className="case-flow-section">
      <div className="shell">
        <span className="case-label">02 / Как работает</span>
        <div className="case-flow-grid">
          <article><b>01</b><h3>Ищет</h3><p>Проверяет Telegram по набору тематических запросов: бизнес, услуги, заказы, фриланс и маркетплейсы.</p></article>
          <article><b>02</b><h3>Фильтрует</h3><p>Оставляет публичные группы нужного размера и проверяет релевантность названия и описания.</p></article>
          <article><b>03</b><h3>Запоминает</h3><p>Сохраняет найденные сообщества в SQLite и отличает новые результаты от уже просмотренных.</p></article>
          <article><b>04</b><h3>Сообщает</h3><p>Присылает администратору название, аудиторию и прямую ссылку на каждую новую группу.</p></article>
        </div>
      </div>
    </section>

    <section className="case-story shell">
      <div className="case-story-title"><span>03 / Ограничения</span><h2>Автоматизация<br/><em>без спама.</em></h2></div>
      <div className="case-copy"><p>Инструмент работает только с открытыми данными. Он не вступает в группы, не публикует сообщения и не пишет участникам автоматически.</p><p>Такой подход подходит как основа для исследования ниш, поиска партнёрских площадок и мониторинга сообществ — без агрессивных действий от имени пользователя.</p></div>
    </section>

    <section className="case-stack shell"><span>Python</span><span>Telethon</span><span>SQLite</span><span>Telegram API</span><span>Планировщик</span></section>

    <section className="case-next shell"><span>Есть похожая ручная задача?</span><h2>Покажите процесс —<br/><em>я предложу прототип.</em></h2><a href="https://t.me/leonid_relaybit" target="_blank" rel="noreferrer">Написать в Telegram →</a></section>
    <SiteFooter />
  </main>;
}
