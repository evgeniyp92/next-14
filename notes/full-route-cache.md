Next has 4 different data caching systems

- Data cache
- Router cache
- Request Memoization
- Full Route Cache

Next assumes by default that the home page is static

The solution is to change the caching configuration

A page becomes dynamic

- when calling a dynamic function or variable (like cookies.set, .delete, useSearchParams, the searchParams prop etc.)
- when assigning specific route segment config options (`export const dynamic = 'force-dynamic'` or `export const revalidate = 0`)
- calling fetch and opting out of caching the response (`fetch(...,{next: {revalidate: 0}})`)
- using a dynamic route
