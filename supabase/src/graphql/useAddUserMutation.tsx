import {
  ApolloCache,
  ApolloError,
  DefaultContext,
  FetchResult,
  gql,
  MutationFunctionOptions,
  useMutation,
} from "@apollo/client";
import { useState } from "react";

export const ADD_USER = gql`
  mutation AddUser($name: STring!, $email: String!) {
    insertIntousersCollection(objects: { name: $name, email: $email }) {
      records {
        email
        id
        name
      }
    }
  }
`;

export type User = {
  id: string;
  name: string;
  email: string;
};

export type AddUserData = {
 insertIntousersCollection: {
    records: User[];
  };
};

export interface AddUserVars {
  name: string;
  email: string;
}

type UseAddUserMutationReturn = {
  addUser: (
    options?:
      | MutationFunctionOptions<
          AddUserData,
          AddUserVars,
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
  const [addUser, { data, loading, error }] = useMutation<
    AddUserData,
    AddUserVars
  >(ADD_USER);

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
