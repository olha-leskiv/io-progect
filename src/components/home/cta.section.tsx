const CtaSection = () => {
  return (
    <section
      className="flex min-h-screen items-center justify-center rounded-lg bg-gray-100 bg-cover bg-center p-4"
      style={{ backgroundImage: "url(/home/cta.png)" }}
    >
      <div className="flex gap-4 items-center justify-center flex-col">
        <h2 className="text-5xl font-bold text-white mb-6 text-center w-xl  mx-auto leading-tight">Ready to have a decorated lifestyle?</h2>
        <button className="rounded-lg px-6 py-3 font-bold text-black-600 w-52 h-16 text-lg shadow hover:bg-gray-100 transition bg-green-300" 
        >
          Start Shopping
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
