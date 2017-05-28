// Having to use weird ref way of setting non standard attribute
// Better way may be possible in future
// https://github.com/facebook/react/issues/140

import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import styled from 'styled-components'
import Row from '../Row'

const Right = styled.div`
  margin-left: auto;
  display: flex;
`

const Menu = ({
  onFileSaveChange, onFileLoadChange, onSaveClick,
  filePath, onSendOutputClick, clockIsGenerated, onClockToggleClick
}) => {
  let saveAsInput
  let loadInput

  return (
    <Row>
      <Button onClick={onSaveClick}>Save</Button>
      <Button onClick={() => saveAsInput.click()}>Save As</Button>
      <Button onClick={() => loadInput.click()}>Load</Button>
      <span>{filePath}</span>

      <Button onClick={onSendOutputClick}>Send to display</Button>

      <input
        onChange={onFileSaveChange}
        type='file'
        ref={
            node => {
              node && node.setAttribute('nwsaveas', '')
              saveAsInput = node
            }
        }
        accept='.json'
        style={{ display: 'none' }}
      />
      <input
        onChange={onFileLoadChange}
        type='file'
        ref={node => { loadInput = node }}
        accept='.json'
        style={{ display: 'none' }} />

      <Right>
        <Button onClick={onClockToggleClick}>
          Mock Clock is: {clockIsGenerated ? 'ON' : 'OFF'}
        </Button>
      </Right>
    </Row>
  )
}

Menu.propTypes = {
  filePath: PropTypes.string,
  onFileSaveChange: PropTypes.func.isRequired,
  onFileLoadChange: PropTypes.func.isRequired,
  onSendOutputClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onClockToggleClick: PropTypes.func.isRequired,
  clockIsGenerated: PropTypes.bool
}

export default Menu
