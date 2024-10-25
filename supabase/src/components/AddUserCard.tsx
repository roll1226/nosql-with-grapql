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
      <p>ID: {addUser.insertIntousersCollection.records[0].id}</p>
      <p>名前: {addUser.insertIntousersCollection.records[0].name}</p>
      <p>
        メールアドレス: {addUser.insertIntousersCollection.records[0].email}
      </p>
    </div>
  );
};
