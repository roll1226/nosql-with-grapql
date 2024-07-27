import { FC } from "react";
import { User } from "../graphql/useUserQuery";

type UserCardType = {
  user: User
}

export const UserCard: FC<UserCardType> = ({
  user
}) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
