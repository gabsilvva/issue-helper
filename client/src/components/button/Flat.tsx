import Link from "next/link";

type Props = {
  href?: string;
  blank?: boolean;
  submit?: boolean;
  light?: boolean;
  children: React.ReactNode;
};

export default function ButtonFlat({ href, blank, submit, light, children }: Props) {
  const className= `t-sm inline-flex items-center gap-2 font-bold underline ${light ? "text-white" : "text-gray-200"}`;

  if (href || blank) {
    return (
      <Link 
        href={href ?? ""}
        target={blank ? "_blank" : "_self"}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={submit ? "submit" : "button"}
      className={className}
    >
      {children}
    </button>
  );
}