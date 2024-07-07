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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { getUsers } = data!;

  return (
    <div>
      <h1>My React and Apollo Client App</h1>
      {getUsers.map((user) => (
        <UserComponent user={user} />
      ))}
    </div>
  );
};

export default App;
