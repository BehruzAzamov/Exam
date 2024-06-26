import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {books} from "../../data/data.json"

function Create() {
  const { data, postData } = useFetch("books", "POST");
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  function handleCreate() {
    toast.success("You add ingredient");
  }
  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      if (!ingredients.includes(ingredient)) {
        setIngredients((prev) => {
          toast.success("Added successfully");
          console.log(ingredient);
          return [...prev, ingredient];
        });
      } else {
        toast.error("Already has been added ");
      }
    } else {
      toast.error("Write an ingredient");
    }
    setIngredient("");
  };
  function handleSubmit(e) {
    e.preventDefault();
    const newRecept = {
      name,
      time,
      body,
      ingredients,
      image,
    };
    postData(newRecept);
  }
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <div className="w-full ">
      <h1 className="text-3xl text-center font-bold mb-10">
        Create New Recipie
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col gap-5 "
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Authors:</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setIngredient(e.target.value);
              }}
              value={ingredient}
            />
            <button onClick={addIngredient} className="btn-secondary btn">
              Add
            </button>
          </div>
          <div>
            <p>
              Authors:
              {ingredients.map((ing, index) => {
                if (index === ingredients.length - 1) {
                  return <span key={index}>{ing}</span>;
                } else {
                  return <span key={index}>{ing}, </span>;
                }
              })}
            </p>
          </div>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Year</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image URL:</span>
          </div>
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Desciption"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>

        <button
          onClick={handleCreate}
          className="btn btn-secondary w-full max-w-xs"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
