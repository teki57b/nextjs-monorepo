import { Header } from "ui";
import { Button } from "antd";
import UserList from "./user-list";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <UserList />
    </>
  );
}
