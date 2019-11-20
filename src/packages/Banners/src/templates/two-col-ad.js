import React from 'react';
export default (props) => {
    const { setFieldValue } = props;

    return (
        <div className="banner-template">
            <div className="row">
                <div className="input-field col s12">
                    <label>Header</label>
                    <input type="text"
                        name="header"
                        value={props.header}
                        onChange={e => setFieldValue('header', e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <label>Content</label>
                    <textarea
                        name="content"
                        value={props.content}
                        className="materialize-textarea"
                        onChange={(e) => setFieldValue('content', e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <label>Button Text</label>
                    <input type="text"
                        name="button_text"
                        value={props.button_text}
                        onChange={e => setFieldValue('button_text', e.target.value)}
                        required
                    />
                </div>
                <div className="input-field col s6">
                    <label>Button Url</label>
                    <input type="text"
                        name="button_url"
                        value={props.button_url}
                        onChange={e => setFieldValue('button_url', e.target.value)}
                        required
                    />
                </div>
            </div>
        </div>
    );
}