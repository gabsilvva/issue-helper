import Logo from "@svg/logo.svg"

type Props = {
  role: string;
}

export default function Nav({ role }: Props) {
  const pages = {
    "tickets": {
      icon: "/svg/tickets.svg",
      label: [
        {
          lang: "pt",
          text: "Chamados",
        },
        {
          lang: "en",
          text: "Tickets",
        }
      ],
      roles: [],
    },
    "tickets/create": {
      icon: "/svg/plus.svg",
      label: [
        {
          lang: "pt",
          text: "Criar chamado",
        },
        {
          lang: "en",
          text: "Create ticket",
        }
      ],
      roles: ["customer"],
    },
    "techinicians": {
      icon: "/svg/techs.svg",
      label: [
        {
          lang: "pt",
          text: "Técnicos",
        },
        {
          lang: "en",
          text: "Techinicians",
        }
      ],
      roles: ["admin"],
    },
  }

  return (
    <>
      <aside className="bg-black h-screen min-w-[200px] max-w-[200px] w-full">
        <div>
          <Logo />
          <span>{role}</span>
        </div>
      </aside>
    </>
  )
}