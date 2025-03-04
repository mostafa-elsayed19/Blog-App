"use client";
import Form from "@/app/_components/Form";
import Wrapper from "@/app/_components/Wrapper";
import { useAuth } from "@/app/_context/AuthContext";
import { redirect } from "next/navigation";

function NewBlog() {
  const { user } = useAuth();

  if (!user) {
    redirect("/login");
  }
  return (
    <Wrapper>
      <Form>Hello</Form>
    </Wrapper>
  );
}

export default NewBlog;
