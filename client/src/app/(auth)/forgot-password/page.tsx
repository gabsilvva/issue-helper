import type { Metadata } from "next";
import Box from "@/app/(auth)/_components/Box";
import Button from "@/components/button/Button";
import Form from "@/components/form/Form";
import ButtonFlat from "@/components/button/Flat";

export const metadata: Metadata = {
  title: "Esqueci minha senha",
};

export default async function Page() {
  return (
    <>
      <Box title="" description="">
        <Form method="POST" action="" success="" error="">
          <fieldset>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="exemplo@mail.com"
              required
            />
          </fieldset>
          <Button submit full>Enviar</Button>
        </Form>
        <div className="mt-6">
          <ButtonFlat href="/login">Faça login</ButtonFlat>
        </div>
      </Box>
    </>
  )
}