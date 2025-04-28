import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Layout from "@/components/Layout";

// Este layout protegerá todas as rotas dentro de (app)
export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    // Redireciona para a página de login se não houver sessão
    redirect("/login");
  }

  // Se houver sessão, renderiza o layout padrão com o conteúdo protegido
  return <Layout>{children}</Layout>;
}

