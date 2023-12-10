declare namespace NodeJS{
    export interface ProcessEnv{
        NEXT_PUBLIC_NEXTAUTH_URL : string;
        NEXTAUTH_SECRET : string;
        KEYCLOAK_BASE_URL : string;
        KEYCLOAK_REALM : string;
        KEYCLOAK_CLIENT_ID: string;
        KEYCLOAK_CLIENT_SECRET: string;
    }
}