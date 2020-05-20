/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: Component to show filter options for created_At              *
 ********************************************************************************************************/

import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export class CreatedAtFilter extends Component {
  render() {
    return (
      <form>
        <fieldset disabled>
          <div className="form-group">
            <label htmlFor="disabledTextInput">Key</label>
            <input
              type="text"
              className="form-control"
              id="disabledTextInput"
              placeholder="Created At"
            ></input>
          </div>
        </fieldset>
        <div className="md-form mb-4">
          <label>Value : </label>
          <div className="form-inline">
            <div className="mb-2 mr-sm-2">
              <DatePicker
                onChange={this.props.onChangeStartDate}
                selected={this.props.startDate}
                dateFormat="dd-MM-yyyy"
                className="form-control"
              />
            </div>
            <div className="mb-2 mr-sm-2">
              <DatePicker
                onChange={this.props.onChangeEndDate}
                selected={this.props.endDate}
                dateFormat="dd-MM-yyyy"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="md-form mb-4">
          <label htmlFor="selectOpr">Operator</label>
          <select
            required
            className="custom-select form-control"
            id="selectOpr"
            value={this.props.Opr}
            onChange={this.props.oprChange}
          >
            <option value="Default"> -- select an option -- </option>
            <option value="between">Between</option>
          </select>
        </div>

        <div className="modal-footer d-flex justify-content-center">
          <button
            className="btn btn-default"
            value={this.props.Key}
            onClick={this.props.onSubmit}
          >
            Done
          </button>
          <button className="btn btn-default" onClick={this.props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
export default CreatedAtFilter;
