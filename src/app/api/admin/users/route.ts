import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { auth } from "@/app/api/auth/[...nextauth]/route"; // Import auth to check session

const prisma = new PrismaClient();

// GET /api/admin/users - List all users (Admin only)
export async function GET(req: NextRequest) {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ message: "Acesso não autorizado" }, { status: 403 });
  }

  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true }, // Select specific fields, exclude password
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/admin/users - Create a new user (Admin only)
export async function POST(req: NextRequest) {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ message: "Acesso não autorizado" }, { status: 403 });
  }

  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json({ message: "Todos os campos são obrigatórios" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email já cadastrado" }, { status: 409 }); // 409 Conflict
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role === "ADMIN" ? "ADMIN" : "USER", // Ensure role is valid
      },
      select: { id: true, name: true, email: true, role: true, createdAt: true }, // Return created user without password
    });

    return NextResponse.json({ user: newUser }, { status: 201 }); // 201 Created
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

