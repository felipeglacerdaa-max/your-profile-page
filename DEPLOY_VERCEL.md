# 🚀 Deploy no Vercel + Supabase

Seu site está pronto para rodar **100% automaticamente** no Vercel com dados no Supabase!

---

## 📋 O Que Foi Feito

✅ **API Serverless** - Backend como Serverless Function (`/api/contact`)  
✅ **Frontend** - React Vite pronto para Vercel  
✅ **Supabase** - Banco de dados PostgreSQL  
✅ **CORS** - Configurado para funcionar em qualquer domínio  

---

## 🎯 Passo 1: Preparar GitHub

1. Faça commit de todas as mudanças:
```bash
git add .
git commit -m "Deploy no Vercel + Supabase"
git push origin main
```

2. Se ainda não subiu para GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/your-profile-page.git
git push -u origin main
```

---

## 🌐 Passo 2: Deploy no Vercel

### Opção A: Com GitHub (Automático) ⭐

1. Acesse: **https://vercel.com**
2. Clique em **"Log in with GitHub"**
3. Autorize o Vercel
4. Clique em **"New Project"**
5. Selecione o repositório `your-profile-page`
6. Clique em **"Import"**

### Opção B: Com CLI do Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Siga os prompts (Enter em tudo por padrão).

---

## 🔑 Passo 3: Configurar Variáveis de Ambiente

No dashboard do Vercel:

1. Vá para o projeto
2. **Settings** → **Environment Variables**
3. Adicione estas variáveis (DO SEU `.env`):

```
SUPABASE_URL=https://uoceecsreeiemovrdweo.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
EMAILJS_PUBLIC_KEY=sWfQhVPETYl48Zzpv
EMAILJS_PRIVATE_KEY=4ubbvFfiFO6TMsTBx2KDK
EMAILJS_SERVICE_ID=service_b3w3ggq
EMAILJS_TEMPLATE_ID=template_mo7gme9
```

4. Clique em **"Save"**

---

## 🧪 Passo 4: Verificar o Deploy

1. Aguarde o deploy terminar (2-5 minutos)
2. Você receberá uma URL como: `https://seu-projeto.vercel.app`
3. Acesse a URL e teste o formulário!

---

## ✅ Como Funciona

### Desenvolvimento (localhost)

```bash
npm run dev:all
```

- Frontend: `http://localhost:8080`
- Backend: `http://localhost:3002`
- Chamadas para `/api/contact` → `http://localhost:3002/api/contact`

### Produção (Vercel)

- Frontend: `https://seu-projeto.vercel.app`
- Backend: `https://seu-projeto.vercel.app/api/contact`
- Chamadas para `/api/contact` → Vercel Serverless Function

---

## 📊 Verificar o Status

### Logs do Vercel

1. Dashboard do Vercel
2. Clique no projeto
3. **Deployments** - Ver logs de cada deploy
4. **Functions** - Ver chamadas às APIs

### Supabase

1. Dashboard do Supabase
2. **Table Editor** → **contacts**
3. Veja todos os formulários recebidos

---

## 🔄 Atualizar em Produção

Toda vez que você fizer `git push`:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

**Vercel vai fazer deploy automaticamente!** ✨

---

## 🐛 Troubleshooting

### "Erro de CORS na produção"

A API já tem CORS configurado, mas se falhar:

1. Verifique as variáveis de ambiente no Vercel
2. Veja os logs em **Deployments**
3. Reinicie o deploy com **Redeploy**

### "Contato não foi salvo"

- Verifique se `SUPABASE_URL` e `SUPABASE_KEY` estão corretos
- Vá para Supabase → SQL Editor
- Execute:
```sql
SELECT * FROM contacts LIMIT 10;
```

### "Email não foi enviado"

- Verifique as credenciais do EmailJS
- Teste em: `curl https://seu-projeto.vercel.app/api/contact` (POST)

---

## 💡 Próximas Melhorias (Opcional)

### 1. Domínio Customizado
```
Vercel → Settings → Domains
Adicione seu domínio (ex: seu-site.com.br)
```

### 2. Certificado SSL
Vercel faz automaticamente! 🔒

### 3. Analytics
```
Vercel Dashboard → Analytics
Veja quem acessou seu site
```

### 4. Edge Functions (mais rápido)
Se quiser performance máxima, mude `api/contact.js` para `api/contact.edge.js`

---

## 🎉 Pronto!

Você agora tem:
- ✅ Site rodando 24/7 no Vercel
- ✅ Dados salvos no Supabase
- ✅ Emails sendo enviados
- ✅ Deploy automático com Git Push
- ✅ Domínio grátis (vercel.app)

**Seu site está vivo!** 🚀

---

## 📞 Support

Se tiver dúvidas:
1. Veja os logs do Vercel
2. Verifique as variáveis de ambiente
3. Teste localmente com `npm run dev:all`
