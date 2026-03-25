# 🚀 Guia Setup Supabase

Seu servidor agora está integrado com **Supabase** para armazenar todos os contatos de forma segura! 

## 📋 O que foi feito

✅ **Integração Supabase** - Todos os contatos são salvos no banco de dados PostgreSQL  
✅ **Mantém EmailJS** - Continua enviando emails como antes  
✅ **Fallback automático** - Se Supabase falhar, email é enviado mesmo assim  
✅ **Variáveis de ambiente** - Configurado no `.env`

---

## 🔧 Passo 1: Criar Conta no Supabase

1. Acesse: **https://supabase.com**
2. Clique em **"Sign Up"**
3. Use GitHub ou email para criar conta
4. Confirme seu email

---

## 📊 Passo 2: Criar Novo Projeto

1. No dashboard do Supabase, clique em **"New Project"**
2. **Preencha:**
   - Name: `seu-portfolio` (ou qualquer nome)
   - Database Password: Use uma senha forte
   - Region: `South America (São Paulo)` (mais perto do Brasil)
3. Clique em **"Create new project"**
4. **Aguarde 2-3 minutos** enquanto o banco é criado

---

## 🛠️ Passo 3: Criar Tabela de Contatos

1. No dashboard, acesse **"SQL Editor"** (menu esquerdo)
2. Clique em **"New Query"**
3. **Cole este SQL:**

```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Criar índice no email para buscas rápidas
CREATE INDEX contacts_email_idx ON contacts(email);
CREATE INDEX contacts_created_at_idx ON contacts(created_at);
```

4. Clique em **"Run"** (ou Ctrl+Enter)
5. ✅ Tabela criada com sucesso!

---

## 🔑 Passo 4: Obter Credenciais

1. No menu esquerdo, clique em **"Settings"** → **"API"**
2. Você verá:
   - **Project URL** - Copie isso
   - **anon public** - Copie essa chave

3. **Copie ambas as informações** para o seu `.env`

---

## ⚙️ Passo 5: Configurar `.env`

Edite `server/.env` e adicione:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua-chave-publica-aqui
```

**Exemplo real:**
```env
SUPABASE_URL=https://abc123xyz.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🧪 Passo 6: Testar Integração

1. Abra terminal
2. Execute:
```bash
cd server
npm run dev
```

3. Em outro terminal, teste:
```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@example.com",
    "phone": "(11) 99999-9999",
    "message": "Mensagem de teste"
  }'
```

4. Verifique:
   - ✅ Terminal mostra `✅ Contato salvo no Supabase`
   - ✅ No Supabase dashboard → **Table Editor**, veja a linha inserida
   - ✅ Email foi enviado (já que EmailJS está configurado)

---

## 🔍 Passo 7: Visualizar Contatos no Supabase

1. Acesse https://supabase.com
2. Vá para seu projeto
3. **Table Editor** (menu esquerdo)
4. Selecione a tabela **"contacts"**
5. ✨ Veja todos os contatos salvos!

---

## 📊 Opcional: Criar Dashboard Público

Se quiser um dashboard público para visualizar contatos:

1. No Supabase, clique no ícone de **interrogação** no topo
2. Selecione **"Dashboards"**
3. Crie um novo dashboard para visualizar as requisições

---

## 🔐 Segurança

### RLS (Row Level Security) - Recomendado

Se quiser mais segurança, adicione RLS na tabela `contacts`:

```sql
-- Habilitar RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Permitir inserts público (para o formulário)
CREATE POLICY "Allow insert for contact form" ON contacts
  FOR INSERT WITH CHECK (true);

-- Apenas você pode ver os contatos (usando auth_uid)
CREATE POLICY "Only owner can select" ON contacts
  FOR SELECT USING (auth.uid() = <seu-uid>);
```

Mas por enquanto, pode deixar sem RLS (é público mesmo).

---

## 📈 Próximos Passos (Opcional)

### Criar endpoint para visualizar contatos

Você pode adicionar um endpoint para listar contatos:

```javascript
app.get('/api/contacts', async (req, res) => {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });
  
  return res.json({ data, error });
});
```

### Exportar para Excel/CSV

Supabase permite exportar dados facilmente.

---

## ❓ Troubleshooting

### "Erro de conexão com Supabase"
- Verifique se `SUPABASE_URL` e `SUPABASE_KEY` estão corretos
- Certifique que não há espaços extras nas variáveis
- Reinicie o servidor

### "Tabela não existe"
- Verifique se rodou o SQL do Passo 3
- Certifique-se de estar no projeto correto

### "Contato não foi salvo mas email foi enviado"
- Supabase pode estar com problemas
- Mas o email foi enviado OK (fallback funcionou) ✅
- Tente novamente em alguns minutos

---

## 🎉 Pronto!

Agora você tem:
- ✅ Servidor rodando
- ✅ Emails sendo enviados via EmailJS
- ✅ Contatos sendo salvos no Supabase

**Teste agora:** Envie um contato pelo formulário e veja ele aparecer no Supabase! 🚀
