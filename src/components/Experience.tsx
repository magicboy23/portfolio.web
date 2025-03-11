const Experience = () => {
  return (
    <section className="bg-[#0b4344] px-4 py-24">
      <div className="container m-auto">
        <p className="mb-8 text-center text-6xl font-semibold text-white">
          Experience
        </p>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3">
          <div>
            <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
              <h2 className="text-xl font-semibold">Internship</h2>
              <p className="text-gray-500">2022 Aug - 2022 Nov | BPJS TK</p>
              <p className="mt-2 text-gray-700">
                Input data, organize data, serve participants from BPJS TK
              </p>
            </div>
          </div>
          <div className="md:ml-3">
            <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
              <h2 className="text-xl font-semibold">Editor</h2>
              <p className="text-gray-500">
                25 Jan 2024 - 8 Sep 2024 | Rapspoint
              </p>
              <p className="mt-2 text-gray-700">
                Editing account templates, posting on Instagram platforms and
                websites
              </p>
            </div>
          </div>
          <div className="md:ml-3">
            <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
              <h2 className="text-xl font-semibold">Freelance UI Designer</h2>
              <p className="text-gray-500">Present | Freelance</p>
              <p className="mt-2 text-gray-700">
                Designing user-friendly interfaces for various clients,
                improving engagement and retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
