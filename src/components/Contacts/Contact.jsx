const Contact = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}   // 👈 click outside closes modal
    >
      
      {/* stop propagation so inside click doesn't close */}
      <div
        className="bg-slate-900 border border-gray-700 rounded-2xl p-8 w-full max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl hover:text-red-500"
        >
          ✕
        </button>

        {/* Heading */}
        <h1 className="text-white text-3xl mb-6 text-center">
          Contact Me
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <input
            className="w-full p-3 bg-[#111] text-white rounded-lg"
            placeholder="Name"
          />
          <input
            className="w-full p-3 bg-[#111] text-white rounded-lg"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 bg-[#111] text-white rounded-lg"
            rows="5"
            placeholder="Message"
          />

          <button className="w-full bg-cyan-500 py-3 rounded-lg text-black font-semibold">
            Send
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;