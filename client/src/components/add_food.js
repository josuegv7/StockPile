import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addFood, fetchFoodList } from "../actions";
import css from "../style/stockpile.css";

const renderField = field => {
  const { input, type } = field;
  return (
    <div className="form-group">
      <label> {field.label}</label>
      <input {...input} type={type}/>
    </div>
  );
};

class AddFood extends Component {
  onSubmit(values) {
    this.props.addFood(values);
  }
  refreshfoodlist() {
    this.props.fetchFoodList();
  }
  render() {
    const { handleSubmit } = this.props;
    return (


<div className="card bg-light mb-3 centered">
    <form className={css.addfoodForm} onSubmit={handleSubmit(this.onSubmit.bind(this))} >
      <Field label="Food: " name="name" component={renderField} />
      <Field label="Type: " name="type" component={renderField} />
      <div className="card-action centered">
        <button
          type="submit"
          className={css.addfoodbutton}
          onClick={this.refreshfoodlist()}>
          ADD
        </button>
        <button className={css.addfoodbutton}>Cancel</button>
      </div>
    </form>

</div>







    );
  }
}
AddFood = reduxForm({
  form: "NewFoodForm",
  fields: ["name", "type"]
})(AddFood);

export default connect(null, { addFood, fetchFoodList })(AddFood);
