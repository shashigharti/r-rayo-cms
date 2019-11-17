import React from 'react';
import { apiService } from '..';

const SelectDropDown = (props) => {
    const [options, setOptions] = useState((props.options) ? props.options : []);
    const { multiple } = props;

    useEffect(() => {
        if (options.length <= 0) {
            // Make an ajax call
            apiService.getAll('').then(response => {
                this.setOptions(response.data);
            }).catch(err => {
                console.log(err)
            })
        }
    }, [])

    const afterChangeAction = () => {

    }

    return (
        <>
            <select
                name={name}
                onChange={(e) => setFieldValue('slug', e.target.value)}
                {...multiple}
            >
                {props.options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>{option.title}</option>
                    );
                })}
            </select>
        </>
    );
}

export default SelectDropDown;