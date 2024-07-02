import { gql, useQuery } from "@apollo/client";

// GraphQLクエリの定義
const GET_USERS = gql`
  query GetUser {
    getUsers {
      id
      name
      email
    }
  }
`;

interface User {
  id: string;
  name: string;
  email: string;
}

interface GetUsersData {
  getUsers: User[];
}

// interface GetUserVars {
//   id: string;
// }

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
  const { loading, error, data } = useQuery<GetUsersData>(
    GET_USERS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { getUsers } = data!;

  return (
    <div>
      <h1>My React and Apollo Client App</h1>
      {/* userIdを適切に設定してください */}
      {getUsers.map((user) => (
        <UserComponent user={user} />
      ))}
    </div>
  );
};

export default App;
