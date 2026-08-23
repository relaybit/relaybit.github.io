import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Lead Hunter v0.6.0 — кейс RELAYBIT',
  description: 'Windows-приложение для сбора, AI-оценки и доставки подходящих заявок из нескольких источников.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function LeadHunterPage() {
  return <main>
    <SiteHeader />
    <section className="case-hero shell">
      <div className="case-kicker"><span>Кейс 03</span><b><i /> Готовая desktop-сборка</b></div>
      <h1>Lead Hunter<br/><em>v0.6.0.</em></h1>
      <p>Windows-приложение, которое собирает свежие заказы с нескольких площадок, отсеивает неподходящие, оценивает перспективность с помощью AI и доставляет лучшие заявки в Telegram.</p>
      <div className="case-actions"><a className="button primary" href="https://t.me/leonid_relaybit" target="_blank" rel="noreferrer">Обсудить похожую систему <span>→</span></a><a className="button ghost" href="/projects">Все проекты</a></div>
    </section>
    <section className="case-metrics shell" aria-label="Показатели Lead Hunter"><article><small>За цикл</small><strong>62</strong><span>объявления из источников</span></article><article><small>В базе</small><strong>154</strong><span>уникальных лида</span></article><article><small>Одобрено AI</small><strong>10</strong><span>подходящих заявок</span></article><article><small>Доставлено</small><strong>5</strong><span>карточек в Telegram</span></article></section>
    <section className="case-story shell"><div className="case-story-title"><span>01 / Задача</span><h2>Не искать заказы.<br/><em>Получать лучшие.</em></h2></div><div className="case-copy"><p>На фриланс-площадках много нерелевантных, платных или слишком конкурентных объявлений. Ручная проверка каждой карточки съедает время ещё до начала работы.</p><p>Lead Hunter превращает этот поток в короткую персональную подборку и показывает её там, где удобно быстро принять решение — в Telegram.</p></div></section>
    <section className="case-flow-section"><div className="shell"><span className="case-label">02 / Конвейер</span><div className="case-flow-grid"><article><b>01</b><h3>Собирает</h3><p>Объединяет объявления из FL.ru, CodeLance и Freelance Moldova в один поток.</p></article><article><b>02</b><h3>Отсеивает</h3><p>Проверяет бесплатность отклика, конкуренцию и соответствие заданным направлениям.</p></article><article><b>03</b><h3>Оценивает</h3><p>AI выставляет балл от 0 до 100 и объясняет, стоит ли брать заявку в работу.</p></article><article><b>04</b><h3>Доставляет</h3><p>Отправляет подходящие карточки в управляющий Telegram-бот с быстрыми действиями.</p></article></div></div></section>
    <section className="case-story shell"><div className="case-story-title"><span>03 / Управление</span><h2>Автоматически,<br/><em>но под контролем.</em></h2></div><div className="case-copy"><p>Desktop-интерфейс показывает состояние системы и ключевые счётчики. Сбор можно запускать и останавливать без консоли.</p><p>Публикации в тематических чатах требуют ручного одобрения каждого чата, соблюдают интервалы и ограничения Telegram. Автовступление отключено.</p></div></section>
    <section className="case-stack shell"><span>Python</span><span>Tkinter</span><span>SQLite</span><span>AI scoring</span><span>Telegram Bot API</span><span>Telethon</span><span>PyInstaller</span><span>Unit tests</span></section>
    <section className="case-next shell"><span>Много входящих данных?</span><h2>Оставим человеку<br/><em>только решения.</em></h2><a href="https://t.me/leonid_relaybit" target="_blank" rel="noreferrer">Написать в Telegram →</a></section>
    <SiteFooter />
  </main>;
}
