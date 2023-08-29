export const Navbar = () => {
  return (
    <header className="flex justify-between m-auto max-w-5xl px-5 py-3 rounded-b-xl bg-gray-200 w-full">
      <h1 className="font-bold text-lg">CatBook</h1>
      <section>
        <button className="font-semibold text-base outline-none border-none">
          Upload
        </button>
      </section>
    </header>
  );
};
