# Ganesh-Website

New Ganesh website (In construction)

## Building

Remember to set the env variables. All of them are documented in [.env.template](.env.template).

Also, change the site api key in [contato.js](pages/contato.js).

After that, to build the project:

```bash
npm install
npm run-script build
```

and to run

```bash
npm start
```

### Docker

To deploy it using Docker:

```bash
docker build -t ganesh-website .
docker run -d -p 3000:3000 ganesh-website # change the port binding to the correct one (or use Nginx to configure it)
```

## Todo List

- Investigate mobile firefox bug (page not working sometimes)
- Insert (new) activities of the group (2020)
- Insert news related to the group (2020)
- Fix the "email sent" message styling in contact page. It's really ugly right now.

Check the issues for updated activities to be done.
