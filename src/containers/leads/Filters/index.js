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
Components['Amenities'] = require('./Amenities').default;
Components['Basement'] = require('./Basement').default;
Components['Construction'] = require('./Construction').default;
Components['ConstructionStatus'] = require('./ConstructionStatus').default;
Components['Elementary'] = require('./Elementary').default;
Components['Middle'] = require('./Middle').default;
Components['High'] = require('./High').default;
Components['Exterior'] = require('./Exterior').default;
Components['Interior'] = require('./Interior').default;
Components['Grid'] = require('./Grid').default;



export default Components;
