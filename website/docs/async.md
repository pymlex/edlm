---
title: Асинхронное взаимодействие
sidebar_position: 12
---

## Сценарий
При публикации курса или отправке на рецензию `Course Service` асинхронно отправляет событие в RabbitMQ. `Notification Service` получает событие и рассылает уведомления автору и рецензентам.

@startuml
autonumber
actor Author
participant "Course Service" as CS
participant "RabbitMQ" as MQ
participant "Notification Service" as NS
participant "User (Reviewer)" as Reviewer

Author -> CS: Publish / Send for review
CS -> CS: Change status
CS -> MQ: Publish CourseLifecycleEvent
note right of CS: Ответ не ожидается
MQ -> NS: Deliver event
NS -> NS: Process
NS -> Author: Notify
NS -> Reviewer: Notify
@enduml

## Технология
RabbitMQ — подходит для небольших событий, JSON, пропускная способность до 4–20 тыс. сообщений/сек.

## Контракт AsyncAPI (событие)
```yaml
asyncapi: 3.1.0
info:
  title: Course Lifecycle Events API
  version: 1.0.0
defaultContentType: application/json
servers:
  rabbitmq:
    host: 'rabbitmq:5672'
    protocol: amqp
channels:
  course.lifecycle.events:
    address: course.lifecycle.events
    messages:
      publishCourseLifecycleEvent.message:
        $ref: '#/components/messages/CourseLifecycleEvent'
    description: События публикации и отправки на рецензию
components:
  messages:
    CourseLifecycleEvent:
      name: CourseLifecycleEvent
      title: Событие жизненного цикла курса
      payload:
        $ref: '#/components/schemas/CourseLifecycleEvent'
  schemas:
    CourseLifecycleEvent:
      type: object
      required: [eventId, eventType, occurredAt, course, recipients]
      properties:
        eventId:
          type: string
          format: uuid
        eventType:
          type: string
          enum: [course_published, course_sent_for_review]
        occurredAt:
          type: string
          format: date-time
        course:
          type: object
          properties:
            id: { type: string, format: uuid }
            title: { type: string }
            authorId: { type: string, format: uuid }
            versionId: { type: string, format: uuid }
            status: { type: string, enum: [draft, in_review, published] }
        recipients:
          type: array
          items:
            type: object
            properties:
              userId: { type: string, format: uuid }
              role: { type: string, enum: [author, reviewer] }
```