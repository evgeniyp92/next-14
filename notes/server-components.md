# Overview

Server components are components that are rendered on the server, effectively compiled from React into HTML, sent to the client, and hydrated at the client

This improves performance by minimizing performance overheads and give better UX

Use server components as much as possible except for when its not possible

All components are server components by default

Async await is ok to use directly in the body of the component, no need for useState or useEffect for data fetching

State management with things like redux or react-query irrelevant as well for server components

## Limitations

No hooks at all

No event handlers of any kind

## Creating client components

Mark the top of a component with 'use client'

All the usual component rules

Can't directly show a server component as a child (with one exception)

## When to use client components?

Use client components if you need to use hooks, event handlers, or something else forces your hand

Otherwise use server components

NB: Client components are still rendered on the server, then rehydrated on the client and their code runs again
