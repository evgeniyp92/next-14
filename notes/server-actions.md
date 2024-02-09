# Overview

Usually in React apps all javascript code runs in the browser.

Changing data, creating records and such required http requests, usually with functions like fetch or the axios lib

In next we dont have to do this, since we are working in a single project, we can keep expensive functions on the server

It can be challenging but important to know where the code is running

There is some abstraction going on but basically whats being abstracted is a post request from the client to the server with all of the data necessary

The next server receives the data and passes it on to the server action

Work is done on the server and any communication back to the client is sent at the end (i.e. a redirect)
