import M from 'materialize-css';


class AlertService {
    store(response) {
        response.then(response => {
            console.log('success', response);
            M.toast({ 'html': 'Successfully Added' });
        }).catch(err => {
            M.toast({ 'html': 'Something went wrong !' });
            if (err.response.status == '422') {
                const errors = err.response.data.errors;
                Object.keys(errors).map(function (keys) {
                    errors[keys].map(function (message) {
                        M.toast({ 'html': message });
                    });
                });
            }
        });
    }
}

export const alertService = new AlertService();