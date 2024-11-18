import type { Task } from '@/app/application/components/task/interfaces'
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
import { tasks } from './opa';

// const mockTasks = ['']
// function a(rows:JSON){
// }

export function GET() {
  // const {rows} = await sql`select * from tasks`

  const transformedTasks = transformTasks(tasks);
  // console.log(JSON.stringify(transformedTasks, null, 2));
  
  return NextResponse.json(transformedTasks)
}

function transformTasks(tasksArray: Task[]): Task[] {
  const taskMap = new Map<string, Task>();

  // Crear un mapa para acceder rápidamente a las tareas por ID
  // biome-ignore lint/complexity/noForEach: <explanation>
    tasksArray.forEach(task => {
    taskMap.set(task.id, task);
  });

  // Función recursiva para transformar las tareas
  function resolveTasks(tasks: number[] | Task[]): Task[] {
    return (tasks as (number | Task)[]).map(task => {
      if (typeof task === "number") {
        const resolvedTask = taskMap.get(task.toString());
        if (resolvedTask) {
          // Llamar recursivamente si la tarea resuelta tiene subtareas
          if (resolvedTask.tasks) {
            resolvedTask.tasks = resolveTasks(resolvedTask.tasks);
          }
          return resolvedTask;
        }
          throw new Error(`Task with ID ${task} not found`);
      }
      return {
        ...task,
        tasks: task.tasks ? resolveTasks(task.tasks) : undefined,
      };
    });
  }

  // Transformar las tareas principales
  return tasksArray.map(task => ({
    ...task,
    tasks: task.tasks ? resolveTasks(task.tasks) : undefined,
  }));

}



// export async function POST(request: Request) {
//   const body = await request.json()
//   mockTasks.push(body)
//   return NextResponse.json(body)
// }

// export async function PUT(request: Request) {
//   const body = await request.json()
//   const index = mockTasks.findIndex(task => task.id === body.id)
//   mockTasks[index] = body
//   return NextResponse.json(body)
// }

// export async function DELETE(request: Request) {
//   const body = await request.json()
//   const index = mockTasks.findIndex(task => task.id === body.id)
//   mockTasks.splice(index, 1)
//   return NextResponse.json(body)
// }
