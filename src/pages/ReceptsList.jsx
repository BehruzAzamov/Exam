import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { books as initialRecepts } from "../../data/data.json";

const ReceptsList = () => {
  const [recepts, setRecepts] = useState(initialRecepts);

  const deleteRecept = (id) => {
    const updatedRecepts = recepts.filter((recept) => recept.id !== id);
    setRecepts(updatedRecepts);
  };

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">Recepts</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {recepts.map((recept) => {
          return (
            <div key={recept.id} className="card  bg-base-100 shadow-xl">
              <figure>
                <img
                  src={recept.image}
                  alt="Book cover"
                  className=" h-[700px] w-full object-cover md:h-auto  "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">{recept.name}</h2>
                <p>{recept.ingredients}</p>
                <span className="">{recept.time} year</span>
                <p className="line-clamp-3">{recept.body}</p>

                <div className="card-actions flex-nowrap items-center">
                  <button
                    onClick={() => deleteRecept(recept.id)}
                    className="btn btn-secondary"
                  >
                    <IoTrashOutline className="btn-primary" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReceptsList;
