"use client"
import FormInput from "@/components/custom/FormInput";
import { ChangeEvent, useState } from "react";


export default function Home() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  return (
    <main>
      <h1>Hello there</h1>
      <FormInput
        type="emaiil"
        id="email"
        title="Email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />

      <FormInput
        type="password"
        id="password"
        title="Password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
    </main>
  );
}
