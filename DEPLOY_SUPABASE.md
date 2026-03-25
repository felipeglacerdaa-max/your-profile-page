# 🚀 Deploy: Frontend (Vercel) + Backend (Supabase Edge Functions)

Seu site está pronto para rodar automaticamente com:
- ✅ **Frontend** em Vercel (React/Vite)
- ✅ **Backend** em Supabase Edge Functions
- ✅ **Banco de Dados** em Supabase (PostgreSQL)
- ✅ **Emails** via EmailJS

---

## 📋 Arquitetura

```
┌─────────────────────────────────────────┐
│         Frontend (Vercel)               │
│    https://seu-site.vercel.app          │
└────────────────────┬────────────────────┘
                     │
                     ↓
         ┌──────────────────────┐
         │  Supabase (Tudo)     │
         │  ✅ Database         │
         │  ✅ Edge Functions   │
         │  ✅ Autenticação     │
         └──────────────────────┘
                     │
                     ↓
         ┌──────────────────────┐
         │    EmailJS           │
         │  (Enviar emails)     │
         └──────────────────────┘
```

---

## 🔑 Passo 1: Obter Service Role Key do Supabase

Você tem a **chave pública** (anon), mas precisa da **Service Role Key** para a Edge Function.

1. Acesse: https://app.supabase.com
2. Vá para seu projeto
3. **Settings** → **API**
4. Procure por **"service_role"** (a chave secreta)
5. **Copie essa chave** ⚠️ (não compartilhe!)

---

## 🛠️ Passo 2: Configurar Supabase CLI (Local)

### Instalar Supabase CLI

```bash
npm install -g supabase
```

### Fazer Login

```bash
supabase login
```

Abre browser para autenticar com GitHub.

### Link com seu projeto

Na pasta raiz do projeto:

```bash
supabase link --project-ref uoceecsreeiemovrdweo
```

Confirme autenticação.

---

## 📤 Passo 3: Deploy da Edge Function

```bash
supabase functions deploy contact
```

A função será deployada em: `https://uoceecsreeiemovrdweo.functions.supabase.co/contact`

---

## ⚙️ Passo 4: Adicionar Variáveis de Ambiente no Supabase

1. Vá para: **Supabase Dashboard** → Seu Projeto
2. **Settings** → **Edge Functions** → **Secrets**
3. Adicione estas variáveis:

```
EMAILJS_SERVICE_ID = service_b3w3ggq
EMAILJS_TEMPLATE_ID = template_mo7gme9
EMAILJS_PUBLIC_KEY = sWfQhVPETYl48Zzpv
EMAILJS_PRIVATE_KEY = 4ubbvFfiFO6TMsTBx2KDK
EMAILJS_TO_EMAIL = presencaproo@hotmail.com
```

4. Redeploy a função:

```bash
supabase functions deploy contact
```

---

## 🚀 Passo 5: Deploy Frontend no Vercel

### Prepare GitHub

```bash
git add .
git commit -m "Deploy Vercel + Supabase"
git push origin main
```

### Deploy no Vercel

1. Acesse: https://vercel.com
2. Clique **"New Project"**
3. Selecione seu repositório `your-profile-page`
4. Clique **"Deploy"** (automático!)

---

## ✅ Passo 6: Testar

1. Acesse sua URL Vercel: `https://seu-site.vercel.app`
2. Preencha o formulário
3. Submit
4. Verifique:
   - ✅ Email recebido
   - ✅ Contato em Supabase → Table Editor → contacts

---

## 🔄 Fluxo de Trabalho

### Desenvolvimento Local

```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend (simula Edge Function)
cd server
npm run dev
```

Frontend em: `http://localhost:8080`  
Backend em: `http://localhost:3002`

### Produção

- **Frontend**: Automático com Vercel (a cada `git push`)
- **Backend**: Automático com Supabase (a cada `git push`)

---

## 📝 Estrutura de Pastas

```
seu-projeto/
├── src/                      # Frontend (React)
├── supabase/
│   ├── functions/
│   │   └── contact/
│   │       └── index.ts      # Edge Function (backend)
│   └── config.json           # Config Supabase
├── server/                   # Express (dev local)
├── vercel.json              # Config Vercel
└── package.json             # Dependências
```

---

## 🐛 Troubleshooting

### "Erro ao fazer deploy da Edge Function"

```bash
# Verifique o login
supabase auth

# Tente redeploy
supabase functions deploy contact --no-verify-jwt
```

### "Function não está respondendo"

1. Verifique logs no Supabase Dashboard
2. **Supabase** → **Edge Functions** → **Logs**
3. Procure por erros

### "CORS error no frontend"

Os headers CORS já estão configurados, mas se continuar:

1. Verifique a URL da função
2. Veja se as variáveis de ambiente foram adicionadas
3. Redeploy

### "Email não está sendo enviado"

1. Verifique credenciais do EmailJS no Supabase
2. Veja logs da Edge Function
3. Teste manualmente:

```bash
curl -X POST https://seu.functions.supabase.co/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Teste",
    "email":"seu@email.com",
    "phone":"(11) 99999-9999",
    "message":"Teste"
  }'
```

---

## 📊 Monitorar Edge Functions

Supabase Dashboard:

1. **Seu Projeto** → **Edge Functions**
2. Veja:
   - Invocações
   - Latência
   - Erros
   - Memória usada

---

## 🎯 Próximas Melhorias

### Rate Limiting

Adicione na Edge Function para evitar spam:

```typescript
// Validar IP
const ip = req.headers.get('x-forwarded-for');
// Implementar contagem...
```

### Logging Avançado

```bash
supabase functions logs contact --follow
```

### Webhooks

Quando um contato é inserido, dispare eventos:

```sql
-- Supabase Dashboard → SQL Editor
CREATE TRIGGER contact_webhook
AFTER INSERT ON contacts
EXECUTE FUNCTION supabase_functions.http_request(...);
```

---

## 🎉 Você Está Pronto!

Backend + Frontend rodando automaticamente! 🚀

```
✅ Frontend em Vercel
✅ Backend em Supabase
✅ Banco em Supabase
✅ Deploy automático
✅ 100% serverless
✅ Sempre ligado
```

**Próximo passo**: Fazer `git push` e relaxar! 😎
