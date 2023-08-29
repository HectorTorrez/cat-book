import { Button } from "../../components/Button";
import { Cat } from "../../types/CatTypes";

export const CatCard = (props: Cat) => {
  const { name, funFact, age, favoriteFood } = props;

  return (
    <section className="flex flex-col h-[450px] shadow-lg rounded-lg ">
      <article className="w-[250px] transform transition-transform duration-500 ease-in-out hover:scale-110  ">
        <div className="inset-0 bg-black bg-opacity-80 rounded  ">
          <img
            className="object-cover rounded-t-lg"
            src="../../../public/00tb-cats1-videoSixteenByNineJumbo1600.jpg"
            alt="cat-image"
          />
        </div>
      </article>
      <section className="px-3 py-4 w-[250px] h-[300px] ">
        <h2 className="font-bold text-lg mb-3">{name}</h2>
        <p className="font-bold">
          Age: <span className="font-normal">{age}</span>
        </p>
        <p className="font-bold">
          Favorite food: <span className="font-normal">{favoriteFood}</span>
        </p>
        <p className="break-words font-bold">
          Fun Fact:{" "}
          <span className="break-words inline-block font-normal">
            {funFact}
          </span>
        </p>
      </section>
      <section className="border-t border-black h-[100px] flex justify-between items-center px-3 py-4">
        <Button handleClick={() => console.log("Add")} isAdd text="Add" />
        <Button
          handleClick={() => console.log("delete")}
          isDelete
          text="Delete"
        />
      </section>
    </section>
  );
};
