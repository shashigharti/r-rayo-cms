import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = props => {
  const { color, setFieldValue } = props;
  const [state, setState] = useState({
    displayColorPicker: false,
  });
  useEffect(() => {
    M.AutoInit();
  });
  const onChange = (color, event) => {
    setFieldValue('color', color.hex);
  };

  const handleClick = () => {
    setState({
      ...state,
      ['displayColorPicker']: !state.displayColorPicker,
    });
  };

  const handleClose = () => {
    setState({
      displayColorPicker: false,
    });
  };
  const styles = {
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: color != '' ? color : '',
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  };
  return (
    <div>
      <div>
        <div style={styles.default.swatch} onClick={handleClick}>
          <div style={styles.default.color} />
        </div>
        {state.displayColorPicker ? (
          <div style={styles.default.popover}>
            <div style={styles.default.cover} onClick={handleClose} />
            <ChromePicker color={color} onChange={onChange} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ColorPicker;
