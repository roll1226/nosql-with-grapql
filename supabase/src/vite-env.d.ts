/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_GRAPHQL_ENDPOINT: string;
  readonly VITE_SUPABASE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
