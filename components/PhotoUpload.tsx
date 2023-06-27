"use client";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

const PhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //send this photo to database/firebase
    //look into resizing it on the client before sending, would prefer not to store large files if possible.
    //"sharp" library is good for image utitilites
    //store as an array buffer??  firebase might allow image formats (jpeg,png, etc.)
  };
  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-11/12 m-auto p-5 border rounded-2xl"
    >
      {selectedImage && (
        <Image src={selectedImage as string} alt="" width="200" height="200" />
      )}
      <input type="file" onChange={handlePhoto} />
      <textarea
        placeholder="...caption"
        className="border mt-2 p-2 h-60"
      ></textarea>
      <button className="w-1/4 text-center" type="submit">
        <p className="m-auto">UPLOAD</p>
      </button>
    </form>
  );
};

export default PhotoUpload;
