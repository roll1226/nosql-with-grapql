import { FC } from "react";
import { AddUserData } from "../graphql/useAddUserMutation";

type AddUserCardType = {
  addUser: AddUserData | null | undefined;
};

export const AddUserCard: FC<AddUserCardType> = ({ addUser }) => {
  if (!addUser) return <></>;

  return (
    <div>
      <h2>追加ユーザー</h2>
      <p>ID: {addUser.addUser.id}</p>
      <p>名前: {addUser.addUser.name}</p>
      <p>メールアドレス: {addUser.addUser.email}</p>
    </div>
  );
};
