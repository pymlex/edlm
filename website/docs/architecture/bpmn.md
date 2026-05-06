---
title: Моделирование в BPMN
sidebar_position: 6
---

Процесс «Публикация материала» смоделирован в Camunda Modeler 5.45, Camunda v8.

Диаграмма: [diagram_10.png](https://unidraw.io/app/board/fd314582f2991355389c?allow_guest=true) (внешняя ссылка).  
Исходный BPMN: diagram_10.bpmn.

## DMN-таблица маршрутизации
Используется для определения маршрута подготовки материала на основе:
- готовности контента,
- чувствительности темы,
- доступности LLM.

Возможные маршруты: `REVISE`, `AUTO_GENERATE`, `MANUAL_MODERATION`, `MANUAL_EDIT`.  
Таблица DMN: см. diagram.dmn в репозитории курса.