import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    // console.log(this.props.currenCategory);
    this.props.actions.getCategories();
  }

  selectCategory = category => {
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)
  };

  render() {
    return (
      <div>
        <h3 >  <Badge color="warning">Categories </Badge></h3>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem
              active={category.id === this.props.currenCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currenCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(
        productActions.getProducts,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
