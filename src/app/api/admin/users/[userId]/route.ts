import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/app/api/auth/[...nextauth]/route"; // Import auth to check session

const prisma = new PrismaClient();

// DELETE /api/admin/users/[userId] - Delete a user (Admin only)
export async function DELETE(req: NextRequest, { params }: { params: { userId: string } }) {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ message: "Acesso não autorizado" }, { status: 403 });
  }

  const userId = params.userId;

  // Prevent admin from deleting themselves
  if (session.user.id === userId) {
    return NextResponse.json({ message: "Você não pode excluir sua própria conta de administrador" }, { status: 400 });
  }

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }

    // Delete the user
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({ message: "Usuário excluído com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    // Handle potential foreign key constraint errors if needed, though Cascade should handle it
    return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

