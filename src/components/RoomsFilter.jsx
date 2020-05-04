import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

//get all unique values
const getUnique = (item, value) => {
  return [...new Set(item.map((item) => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  console.log(context);
  let {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast,
  } = context;
  if (price === 0) {
    price = maxPrice;
  }
  // console.log(rooms);
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let Guests = getUnique(rooms, "capacity");
  Guests = [...Guests];
  // console.log(Guests);
  Guests = Guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // console.log(types);
  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guest capacity type */}
        <div className="form-group">
          <label
            htmlFor="
          "
          >
            Guests
          </label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {Guests}
          </select>
        </div>
        {/* end of guest capacity type */}
        {/* room price type */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            name="price"
            id="price"
            type="range"
            className="form-control"
            onChange={handleChange}
            min={minPrice}
            max={maxPrice}
            value={price}
          />
        </div>
        {/* end of room price type */}
        {/* room price type */}
        <div className="form-group">
          <label htmlFor="size">Room Size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end of room price type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* extras */}
      </form>
    </section>
  );
}
