import { ApolloError, gql, useQuery } from "@apollo/client";

// GraphQLクエリの定義
export const GET_USERS = gql`
  query GetUser {
    getUsers {
      id
      name
      email
    }
  }
`;

export type User = {
  id: string;
  name: string;
  email: string;
};

type GetUsersData = {
  getUsers: User[];
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
