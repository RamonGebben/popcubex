# Popcubex

Overview of open Pull requests

## Install

When you are starting with this project fresh and you need to setup everything you can run:

```bash
npm run setup:env
```
When you want to start with a client database you can run:

```bash
npm run setup:db
```

## Running

When you want to run the application you will need to open two terminals.
In the first one you run:

```bash
npm server
```
This will startup the webhook, websocket server the database.
Now in the other terminal you run:

```bash
npm start
```
This will startup the frontend part of things. Stuff like webpack and hotreloader etc.

Now you can check the app at http://localhost:8080
