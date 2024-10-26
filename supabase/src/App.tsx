import { AddUserCard } from "./components/AddUserCard";
import { AddUserForm } from "./components/AddUserForm";
import { UserCard } from "./components/UserCard";
import { useAddUserMutation } from "./graphql/useAddUserMutation";
import { useUserQuery } from "./graphql/useUserQuery";

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
  if (mutationError) return <p>${mutationError.message}</p>;

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
        <UserCard user={u.node} key={key} />
      ))}

      <AddUserForm
        name={name}
        email={email}
        onChangeName={(e) => setName(e.target.value)}
        onChangeEmail={(e) => setEmail(e.target.value)}
        handleSubmit={handleSubmit}
        loading={mutationLoading}
      />

      <AddUserCard addUser={mutationData} />
    </div>
  );
};

export default App;
