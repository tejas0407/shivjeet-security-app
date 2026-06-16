export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white px-8 py-5 flex justify-between items-center">
      <h2 className="text-xl font-bold">
        Shivjeet Security Services
      </h2>

      <div className="flex gap-6">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}