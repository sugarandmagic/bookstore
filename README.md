# Bookstore

## Prereqs
- Node 8
- CORS browser extension, e.g https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

Please find included two directories, `client` and `server`.

##To run this locally:

Enable the CORS browser extension (purely for demonstration purposes as no time to do proxy config)

1. `yarn` inside the `server` directory and then run `yarn start-dev`. This starts the API on `localhost:3000`
2. `yarn` inside the `client` directory and run `yarn start` and choose a port

The client can then be interacted with.

# Server API
- Provides one route: `/books/:searchTerm?` - takes optional search term, either OLID or a search string
 
# Client
- Books are fetched on initial render and all books are displayed
- To filter, enter an OLID or a search string into the input. Search strings that are not OLIDs are assumed to be titles
- Title filtering uses fuzzy matching provided by [fuse.io](http://fusejs.io/) and could probably use 
some config refinement to get right
- OLID matching is exact
- Filtering requests are handled on the server side by making a call to the Books API with the given search term
- Each time the page is rendered or books are filtered, a fresh copy of the books data is fetched

##Caveats:
- Ran out of time to make this production ready so only local-dev mode provided