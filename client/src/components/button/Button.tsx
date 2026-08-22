type Props = {
  href?: string;
  blank?: boolean;
  submit?: boolean;
  full?: boolean;
  light?: boolean;
  children: React.ReactNode;
};

export default function Button({ href, blank, submit, full, light, children }: Props) {
  const className = `px-6 py-3 rounded-md t-sm inline-flex items-center justify-center gap-2 text-center font-bold ${full ? "w-full" : ""} ${light ? "bg-gray-500 hover:bg-gray-600 text-gray-200" : "bg-gray-200 hover:bg-gray-100 text-white"}`;

  if (href || blank) {
    return (
      <a 
        href={href}
        target={blank ? "_blank" : "_self"}
        className={className}
      >
        {children}
      </a>
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