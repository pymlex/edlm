---
title: Хранение данных
sidebar_position: 11
---

## Сущности
| Сущность | Основные атрибуты | Характер |
|---|---|---|
| Пользователь | id, role, displayName, email, avatarUrl, bio, createdAt, status | Транзакционные |
| AuthAccount | id, userId, login, passwordHash, provider, isActive, createdAt | Транзакционные |
| Session | id, userId, refreshTokenHash, deviceInfo, createdAt, expiresAt | Транзакционные |
| Курс | id, authorId, title, description, categoryId, difficulty, tags, price, rating, status | Транзакционные |
| Черновик | id, courseId, title, status, updatedAt | Транзакционные |
| Версия черновика | id, draftId, versionNumber, parentVersionId, contentSnapshot, action | Транзакционные |
| Материал | id, draftId, type, title, fileKey, mimeType, sizeBytes, orderIndex | Транзакционные |
| Отзыв | id, enrollmentId, rating, text, status, createdAt | Транзакционные |
| Запись на курс | id, userId, courseId, status, enrolledAt | Транзакционные |

## Технологии
- **Основное хранилище:** реляционная БД (PostgreSQL/MySQL).
- **Файлы:** объектное хранилище (S3/MinIO).
- **Поиск:** Elasticsearch/OpenSearch или PostgreSQL FTS.
- **Аналитика:** ClickHouse/BigQuery/Snowflake.
- **История версий:** реляционная БД (adjacency list), графовая БД не требуется.

## Обоснование
- Транзакционная целостность, простые связи.
- Файлы — отдельно, метаданные — в БД.
- Поиск по тексту и фильтрам — индекс.
- Аналитика — колоночная БД.