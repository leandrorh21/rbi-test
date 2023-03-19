declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number | undefined;
      DATABASE_NAME: string;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string | undefined;
      DATABASE_HOST: string;
      EXT_API_URL: string;
      AUTH_EXT_API_TOKEN: string;
    }
  }
}
export {};
