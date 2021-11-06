import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core";
import  Buttons  from "../Buttons/index";

const cars = [
  {
    id: 1,
    color: "red",
    img: "./img/products/red-car.jpg",
  },
  {
    id: 2,
    color: "black",
    img: "./img/products/black-car.jpg",
  },
  {
    id: 3,
    color: "silver",
    img: "./img/products/silver-car.jpg",
  },
  {
    id: 4,
    color: "steel",
    img: "./img/products/steel-car.jpg",
  },
];

export class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carImg: "./img/products/red-car.jpg",
    };
  }

  onChangeColor = (id) => {
    let chosenCar = this.findCar(cars, id);
    this.setState({
      carImg: chosenCar[0].img,
    });
  };

  findCar = (cars, id) => {
    let result = null;
    if (cars.length > 0) {
      result = cars.filter((car) => car.id === id);
    }
    return result;
  };

  render() {
    let { classes } = this.props;
    let { carImg } = this.state;
    return (
      <Grid container>
        <Grid item md={6} className={classes.carImages}>
          <img className={classes.carImage} alt="car" src={carImg} />
        </Grid>
        <Grid item md={6} className={classes.carActions}>
          <Buttons onChangeColor={this.onChangeColor} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Car);
