import { MutationFunctionOptions } from "@apollo/client";
import { FormEvent } from "react";
import {
  AddUserData,
  AddUserVars,
  useAddUserMutation,
} from "./graphql/useAddUserMutation";
import { User, useUserQuery } from "./graphql/useUserQuery";

const UserComponent: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

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
        <UserComponent user={user} />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Add User</button>
      </form>

      {mutationData && (
        <div>
          <h2>Added User</h2>
          <p>ID: {mutationData.addUser.id}</p>
          <p>Name: {mutationData.addUser.name}</p>
          <p>Email: {mutationData.addUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default App;
