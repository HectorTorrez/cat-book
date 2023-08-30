interface NavbarProps {
  onHandle: (boolean: boolean) => void;
  formIsActive: boolean;
}

export const Navbar = ({ onHandle, formIsActive }: NavbarProps) => {
  return (
    <header className="flex justify-between m-auto max-w-5xl px-5 py-3 rounded-b-xl bg-gray-200 w-full">
      <h1 className="font-bold text-lg">CatBook</h1>
      <section>
        <button
          onClick={() => onHandle(!formIsActive)}
          className="font-semibold text-base outline-none border-none"
        >
          Upload
        </button>
      </section>
    </header>
  );
};
