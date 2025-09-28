const HomeSection = () => {
  return (
    <section
      className="flex min-h-screen items-center justify-center rounded-lg bg-gray-100 bg-cover bg-center p-4"
      style={{ backgroundImage: "url(/home/hero.png)" }}
    >
      <div className="flex max-w-xl flex-col items-center justify-center pb-40 text-center">
        <p className="mb-10 text-sm font-bold tracking-wider text-slate-100 uppercase">
          Minimal Interior Design
        </p>
        <h1 className="text-6xl font-bold text-slate-100">
          We minimize your waste in every step of the process.
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;
