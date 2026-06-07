import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

import CreateProjectForm from "../components/CreateProjectForm";
import ProjectList from "../components/ProjectList";

function DashboardPage() {
  const navigate = useNavigate();

  const logout =
    useAuthStore((state) => state.logout);

  const user =
    useAuthStore((state) => state.user);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      <div className="max-w-7xl mx-auto p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-bold">
              DevCollab 🚀
            </h1>

            <p className="text-zinc-400 mt-2 text-lg">
              Welcome back, {user?.name}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-lg font-semibold"
          >
            Logout
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-zinc-400 text-sm uppercase">
              Projects
            </h3>

            <p className="text-4xl font-bold mt-2">
              🚀
            </p>

            <p className="text-zinc-500 mt-2">
              Manage your work
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-zinc-400 text-sm uppercase">
              Status
            </h3>

            <p className="text-4xl font-bold mt-2 text-green-500">
              Active
            </p>

            <p className="text-zinc-500 mt-2">
              System running
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-zinc-400 text-sm uppercase">
              User
            </h3>

            <p className="text-2xl font-bold mt-2">
              {user?.name}
            </p>

            <p className="text-zinc-500 mt-2">
              Logged in successfully
            </p>
          </div>

        </div>

        {/* Create Project */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-10">

          <h2 className="text-2xl font-bold mb-6">
            Create New Project
          </h2>

          <CreateProjectForm />

        </div>

        {/* Project List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Your Projects
          </h2>

          <ProjectList />

        </div>

      </div>

    </div>
  );
}

export default DashboardPage;