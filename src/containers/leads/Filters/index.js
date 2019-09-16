import '../leads-inner.css';
import M from 'materialize-css';

M.AutoInit();

let Components = {};
Components['Residential'] = require('./Residential').default;
Components['Condominiums'] = require('./Condominiums').default;
Components['MultiFamily'] = require('./MultiFamily').default;
Components['DefaultFilter'] = require('./DefaultFilter').default;

Components['Price'] = require('./Price').default;
Components['Beds'] = require('./Beds').default;
Components['Bathrooms'] = require('./Bathrooms').default;
Components['Garage'] = require('./Garage').default;
Components['City'] = require('./City').default;
Components['Zip'] = require('./Zip').default;
Components['Acres'] = require('./Acres').default;
Components['Sqft'] = require('./Sqft').default;
Components['Year'] = require('./Year').default;
Components['Style'] = require('./Style').default;

export default Components;
