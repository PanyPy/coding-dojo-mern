# FAKE API

## Install dependencies
`npm install`

## Start server
`npm run dev` or `nodemon server.js`

## API => Screenshot
get -> `/api/jokes` => Returns all the Jokes => `01 - result`
get -> `/api/jokes/random` => Returns a random Joke => `02 - result`
get -> `/api/jokes/:id` => Returns a Joke by id => `03 - result`
put ->`/api/jokes/update/:id` => Update an existing Joke => `04 - result`
post -> `/api/jokes/new` => Create a new Joke => `05..08 - result`
delete -> `/api/jokes/delete/:id` => Create a new Joke => `09 - result`
