import { FC } from "react";
import { AddUserData } from "../graphql/useAddUserMutation";

type AddUserCardType = {
  addUser: AddUserData | null | undefined;
};

export const AddUserCard: FC<AddUserCardType> = ({ addUser }) => {
  if (!addUser) return <></>;

  return (
    <div>
      <h2>Added User</h2>
      <p>ID: {addUser.addUser.id}</p>
      <p>Name: {addUser.addUser.name}</p>
      <p>Email: {addUser.addUser.email}</p>
    </div>
  );
};
