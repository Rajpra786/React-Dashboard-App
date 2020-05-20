/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: Component to show Brand filter options                       *
 ********************************************************************************************************/

import React, { Component } from "react";

export class BrandFilter extends Component {
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
              placeholder="brand name"
            ></input>
          </div>
        </fieldset>
        <div className="md-form mb-4">
          <label htmlFor="value">Value</label>
          <input
            type="text"
            className="form-control"
            id="value"
            placeholder="brand name"
            value={this.props.Value}
            onChange={this.props.valueChange}
          ></input>
        </div>

        <div className="md-form mb-4">
          <fieldset disabled>
            <div className="form-group">
              <label htmlFor="selectOpr">Operator</label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="contains"
              ></input>
            </div>
          </fieldset>
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
export default BrandFilter;
