---
title: Асинхронное взаимодействие
sidebar_position: 4
---

## Сценарий

Асинхронное взаимодействие в системе реализуется между `Course Service` и `Notification Service` в сценарии публикации курса и отправки его на рецензию. После изменения статуса курса сервис публикации отправляет событие в брокер сообщений и не ждёт ответа от сервиса уведомлений. Сервис уведомлений получает событие отдельно и рассылает уведомления автору и рецензентам.

```plantuml
@startuml
autonumber
actor Author
participant "Course Service" as CS
participant "RabbitMQ" as MQ
participant "Notification Service" as NS
participant "User (Reviewer)" as Reviewer

Author -> CS: Publish course / Send for review
CS -> CS: Change course status
CS -> MQ: Publish CourseLifecycleEvent
note right of CS
Асинхронная отправка события.
Ответ от Notification Service не ожидается.
end note
MQ -> NS: Deliver CourseLifecycleEvent
NS -> NS: Process event
NS -> Author: Notify
NS -> Reviewer: Notify
@enduml
````

## Выбор технологии

Для данного взаимодействия выбран `RabbitMQ`. Для платформы он подходит лучше всего, потому что событие небольшое, формат обмена JSON, а операция не требует немедленного ответа в рамках пользовательского запроса.

## Контракт AsyncAPI

<iframe
  src="/edlm/asyncapi/course-lifecycle.html"
  title="AsyncAPI"
  loading="lazy"
  style={{
    width: '100%',
    height: '1200px',
    border: '0',
    borderRadius: '12px',
  }}
></iframe>