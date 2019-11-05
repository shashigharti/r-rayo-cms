import React, { Component } from 'react';
import axios from 'axios';
import Filters from '../Filters';
import '../leads-inner.css';
import '../filter.css';
import { Button } from '../../../components/Button';

class EditSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOne: [],
      columnTwo: [],
      columnThree: [],
      columnFour: [],
      formData: {
        search_name: '',
        frequency: '',
        price_min: 'default',
        price_max: 'default',
        baths_min: 'default',
        baths_max: 'default',
        beds_min: 'default',
        beds_max: 'default',
        status: [],
        type: [],
      },
      searchId: props.searchId,
      check: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStatusClick = this.handleStatusClick.bind(this);
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
    this.handlePicClick = this.handlePicClick.bind(this);
    this.returnToDefaultState = this.returnToDefaultState.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    M.updateTextFields();
  }

  static getDerivedStateFromProps(props, state) {
    // If new id being edited, match new props to state,
    // Else continue edit on existing id
    if (state.searchId !== props.searchId) {
      return {
        formData: props.formData,
        searchId: props.searchId,
        check: true,
      };
    } else {
      return state;
    }
  }

  componentDidMount() {
    axios.get('/api/settings/filter_setting').then(response => {
      let values = response.data.data.values;
      let { columnOne, columnTwo, columnThree, columnFour } = values;
      this.setState({
        columnOne,
        columnTwo,
        columnThree,
        columnFour,
      });
    });
  }

  returnToDefaultState() {
    this.setState({
      formData: {
        price_min: 'default',
        price_max: 'default',
        baths_min: 'default',
        baths_max: 'default',
        beds_min: 'default',
        beds_max: 'default',
        type: [],
        status: [],
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { formData, searchId } = this.state;
    let data = {
      id: searchId,
      user_id: this.props.lead.id,
      name: formData.search_name,
      frequency: formData.frequency,
      content: formData,
    };
    delete formData.search_name;
    delete formData.frequency;

    // Store search
    axios
      .put('/api/lead-search/update', data)
      .then(response => {
        M.toast({ html: response.data.message });
        this.props.getLead();
      })
      .catch(e => {
        console.log(e);
        M.toast({ html: 'Failed to save!' });
      });
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  }

  handleClick(e) {
    let checked = e.target.checked;
    let value = e.target.value;
    this.setState(prevState => {
      let arr = prevState.formData.type;
      if (checked) {
        // Add
        arr.push(value);
      } else {
        // Remove
        let index = arr.indexOf(value);
        arr.splice(index, 1);
      }
      return {
        formData: {
          ...prevState.formData,
          type: arr,
        },
      };
    });
  }

  handleStatusClick(e) {
    let checked = e.target.checked;
    let value = e.target.value;
    this.setState(prevState => {
      let arr = prevState.formData.status;
      if (checked) {
        // Add
        arr.push(value);
      } else {
        // Remove
        let index = arr.indexOf(value);
        arr.splice(index, 1);
      }
      return {
        formData: {
          ...prevState.formData,
          status: arr,
        },
      };
    });
  }

  handlePicClick(e) {
    let checked = e.target.checked;
    let value = e.target.value;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        pic_only: checked ? value : 'no',
      },
    }));
  }

  handleChoiceChange(name, value) {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  }

  renderFilter(data) {
    return data.map((com, key) => {
      let Component = Filters[com];
      return (
        <Component
          key={key}
          mode="edit"
          onChoiceChange={this.handleChoiceChange}
          onChange={this.handleChange}
          values={this.state.formData}
          onClick={this.handleClick}
          onStatusClick={this.handleStatusClick}
          onPicClick={this.handlePicClick}
        />
      );
    });
  }

  render() {
    const { columnOne, columnTwo, columnThree, columnFour, formData } = this.state;
    let columnOneFilter = columnOne.length > 0 && this.renderFilter(columnOne);
    let columnTwoFilter = columnTwo.length > 0 && this.renderFilter(columnTwo);
    let columnThreeFilter = columnThree.length > 0 && this.renderFilter(columnThree);
    let columnFourFilter = columnFour.length > 0 && this.renderFilter(columnFour);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col s6">
            <div className="input-field">
              <input
                type="text"
                name="search_name"
                onChange={this.handleChange}
                value={formData.search_name}
                required
              />
              <label>Search Name</label>
            </div>
          </div>
          <div className="col s6">
            <div className="input-field">
              <select
                name="frequency"
                onChange={this.handleChange}
                value={formData.frequency}
                required
              >
                <option value="">Notifications</option>
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s3">{columnOneFilter}</div>
          <div className="col s3">{columnTwoFilter}</div>
          <div className="col s3">{columnThreeFilter}</div>
          <div className="col s3">{columnFourFilter}</div>
        </div>
        <div className="row">
          <div className="col s12">
            <Button type="submit" className="purple btn">Submit</Button>
          </div>
        </div>
      </form>
    );
  }
}

export { EditSearch };
