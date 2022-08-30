import { InMemoryCache } from "apollo-cache-inmemory";

export default function (context) {
  return {
    httpLinkOptions: {
      uri: "http://localhost:8080/v1/graphql",
      credentials: "same-origin",
      headers:{
        "x-hasura-admin-secret":"myadminsecretkey"
       }
    },
    cache: new InMemoryCache(),
    wsEndpoint: "ws://localhost:8080/v1/graphql",
  };
}