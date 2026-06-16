export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center px-6">

        <p className="uppercase tracking-[4px] text-yellow-500 mb-4 font-semibold">
          Trusted Security Solutions
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
          Protecting What
          <span className="text-yellow-500"> Matters Most</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Professional Security Guards, CCTV Surveillance,
          Event Security, Residential Protection and Corporate
          Security Services available 24/7.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold">
            Get Free Quote
          </button>

          <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}