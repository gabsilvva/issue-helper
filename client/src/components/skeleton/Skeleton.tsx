import Back from "@svg/back.svg"
import ButtonFlat from "../button/Flat";
import Button from "../button/Button";

type Props = {
  children: React.ReactNode;
  title: string;
  back?: string;
  action?: {
    children: React.ReactNode;
    onClick: () => void;
  }
}

export default function Skeleton({ title, back, children, action }: Props) {
  return (
    <>
      <div className="flex items-center justify-between gap-12">
        <div>
          {back && <ButtonFlat>
            <Back />
            Voltar
          </ButtonFlat>}
          <h1 className="mb-6 t-xl text-blue-dark">{title}</h1>
        </div>
        {action?.children && <Button onClick={() => {}}>
          {action.children}
        </Button>}
      </div>
      {children}
    </>
  )
}