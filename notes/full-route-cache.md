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

There are several ways to control caching

- Time based (every x amount of time) using `export const revalidate = x` where x is number of seconds
- On demand (purging a cached response as needed) using `revalidatePath(path)`
- Disable caching (no caching at all)

When to use?

- Time based: Something where data is changing all the time but its not that relevant to have up-to-the second info... e.g. reddit front page
- On-demand: When data changes and theres an expectation to see up-to-date data
- Disable: Anytime Next has to hit an outside api where we don't control when data changes, or when data might change request-to-request, or when the user expects to see up-to-date data
