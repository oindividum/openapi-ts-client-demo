# 📂 Структура проекта

```
openapi-ts-client-demo/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── node_modules/
│
├── src/
│   └── index.ts
│
└── clients/
    └── ts-fetch/
        ├── .openapi-generator/
        ├── apis/
        ├── models/
        ├── runtime.ts
        ├── .openapi-generator-ignore
        └── index.ts (если есть)
```

---

# 📁 Описание директорий и файлов

## **Корень проекта**
- **package.json** — конфигурация проекта, зависимости, скрипты.  
- **package-lock.json** — фиксирует версии зависимостей.  
- **tsconfig.json** — настройки TypeScript.  
- **node_modules/** — установленные библиотеки.

---

## **src/** — основной код
- **index.ts** — пример использования сгенерированного клиента:  
  импорт API‑классов, создание конфигурации, вызов методов (`getUsers()` и т.д.).
