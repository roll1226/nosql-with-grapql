import { MutationFunctionOptions } from "@apollo/client";
import { FormEvent } from "react";
import { AddUserCard } from "./components/AddUserCard";
import { AddUserForm } from "./components/AddUserForm";
import { UserCard } from "./components/UserCard";
import {
  AddUserData,
  AddUserVars,
  useAddUserMutation,
} from "./graphql/useAddUserMutation";
import { useUserQuery } from "./graphql/useUserQuery";

const App: React.FC = () => {
  const { loading, error, data } = useUserQuery();
  const {
    addUser,
    data: mutationData,
    loading: mutationLoading,
    error: mutationError,
    name,
    setName,
    email,
    setEmail,
  } = useAddUserMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (mutationLoading) return <p>Loading</p>;
  if (error) return <p>Error: {mutationError?.message}</p>;

  const { getUsers } = data!;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addUser({
        variables: { name, email },
      } as MutationFunctionOptions<AddUserData, AddUserVars>);
      setName("");
      setEmail("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>My React and Apollo Client App</h1>
      {getUsers.map((user) => (
        <UserCard user={user} />
      ))}

      <AddUserForm
        name={name}
        email={email}
        onChangeName={(e) => setName(e.target.value)}
        onChangeEmail={(e) => setEmail(e.target.value)}
        handleSubmit={handleSubmit}
      />

      <AddUserCard addUser={mutationData} />
    </div>
  );
};

export default App;
