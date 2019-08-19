import React, { Component } from 'react';
import Header from '../generic/Header';
import { BreadCrumbs } from '../../components/BreadCrumbs';

const crumbs = [
  {
    name: 'Home',
    subPath: '',
    path: '',
  },
  {
    name: 'Menus',
    subPath: 'pages',
    path: 'menus',
  },
  {
    name: 'Add Menu',
    subPath: 'pages',
    path: 'add-menu',
  },
];

class AddMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        {
          id: 1,
          name: 'Team',
        },
        {
          id: 2,
          name: 'Goals',
        },
      ],
    };

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleDeleteItem(id) {
    console.log('Deleting id : ' + id);
    this.setState(prevState => {
      let items = prevState.menuItems;
      let indexToDelete = items
        .map(item => {
          return item.id;
        })
        .indexOf(id);
      console.log(indexToDelete);
      items.splice(indexToDelete, 1);

      return {
        menuItems: items,
      };
    });
  }

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { menuItems } = this.state;
    console.log(menuItems);
    const menuList = menuItems.map(item => {
      return (
        <li key={item.id}>
          <label>
            <input type="checkbox" />
            <span>{item.name}</span>
            <a
              href="#"
              onClick={() => {
                this.handleDeleteItem(item.id);
              }}
            >
              <i className="material-icons right">delete</i>
            </a>
          </label>
        </li>
      );
    });

    return (
      <>
        <Header />
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="row breadcrumbs-inline" id="breadcrumbs-wrapper">
                  <div className="col s12 m6 l6 breadcrumbs-left">
                    <BreadCrumbs title="Menus" rootPath="" crumbs={crumbs} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="container-fluid">
                <div className="panel panel--box card">
                  <div className="col s4">
                    <ul className="collapsible" data-collapsible="accordion">
                      <li className="active">
                        <div className="collapsible-header purple lighten-2">
                          <span>Links</span>
                        </div>
                        <div className="collapsible-body">
                          <form className="s12">
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" />
                                <label>URL</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" />
                                <label>Link Text</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" />
                                <label>Link Text(Nepali)</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <label>
                                  <input type="checkbox" />
                                  <span>Open in new window</span>
                                </label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <button
                                  className="btn-small purple lighten-2 waves-effect waves-light right"
                                  type="submit"
                                  name="action"
                                >
                                  Add to Menu
                                  <i className="material-icons right">send</i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </li>
                      <li>
                        <div className="collapsible-header purple lighten-2">Page</div>
                        <div className="collapsible-body">
                          <div className="s12 menu--list">
                            <ul>
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span>Team</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span>Goals</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span>Objectives</span>
                                </label>
                              </li>
                            </ul>
                            <div className="row">
                              <div className="input-field col s12">
                                <button
                                  className="btn-small purple lighten-2 waves-effect waves-light right"
                                  type="submit"
                                  name="action"
                                >
                                  Add to Menu
                                  <i className="material-icons right">send</i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="collapsible-header purple lighten-2">Page Categories</div>
                        <div className="collapsible-body">
                          <div className="s12 menu--list">
                            <ul>
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span>Team</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span>Goals</span>
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span>Objectives</span>
                                </label>
                              </li>
                            </ul>
                            <div className="row">
                              <div className="input-field col s12">
                                <button
                                  className="btn-small purple lighten-2 waves-effect waves-light right"
                                  type="submit"
                                  name="action"
                                >
                                  Add to Menu
                                  <i className="material-icons right">send</i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col s8">
                    <form className="s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" />
                          <label>Title</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="s12 menu--list">
                          <ul>{menuList}</ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" />
                          <label>Type</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="text" />
                          <label>Menu Limit</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <button
                            className="btn purple lighten-2 waves-effect waves-light right"
                            type="submit"
                            name="action"
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

export { AddMenu };
