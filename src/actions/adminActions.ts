"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function createAdminUserAction(name: string, email: string, password: string) {
  try {
    // Verificar se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return { success: false, message: "Usuário já existe" };
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário administrador
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "ADMIN"
      }
    });

    return { success: true, message: "Administrador criado com sucesso!" };
  } catch (error) {
    console.error("Erro ao criar usuário admin:", error);
    return { success: false, message: "Erro interno ao criar administrador" };
  } finally {
    // Disconnect não é necessário em server actions, o Prisma gerencia conexões
    // await prisma.$disconnect(); 
  }
}
