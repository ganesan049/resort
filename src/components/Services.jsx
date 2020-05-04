import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        { icon: <FaCocktail />, title: "free cocktails", info: "Sit and Dine" },
        { icon: <FaHiking />, title: "free Hiking", info: "Sit and Dine" },
        {
          icon: <FaShuttleVan />,
          title: "free Shuttle Van",
          info: "Sit and Dine",
        },
        { icon: <FaBeer />, title: "free Beer", info: "Sit and Dine" },
      ],
    };
  }

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
