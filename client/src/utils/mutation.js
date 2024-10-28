import { gql } from '@apollo/client';

//this is the mutation to add a book to the user's savedBooks array
export const ADD_USER = gql`
 mutation addUser$username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      savedBooks {
        authors
        bookId
        image
        description
        link
        title
      }
      username
    }
  }
}
`;

//this is the mutation to save a book to the user's savedBooks array
export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
}`;