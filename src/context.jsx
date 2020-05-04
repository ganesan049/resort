import React, { Component } from "react";
// import items from "./data";
import createClient from "./contentful";
const RoomContext = React.createContext();
// createClient
//   .getEntries({
//     content_type: "beachResortRoom",
//   })
//   .then((res) => console.log(res.items));
class RoomProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false,
    };
  }
  //getData cdm
  getData = async () => {
    try {
      let response = await createClient.getEntries({
        content_type: "beachResortRoom",
        // order: "sys.CreatedAt",
        order: "-fields.price",
        // order: "sys.createdAt",
      });
      console.log(response);
      let rooms = this.formatData(response.items);
      console.log(rooms);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));
      // console.log(maxPrice, maxSize);
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        maxPrice,
        maxSize,
      });
    } catch {
      // console.log(error);
    }
  };
  componentDidMount() {
    console.log(process.env.REACT_APP_API_SPACE);
    this.getData();
    // let rooms = this.formatData(items);
    // // console.log(rooms);
    // let featuredRooms = rooms.filter((room) => room.featured === true);
    // let maxPrice = Math.max(...rooms.map((item) => item.price));
    // let maxSize = Math.max(...rooms.map((item) => item.size));
    // // console.log(maxPrice, maxSize);
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   maxPrice,
    //   maxSize,
    // });
  }
  formatData(items) {
    // return items;
    return items.map((item) => {
      // console.log(item);
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    // const value = event.target.value;
    console.log(type, name, value);
    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );
  };
  filterRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      pets,
      breakfast,
    } = this.state;
    // all the rooms
    let tempRooms = [...rooms];
    // transform values
    // console.log(typeof capacity, typeof this.state.capacity);
    capacity = parseInt(capacity);
    price = parseInt(price);
    console.log(price);
    // console.log(typeof capacity, typeof this.state.capacity);
    // filter by type
    console.log(type);
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    if (price !== 0)
      tempRooms = tempRooms.filter((room) => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
