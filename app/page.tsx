'use client';
import { useEffect, useState } from 'react';

const projects = [
  { no:'01', type:'LIVE · TELEGRAM', title:'Local Leads Scout', text:'Находит небольшие тематические сообщества, оценивает размер и присылает лучшие варианты в Telegram.', tags:['Telethon','Python','SQLite'], tone:'acid' },
  { no:'02', type:'LAB · DATA', title:'Price Pulse', text:'Собирает цены конкурентов, складывает историю в таблицу и сообщает о важных изменениях.', tags:['Parsing','Sheets API','Alerts'], tone:'dark' },
  { no:'03', type:'LAB · AUTOMATION', title:'Booking Flow', text:'Мини-бот для записи клиентов: услуги, свободное время, подтверждение и напоминание.', tags:['Telegram Bot','Calendar','UX'], tone:'paper' },
];

export default function Home() {
  const [time, setTime] = useState('00:00:00');
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('ru-RU'));
    tick(); const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <main>
    <nav className="nav shell">
      <a className="brand" href="#top"><span className="brand-mark">N</span><span>NORTHLINE</span></a>
      <div className="nav-links"><a href="#work">Работы</a><a href="#services">Услуги</a><a className="nav-cta" href="#contact">Обсудить задачу</a></div>
    </nav>
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
      <header className="section-head"><div><span>01 / Избранные работы</span><h2>Не обещания.<br /><em>Работающие системы.</em></h2></div><p>Небольшие продукты с ясной пользой. Каждый можно открыть, понять и запустить без длинных инструкций.</p></header>
      <div className="project-tabs" role="tablist">{projects.map((p,i)=><button key={p.no} className={active===i?'active':''} onClick={()=>setActive(i)}><span>{p.no}</span>{p.title}</button>)}</div>
      <article className={`project-stage ${projects[active].tone}`}>
        <div className="project-info"><span>{projects[active].type}</span><h3>{projects[active].title}</h3><p>{projects[active].text}</p><div className="tags">{projects[active].tags.map(t=><i key={t}>{t}</i>)}</div></div>
        <div className="project-demo" aria-hidden="true">
          <div className="demo-bar"><i/><i/><i/><b>{projects[active].no}.project</b></div>
          {active===0&&<div className="radar"><span className="ring r1"/><span className="ring r2"/><span className="ring r3"/><span className="sweep"/><i className="dot d1"/><i className="dot d2"/><i className="dot d3"/><strong>28</strong><small>групп найдено</small></div>}
          {active===1&&<div className="chart"><div className="chart-stats"><span>Цена сейчас<strong>2 490 ₽</strong></span><span>Изменение<strong className="up">−12%</strong></span></div><div className="bars">{[34,48,42,66,54,79,62,88,72,95].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div>}
          {active===2&&<div className="booking"><span>Выберите время</span><div>{['10:00','11:30','13:00','15:30','17:00','18:30'].map((t,i)=><b className={i===3?'chosen':''} key={t}>{t}</b>)}</div><button>Записаться →</button></div>}
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

    <section className="contact shell" id="contact"><div className="contact-orb">↗</div><span>Есть задача?</span><h2>Давайте уберём<br/><em>ручную работу.</em></h2><p>Опишите, что приходится повторять каждый день. Я бесплатно скажу, можно ли это автоматизировать, и назову срок.</p><button onClick={async()=>{await navigator.clipboard.writeText('Привет! Хочу обсудить небольшую задачу по автоматизации.');setCopied(true);window.setTimeout(()=>setCopied(false),1800)}}>{copied?'Текст скопирован ✓':'Скопировать начало сообщения'}</button></section>
    <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">N</span><span>NORTHLINE</span></a><p>Студия автоматизации и цифровых решений.</p><a href="#top">Наверх ↑</a></footer>
  </main>;
}
