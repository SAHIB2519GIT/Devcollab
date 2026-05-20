function ChatBox() {

  return (
    <div className="mt-10 bg-zinc-900 p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-4">
        Team Chat
      </h2>

      <div className="space-y-3 mb-4">

        <div className="bg-zinc-800 p-3 rounded">
          Hey team 🚀
        </div>

        <div className="bg-zinc-800 p-3 rounded">
          Backend completed ✅
        </div>

      </div>

      <input
        placeholder="Type message..."
        className="w-full p-3 rounded bg-zinc-800"
      />

    </div>
  );
}

export default ChatBox;