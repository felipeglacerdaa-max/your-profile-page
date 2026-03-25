import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

/**
 * Criar cliente Supabase
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * Validar se Supabase está configurado
 */
export function isSupabaseConfigured() {
  return !!(SUPABASE_URL && SUPABASE_KEY);
}

/**
 * Salvar contato no banco de dados
 */
export async function saveContactToDatabase(name, email, phone, message) {
  try {
    if (!isSupabaseConfigured()) {
      console.warn('⚠️ Supabase não configurado, pulando salvamento no BD');
      return null;
    }

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone,
          message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('❌ Erro ao salvar no Supabase:', error);
      throw error;
    }

    console.log('✅ Contato salvo no Supabase:', data);
    return data;
  } catch (error) {
    console.error('❌ ERRO ao salvar contato:', error.message);
    return null;
  }
}
