import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Игровой Telegram-бот — кейс RELAYBIT',
  description: 'Архивный прототип Telegram-бота с мини-играми, внутренней валютой, рейтингом, бонусами и настройками приватности.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function TelegramGameBotPage() {
  return <main>
    <SiteHeader />
    <section className="case-hero shell">
      <div className="case-kicker"><span>Кейс 02</span><b className="muted-status"><i /> Архивный прототип</b></div>
      <h1>Игровой<br/><em>Telegram-бот.</em></h1>
      <p>Экспериментальный бот с мини-играми, внутренней валютой и рейтингом. Проект проверил, как игровые механики, ежедневные награды и настройки профиля работают внутри привычного интерфейса Telegram.</p>
      <div className="case-actions"><a className="button primary" href="https://t.me/leonid_relaybit" target="_blank" rel="noreferrer">Обсудить Telegram-бота <span>→</span></a><a className="button ghost" href="/projects">Все проекты</a></div>
    </section>
    <section className="game-summary shell" aria-label="Возможности прототипа"><div><span>Игровые режимы</span><strong>Кости · Баскетбол · Дартс</strong></div><div><span>Прогресс</span><strong>Баланс · Бонус · Рейтинг</strong></div><div><span>Профиль</span><strong>Анонимность в таблице лидеров</strong></div></section>
    <section className="case-story shell"><div className="case-story-title"><span>01 / Задача</span><h2>Собрать игру<br/><em>без отдельного приложения.</em></h2></div><div className="case-copy"><p>Telegram уже знаком пользователю: не нужно устанавливать новый клиент, создавать отдельный аккаунт и учиться навигации.</p><p>Прототип использует этот готовый интерфейс как оболочку для игровых сценариев, профиля и системы наград.</p></div></section>
    <section className="case-flow-section"><div className="shell"><span className="case-label">02 / Что реализовано</span><div className="case-flow-grid"><article><b>01</b><h3>Мини-игры</h3><p>Кости, баскетбол и дартс используют встроенные игровые сообщения Telegram и понятные кнопки выбора.</p></article><article><b>02</b><h3>Экономика</h3><p>У каждого игрока есть внутренний баланс, который меняется после игровых событий.</p></article><article><b>03</b><h3>Удержание</h3><p>Ежедневный бонус выдаётся раз в 24 часа, а до следующей награды показывается таймер.</p></article><article><b>04</b><h3>Приватность</h3><p>Пользователь может скрыть имя: в рейтинге он отображается как анонимный игрок.</p></article></div></div></section>
    <section className="case-story shell"><div className="case-story-title"><span>03 / Результат</span><h2>Цельный сценарий<br/><em>в одном чате.</em></h2></div><div className="case-copy"><p>В прототипе связаны главное меню, игры, таблица лидеров, ежедневная награда и настройки профиля. Состояние игроков сохраняется между запусками.</p><p>Проект завершён как эксперимент и показывает способность собирать Telegram-продукты с несколькими связанными сценариями, а не только простые команды.</p></div></section>
    <section className="case-stack shell"><span>Python 3.11</span><span>python-telegram-bot</span><span>JSON</span><span>Telegram Games</span><span>State management</span></section>
    <section className="case-next shell"><span>Нужен бот со сложной логикой?</span><h2>Соберём сценарий,<br/><em>который не путает.</em></h2><a href="https://t.me/leonid_relaybit" target="_blank" rel="noreferrer">Написать в Telegram →</a></section>
    <SiteFooter />
  </main>;
}
