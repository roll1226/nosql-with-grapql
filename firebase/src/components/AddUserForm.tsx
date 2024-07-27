import { ChangeEventHandler, FC, FormEvent } from "react";

type AddUserFormProps = {
  name: string;
  email: string;
  handleSubmit: (e: FormEvent) => Promise<void>;
  onChangeName: ChangeEventHandler<HTMLInputElement>;
  onChangeEmail: ChangeEventHandler<HTMLInputElement>;
};

export const AddUserForm: FC<AddUserFormProps> = ({
  name,
  email,
  handleSubmit,
  onChangeName,
  onChangeEmail,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
};
