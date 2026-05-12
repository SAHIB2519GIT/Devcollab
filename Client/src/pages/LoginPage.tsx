function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-zinc-800"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-zinc-800"
          />

          <button
            className="w-full bg-white text-black py-3 rounded font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default LoginPage;