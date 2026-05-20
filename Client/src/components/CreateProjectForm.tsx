import { useState } from "react";

import {
  createProject,
} from "../services/projectService";

import {
  useAuthStore,
} from "../store/authStore";

function CreateProjectForm() {

  const user =
    useAuthStore((state) => state.user);

  const [title, setTitle] =
    useState("");

  const [description,
    setDescription] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await createProject(
        {
          title,
          description,
        },
        user.token
      );

      alert("Project Created 🚀");

      setTitle("");
      setDescription("");

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl w-[400px]">

      <h2 className="text-2xl font-bold mb-4">
        Create Project
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full p-3 rounded bg-zinc-800"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded"
        >
          Create Project
        </button>

      </form>

    </div>
  );
}

export default CreateProjectForm;