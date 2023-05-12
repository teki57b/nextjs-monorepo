"use client";

import { trpc } from "~/utils/trpc";
import React from "react";
import { Card } from "antd";

export default function UserList() {
  let { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 20,
      }}
    >
      {users?.map((user) => (
        <Card
          key={user.id}
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={user.name}
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            />
          }
        >
          <Card.Meta title={user.name} />
        </Card>
      ))}
    </div>
  );
}
