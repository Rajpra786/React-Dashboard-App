/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: component to display a single card                           *
 ********************************************************************************************************/

import React, { Component } from "react";
import { Col } from "react-bootstrap";


export class Card extends Component {
  render() {
    return (

      <Col lg={5} sm={10}>
        <div className="container-fluid rounded">
          <div className="row">
            <div className="col-3 offset-6">
              <div className="img-fluid">
                <img src={this.props.bigImage} alt="product" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-3 offset-md-6">
              <div className="col content justify-content-center">
                <div className="author mx-auto">
                  
                  <h4 className="title">
                    {this.props.name}
                    <br />
                    <small>{this.props.brand}</small>
                  </h4>

                  <span className="font-weight-boldml-1">
                    £{this.props.offerPrice}
                  </span>

                  <span className="mr-1 text-secondary ml-1">
                    <del>£{this.props.regularPrice}</del>
                  </span>

                </div>

                <p className="description text-center">
                  <span className="badge bg-primary mr-1">
                    {this.props.brand}
                  </span>

                  <span className="badge bg-info mr-1">
                    SKU: {this.props.sku}
                  </span>

                  {this.props.Availability}
                </p>
                
                <p>
                  <span className="mr-1 pink">
                    Created At:{this.props.createdAt}
                  </span>
                </p>

              </div>
              <form
                className="d-flex justify-content-left"
                action={this.props.URL}
              >
                <button className="btn btn-primary btn-md my-0 p" type="submit">
                  Check the product
                  <i className="fas fa-shopping-cart ml-1"></i>
                </button>
                
              </form>
            </div>
          </div>

        </div>
      </Col>
    );
  }
}

export default Card;
