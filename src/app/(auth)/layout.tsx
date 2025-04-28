import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  // Se o usuário já estiver autenticado, redireciona para a página inicial
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
