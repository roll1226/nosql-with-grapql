import { useAddUserMutation } from "./graphql/useAddUserMutation";
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
  // useQueryフックを使用してデータを取得
  const { loading, error, data } = useUserQuery();
  const {
    addUser,
    data: mutationData,
    error: mutationError,
    loading: mutationLoading,
    name,
    setName,
    email,
    setEmail,
  } = useAddUserMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { edges } = data!.usersCollection;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addUser({ variables: { name, email } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>My React and Apollo Client App</h1>
      {edges.map((u, key) => (
        <UserComponent user={u.node} key={key} />
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" disabled={mutationLoading}>
          Add User
        </button>
      </form>
      {mutationData && (
        <div>
          <h2>Added User</h2>
          <p>ID: {mutationData.insertIntousersCollection.records[0].id}</p>
          <p>Name: {mutationData.insertIntousersCollection.records[0].name}</p>
          <p>
            Email: {mutationData.insertIntousersCollection.records[0].email}
          </p>
        </div>
      )}
      {mutationError && <p>Error adding user</p>}
    </div>
  );
};

export default App;
