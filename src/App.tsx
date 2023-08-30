import { Navbar } from "./features/Navbar";
import { test } from "./API/test.json";
import { CatCard } from "./features/CatCard";
import { useState } from "react";
import { UploadForm } from "./components/UploadForm";

export const App = () => {
  const [formIsActive, setFormIsActive] = useState(false);

  const handleActiveForm = (boolean: boolean) => {
    setFormIsActive(boolean);
  };

  return (
    <section className="h-screen">
      <Navbar onHandle={handleActiveForm} formIsActive={formIsActive} />
      <section className="grid relative justify-items-center max-w-5xl m-auto sm:grid-cols-1 md:grid-cols-3 mt-10 ">
        {test.map((cat) => {
          return <CatCard key={cat.name} {...cat} />;
        })}
        {formIsActive ? (
          <UploadForm handleActiveForm={handleActiveForm} />
        ) : null}
      </section>
    </section>
  );
};
