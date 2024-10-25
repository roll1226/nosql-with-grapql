import { FC } from "react";
import { User } from "../graphql/useUserQuery";

type UserCardType = {
  user: User;
};

export const UserCard: FC<UserCardType> = ({ user }) => {
  return (
    <div>
      <h2>ユーザー詳細</h2>
      <p>ID: {user.id}</p>
      <p>名前: {user.name}</p>
      <p>メールアドレス: {user.email}</p>
    </div>
  );
};
