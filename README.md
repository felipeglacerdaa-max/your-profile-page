# Seu Portfólio e Serviços

Site profissional de portfólio e orçamentos construído com React, Vite e TypeScript.

## 🚀 Quick Start

### 1️⃣ Instale as dependências

```bash
npm install
npm run server:install
```

### 2️⃣ Configure o servidor (servidor de email)

```bash
cd server
cp .env.example .env
# Edite o .env com suas credenciais do EmailJS
```

### 3️⃣ Inicie tudo com um comando

```bash
npm run dev:all
```

Isso inicia simultaneamente:
- **Frontend**: http://localhost:8080 (Vite)
- **Backend**: http://localhost:3002 (Express + EmailJS)

---

## 📚 Como Rodar

### Modo Desenvolvimento (Recomendado)

**Opção A - Rodar tudo de uma vez** ⭐

```bash
npm run dev:all
```

**Opção B - Rodar em terminais separados**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server:dev
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia só frontend (porta 8080) |
| `npm run server:dev` | Inicia só servidor (porta 3002) |
| `npm run dev:all` | ⭐ Inicia frontend + servidor (RECOMENDADO) |
| `npm run build` | Build para produção |
| `npm run lint` | Lint com ESLint |
| `npm run test` | Testa com Vitest |

---

## ⚙️ Configuração do Email

### EmailJS (Fallback/Padrão)

O servidor usa **EmailJS** para enviar emails do formulário de contato.

**Já está configurado?** Se você receber "Email enviado com sucesso!" ao enviar o formulário, tudo funciona! ✅

**Caso contrário**, edite `server/.env`:

```env
EMAILJS_PUBLIC_KEY=seu_public_key
EMAILJS_PRIVATE_KEY=seu_private_key  
EMAILJS_SERVICE_ID=seu_service_id
EMAILJS_TEMPLATE_ID=seu_template_id
EMAILJS_TO_EMAIL=seu-email@example.com
```

Obtenha as credenciais em: https://www.emailjs.com/

### Gmail (Opcional - Prioritário)

Se quiser usar Gmail em vez de EmailJS, configure:

```env
GOOGLE_CLIENT_ID=seu_client_id
GOOGLE_CLIENT_SECRET=seu_client_secret
GOOGLE_REFRESH_TOKEN=seu_refresh_token
GOOGLE_EMAIL=seu-email@gmail.com
```

---

## 🐛 Troubleshooting

### "Failed to fetch" ao enviar formulário

**Causa**: O servidor não está rodando

**Solução**: Execute `npm run server:dev` em outro terminal (ou `npm run dev:all`)

### "Email não foi enviado"

**Causa**: Credenciais do EmailJS incorretas

**Solução**: 
1. Verifique `server/.env`
2. Teste se credenciais estão certas: `curl http://localhost:3002/health`

### Porta 3002 já está em uso

**Solução**: 
```bash
# Mude a porta em server/.env
PORT=3001
# E atualize a URL no .env
VITE_API_URL=http://localhost:3001
```

---

## 📁 Estrutura do Projeto

```
├── src/              # Frontend (React + Vite)
│   ├── components/   # Componentes React
│   ├── pages/        # Páginas
│   └── lib/          # Utilitários
├── server/           # Backend (Express + NodeJS)
│   ├── index.js      # Servidor principal
│   ├── gmailHelper.js # Integração Gmail
│   └── .env          # Variáveis de ambiente
├── public/           # Assets estáticos
└── package.json      # Dependências
```

---

## 🔧 Stack Tecnológico

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui
- **Backend**: Express.js + NodeJS
- **Email**: EmailJS + Gmail API
- **Dev Tools**: Vitest + Playwright + ESLint

