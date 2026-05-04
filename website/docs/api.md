---
title: API-методы
sidebar_position: 9
---

Описание контракта между фронтендом и бэкендом. Полная интерактивная документация — [API Reference](/docs/api-spec).

Основные группы методов:
- **Поиск курсов:** `POST /courses/search`
- **Курсы:** `GET /courses/{courseId}`
- **Отзывы:** `GET/POST /courses/{courseId}/reviews`
- **Запись на курс:** `POST /enrollments`
- **Черновики:** создание (`POST /courses/{courseId}/drafts`), получение/обновление (`GET/PATCH /courses/{courseId}/drafts/{draftId}`)
- **Материалы черновика:** `POST /courses/{courseId}/drafts/{draftId}/materials`
- **Генерация контента:** `POST /courses/{courseId}/drafts/{draftId}/generate`
- **Публикация:** `POST /courses/{courseId}/drafts/{draftId}/publish`
- **История черновика:** `GET /courses/{courseId}/drafts/{draftId}/history`

Авторизация: JWT в заголовке `Authorization: Bearer <token>`. Для подтверждения выбора используется `X-Idempotency-Key`.