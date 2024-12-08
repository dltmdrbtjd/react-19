import { Suspense } from "react";
import UserList from "../components/UserList";
import { getUsers } from "../services/api/user";
import ThemeProvider from "../provider/ThemeProvider";
import Heading from "../components/Heading";
import ThemeButtons from "../components/ThemeButtons";

function Use() {
  const users = getUsers();

  return (
    <ThemeProvider>
      <ThemeButtons />
      <Heading>User List</Heading>
      <Suspense fallback={<div>Loading...</div>}>
        <UserList users={users} />
      </Suspense>
    </ThemeProvider>
  );
}

export default Use;
