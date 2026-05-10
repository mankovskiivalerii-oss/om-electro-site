import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Contact,
  Flame,
  Monitor,
  Radio,
  ShieldCheck,
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

const steps = ['Обсуждение задачи и сбор требований', 'Выезд на объект и техническое обследование', 'Подготовка решения и согласование объёма работ', 'Выполнение монтажа и пусконаладка', 'Сдача работ и дальнейшее обслуживание'];

const portfolioProjects = [
  {
    id: 1,
    title: 'Центр кузовного ремонта',
    location: 'Санкт-Петербург',
    category: 'Промышленный объект',
    works: ['Электромонтажные работы'],
    description: 'Проведена замена силовых сетей на большей части объекта, демонтаж старого электроосвещения и монтаж нового электроосвещения.',
    result: 'Работы сданы заказчику.',
    images: [
      '/portfolio/object-1/01.jpg', '/portfolio/object-1/02.jpg', '/portfolio/object-1/03.jpg', '/portfolio/object-1/04.jpg', '/portfolio/object-1/05.jpg',
      '/portfolio/object-1/06.jpg', '/portfolio/object-1/07.jpg', '/portfolio/object-1/08.jpg', '/portfolio/object-1/09.jpg', '/portfolio/object-1/10.jpg',
    ],
  },
  {
    id: 2,
    title: 'Деловой центр',
    location: 'Санкт-Петербург',
    category: 'Деловой офисный центр',
    works: ['Электромонтажные работы', 'Монтаж слаботочных сетей'],
    description: 'Выполнен монтаж электрических и слаботочных сетей на объекте заказчика в соответствии с проектной документацией.',
    result: 'Работы выполнены в соответствии с проектом и сданы заказчику.',
    images: [
      '/portfolio/object-2/01.jpg', '/portfolio/object-2/02.jpg', '/portfolio/object-2/03.jpg', '/portfolio/object-2/04.jpg', '/portfolio/object-2/05.jpg',
      '/portfolio/object-2/06.jpg', '/portfolio/object-2/07.jpg', '/portfolio/object-2/08.jpg', '/portfolio/object-2/09.jpg', '/portfolio/object-2/10.jpg',
    ],
  },
  {
    id: 3,
    title: 'Площадка для хранения автомобилей',
    location: 'Ленинградская область',
    category: 'Автомобильная стоянка',
    works: [
      'Корректировка проекта электроснабжения',
      'Корректировка проекта слаботочных сетей',
      'Электромонтажные работы',
      'Монтаж слаботочных сетей',
      'Сварочные работы',
      'Пусконаладочные работы',
    ],
    description: 'Работы проводились в зимний период на открытом пространстве. Выполнена корректировка проектных решений, электромонтажные и слаботочные работы, сварочные и пусконаладочные работы.',
    result: 'Работы сданы заказчику.',
    images: [
      '/portfolio/object-3/01.jpg', '/portfolio/object-3/02.jpg', '/portfolio/object-3/03.jpg', '/portfolio/object-3/04.jpg', '/portfolio/object-3/05.jpg',
      '/portfolio/object-3/06.jpg', '/portfolio/object-3/07.jpg', '/portfolio/object-3/08.jpg', '/portfolio/object-3/09.jpg', '/portfolio/object-3/10.jpg',
    ],
  },
  {
    id: 4,
    title: 'Деловой центр',
    location: 'Санкт-Петербург',
    category: 'Коммерческий объект',
    works: ['Электромонтажные работы', 'Монтаж слаботочных сетей'],
    description: 'Выполнен монтаж электрических и слаботочных сетей в соответствии с проектной документацией.',
    result: 'Работы сданы заказчику.',
    images: [
      '/portfolio/object-4/01.jpg', '/portfolio/object-4/02.jpg', '/portfolio/object-4/03.jpg', '/portfolio/object-4/04.jpg', '/portfolio/object-4/05.jpg',
      '/portfolio/object-4/06.jpg', '/portfolio/object-4/07.jpg', '/portfolio/object-4/08.jpg', '/portfolio/object-4/09.jpg', '/portfolio/object-4/10.jpg',
    ],
  },
  {
    id: 5,
    title: 'Автосалон дилерского центра',
    location: 'Санкт-Петербург',
    category: 'Коммерческий объект',
    works: [
      'Корректировка проекта электроснабжения',
      'Электромонтажные работы',
      'Монтаж слаботочных сетей',
      'Установка оборудования',
      'Пусконаладочные работы',
    ],
    description: 'Выполнена корректировка проекта электроснабжения, электромонтажные работы, монтаж слаботочных сетей, установка оборудования и пусконаладочные работы.',
    result: 'Работы сданы заказчику.',
    images: [
      '/portfolio/object-5/01.jpg', '/portfolio/object-5/02.jpg', '/portfolio/object-5/03.jpg', '/portfolio/object-5/04.jpg', '/portfolio/object-5/05.jpg',
      '/portfolio/object-5/06.jpg', '/portfolio/object-5/07.jpg', '/portfolio/object-5/08.jpg', '/portfolio/object-5/09.jpg', '/portfolio/object-5/10.jpg',
    ],
  },
];

const logoCandidates = ['/logo.jpg', '/logo.png', '/1_1.jpg'];

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [logoIndex, setLogoIndex] = useState(0);
  const [isLogoAvailable, setIsLogoAvailable] = useState(true);
  const [requestMessage, setRequestMessage] = useState('');

  const activeProject = useMemo(() => portfolioProjects.find((project) => project.id === activeProjectId), [activeProjectId]);

  const handleLogoError = () => {
    if (logoIndex < logoCandidates.length - 1) {
      setLogoIndex((prev) => prev + 1);
      return;
    }

    setIsLogoAvailable(false);
  };

  const handleRequestClick = () => {
    setRequestMessage('Заявка подготовлена. Мы свяжемся с вами после подключения формы.');
  };

  return (
    <div className="text-graphite">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-base flex min-h-[80px] items-center justify-between gap-4 py-2 md:min-h-[96px]">
          <a href="#top" className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-slate-200 sm:h-16 sm:w-16 md:h-20 md:w-20">
              {isLogoAvailable ? (
                <img src={logoCandidates[logoIndex]} alt="Логотип ООО «Электро-монтажная компания “ОМ”»" className="h-full w-full object-cover" onError={handleLogoError} />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-100 text-[10px] font-semibold text-slate-500">ОМ</div>
              )}
            </div>
            <span className="max-w-[220px] text-[11px] font-semibold leading-tight sm:max-w-[280px] sm:text-sm md:max-w-none md:text-base">ООО «Электро-монтажная компания “ОМ”»</span>
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
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {portfolioProjects.map((project) => (
              <article key={project.id} className="portfolio-card group">
                <ProjectImage src={project.images[0]} title={project.title} />
                <div className="mt-3 space-y-2">
                  <h3 className="text-base font-semibold leading-tight">{project.title}</h3>
                  <p className="text-sm text-slate-600">{project.location}</p>
                  <p className="text-sm"><span className="font-semibold">Тип:</span> {project.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.works.slice(0, 2).map((work) => (
                      <span key={work} className="work-tag">{work}</span>
                    ))}
                  </div>
                  <p className="text-xs leading-5 text-slate-700"><span className="font-semibold">Результат:</span> {project.result}</p>
                  <button type="button" className="btn-secondary px-3 py-2 text-xs" onClick={() => setActiveProjectId((prev) => (prev === project.id ? null : project.id))}>
                    Подробнее <ChevronDown size={16} className={`transition ${activeProjectId === project.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {activeProject && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-2xl font-semibold">{activeProject.title}</h3>
              <p className="mt-3 text-slate-700">{activeProject.description}</p>
              <p className="mt-3 text-sm text-slate-600">{activeProject.location} · {activeProject.category}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {activeProject.works.map((work) => <li key={work}>{work}</li>)}
              </ul>
              <p className="mt-4 text-sm text-slate-700"><span className="font-semibold">Результат:</span> {activeProject.result}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {activeProject.images.map((image, index) => (
                  <ProjectImage key={image} src={image} title={`${activeProject.title} — фото ${index + 1}`} compact />
                ))}
              </div>
            </div>
          )}
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
                ООО «Электро-монтажная компания “ОМ”» выполняет электромонтажные и слаботочные работы в Санкт-Петербурге и Ленинградской области.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Реквизиты</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>ООО «Электро-монтажная компания “ОМ”»</li>
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
                <p><span className="font-semibold">Телефон:</span> <a className="text-brand" href="tel:+79111883808">+7 911 188-38-08</a></p>
                <p><span className="font-semibold">Email:</span> <a className="text-brand" href="mailto:vadimzepis@gmail.com">vadimzepis@gmail.com</a></p>
              </div>
            </div>
            <form id="request" className="card space-y-4">
              <h3 className="text-base font-semibold leading-tight">Форма заявки</h3>
              <input className="input" type="text" placeholder="Ваше имя" />
              <input className="input" type="tel" placeholder="Телефон" />
              <textarea className="input min-h-28" placeholder="Кратко опишите задачу" />
              <button type="button" className="btn-primary w-full justify-center" onClick={handleRequestClick}>
                Отправить заявку
              </button>
              {requestMessage && <p className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">{requestMessage}</p>}
              <a className="btn-secondary w-full justify-center" href="mailto:vadimzepis@gmail.com?subject=Заявка%20с%20сайта%20ООО%20Электро-монтажная%20компания%20ОМ">
                Написать на email напрямую
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="container-base flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} ООО «Электро-монтажная компания “ОМ”»</p>
          <div className="flex flex-col items-center gap-1 md:items-end">
            <p className="inline-flex items-center gap-2"><BriefcaseBusiness size={16} /> Электромонтаж и слаботочные системы</p>
            <p><a className="text-brand" href="tel:+79111883808">+7 911 188-38-08</a> · <a className="text-brand" href="mailto:vadimzepis@gmail.com">vadimzepis@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectImage({ src, title, compact = false }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-100 px-3 text-center text-sm text-slate-500 ${compact ? 'h-20' : 'h-28'}`}>
        Фото будет добавлено
      </div>
    );
  }

  return <img src={src} alt={title} className={`w-full rounded-xl object-cover ${compact ? 'h-20' : 'h-28'}`} loading="lazy" onError={() => setHasError(true)} />;
}
