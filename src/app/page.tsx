"use client"
import FormInput from "@/components/custom/FormInput";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../public/images/logo.svg";
import signIn from "../../public/images/sign-in.svg";
import Container from "@/layout/container";
import Typography from "@/components/Typography";
import { useRouter } from "next/navigation";
import Button from "@/components/button";


export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  })
  
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({
      email: "",
      password: ""
    })
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard/users');
    }, 1000);
  };

  return (
    <Container className="main" role="main">
      <aside>
        <Image src={logo} width={0} height={0} alt="Lendsqr" />
        <Image src={signIn} width={0} height={0} alt="Lendsqr" className="image" />
      </aside>

      <form action="" onSubmit={handleFormSubmit}>
        <section>
          <Typography.h1>Welcome!</Typography.h1>
          <Typography.h5>Enter details to log in</Typography.h5>
        </section>
        <span>
          <FormInput
            type="email"
            id="email"
            title="Email"
            value={formState.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, email: e.target.value })}
          />

          <FormInput
            type="password"
            id="password"
            title="Password"
            value={formState.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, password: e.target.value })}
          />

          <span className="forgot">FORGOT PASSWORD?</span>

          <Button
            type="submit"
            title="SUBMIT"
            variant="primary"
            isLoading={isLoading}
          />
        </span>

      </form>
    </Container>
  );
}
