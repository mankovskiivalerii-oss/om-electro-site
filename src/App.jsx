import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  Contact,
  Flame,
  Monitor,
  Radio,
  ShieldCheck,
  Siren,
  UserCheck,
  Video,
  Wrench,
} from 'lucide-react';

const services = [
  { icon: Wrench, title: 'Электромонтажные работы', text: 'Монтаж и модернизация электросетей на объектах различного назначения.' },
  { icon: Radio, title: 'Слаботочные сети', text: 'Проектирование, монтаж и техническое обслуживание слаботочных систем.' },
  { icon: ShieldCheck, title: 'Охранная сигнализация', text: 'Внедрение решений для контроля и защиты помещений и периметра.' },
  { icon: Flame, title: 'Пожарная сигнализация', text: 'Системы раннего обнаружения и оповещения о пожарной опасности.' },
  { icon: Contact, title: 'СКУД', text: 'Системы контроля и управления доступом для офисов, складов и производств.' },
  { icon: Video, title: 'Видеонаблюдение', text: 'Проектирование и монтаж систем внутреннего и уличного видеонаблюдения.' },
  { icon: Monitor, title: 'СКС', text: 'Структурированные кабельные сети для стабильной IT-инфраструктуры.' },
  { icon: ClipboardList, title: 'Инженерные системы', text: 'Регламентное обслуживание и поддержка инженерных систем объекта.' },
];

const portfolioItems = ['Бизнес-центр', 'Производственное помещение', 'Складской комплекс', 'Торговое пространство', 'Офисный объект'];

const steps = ['Обсуждение задачи и сбор требований', 'Выезд на объект и техническое обследование', 'Подготовка решения и согласование объёма работ', 'Выполнение монтажа и пусконаладка', 'Сдача работ и дальнейшее обслуживание'];

const logoPath = '/logo.jpg';

export default function App() {
  return (
    <div className="text-graphite">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-base flex items-center justify-between gap-4 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoPath}
              alt="Логотип ООО Электромонтажная компания ОМ"
              className="h-10 w-auto rounded"
              onError={(e) => {
                e.currentTarget.src = '/logo.png';
              }}
            />
            <span className="hidden text-sm font-semibold md:block">ООО «ЭК “ОМ”»</span>
          </a>
          <nav className="hidden gap-6 text-sm lg:flex">
            <a href="#services" className="hover:text-brand">Услуги</a>
            <a href="#portfolio" className="hover:text-brand">Портфолио</a>
            <a href="#about" className="hover:text-brand">О компании</a>
            <a href="#contacts" className="hover:text-brand">Контакты</a>
          </nav>
          <a href="#request" className="btn-primary">Обсудить объект</a>
        </div>
      </header>

      <main id="top">
        <section className="bg-slate-50">
          <div className="container-base grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-brand">
                <Building2 size={16} /> Санкт-Петербург и Ленинградская область
              </p>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                Электромонтажные и слаботочные работы в Санкт-Петербурге и Ленинградской области
              </h1>
              <p className="mt-5 max-w-xl text-slate-600">
                Выполняем работы под задачи бизнеса: от проектирования и монтажа до регулярного технического обслуживания систем.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#request" className="btn-primary">Оставить заявку</a>
                <a href="#services" className="btn-secondary">Смотреть услуги</a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="mb-4 text-xl font-semibold">Ключевые направления</h2>
              <ul className="grid gap-3 text-sm text-slate-700">
                {services.slice(0, 5).map(({ title }) => (
                  <li key={title} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand" /> {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="container-base py-16 md:py-20">
          <h2 className="section-title">Услуги</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card">
                <Icon className="mb-4 text-brand" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container-base">
            <h2 className="section-title">Кому подходим</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {['Коммерческой недвижимости', 'Промышленным и складским объектам', 'Офисным и административным площадкам'].map((item) => (
                <div key={item} className="card flex items-start gap-3">
                  <UserCheck className="mt-1 text-brand" size={20} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="container-base py-16 md:py-20">
          <h2 className="section-title">Портфолио</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {portfolioItems.map((item, i) => (
              <article key={item} className="card">
                <p className="text-xs uppercase text-slate-500">Объект {i + 1}</p>
                <h3 className="mt-2 font-semibold">{item}</h3>
                <p className="mt-3 text-sm text-slate-600">Карточка-заглушка для демонстрации структуры реализованных объектов.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container-base">
            <h2 className="section-title">Преимущества</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {['Комплексный подход', 'Практический опыт в слаботочных системах', 'Прозрачные этапы работ', 'Сервисное сопровождение'].map((item) => (
                <div key={item} className="card">
                  <BadgeCheck className="text-brand" />
                  <p className="mt-3 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-base py-16 md:py-20">
          <h2 className="section-title">Этапы работы</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {steps.map((step, i) => (
              <div key={step} className="card flex items-start gap-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-brand">{i + 1}</span>
                <p className="text-sm text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-50 py-16 md:py-20">
          <div className="container-base grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="section-title">О компании</h2>
              <p className="mt-4 text-slate-700">
                ООО «Электромонтажная компания “ОМ”» выполняет электромонтажные и слаботочные работы в Санкт-Петербурге и Ленинградской области.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Реквизиты</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>ООО «Электромонтажная компания “ОМ”»</li>
                <li>ИНН: 7806633410</li>
                <li>ОГРН: 1267800000698</li>
                <li>КПП: 780601001</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container-base py-16">
          <div className="rounded-2xl bg-brand px-6 py-10 text-white md:px-10">
            <h2 className="text-2xl font-bold md:text-3xl">Готовы обсудить ваш объект?</h2>
            <p className="mt-3 max-w-2xl text-orange-50">Подберём оптимальное решение под требования объекта и формат эксплуатации.</p>
            <a href="#request" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-brand transition hover:bg-orange-50">
              Обсудить объект <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="contacts" className="bg-slate-50 py-16 md:py-20">
          <div className="container-base grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="section-title">Контакты</h2>
              <p className="mt-4 text-slate-700">Регион работы: Санкт-Петербург и Ленинградская область.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p><span className="font-semibold">Телефон:</span> <a className="text-brand" href="tel:+79990000000">+7 (999) 000-00-00</a></p>
                <p><span className="font-semibold">Email:</span> <a className="text-brand" href="mailto:info@om-electro.ru">info@om-electro.ru</a></p>
              </div>
            </div>
            <form id="request" className="card space-y-4">
              <h3 className="text-lg font-semibold">Форма заявки</h3>
              <input className="input" type="text" placeholder="Ваше имя" />
              <input className="input" type="tel" placeholder="Телефон" />
              <textarea className="input min-h-28" placeholder="Кратко опишите задачу" />
              <button type="button" className="btn-primary w-full justify-center">
                Отправить заявку
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="container-base flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} ООО «Электромонтажная компания “ОМ”»</p>
          <p className="inline-flex items-center gap-2"><BriefcaseBusiness size={16} /> Электромонтаж и слаботочные системы</p>
        </div>
      </footer>
    </div>
  );
}
