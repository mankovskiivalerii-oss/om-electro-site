# ООО «Электро-монтажная компания “ОМ”» — лендинг

Одностраничный сайт на React + Vite + Tailwind CSS для компании, выполняющей электромонтажные и слаботочные работы в Санкт-Петербурге и Ленинградской области.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Публикация

Сайт публикуется через GitHub Actions при push в `main`.

## Настройка формы

Для отправки заявок через Formspree добавьте переменную окружения:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Подключение домена

GitHub → **Settings** → **Pages** → **Custom domain**.

## Стек

- React
- Vite
- Tailwind CSS
- lucide-react
