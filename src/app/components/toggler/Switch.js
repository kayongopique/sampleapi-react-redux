import './toggle.styles.css'
import React from 'react'


const noop = () => {}

class Switch extends React.Component {
  render() {
    const {
      on,
      className = '',
      'aria-label': ariaLabel,
      onClick,
      ...props
    } = this.props
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <div style={{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <h4
        style={{color: 'gray'}}
        >Ealiest deadline</h4>
         <label data-test ="switchComponent"
        aria-label={ariaLabel || 'Toggle'}
        style={{
          display: 'block'
        }}
      >
        
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={noop}
          onClick={onClick}
          data-test ="toggle-input"
        />
        <span className={btnClassName} {...props} />
      </label>
      <h4 style={{
        color: 'gray'
      }}>Latest deadline</h4>
      </div>
     
    )
  }
}

export {Switch}
