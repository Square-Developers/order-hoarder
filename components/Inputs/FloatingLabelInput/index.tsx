import { useState } from 'react'
import { PasswordInput, TextInput, createStyles } from '@mantine/core'

interface TypeProps {
  label: string;
  required?: boolean;
  width: string;
  value: string;
  setValue: any;
  onSubmit: any;
  type?: string;
}

const useStyles = createStyles((theme, { floating, width }: { floating: boolean, width: string}) => ({
  root: {
    position: 'relative',
    width: width === 'md' ? '49%' : '100%',
  },

  label: {
    position: 'absolute',
    zIndex: 2,
    top: 20,
    left: 20,
    pointerEvents: 'none',
    color: 'black',
    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
    transform: floating ? 'translate(0px, -10px)' : 'none',
    fontSize: theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: 'opacity 150ms ease',
    opacity: floating ? 1 : 0,
  },

  input: {
    borderRadius: 12,
    height: 64,
    fontSize: 16,
    fontWeight: 400,
    background: 'rgba(0, 0, 0, 0)',
    padding: '40px 20px 10px 20px', /* Adjust padding to move text and cursor to the bottom */
    lineHeight: '54px', /* Adjust line-height to align text at the bottom */
  },

  /*This only affects the password input*/ 
  innerInput: {
    padding: '40px 20px 10px 20px', /* Adjust padding to move text and cursor to the bottom */
    lineHeight: '54px', /* Adjust line-height to align text at the bottom */
    fontSize: 16,
    width: '100%',
    height: '100%'
  }
}))

const FloatingLabelInput = ({ label, required = false, width, value, setValue, onSubmit, type }: TypeProps) => {
  const [focused, setFocused] = useState(false)
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
    width,
  })

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      // Perform the action you want when Enter is pressed
      onSubmit()
    }
  }

  return (
    (type === 'password' ? 
      <PasswordInput
        label={label}
        required={required}
        classNames={classes}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        onKeyDown={handleKeyPress}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        mt='md'
        autoComplete='nope'
      />
      :
    <TextInput
      label={label}
      required={required}
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onKeyDown={handleKeyPress}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt='md'
      autoComplete='no'
    />
    )
  )
}

export default FloatingLabelInput