import { ApolloClient, InMemoryCache } from "@apollo/client";

const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_CDA_TOKEN;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default client;
