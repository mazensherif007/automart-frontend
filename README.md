# Automart Frontend

واجهة Next.js منفصلة لأدوار Trader وSupplier وAdmin.

## التشغيل

```bash
cp .env.example .env.local
npm install
npm run dev
```

افتح `http://localhost:3000`، وسيتم تحويلك إلى `/en/trader/dashboard`.

## ربط الـBackend

غيّر `NEXT_PUBLIC_API_URL` داخل `.env.local`. ملفات الاتصال موجودة في `src/lib/api`، وكل Feature يحتوي مجلد `api` و`hooks` للتكامل الفعلي.

## ملاحظات

- البيانات الحالية Mock لتشغيل التصميم قبل توصيل الـBackend.
- المسارات: `/en/trader/dashboard` و`/en/supplier/dashboard` و`/en/admin/dashboard`.
- غيّر `en` إلى `ar` لتجربة RTL.
