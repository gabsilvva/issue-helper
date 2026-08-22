import Box from "@/app/(auth)/_components/Box";
import Button from "@/components/button/Button";
import Form from "@/components/form/Form";
import Link from "@/components/link/Link";

export default async function Page() {
  return (
    <>
      <Box title="Acesse o portal" description="Entre usando seu e-mail e senha cadastrados">
        <Form method="POST" action="/admin" success="" error="">
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
          <fieldset>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"  
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </fieldset>
          <Button submit full>Entrar</Button>
        </Form>
        <div className="mt-6">
          <Link href="/forgot-password">Esqueci minha senha</Link>
        </div>
      </Box>
      <Box title="Ainda não tem uma conta?" description="Cadastre agora mesmo">
        <Button full light href="/signup">Criar conta</Button>
      </Box>
    </>
  )
}