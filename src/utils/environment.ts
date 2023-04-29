export function getEnvironmentURI() {
    const url =  process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_LOCAL_URL || 'http://localhost:3000';
    if (!url.includes('http')) {
        return `https://${url}`;
    }

    return url;
}