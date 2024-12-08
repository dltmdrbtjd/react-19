import { use } from "react";

interface Props {
  users: Promise<string[]>;
}

function UserList({ users }: Props) {
  const userList = use(users);

  return (
    <div>
      {userList.map((user) => (
        <div key={user}>{user}</div>
      ))}
    </div>
  );
}

export default UserList;
