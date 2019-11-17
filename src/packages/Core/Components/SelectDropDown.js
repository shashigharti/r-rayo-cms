import React from 'react';
import { apiService } from '..';
import { BannerContext } from '../../Banners';

const SelectDropDown = (props) => {
    const { banners, dispatch: bdispatch } = useContext(BannerContext);
    const [setOptions] = useState((props.options) ? props.options : []);
    const { options, dest, ...elemProp } = props;

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
        if (dest != null) {
            // Set Context Dest Variable

        }
    }

    return (
        <>
            <select
                {...elemProp}
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