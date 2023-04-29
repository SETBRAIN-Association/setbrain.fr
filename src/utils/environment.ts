export function getEnvironmentURI() {
    return process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_LOCAL_URL || 'http://localhost:3000';
}