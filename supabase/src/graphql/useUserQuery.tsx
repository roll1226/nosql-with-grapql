import { ApolloError, gql, useQuery } from "@apollo/client";

// GraphQLクエリの定義
const GET_USERS = gql`
  query GetUsers {
    usersCollection {
      edges {
        node {
          id
          name
          email
        }
      }
    }
  }
`;

export type User = {
  id: string;
  name: string;
  email: string;
};

type GetUsersData = {
  usersCollection: {
    edges: {
      node: User;
    }[];
  };
};

type UseUserQueryReturn = {
  loading: boolean;
  error: ApolloError | undefined;
  data: GetUsersData | undefined;
};

type UseUserQuery = () => UseUserQueryReturn;

export const useUserQuery: UseUserQuery = () => {
  const { loading, error, data } = useQuery<GetUsersData>(GET_USERS);

  return {
    loading,
    error,
    data,
  };
};
