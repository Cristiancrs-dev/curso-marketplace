"use client";

import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// Tipo para usuário
type User = {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  createdAt?: Date;
};

// Função para buscar todos os usuários
async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch('/api/admin/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Falha ao buscar usuários');
    }
    
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
}

// Função para criar um novo usuário
async function createUser(name: string, email: string, password: string, role: string) {
  try {
    const response = await fetch('/api/admin/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Falha ao criar usuário');
    }
    
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}

// Função para excluir um usuário
async function deleteUser(userId: string) {
  try {
    const response = await fetch(`/api/admin/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Falha ao excluir usuário');
    }
    
    return await response.json();
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    throw error;
  }
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Estado para o formulário de novo usuário
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // Carregar usuários ao montar o componente
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError("Falha ao carregar usuários");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Função para lidar com a criação de um novo usuário
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSuccess("");
    
    // Validações
    if (!name || !email || !password) {
      setFormError("Todos os campos são obrigatórios");
      return;
    }
    
    if (password !== confirmPassword) {
      setFormError("As senhas não coincidem");
      return;
    }
    
    if (password.length < 8) {
      setFormError("A senha deve ter pelo menos 8 caracteres");
      return;
    }
    
    try {
      setFormLoading(true);
      const result = await createUser(name, email, password, role);
      
      // Atualizar a lista de usuários
      setUsers(prev => [...prev, result.user]);
      
      // Limpar o formulário
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("USER");
      setShowForm(false);
      
      setSuccess("Usuário criado com sucesso!");
    } catch (err: any) {
      setFormError(err.message || "Erro ao criar usuário");
    } finally {
      setFormLoading(false);
    }
  };

  // Função para lidar com a exclusão de um usuário
  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) {
      return;
    }
    
    try {
      setLoading(true);
      await deleteUser(userId);
      
      // Atualizar a lista de usuários
      setUsers(prev => prev.filter(user => user.id !== userId));
      
      setSuccess("Usuário excluído com sucesso!");
    } catch (err) {
      setError("Falha ao excluir usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciamento de Usuários</h1>
      
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}
      
      <div className="mb-6">
        <button 
          onClick={() => setShowForm(!showForm)} 
          className="btn btn-primary"
        >
          {showForm ? 'Cancelar' : 'Adicionar Novo Usuário'}
        </button>
      </div>
      
      {/* Formulário para adicionar novo usuário */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Adicionar Novo Usuário</h2>
          
          {formError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{formError}</div>}
          
          <form onSubmit={handleCreateUser} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                required
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                required
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Função</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="USER">Usuário</option>
                <option value="ADMIN">Administrador</option>
              </select>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={formLoading}
                className="btn btn-primary"
              >
                {formLoading ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Tabela de usuários */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Função</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">Carregando...</td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">Nenhum usuário encontrado</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                      {user.role === 'ADMIN' ? 'Administrador' : 'Usuário'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
