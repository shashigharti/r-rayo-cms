import React, { Component } from 'react';
import { BreadCrumbs } from '../../../Core/Components/BreadCrumbs';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Page Category',
    subPath: 'pages',
    path: 'page-category',
  },
  {
    name: 'Add Category',
    subPath: 'pages',
    path: 'add-page-category',
  },
];

class AddPageCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // API
  }

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s12 breadcrumbs-left">
                    <BreadCrumbs title="Pages" rootPath="" crumbs={crumbs} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="panel card panel--box">
                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            name="categoryName"
                            id="categoryName"
                            onChange={this.handleChange}
                            type="text"
                          />
                          <label>Category Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <button
                            type="submit"
                            className="waves-effect gradient-45deg-purple-deep-orange waves-light btn"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddPageCategory;
