import {
  GraphQLServer
} from "graphql-yoga";

const typeDefs = `
  type Livro {
    id: ID!
    titulo: String!
    genero: String!
    edicao: Int
    preco: Float
  }

  type Query {
    effectiveJava: Livro!
  }
`;

const resolvers = {
  Query: {
    effectiveJava() {
      return {
        id: "123456",
        titulo: null,
        genero: "técnico",
        edicao: 3,
        preco: 39.9,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start({
  port: 4200
}, () => {
  console.log("servidor no ar...");
});