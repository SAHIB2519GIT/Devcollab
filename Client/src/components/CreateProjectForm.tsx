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

      alert("Project Created Successfully 🚀");

      setTitle("");
      setDescription("");

      window.location.reload();

    } catch (error) {

      console.log(error);

      alert("Failed to create project");
    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <div>

        <label className="block text-zinc-400 mb-2">
          Project Title
        </label>

        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
          className="
            w-full
            p-4
            rounded-xl
            bg-zinc-800
            border
            border-zinc-700
            focus:border-blue-500
            focus:outline-none
          "
        />

      </div>

      <div>

        <label className="block text-zinc-400 mb-2">
          Description
        </label>

        <textarea
          placeholder="Describe your project..."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          rows={5}
          required
          className="
            w-full
            p-4
            rounded-xl
            bg-zinc-800
            border
            border-zinc-700
            focus:border-blue-500
            focus:outline-none
          "
        />

      </div>

      <button
        type="submit"
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          transition
          py-4
          rounded-xl
          font-semibold
          text-white
        "
      >
        Create Project 🚀
      </button>

    </form>

  );
}

export default CreateProjectForm;