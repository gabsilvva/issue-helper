import type { Metadata } from "next";
import Box from "@/app/(auth)/_components/Box";
import Button from "@/components/button/Button";
import Form from "@/components/form/Form";
import ButtonFlat from "@/components/button/Flat";

export const metadata: Metadata = {
  title: "Criar conta",
};

export default async function Page() {
  return (
    <>
      <Box title="Crie sua conta" description="Informe seu nome, e-mail e senha">
        <Form method="POST" action="/admin" success="" error="">
          <fieldset>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite o nome completo"
              required
            />
          </fieldset>
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
            <small>Mínimo de 6 dígitos</small>
          </fieldset>
          <fieldset>
            <label htmlFor="confirmeSenha">Confirme a senha</label>
            <input
              id="confirmeSenha"  
              name="confirmeSenha"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </fieldset>
          <Button submit full>Entrar</Button>
        </Form>
        <div className="mt-6">
          <ButtonFlat href="/forgot-password">Esqueci minha senha</ButtonFlat>
        </div>
      </Box>
      <Box title="Já possui uma conta?" description="Entre agora mesmo">
        <Button full light href="/login">Acessar conta</Button>
      </Box>
    </>
  )
}