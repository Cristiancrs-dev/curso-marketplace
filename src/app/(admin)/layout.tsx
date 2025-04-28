import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Layout from "@/components/Layout";

// Este layout protegerá todas as rotas dentro de (admin) e verificará a role
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    // Redireciona para o login se não houver sessão
    redirect("/login");
  }

  if (session.user?.role !== "ADMIN") {
    // Redireciona para a home se o usuário não for ADMIN
    // Poderia redirecionar para uma página de "acesso negado" também
    redirect("/"); 
  }

  // Se for ADMIN, renderiza o layout padrão com o conteúdo do painel admin
  return <Layout>{children}</Layout>;
}

