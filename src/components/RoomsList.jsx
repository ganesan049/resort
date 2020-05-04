import React from "react";
import Rooms from "./Rooms";
export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms mathched your search params</h3>
      </div>
    );
  }
  return (
    // <section className="featured-rooms">
    //   <div className="featured-rooms-center">
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Rooms key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
