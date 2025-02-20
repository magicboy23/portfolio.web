export default function AboutMe() {
  return (
    <section className="bg-[#181818] px-4 py-24">
      <div className="container m-auto max-w-4xl rounded-lg bg-white p-8 text-center align-middle shadow-lg">
        <p className="text-center text-3xl font-semibold text-black">
          About me
        </p>
        <img
          src="ANDRE T.jpg"
          alt="Profile Picture"
          className="mx-auto mb-4 h-32 w-32 rounded-full border-4 border-gray-700"
        />
        <p className="mb-4 text-lg font-light text-black">
          Hi, I'm a passionate UI/UX Designer and Front-End Developer with a
          love for creating beautiful and functional user experiences. I enjoy
          working with modern web technologies and always strive to improve my
          skills.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="#"
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
