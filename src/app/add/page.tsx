"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};

const AddPage = () => {
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{

    e.preventDefault();

        try{
            const res = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    ...inputs,
                    option
                })
            });

            const data = await res.json();
            // router.push(`/products/${data.id}`)

        }
        catch(err) {
            console.log(err);
        }
  }


  if (status === "loading") {
    return <p>Loading ...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }


  return (
    <div>
      <form className="shadow-lg flex flex-wrap p-8 gap-4" onSubmit={handleSubmit}>
        <h1>Add new product</h1>
        <div className="w-full flex flex-col gap-2">
          <label>Title</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            className="ring-1 ring-red-200 p-2 rounded-sm"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Desc</label>
          <textarea
            onChange={handleChange}
            name="desc"
            className="ring-1 ring-red-200 p-2 rounded-sm"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Price</label>
          <input
            onChange={handleChange}
            type="number"
            name="price"
            className="ring-1 ring-red-200 p-2 rounded-sm"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Category</label>
          <input
            onChange={handleChange}
            type="text"
            name="catSlug"
            className="ring-1 ring-red-200 p-2 rounded-sm"
          />
        </div>
        <div className="w-full flex gap-2 items-center">
          <label>Options</label>
          <input
            onChange={changeOption}
            type="text"
            placeholder="Title"
            name="title"
            className="ring-1 ring-red-200 p-2 rounded-sm"
            value={option.title}
          />
          <input
            onChange={changeOption}
            type="number"
            placeholder="Additional Price"
            name="additionalPrice"
            className="ring-1 ring-red-200 p-2 rounded-sm"
            value={option.additionalPrice}
          />
          <div
            className="ml-4 w-52 bg-red-500 text-white p-2 rounded-lg hover:bg-red-800"
            onClick={() => {
              setOptions((prev) => [...prev, option]); // Add the current option to the array
            //   setOption({ title: "", additionalPrice: 0 }); // Reset the option input fields
            }}
          >
            Add Option
          </div>
        </div>
        <div>
          {options.map((item, index) => (
            <div
              key={index}
              className="ring-1 rounded-md ring-red-200 cursor-pointer p-2"
              onClick={() => setOptions(options.filter(opt=>opt.title !== item.title))}
            >
              <span>{item.title}</span>
              <span>${item.additionalPrice}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-red-500 text-white p-2 hover:bg-red-800 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;