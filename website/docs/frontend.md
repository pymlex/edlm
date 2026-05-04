---
title: Фронтенд
sidebar_position: 8
---

## Экраны и роуты
| Экран | Роут | Назначение |
|---|---|---|
| Поиск и фильтрация курсов | `/courses` | Поиск, фильтры, просмотр карточек результатов |
| Страница курса | `/courses/{courseId}` | Просмотр деталей, отзывы, запись, переход в редактор |
| Редактор черновика | `/courses/{courseId}/drafts/{draftId}` | Редактирование, загрузка материалов, генерация, сохранение, публикация |

Wireframes: [Unidraw](https://unidraw.io/app/board/fd314582f2991355389c?allow_guest=true).

## Источники данных и endpoints
| Экран | Действие | Endpoint | Метод |
|---|---|---|---|
| Поиск курсов | Поиск и фильтрация | `/courses/search` | `POST` |
| Поиск курсов | Открыть карточку | `/courses/{courseId}` | `GET` |
| Страница курса | Получить отзывы | `/courses/{courseId}/reviews` | `GET` |
| Страница курса | Добавить отзыв | `/courses/{courseId}/reviews` | `POST` |
| Страница курса | Записаться | `/enrollments` | `POST` |
| Страница курса | История изменений | `/courses/{courseId}/drafts/{draftId}/history` | `GET` |
| Редактор | Получить черновик | `/courses/{courseId}/drafts/{draftId}` | `GET` |
| Редактор | Обновить черновик | `/courses/{courseId}/drafts/{draftId}` | `PATCH` |
| Редактор | Загрузить материалы | `/courses/{courseId}/drafts/{draftId}/materials` | `POST` |
| Редактор | Генерация через LLM | `/courses/{courseId}/drafts/{draftId}/generate` | `POST` |
| Редактор | Публикация | `/courses/{courseId}/drafts/{draftId}/publish` | `POST` |