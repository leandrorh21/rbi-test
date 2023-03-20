declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string | undefined;
      DATABASE_NAME: string;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string | undefined;
      DATABASE_HOST: string | undefined;
      DATABASE_PORT: string | undefined;
      EXT_API_URL: string;
      AUTH_EXT_API_TOKEN: string;
    }
  }
}
export {};
