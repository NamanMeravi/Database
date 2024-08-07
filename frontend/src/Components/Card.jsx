import React from "react";

const Card = ({item}) => {
  return (
           
    <>
    
      <div className="mt-4 my-3 p-4">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200  border">
  <figure>
    <img
      src={item.image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.prize}</div>
      <div className=" cursor-pointer rounded-full hover:bg-pink-500 hover:text-white duration-200 px-2 py-2 border-[2px]">Buy</div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Card;
