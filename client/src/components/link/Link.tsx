type Props = {
  href: string;
  blank?: boolean;
  light?: boolean;
  children: React.ReactNode;
};

export default function Link({ href, blank, light, children }: Props) {
  return (
    <a 
      href={href}
      target={blank ? "_blank" : "_self"}
      className={`t-sm inline-flex items-center gap-2 font-bold underline ${light ? "text-white" : "text-gray-200"}`}
    >
      {children}
    </a>
  );
}