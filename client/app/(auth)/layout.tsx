import Image from "next/image";
import { metadata } from "@/app/layout";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="p-3 flex h-screen"
      style={{ background: "url(img/auth.jpg) center/cover no-repeat" }}
    >
      <div className="w-full flex items-center justify-center">
        <Image src="svg/logo.svg" alt={metadata.title as string || "Logo"} width={185} height={40} />
      </div>
      <div className="max-w-[680px] w-full ml-auto bg-white flex items-center justify-center h-full rounded-md">
        <div className="max-w-[400px] w-full flex flex-col gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}