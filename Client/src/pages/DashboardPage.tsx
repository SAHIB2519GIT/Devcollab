import {
  useNavigate,
} from "react-router-dom";

import {
  useAuthStore,
} from "../store/authStore";

import CreateProjectForm
from "../components/CreateProjectForm";

import ProjectList
from "../components/ProjectList";

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

    <div className="min-h-screen bg-black text-white p-10 max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Welcome {user?.name} 🚀
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <CreateProjectForm />

      <ProjectList />

    </div>
  );
}

export default DashboardPage;