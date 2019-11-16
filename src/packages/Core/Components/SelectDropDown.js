import React from 'react';

const SelectDropDown = (props) => {
    const options = useState((props.options)?props.options:[]);

    
    useEffect(() => {
        if(options.length <= 0){
            console.log('No data');

            // Make an ajax call
        }
       
    }, [])

    
    const  afterChangeAction = () => {
        console.log((props.dest)?props.dest:'');

    }

    return (
        <>
            <select               
                name={props.name}
                onChange={(e) => props.setFieldValue(props.name, e.target.value); afterChangeAction()}
                {(props.multiple)?'multiple':''}                
            >
                {props.options.map((option, index)=>{
                    return (
                        <option key={index} value={option.value}>{option.title}</option>
                    );
                })}                                               
            </select> 
        </>
    );
}
export default SelectDropDown;