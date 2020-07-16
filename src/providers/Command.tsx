import React, { createContext, useContext, useEffect, useState } from 'react'

type CommandContextValue = {
  active: boolean
  inputText: string
  setInputText?: React.Dispatch<React.SetStateAction<string>>
  args: string
  info: string
}

const CommandContext = createContext<CommandContextValue>({
  active: false,
  inputText: '',
  args: '',
  info: ''
})

const commands = {
  square: {
    info: 'draws a square',
    args: 'side x? y?',
    func (args: any[]) {
      const [side, x = 0, y = 0] = args
      const square = new Path2D()
      square.rect(x, y, side, side)

      return square
    }
  },
  rsquare: {
    info: 'draws a square with rounded corners',
    args: 'borderRadius side x? y?',
    func (args: any[]) {
      const [borderRadius, side, x = 0, y = 0] = args
      const rsquare = new Path2D()
      rsquare.rect(x, y, side, side)

      return rsquare
    }
  }
}

function matchCommand (text: string): any {
  if (text === '') return

  const match = new RegExp(`^${text}(.*)`)
  const entries = Object.entries(commands).find(([name, data]) =>
    match.test(name)
  )

  return entries ? [...entries, match.exec(entries[0])[1]] : entries
}

export function CommandProvider (
  props: JSX.IntrinsicAttributes & React.ProviderProps<null>
): JSX.Element {
  const [active, setActive] = useState(false)
  const [inputText, setInputText] = useState('')
  const [args, setArgs] = useState('')
  const [info, setInfo] = useState('')

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === ':') {
        setActive(true)
      }

      if (e.key === 'Escape') {
        setActive(false)
        setInputText('')
      }
    })
  })

  useEffect(() => {
    const match = matchCommand(inputText)

    if (inputText === '') {
      setActive(false)
    }

    if (match) {
      setArgs(match[2] + ' ' + match[1].args)
      setInfo(match[1].info)
    } else {
      setArgs('')
      setInfo('')
    }
  }, [inputText])

  return (
    <CommandContext.Provider
      {...props}
      value={{ active, inputText, setInputText, info, args }}
    />
  )
}

export const useCommand = () => useContext(CommandContext)
