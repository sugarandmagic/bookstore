# Bookstore

## Prereqs
- Node 8
- Docker

Please find included two directories, `client` and `server`.

## To run this locally:

1. `yarn` inside the `client` directory and run `yarn build`
2. Run `docker-compose up` inside the root directory
3. Navigate to [localhost](http://localhost)

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
