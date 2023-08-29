import { Navbar } from "./features/Navbar";
import { test } from "./API/test.json";
import { CatCard } from "./features/CatCard";

export const App = () => {
  return (
    <>
      <Navbar />
      <section className="grid justify-items-center max-w-5xl m-auto sm:grid-cols-1 md:grid-cols-3 mt-10 ">
        {test.map((cat) => {
          return <CatCard key={cat.name} {...cat} />;
        })}
      </section>
    </>
  );
};
