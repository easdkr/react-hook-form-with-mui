import { TextField } from '@mui/material'
import { FieldValues, useController } from 'react-hook-form'
import { FormInputProps, OnChangeWithValidator } from './FormInput'

export default function FormInput<T extends FieldValues>({
  name,
  rules,
  control,
  shouldUnregister,
  defaultValue,
  validator,
  ...textFieldProps
}: FormInputProps<T>) {
  const { field } = useController({
    name,
    rules,
    control,
    shouldUnregister,
    defaultValue,
  })
  const { onChange, ...restField } = field
  const handleChange: OnChangeWithValidator = validator => e => {
    if (!validator || validator(e.target.value)) {
      onChange(e)
    }
  }

  return <TextField onChange={handleChange(validator)} {...restField} {...textFieldProps} />
}
