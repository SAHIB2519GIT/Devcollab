import { useEffect, useState } from "react";

import {
  getProjects,
} from "../services/projectService";

import {
  useAuthStore,
} from "../store/authStore";

function ProjectList() {

  const user =
    useAuthStore((state) => state.user);

  const [projects, setProjects] =
    useState<any[]>([]);

  useEffect(() => {

    const fetchProjects = async () => {

      try {

        if (!user) return;

        const data =
          await getProjects(user.token);

        setProjects(data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchProjects();

  }, [user]);

  return (

    <div>

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold">
          Your Projects
        </h2>

        <div className="bg-blue-600 px-4 py-2 rounded-lg font-semibold">
          {projects.length} Project
          {projects.length !== 1 ? "s" : ""}
        </div>

      </div>

      {projects.length === 0 ? (

        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-10 text-center">

          <h3 className="text-2xl font-semibold mb-2">
            No Projects Yet
          </h3>

          <p className="text-zinc-400">
            Create your first project to get started 🚀
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (

            <div
              key={project._id}
              className="
                bg-zinc-800
                border
                border-zinc-700
                rounded-xl
                p-6
                hover:border-blue-500
                hover:scale-[1.02]
                transition
              "
            >

              <div className="flex justify-between items-start mb-4">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Active
                </span>

              </div>

              <p className="text-zinc-400 leading-relaxed">

                {project.description ||
                  "No description provided."}

              </p>

              <div className="mt-6 pt-4 border-t border-zinc-700">

                <p className="text-zinc-500 text-sm">
                  Project ID
                </p>

                <p className="text-zinc-300 text-sm break-all">
                  {project._id}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default ProjectList;