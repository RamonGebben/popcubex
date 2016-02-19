# Popcubex

Overview of open Pull requests

## Install

When you are starting with this project fresh and you need to setup everything you can run:

```bash
npm run setup:env
```

## Database
When you want to start with a client database you can run:

```bash
npm run db:setup
```
For loading the test db use:

```bash
npm run db:restore
```

And to update the test db:

```bash
npm run db:dump
```

Note that in order for these commands to work you should have the python drivers installed.
You can install these using pip:

```bash
sudo pip install rethinkdb
```

If you do not have pip, you will need to install this as well:

```bash
easy_install pip;
```
If this does not work [read the docs](https://pip.pypa.io/en/stable/installing/)

## Running

When you want to run the application you will need to open two terminals.
In the first one you run:

```bash
npm run server
```
This will startup the webhook, websocket server the database.
Now in the other terminal you run:

```bash
npm start
```
This will startup the frontend part of things. Stuff like webpack and hotreloader etc.

Now you can check the app at http://localhost:8080
