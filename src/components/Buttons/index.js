import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core";

const buttons = [
  {
    id: 1,
    label: "red",
  },
  {
    id: 2,
    label: "black",
  },
  {
    id: 3,
    label: "silver",
  },
  {
    id: 4,
    label: "steel",
  },
];

export class Buttons extends Component {
  onChangeColor = (id) => {
    this.props.onChangeColor(id);
  };
  render() {
    let { classes } = this.props;
    return (
      <div>
        {buttons.map((button) => {
          return (
            <Avatar
              key={button.id}
                className={classes.button}
              alt={button.label}
              src={`./img/icons/icon-${button.label}.jpg`}
              onClick={() => this.onChangeColor(button.id)}
            />
          );
        })}

      </div>
    );
  }
}

export default withStyles(styles)(Buttons);


