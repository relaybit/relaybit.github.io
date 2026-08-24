'use client';
import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

const projects = [
  { no:'01', type:'В РАЗРАБОТКЕ · TELEGRAM', title:'Local Leads Scout', text:'Находит небольшие тематические сообщества, оценивает размер и присылает лучшие варианты в Telegram.', tags:['Telethon','Python','SQLite'], tone:'acid' },
  { no:'02', type:'АРХИВ · TELEGRAM', title:'Игровой Telegram-бот', text:'Объединяет мини-игры, внутреннюю валюту, рейтинг, ежедневные бонусы и настройки приватности.', tags:['Python','Telegram Bot','Game UX'], tone:'dark' },
  { no:'03', type:'DESKTOP · AI', title:'Lead Hunter', text:'Собирает заявки с пяти источников, фильтрует поток, оценивает лиды с помощью AI и отправляет лучшие в Telegram.', tags:['Python','AI scoring','SQLite'], tone:'paper' },
];

export default function Home() {
  const [time, setTime] = useState('00:00:00');
  const [active, setActive] = useState(0);
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('ru-RU'));
    tick(); const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <main>
    <SiteHeader />
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><i /> Доступен для небольших проектов</div>
        <h1>Автоматизирую<br />то, что <em>тормозит.</em></h1>
        <p className="lead">Telegram-боты, парсеры и умные таблицы — понятные инструменты, которые экономят время и начинают работать за несколько дней.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Смотреть проекты <span>↘</span></a><a className="button ghost" href="#contact">Написать мне</a></div>
        <div className="micro-proof"><span><b>01–03</b> дня на прототип</span><span><b>Python</b> · Telegram · API</span></div>
      </div>
      <div className="hero-console" aria-label="Демонстрация системы автоматизации">
        <div className="console-top"><div className="traffic"><i /><i /><i /></div><span>automation.live</span><span className="clock">{time}</span></div>
        <div className="console-body">
          <div className="system-row"><span>СИСТЕМА</span><b><i /> ONLINE</b></div>
          <div className="flow">
            <div className="flow-node"><small>ИСТОЧНИКИ</small><strong>3 сайта</strong><span>данные обновлены</span></div><div className="flow-line"><i /></div>
            <div className="flow-node"><small>ОБРАБОТКА</small><strong>Python</strong><span>42 записи / сек</span></div><div className="flow-line"><i /></div>
            <div className="flow-node result"><small>РЕЗУЛЬТАТ</small><strong>Готово</strong><span>таблица + Telegram</span></div>
          </div>
          <div className="metric-grid"><div><span>Сэкономлено</span><strong>18.4 ч</strong><small>за неделю</small></div><div><span>Ошибок</span><strong>0</strong><small>последний запуск</small></div><div><span>Статус</span><strong className="lime">Активен</strong><small>24 / 7</small></div></div>
          <div className="terminal"><span>→</span> Следующий запуск через <b>04:18</b><i className="cursor" /></div>
        </div>
      </div>
    </section>
    <div className="ticker"><div>TELEGRAM-БОТЫ <i>✦</i> ПАРСИНГ ДАННЫХ <i>✦</i> АВТОМАТИЗАЦИЯ <i>✦</i> GOOGLE SHEETS <i>✦</i> API ИНТЕГРАЦИИ <i>✦</i> TELEGRAM-БОТЫ <i>✦</i> ПАРСИНГ ДАННЫХ <i>✦</i></div></div>
    <section className="work shell" id="work">
      <header className="section-head"><div><span>01 / Проекты в работе</span><h2>Не обещания.<br /><em>Рабочие прототипы.</em></h2></div><p>Три направления разработки: от действующего прототипа до концептов, которые постепенно станут полноценными кейсами.</p></header>
      <div className="project-tabs" role="tablist">{projects.map((p,i)=><button key={p.no} role="tab" aria-selected={active===i} className={active===i?'active':''} onClick={()=>setActive(i)}><span>{p.no}</span>{p.title}</button>)}</div>
      <article className={`project-stage ${projects[active].tone}`}>
        <div className="project-info"><span>{projects[active].type}</span><h3>{projects[active].title}</h3><p>{projects[active].text}</p><div className="tags">{projects[active].tags.map(t=><i key={t}>{t}</i>)}</div>{active===0&&<a className="project-case-link" href="/projects/local-leads-scout/">Открыть полный кейс →</a>}{active===1&&<a className="project-case-link" href="/projects/telegram-game-bot/">Открыть полный кейс →</a>}{active===2&&<a className="project-case-link" href="/projects/lead-hunter/">Открыть полный кейс →</a>}</div>
        <div className="project-demo" aria-hidden="true">
          <div className="demo-bar"><i/><i/><i/><b>{projects[active].no}.project</b></div>
          {active===0&&<div className="radar"><span className="ring r1"/><span className="ring r2"/><span className="ring r3"/><span className="sweep"/><i className="dot d1"/><i className="dot d2"/><i className="dot d3"/><strong>28</strong><small>групп найдено</small></div>}
          {active===1&&<div className="game-panel"><span>ТАБЛИЦА ЛИДЕРОВ</span><div><b>01</b><strong>Игрок</strong><i>профиль</i></div><div><b>02</b><strong>Аноним</strong><i>имя скрыто</i></div><div><b>03</b><strong>Игрок</strong><i>профиль</i></div><button>Получить ежедневный бонус</button></div>}
          {active===2&&<div className="hunter-panel"><span>LEAD HUNTER · ONLINE</span><div className="hunter-metrics"><b>154<small>в базе</small></b><b>10<small>одобрено AI</small></b><b>5<small>отправлено</small></b></div><ol><li><i>85</i><strong>Telegram-бот для проекта</strong><span>TAKE</span></li><li><i>85</i><strong>Дашборд аналитики</strong><span>TAKE</span></li><li><i>85</i><strong>Парсер цен</strong><span>TAKE</span></li></ol></div>}
        </div>
      </article>
    </section>

    <section className="services" id="services"><div className="shell">
      <header className="section-head light"><div><span>02 / Что я делаю</span><h2>Меньше рутины.<br /><em>Больше результата.</em></h2></div><p>Выбираю простое решение, которое быстро окупается — без лишней архитектуры и технического тумана.</p></header>
      <div className="service-grid">
        <article><span>01</span><h3>Telegram-боты</h3><p>Заявки, запись, уведомления и внутренние инструменты.</p><b>от 3 000 ₽</b></article>
        <article><span>02</span><h3>Парсинг данных</h3><p>Цены, товары и открытые данные — сразу в удобную таблицу.</p><b>от 2 000 ₽</b></article>
        <article><span>03</span><h3>Автоматизация</h3><p>Связываю сервисы и убираю повторяющиеся ручные действия.</p><b>от 1 500 ₽</b></article>
      </div>
    </div></section>

    <section className="process shell"><header><span>03 / Процесс</span><h2>От сообщения<br/>до запуска — <em>просто.</em></h2></header><ol><li><b>01</b><div><strong>Разбираемся</strong><p>Вы описываете задачу обычными словами. Я задаю вопросы и предлагаю решение.</p></div></li><li><b>02</b><div><strong>Показываю прототип</strong><p>За 1–3 дня появляется первая рабочая версия, которую уже можно проверить.</p></div></li><li><b>03</b><div><strong>Запускаем</strong><p>Дорабатываю детали, передаю результат и остаюсь на связи после запуска.</p></div></li></ol></section>

    <section className="contact shell" id="contact"><div className="contact-orb">↗</div><span>Связаться</span><h2>Давайте уберём<br/><em>ручную работу.</em></h2><p>Опишите, что приходится повторять каждый день. Я бесплатно скажу, можно ли это автоматизировать, и назову срок.</p><div className="contact-links"><a href="https://t.me/leonid_relaybit" target="_blank" rel="noreferrer"><small>Telegram</small><strong>@leonid_relaybit</strong><b>Написать →</b></a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=releybit@gmail.com" target="_blank" rel="noreferrer"><small>Email</small><strong>releybit@gmail.com</strong><b>Написать →</b></a></div></section>
    <SiteFooter />
  </main>;
}
