import React, { Component } from 'react';
import axios from 'axios';
import './Wiz.css';

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      recommended: 0,
      rent: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.complete = this.complete.bind(this);
  }

  componentDidMount() {
    //Use redux to set state items
  }

  handleChange(prop, value) {
    switch (prop) {
      case 'mortgage':
        this.setState({
          mortgage: value, recommended: value * 1.25
        })
        break;
      case 'rent':
        this.setState({
          rent: value
        })
        break;
      default:
        break;
    }
  }

  //build function that will send house data from redux to database

  render() {
    return (
      <div>
        <div className='wiz_input_container'>
          <div style={{ textAlign: 'center', fontWeight: '700', margin: '20px' }}>Recommended Rent: ${this.state.recommended}</div>
          <div className='wiz_input_box'>
            <p>Monthly Mortgage Amount</p>
            <input type='number' style={{ width: "35vw" }} value={this.state.mortgage} onChange={e => this.handleChange('mortgage', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>Desired Monthly Rent</p>
            <input type='number' style={{ width: "35vw" }} value={this.state.rent} onChange={e => this.handleChange('rent', e.target.value)} />
          </div>
        </div>
        {/* buttons need to do something */}
        <button className='wiz_button wiz_prev_button'>Previous Step</button>
        <button className='wiz_button wiz_complete_button'>Complete</button>
      </div>
    );
  }
}

export default Step3;