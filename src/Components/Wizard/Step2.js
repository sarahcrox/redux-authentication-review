import React, { Component } from 'react';
import './Wiz.css';

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //use redux to set img state
  }

  handleChange(value) {
    this.setState({ img: value })
  }

  render() {

    return (
      <div>
        <div className='wiz_input_container'>
          <div className='wiz_input_box'>
            <p>Image URL</p>
            <input style={{ width: "35vw" }} value={this.state.img} onChange={e => this.handleChange(e.target.value)} />
          </div>
        </div>
        {/* button needs to do something */}
        <button className='wiz_button wiz_prev_button'>Previous Step</button>
        {/* button needs to do something */}
        <button className='wiz_button wiz_step_button'>Next Step</button>
      </div>
    );
  }
}

export default Step2;