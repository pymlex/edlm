---
title: UML-диаграммы
sidebar_position: 7
---

## Use-case диаграмма

@startuml
left to right direction
skinparam packageStyle rectangle

actor "Пользователь" as User
actor "Автор" as Author
actor "Рецензент" as Reviewer

Author <|-- User
Reviewer <|-- User

package "Платформа образовательных материалов" {
  usecase "Сгенерировать\nчерновик курса" as UC1
  usecase "Редактировать\nкурс" as UC2
  usecase "Получить\nподсказки ИИ" as UC3
  usecase "Опубликовать\nкурс" as UC4
  usecase "Проверить готовность\nк публикации" as UC5
  usecase "Отправить на\nрецензию" as UC6
  usecase "Поиск\nкурса" as UC7
  usecase "Записаться\nна курс" as UC8
  usecase "Оплатить\nдоступ" as UC9
  usecase "Оценить\nкурс" as UC10
  usecase "Рецензировать\nкурс" as UC11
}

Author --> UC1
Author --> UC2
Author --> UC4
Author --> UC6

User --> UC7
User --> UC8
User --> UC10

Reviewer --> UC11
UC2 <.. UC3 : extend
UC4 ..> UC5 : include
UC8 <.. UC9 : extend
@enduml

## Sequence-диаграмма: UC-4 Публикация и рецензия

@startuml
title UC-4 Публикация курса и инициирование экспертной рецензии

actor Автор as Author
boundary "Авторский интерфейс" as AUI
control "Course Service" as CS
participant "Рецензент" as Reviewer
boundary "Интерфейс рецензента" as RUI
participant "Сервис уведомлений" as NS

Author -> AUI : Отправить курс на публикацию
AUI -> CS : Передать курс
CS -> CS : Проверить готовность

alt Курс можно опубликовать сразу
  CS -> CS : Опубликовать
  CS -> NS : Уведомить автора
  NS --> Author : Курс опубликован
  CS --> AUI : Статус обновлён
else Нужна рецензия
  CS -> Reviewer : Назначить рецензию
  CS -> NS : Уведомить рецензента
  NS --> Reviewer : Курс отправлен на рецензию
  Reviewer -> RUI : Открыть курс
  Reviewer -> RUI : Передать рецензию
  RUI -> CS : Обновить статус и комментарий
  CS -> CS : Сохранить рецензию
  CS -> NS : Уведомить автора
  NS --> Author : Рецензия получена
  CS --> AUI : Курс отправлен на доработку
end
@enduml