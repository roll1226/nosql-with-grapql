import { gql, useQuery } from "@apollo/client";

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

interface User {
  id: string;
  name: string;
  email: string;
}

interface GetUsersData {
  usersCollection: {
    edges: {
      node: User;
    }[];
  };
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
  const { loading, error, data } = useQuery<GetUsersData>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { edges } = data!.usersCollection;

  return (
    <div>
      <h1>My React and Apollo Client App</h1>
      {edges.map((u) => (
        <UserComponent user={u.node} />
      ))}
    </div>
  );
};

export default App;
