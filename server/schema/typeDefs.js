const typeDefs = `
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    description: String
    image: String
    link: String
    title: String
    authors: [String]
  }

  input BookInput {
    bookId: ID!
    description: String
    image: String
    link: String
    title: String
    authors: [String]
}
  type Auth {
    token: ID!
    user: User
  }

  type Query {
     me:User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookInput: BookInput): User
   
   deleteBook(bookId: ID!): User
    
  }
`;

module.exports = typeDefs;
