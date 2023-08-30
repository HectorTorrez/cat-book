import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { Label } from "./Label";

interface UploadFormProps {
  handleActiveForm: (boolean: boolean) => void;
}

export const UploadForm = ({ handleActiveForm }: UploadFormProps) => {
  const [itemForm, setItemForm] = useState({
    catName: "",
    age: "",
    favoriteFood: "",
    funFact: "",
    image: File,
  });

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setItemForm({
      ...itemForm,
      [name]: value,
    });
  };

  return (
    <section className="flex flex-col absolute top-0  py-10  w-4/5 bg-gradient-to-b from-blue-300 to-gray-50 ">
      <section className="absolute top-0 right-0 ">
        <Button text="x" isClose handleClick={() => handleActiveForm(false)} />
      </section>
      <form className="flex flex-col gap-7 items-center" action="#">
        <Label
          handleChange={handleChange}
          labelName="catName"
          text="Cat Name"
          type="text"
          isText
        />
        <Label
          handleChange={handleChange}
          labelName="age"
          text="Age"
          type="text"
          isText
        />
        <Label
          handleChange={handleChange}
          labelName="favoriteFood"
          text="Favorite Food"
          type="text"
          isText
        />
        <Label
          handleChange={handleChange}
          labelName="funFact"
          text="Fun Fact"
          type="text"
          isText
        />
        <Label
          handleChange={handleChange}
          labelName="image"
          text="Image"
          type="file"
          isText
        />

        <footer>
          <Button text="Submit" isAdd handleClick={() => console.log("form")} />
        </footer>
      </form>
    </section>
  );
};
