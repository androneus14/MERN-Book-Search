const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String!
        bookId: String!
        title: String
        image: String
        link: String
    }

    input BookData {
        authors: [String]
        description: String
        title: String!
        bookId: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(
            username: String!,
            email: String!,
            password: String!
        ): Auth
        login(
            email: String!,
            password: String!
        ): Auth
        saveBook(input: BookData!): User
        removeBook(bookId: ID!): User
    }
`
module.exports = typeDefs;