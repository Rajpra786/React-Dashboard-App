/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: Component to display discount filters                        *
 ********************************************************************************************************/

import React, { Component } from "react";

export class DiscountFilter extends Component {
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
              placeholder="Discount"
            ></input>
          </div>
        </fieldset>

        <div className="md-form mb-4">
          <label className="mt-3" htmlFor="customRange">
            Range with steps
          </label>
          <input
            required
            min={0}
            max={100}
            className="form-control"
            placeholder="10"
            onChange={this.props.valueChange}
          ></input>
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
            <option value="smaller_than">Smaller Than</option>
            <option value="greater_than">Greater Than</option>
            <option value="equal">equal</option>
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
export default DiscountFilter;

/* <RangeSlider
value={this.props.Value}
onChange = {this.props.valueChange}
min = '0'
max = '100'
size = 'lg'
tooltip='on'
variant ='primary'
/>              */
