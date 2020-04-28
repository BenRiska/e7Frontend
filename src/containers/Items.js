import React, { Component } from "react";
/* components for this section */
import ItemContainer from "../item-components/ItemContainer";
import Filter from "../item-components/Filter";
import ItemPage from "../item-components/ItemPage";
/* style sheet */
import "../css/items.css";

export default class Items extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      selectedItem: "",
      itemSelected: false,
      filteredName: "",
      filteredType: "",
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  /* fetch items from backend server */
  fetchItems = () => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => this.setState({ items: data }));
  };

  /* handle methods for selecting/filtering item in state */

  handleItemClick = (item) => {
    this.setState({
      itemSelected: true,
      selectedItem: item.name,
    });
  };

  handleExit = () => {
    this.setState({
      itemSelected: false,
      selectedItem: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /* find and render selected item */

  renderItemPage = () => {
    const item = this.state.items.filter(
      (item) => item.name == this.state.selectedItem
    );
    return <ItemPage item={item[0]} handleExit={this.handleExit} />;
  };

  /* filter methods */

  filterName = (items) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(this.state.filteredName.toLowerCase())
    );
  };

  filterType = (items) => {
    if (this.state.filteredType.length > 0) {
      items = items.filter((item) => {
        return item.bracket == this.state.filteredType;
      });
    }
    return items;
  };

  filteredItems = (items) => {
    items = this.filterName(items);
    items = this.filterType(items);
    return items;
  };

  /* check if item is selected and render show page otherwise render list of items with filter*/

  render() {
    return !this.state.itemSelected ? (
      <div className="items">
        <Filter handleChange={this.handleChange} />
        <h1>Item information</h1>
        <ItemContainer
          items={this.filteredItems(this.state.items)}
          handleClick={this.handleItemClick}
          handleExit={this.handleExit}
        />
      </div>
    ) : (
      this.renderItemPage()
    );
  }
}
