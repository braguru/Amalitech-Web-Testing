// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SANITY_CLIENT_PROJECT_ID: string
    NEXT_PUBLIC_SANITY_CLIENT_DATASET: string
    NEXT_PUBLIC_SANITY_API_READ_TOKEN: string
    NEXT_PUBLIC_SANITY_API_VERSION: string
  }
}
