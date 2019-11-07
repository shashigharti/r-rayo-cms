import React, { useContext, useEffect } from 'react';
import { GlobalContext, AuthContext } from '../..';

const Dashboard = () => {
  const { gState, gDispatch } = useContext(GlobalContext);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.isAuthenticated) {
      console.log(gState);
      // gDispatch({
      //     type: 'ADD_BREADCRUMB', breadcrumb: {
      //         name: 'Home',
      //         subPath: '',
      //         path: '',
      //     }
      // });
    }
  });


  return (
    <div id="main">
      <div className="row">
        <div className="col s12">
          <div className="container-fluid">
            <div className="card">
              <div className="card-content">Welcome User</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
