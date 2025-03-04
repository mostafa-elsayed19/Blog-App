"use client";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { useAuth } from "../_context/AuthContext";
import User from "./User";

function Header() {
  const { user } = useAuth();
  return (
    <header className="overflow-hidden bg-headerBg">
      <Wrapper className="my-0 flex items-center justify-between gap-4 overflow-hidden py-4 text-lightText">
        <ul className="flex items-center gap-4">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold">Blogs</h1>
          </Link>
          <ul className="flex items-center gap-4">
            <Link href="/">Home</Link>
            {!user ? (
              <Link href="/login">Login</Link>
            ) : (
              <Link href="/blogs/new-blog">
                <li>Create a new blog</li>
              </Link>
            )}
          </ul>
        </ul>
        <User />
      </Wrapper>
    </header>
  );
}

export default Header;
