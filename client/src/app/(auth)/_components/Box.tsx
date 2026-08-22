type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Box({ title, description, children }: Props) {
  return (
    <div className="border border-gray-500 p-8 rounded-md w-full">
      <h1 className="mb-1 t-md">{title}</h1>
      <p className="mb-4">{description}</p>
      {children}
    </div>
  );
}
