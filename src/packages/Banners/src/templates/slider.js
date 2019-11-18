import React from 'react';
const Slider = ({ props, callback }) => {
    console.log(props);
    return (
        <>
            <div className="row">
                <div className="input-field col s12">
                    <label>Areas</label>
                    <select
                        value={props.area_type}
                        name="area_types"
                        onChange={(e) => callback('area_types', e.target.value)}
                        multiple
                    >
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="cities">Cities</option>
                        <option value="counties">Counties</option>
                        <option value="school">High School</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <label>Cities</label>
                    <select
                        value={props.sub_areas}
                        name="sub_areas"
                        onChange={(e) => callback('sub_areas', e.target.value)}
                    >
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="1">City 1</option>
                        <option value="2">City 2</option>
                        <option value="3">City 3</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <label>Items</label>
                    <select
                        value={props.property_ids}
                        name="property_ids"
                        onChange={(e) => callback('property_ids', e.target.value)}
                    >
                        <option value="" disabled>
                            Choose your option
                        </option>
                        <option value="block1">City 1</option>
                        <option value="2">City 2</option>
                        <option value="3">City 3</option>
                    </select>
                </div>
            </div>
        </>
    );
}
export default Slider;