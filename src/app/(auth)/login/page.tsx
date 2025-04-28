"/use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Credenciais inválidas. Verifique seu email e senha.");
      } else if (result?.ok) {
        // Redireciona para a página inicial após login bem-sucedido
        router.push("/");
        router.refresh(); // Atualiza a sessão no lado do cliente
      } else {
        setError("Ocorreu um erro inesperado. Tente novamente.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Ocorreu um erro ao tentar fazer login.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-premium w-full">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            Entrar
          </button>
        </div>
      </form>
      {/* Adicionar link para registro se necessário no futuro */}
      {/* <p className="mt-4 text-center text-sm text-gray-600">
        Não tem uma conta?{" "}
        <Link href="/register" className="font-medium text-primary-600 hover:text-primary-500">
          Registre-se
        </Link>
      </p> */}
    </div>
  );
}

