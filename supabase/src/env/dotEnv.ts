export interface DotEnvInterface {
  getSupabaseGraphQLEndpoint: () => string;
  getSupabaseApiKey: () => string;
}

class DotEnv implements DotEnvInterface {
  getSupabaseGraphQLEndpoint = () => {
    return import.meta.env.VITE_SUPABASE_GRAPHQL_ENDPOINT;
  };

  getSupabaseApiKey = () => {
    return import.meta.env.VITE_SUPABASE_API_KEY;
  };
}

export const env = new DotEnv();
