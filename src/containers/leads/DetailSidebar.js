import React, { Component } from 'react';

class DetailSidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { lead, groupOptions } = this.props;
    return (
      <div className="col s3">
        <div className="panel card fixed--bar">
          <h3 className="title">
            {lead.firstname + ' ' + lead.lastname}
            <a href="#edit" className="modal-trigger">
              <i className="material-icons">edit</i>
            </a>
          </h3>
          <div id="edit" className="modal modal-fixed-footer">
            <div className="modal-content">
              <div className="modal-header">
                <span>Edit Lead Name</span>
                <a href="#!" className="modal-action modal-close right ">
                  <i className="material-icons">clear</i>
                </a>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" />
                      <label className="">First Name</label>
                    </div>
                    <div className="input-field col s12">
                      <input type="text" />
                      <label>Last Name</label>
                    </div>
                    <div className="col s12">
                      <a href="#" className=" btn purple">
                        Save
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bar-btn">
            <a href="#" className="btn btn-small cyan">
              <i className="material-icons">email</i>Send Email
            </a>
            <a href="#" className="btn btn-small cyan">
              <i className="material-icons">search</i>Add Search
            </a>
          </div>
          <div className="row">
            <div className="tags col s12">
              <div className="chip amber">
                Anchorage
                <i className="close material-icons">close</i>
              </div>
              <div className="chip purple">
                Active
                <i className="close material-icons">close</i>
              </div>
            </div>
            <div className="col s12">
              <select>
                <option value="">Assign group</option>
                {groupOptions}
              </select>
            </div>
          </div>
          <div className="form-element">
            <div className="row">
              <div className="col s12">
                <h5>
                  Email
                  <a href="#add" className="modal-trigger">
                    <i className="material-icons right">add</i>
                  </a>
                  <div id="add" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </h5>
                <div>
                  <i className="grey material-icons">close</i>
                  {lead.email}
                  <a href="#" className="right">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#email-edit" className="right modal-trigger">
                    <i className="material-icons">edit</i>
                  </a>
                  <div id="email-edit" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col s12">
                <h5>
                  Phone
                  <a href="#add" className="modal-trigger">
                    <i className="material-icons right">add</i>
                  </a>
                  <div id="add" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </h5>
                <div>
                  <i className="grey material-icons">close</i>
                  {lead.phone_number}
                  <a href="#" className="right">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#email-edit" className="right modal-trigger">
                    <i className="material-icons">edit</i>
                  </a>
                  <div id="email-edit" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col s12">
                <h5>
                  Address
                  <a href="#add" className="modal-trigger">
                    <i className="material-icons right">add</i>
                  </a>
                  <div id="add" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </h5>
                <div>
                  <i className="grey material-icons">close</i>
                  {lead.address}
                  <a href="#" className="right">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#email-edit" className="right modal-trigger">
                    <i className="material-icons">edit</i>
                  </a>
                  <div id="email-edit" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col s12">
                <h5>
                  Price
                  <a href="#add" className="modal-trigger">
                    <i className="material-icons right">add</i>
                  </a>
                  <div id="add" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </h5>
                <div>
                  <i className="grey material-icons">close</i>908764322
                  <a href="#" className="right">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#email-edit" className="right modal-trigger">
                    <i className="material-icons">edit</i>
                  </a>
                  <div id="email-edit" className="modal modal-fixed-footer">
                    <div className="modal-content">
                      <div className="modal-header">
                        <span>Add Email</span>
                        <a href="#!" className="modal-action modal-close right ">
                          <i className="material-icons">clear</i>
                        </a>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="row">
                            <div className="col s12 status right-align">
                              <a href="#">
                                <i className="material-icons">help_outline</i>
                                Unverified
                              </a>
                              <a href="#">
                                <i className="material-icons">clear</i>
                                Invalid
                              </a>
                              <a href="#">
                                <i className="material-icons">check</i>
                                Valid
                              </a>
                            </div>
                            <div className="input-field col s12">
                              <input type="text" />
                              <label>Email</label>
                            </div>
                            <div className="col s12">
                              <a href="#" className=" btn purple">
                                Save
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-7">
                  <p>MEDIAN PRICE:</p>
                  <p>AVERAGE PRICE:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { DetailSidebar };
