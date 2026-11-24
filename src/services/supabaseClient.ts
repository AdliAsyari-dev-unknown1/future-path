/**
 * Supabase Client Configuration & Contract
 * 
 * ARCHITECTURAL NOTE FOR PHASE 2/3:
 * Supabase client is isolated here. When environment credentials are provided,
 * the official `@supabase/supabase-js` client will be instantiated.
 * No hardcoded keys or insecure tokens are permitted in frontend code.
 */

export interface SupabaseConfig {
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  isConfigured: boolean;
}

export function getSupabaseConfig(): SupabaseConfig {
  const url = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || '';
  const anonKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || '';

  return {
    supabaseUrl: url,
    supabaseAnonKey: anonKey,
    isConfigured: Boolean(url && anonKey)
  };
}

/**
 * Repository interface contract for future database persistence.
 */
export interface StudentRepositoryContract {
  saveSession(sessionData: unknown): Promise<{ success: boolean; id?: string; error?: string }>;
  getSessionById(id: string): Promise<unknown | null>;
  listExhibitionSessions(): Promise<unknown[]>;
}
