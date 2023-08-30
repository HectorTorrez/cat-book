import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { Label } from "./Label";
import { Close } from "./Icons";

interface UploadFormProps {
  handleActiveForm: (boolean: boolean) => void;
  handleEsc: (event: KeyboardEvent) => void;
}

export const UploadForm = ({
  handleActiveForm,
  handleEsc,
}: UploadFormProps) => {
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
    <section className="flex flex-col absolute -top-2  py-10  w-4/5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg ">
      <section className="absolute top-0 right-0 mt-3 ">
        <Button
          text={<Close />}
          isClose
          handleClick={() => handleActiveForm(false)}
          handleEsc={() => handleEsc}
        />
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
          isImg
        />

        <footer>
          <Button text="Submit" isAdd handleClick={() => console.log("form")} />
        </footer>
      </form>
    </section>
  );
};
