import { ChangeEventHandler, FC, FormEvent } from "react";

type AddUserFormProps = {
  name: string;
  email: string;
  handleSubmit: (e: FormEvent) => Promise<void>;
  onChangeName: ChangeEventHandler<HTMLInputElement>;
  onChangeEmail: ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
};

export const AddUserForm: FC<AddUserFormProps> = ({
  name,
  email,
  handleSubmit,
  onChangeName,
  onChangeEmail,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        placeholder="名前"
      />
      <input
        type="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="メールアドレス"
      />

      <button type="submit" disabled={loading}>
        ユーザーを追加
      </button>
    </form>
  );
};
