import React, { Component, useState } from 'react';

const LeadDetail = () => {
  return (
    <>
      <div id="main">
        <div className="row">
          <div class="container-fluid">
            <div class="row filter--bar fixed mt-3">
              <div class="col s12">
                <div class="col left">
                  <ul class="tabs theme__tabs">
                    <li class="tab">
                      <a class="active" href="#">
                        Overview
                      </a>
                    </li>
                    <li class="tab">
                      <a href="#">Communication</a>
                    </li>
                    <li class="tab">
                      <a href="#">Notes</a>
                    </li>
                    <li class="tab">
                      <a href="#">Views/Favs</a>
                    </li>
                    <li class="tab">
                      <a href="#">Searches</a>
                    </li>
                    <li class="tab">
                      <a href="#">Bookmarks</a>
                    </li>
                    <li class="tab">
                      <a href="#">Reports</a>
                    </li>
                    <li class="tab">
                      <a href="#">Alerts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col s3">
                <div class="panel card fixed--bar">
                  <h3 class="title">
                    Vega Norma{' '}
                    <a href="#edit" class="modal-trigger">
                      <i class="material-icons">edit</i>
                    </a>
                  </h3>
                  <div class="bar-btn">
                    <a href="#" class="btn btn-small cyan">
                      <i class="material-icons">email</i>Send Email
                    </a>
                    <a href="#" class="btn btn-small cyan">
                      <i class="material-icons">search</i>Add Search
                    </a>
                  </div>
                  <div class="row">
                    <div class="tags col s12">
                      <div class="chip amber">
                        Anchorage
                        <i class="close material-icons">close</i>
                      </div>
                      <div class="chip purple">
                        Active
                        <i class="close material-icons">close</i>
                      </div>
                    </div>
                    <div class="col s12">
                      <select>
                        <option value="" disabled selected>
                          assign group
                        </option>
                        <option value="1">Palmer</option>
                        <option value="2">Sellar</option>
                        <option value="3">Wasilla</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadDetail;
