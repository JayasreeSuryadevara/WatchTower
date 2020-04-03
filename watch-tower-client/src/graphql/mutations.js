import gql from 'graphql-tag';

export const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $name: String!, $password: String!) {
    signUp(email: $email, name: $name, password: $password) {
      user {
        _id
        email
        name
        token
        loggedIn
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
        name
        token
        loggedIn
      }
    }
  }
`;