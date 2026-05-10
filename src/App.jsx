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

const portfolioProjects = Array.from({ length: 5 }, (_, i) => {
  const objectNumber = i + 1;

  return {
    id: objectNumber,
    title: `Объект ${objectNumber}: временное название`,
    location: 'Санкт-Петербург / Ленинградская область',
    category: 'Тип объекта (уточняется)',
    works: ['Электромонтажные работы', 'Слаботочные системы'],
    description: `Краткое описание объекта ${objectNumber}. Данные будут уточнены после получения финальных материалов.`,
    result: 'Смонтированы основные системы, объект подготовлен к стабильной эксплуатации.',
    images: Array.from({ length: 10 }, (__unused, imageIndex) => `/portfolio/object-${objectNumber}/${String(imageIndex + 1).padStart(2, '0')}.jpg`),
  };
});

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
        <div className="container-base flex items-center justify-between gap-4 py-4">
          <a href="#top" className="flex items-center gap-3">
            {isLogoAvailable ? (
              <img src={logoCandidates[logoIndex]} alt="Логотип ООО «Электро-монтажная компания “ОМ”»" className="h-9 w-auto object-contain sm:h-10 md:h-12" onError={handleLogoError} />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded bg-slate-100 text-[10px] font-semibold text-slate-500 sm:h-10 sm:w-10 md:h-12 md:w-12">ОМ</div>
            )}
            <span className="text-xs font-semibold leading-tight sm:text-sm md:text-base">ООО «Электро-монтажная компания “ОМ”»</span>
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
                    {project.works.map((work) => (
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
