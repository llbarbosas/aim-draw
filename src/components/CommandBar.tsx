import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { useCommand } from '../providers/Command'

export default function CommandBar (): JSX.Element {
  const commandInputRef = useRef<HTMLInputElement>(null)

  const { inputText, setInputText, active, info, args } = useCommand()

  useEffect(() => {
    if (active) {
      focusInput()
    }
  })

  const handleInputChange = (e: any) => {
    setInputText(e.target.value)
  }

  const handleOnFocus = (e: any) => focusInput()

  const focusInput = () => {
    if (commandInputRef) {
      commandInputRef.current.focus()
    }
  }

  return (
    <StyledCommandBar show={active} onClick={handleOnFocus}>
      <TwoDots>:</TwoDots>
      <CommandInput
        ref={commandInputRef}
        type="text"
        spellCheck="false"
        inputSize={inputText.length}
        value={inputText}
        onChange={handleInputChange}
      />
      <CommandArgs>{args}</CommandArgs>
      <CommandInfo>{info}</CommandInfo>
    </StyledCommandBar>
  )
}

const CommandInput = styled.input<{ inputSize: number }>`
  color: #c8c8c8;
  font-size: 16px;

  width: ${(props) => props.inputSize}ch;

  padding: 0;
  background-color: transparent;
  border: none;

  :focus {
    outline: none;
  }
`

const CommandArgs = styled.span`
  color: #4e4e4e;
  white-space: pre-wrap;
`

const CommandInfo = styled(CommandArgs)`
  justify-self: flex-end;
  text-align: end;
  white-space: nowrap;
  flex: 1;
`

const TwoDots = styled.span`
  color: #c8c8c8;
  font-size: 16px;
`

const StyledCommandBar = styled.div<{ show: boolean }>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 10px 15px;
  display: ${(props) => (props.show ? 'flex' : 'none')};
`
