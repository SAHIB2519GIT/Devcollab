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

    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Your Projects
      </h2>

      <div className="grid gap-4">

        {projects.length === 0 ? (

          <div className="text-zinc-400">
            No projects yet
          </div>

        ) : (

          projects.map((project) => (

            <div
              key={project._id}
              className="bg-zinc-900 p-5 rounded-xl"
            >

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-2">
                {project.description}
              </p>

            </div>
          ))

        )}

      </div>

    </div>
  );
}

export default ProjectList;