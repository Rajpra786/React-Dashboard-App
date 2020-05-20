/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: Component for stock filter                                   *
 ********************************************************************************************************/

import React, { Component } from "react";

export class StockFilter extends Component {
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
              placeholder="Stock-Availability"
            ></input>
          </div>
        </fieldset>
        <div className="md-form mb-4">
          <label htmlFor="selectValue">Value</label>
          <select
            className="form-control custom-select"
            id="selectValue"
            value={this.props.Value}
            onChange={this.props.valueChange}
          >
            <option value="DEFAULT"> -- select an option -- </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
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
            <option value="DEFAULT"> -- select an option -- </option>
            <option value="equals">Equal</option>
            <option value="not-equal">Not-Equal</option>
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
export default StockFilter;
