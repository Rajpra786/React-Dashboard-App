/********************************************************************************************************
 *                         Author: Rajendra Prajapat                                                    *
 *                         React Dashboard                                                              *
 *                         About the file: component to display Dashboard                               *
 ********************************************************************************************************/

import React, { Component } from "react";
import { Grid, Row, Button, Table } from "react-bootstrap";
import Popup from "reactjs-popup";
import axios from "axios"; //for handling the requests(like get,post)


//import the components
import { Card } from "components/Card/Card.jsx";
import { StockFilter } from "components/FilterForm/StockFilter.jsx";
import { CreatedAtFilter } from "components/FilterForm/CreatedAtFilter";
import { BrandFilter } from "components/FilterForm/BrandFilter";
import { DiscountFilter } from "components/FilterForm/DiscountFilter";
import ShowFilters from "components/showfilters/ShowFilters.component";



const Product = (props) => (
  <Card
    bigImage={Object.values(props.product.media.standard)[0].url}
    brand={props.product.brand.name}
    sku={props.product.sku}
    offerPrice={Object.values(props.product.price.offer_price)[1]}
    regularPrice={Object.values(props.product.price.regular_price)[1]}
    Availability={
      <span className="badge bg-success mr-1">
        Available:{Object.values(props.product.stock).join(" ")}
      </span>
    }
    name={props.product.name}
    URL={props.product.url}
    createdAt={props.product.created_at.substring(0, 10)}
  />
);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onKeyChange = this.onKeyChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onOprChange = this.onOprChange.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.KeyChange = this.KeyChange.bind(this);
    this.onClearAll = this.onClearAll.bind(this);
    this.onClear = this.onClear.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.Filter = this.Filter.bind(this);
    this.state = {
      key: "",
      value: "",
      operator: "",
      startDate: new Date(),
      endDate: new Date(),
      products: [],
      filters: [],
      open: -1,
    };
  }

  //to list all the products
  productList() {
    console.log(this.state.products);
    return this.state.products.map((current) => {
      return <Product product={current} key={current._id} />;
    });
  }

  //to list the filters
  Filterslist() {
    return this.state.filters.map((current, index) => {
      return (
        <ShowFilters
          key_={current.key}
          value_={current.value}
          operator_={current.opr}
          index={index}
          onClick={this.onClear}
          key={index}
        />
      );
    });
  }

  //"proxy": "http://localhost:8081"
  //receive the data
  componentDidMount() {
    axios
      .get("/app")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //for key change
  onKeyChange(e) {
    console.log(e.target.value);
    this.setState({
      key: e.target.value,
    });
  }

  KeyChange(val) {
    console.log("hello");
    this.setState({
      key: "val",
    });
  }

  //for change in value
  onValueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  //operation change
  onOprChange(e) {
    this.setState({
      operator: e.target.value,
    });
  }

  //change in start date
  onChangeStartDate(date) {
    this.setState({
      startDate: date,
    });
  }

  //change in end date
  onChangeEndDate(date) {
    this.setState({
      endDate: date,
    });
  }

  // to clear all the filters
  onClearAll() {
    this.setState({ filters: [] });
  }

  //to remove a filter 
  onClear(e) {
    e.preventDefault();
    var index = Number(e.target.value);
    var newFilters = [...this.state.filters];

    if (isNaN(index) !== true) {
      newFilters.splice(index, 1);
      this.setState({ filters: newFilters });
    }
  }

  // once filter values are set create a new object and add to list
  onDone(e) {
    e.preventDefault();
    var filter_ = {};
    filter_.key = e.target.value;

    if (filter_.key === "stock_available") {
      filter_.value = this.state.value;
      filter_.opr = this.state.operator;
    } else if (filter_.key === "created_at") {
      filter_.value = [this.state.startDate, this.state.endDate];
      filter_.opr = this.state.operator;
    } else if (filter_.key === "brand") {
      filter_.value = this.state.value;
      filter_.opr = "contains";
    } else if (filter_.key === "discount") {
      filter_.value = this.state.value;
      filter_.opr = this.state.operator;
    }

    this.state.filters.push(filter_);
    this.closeModal();
  }

  //close the model
  onCancel(e) {
    e.preventDefault();
    this.closeModal();
  }

  //Apply filters
  Filter() {
    var request_ = {};
    request_.filters = this.state.filters;
    console.log(request_);
    
    axios
      .post("/app/filter", request_)
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //open a model 
  openModal(formInd) {
    formInd = Number(formInd);
    this.setState({ open: formInd });
  }

  closeModal() {
    this.setState({ open: -1 });
  }

  render() {
    return (
      <div className="content">
        <div className="btn-toolbar">

          <Button
            variant="info"
            className="btn btn-info ml-2"
            onClick={() => this.openModal(0)}
          >
            Stock-Availabilty
          </Button>

          <Button
            variant="info"
            className="btn btn-info ml-2"
            onClick={() => this.openModal(1)}
          >
            Created At
          </Button>

          <Button
            variant="info"
            className="btn btn-info ml-2"
            onClick={() => this.openModal(2)}
          >
            Brand
          </Button>
          
          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={() => this.openModal(3)}
          >
            Discount
          </Button>

          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={() => this.openModal(4)}
          >
            Show Filters
          </Button>

          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={this.Filter}
          >
            Apply Filters
          </Button>

          <Button
            variant="info"
            className="btn btn-info mx-auto"
            onClick={this.onClearAll}
          >
            ClearAll
          </Button>
        </div>

        <Popup
          open={this.state.open === 0}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>
          <StockFilter
            Key="stock_available"
            Value={this.state.value}
            Opr={this.state.operator}
            valueChange={this.onValueChange}
            oprChange={this.onOprChange}
            onCancel={this.onCancel}
            onSubmit={this.onDone}
          />
        </Popup>

        <Popup
          open={this.state.open === 1}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>
          <CreatedAtFilter
            Key="created_at"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            Opr={this.state.operator}
            onChangeStartDate={this.onChangeStartDate}
            onChangeEndDate={this.onChangeEndDate}
            oprChange={this.onOprChange}
            onCancel={this.onCancel}
            onSubmit={this.onDone}
          />
        </Popup>

        <Popup
          open={this.state.open === 2}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>
          <BrandFilter
            Key="brand"
            Value={this.state.value}
            Opr={this.state.operator}
            valueChange={this.onValueChange}
            oprChange={this.onOprChange}
            onCancel={this.onCancel}
            onSubmit={this.onDone}
          />
        </Popup>

        <Popup
          open={this.state.open === 3}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>
          <DiscountFilter
            Key="discount"
            Value={this.state.value}
            Opr={this.state.operator}
            valueChange={this.onValueChange}
            oprChange={this.onOprChange}
            onCancel={this.onCancel}
            onSubmit={this.onDone}
          />
        </Popup>

        <Popup
          open={this.state.open === 4}
          modal
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal}>
            &times;
          </button>

          <Grid fluid>
            <Row>
              <Table className="striped table table-hover">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                    <th>Operator</th>
                  </tr>
                </thead>
                <tbody>{this.Filterslist()}</tbody>
              </Table>
            </Row>
          </Grid>
        </Popup>

        <Grid fluid>
          <Row>{this.productList()}</Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
