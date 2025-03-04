"use client";

import Form from "../_components/Form";
import Input from "../_components/Input";
import Wrapper from "../_components/Wrapper";
import { signInWithGoogle } from "../_lib/auth";

function Login() {
  return (
    <Wrapper>
      <h1 className="text-3xl font-bold">Login</h1>

      {/* Login Form */}
      <Form>
        {/* Email Input */}
        <Input label="Email" name="email" type="email" id="email" />

        {/* Password Input */}
        <Input label="Password" name="password" type="password" id="password" />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-buttonBg p-2 text-white"
        >
          Login
        </button>
      </Form>
      <button
        className="mt-8 w-full rounded-md bg-buttonBg p-2 text-white"
        onClick={signInWithGoogle}
      >
        Sign in with google
      </button>
    </Wrapper>
  );
}

export default Login;
