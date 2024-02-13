// route.ts can have functions that are HTTP verbs exported from them

// making the GET and POST route handlers provided by NextAuth available at the correct route
export { GET, POST } from '@/auth';
