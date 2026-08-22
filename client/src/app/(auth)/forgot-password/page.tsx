import Box from "@/app/(auth)/_components/Box";
import Button from "@/components/button/Button";
import Form from "@/components/form/Form";
import Link from "@/components/link/Link";

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
          <Link href="/login">Faça login</Link>
        </div>
      </Box>
    </>
  )
}