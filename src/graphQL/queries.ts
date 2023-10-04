import gql from "graphql-tag";

const usersQueries = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
    }
  }
`;

export { usersQueries };
