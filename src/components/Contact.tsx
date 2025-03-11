const Contact = () => {
  return (
    <section className="flex justify-center bg-[#0b4344] py-12">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 px-6 text-gray-800 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold">Contact Me</h2>
        <p className="mb-6 text-center">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <form className="mb-6 flex w-full flex-col md:flex-row md:gap-4">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-full border px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your Name"
            />
          </div>
          <div className="flex-1">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-full border px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your Email"
            />
          </div>
        </form>
        <div className="mb-4 w-full">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Message
          </label>
          <textarea
            className="h-16 w-full rounded-full border px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-purple-700 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-purple-800"
        >
          Send Message
        </button>
        <div className="mt-6 text-center">
          <p className="font-semibold">Or connect with me:</p>
          <div className="mt-3 flex justify-center gap-4">
            <a
              href="#"
              className="text-purple-700 hover:text-purple-900 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-purple-700 hover:text-purple-900 hover:underline"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-purple-700 hover:text-purple-900 hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
