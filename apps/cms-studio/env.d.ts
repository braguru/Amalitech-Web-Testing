// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    SANITY_STUDIO_PROJECT_ID: string
    SANITY_STUDIO_DATASET: string
    SANITY_API_VERSION: string
  }
}
