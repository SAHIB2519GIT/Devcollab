function TaskBoard() {

  const tasks = [
    {
      title: "Design Dashboard",
      status: "todo",
    },

    {
      title: "Setup Backend",
      status: "in-progress",
    },

    {
      title: "Deploy App",
      status: "completed",
    },
  ];

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Task Board
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {tasks.map((task, index) => (

          <div
            key={index}
            className="bg-zinc-900 p-5 rounded-xl"
          >

            <h3 className="text-xl font-semibold">
              {task.title}
            </h3>

            <p className="text-zinc-400 mt-2">
              {task.status}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TaskBoard;