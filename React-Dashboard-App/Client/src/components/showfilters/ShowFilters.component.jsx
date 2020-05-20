/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: Component to display filters                                 *
 ********************************************************************************************************/


import React, { Component } from "react";
import { Button } from "react-bootstrap";

function changeDateFormat(date) {
  var event = new Date(date);
  var formatedDate = JSON.stringify(event).slice(1, 11);
  return formatedDate;
}

export class ShowFilters extends Component {
  render() {
    const values = Object.values(this.props.value_);
    var tb;
    if (this.props.key_ === "created_at") {
      tb = (
        <td>
          Start : {changeDateFormat(values[0])},End :{" "}
          {changeDateFormat(values[1])}
        </td>
      );
    } else {
      tb = <td>{values}</td>;
    }

    return (
      <tr>
        <td>{this.props.key_}</td>
        {tb}

        <td>{this.props.operator_}</td>

        <td className="text-right">
          <Button
            className="fa fa-times"
            value={this.props.index}
            onClick={this.props.onClick}
          ></Button>
        </td>
      </tr>
    );
  }
}
export default ShowFilters;
