import prisma from "./prismaService.js";

export async function addTodo(data) {
  return await prisma.toDO.create({
    data: {
      ...data,
      isCompleted: false,
    },
  });
}

export async function getAllTodos(offset = 0, limit = 1) {
  return await prisma.toDO.findMany({
    skip: parseInt(offset),
    take: parseInt(limit),
  });
}
export async function getTodoById(id) {
  return await prisma.toDO.findFirst({ where: { id } });
}
export async function updateTodo(id, data) {
  const todo = await getTodoById(id);
  if (!todo) {
    throw new Error("Todo with ID not found!");
  }
  return await prisma.toDO.update({
    where: { id },
    data: {
      title: data.title,
      isCompleted: data.isCompleted,
    },
  });
}

export async function deleteTodo(id) {
  return await prisma.toDO.delete(id)({
    where: { id },
  });
}
