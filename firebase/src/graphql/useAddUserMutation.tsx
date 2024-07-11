import {
  ApolloCache,
  ApolloError,
  DefaultContext,
  FetchResult,
  gql,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from "@apollo/client";
import { useState } from "react";

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
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

type AddUserData = {
  getUsers: User[];
};

type UseAddUserMutationReturn = {
  addUser: (
    options?:
      | MutationFunctionOptions<
          AddUserData,
          OperationVariables,
          DefaultContext,
          ApolloCache<unknown>
        >
      | undefined
  ) => Promise<FetchResult<AddUserData>>;
  loading: boolean;
  error: ApolloError | undefined;
  data: AddUserData | null | undefined;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

type UseAddUserMutation = () => UseAddUserMutationReturn;

export const useAddUserMutation: UseAddUserMutation = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [addUser, { data, loading, error }] =
    useMutation<AddUserData>(ADD_USER);

  return {
    addUser,
    data,
    loading,
    error,
    name,
    setName,
    email,
    setEmail,
  };
};
