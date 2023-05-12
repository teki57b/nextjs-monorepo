'use client';

import { Header } from "ui";
import { Button } from "antd";
import { PrismaClient } from "database";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <Button>Ant!</Button>
    </>
  );
}
