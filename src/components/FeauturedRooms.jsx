import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Rooms from "./Rooms";
import Title from "./Title";
export default class FeauturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms } = this.context;
    let rooms = featuredRooms.map((room) => {
      return <Rooms key={room.id} room={room}></Rooms>;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
