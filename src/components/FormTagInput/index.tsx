import { Autocomplete, TextField } from '@mui/material'
import { Controller, FieldValues, useController } from 'react-hook-form'
import { FormTagInputProps, OnChange } from './FormTagInput'

export default function FormTagInput<T extends FieldValues>({
  name,
  rules,
  control,
  shouldUnregister,
  defaultValue,
  variant,
  label,
  ChipProps,
}: FormTagInputProps<T>) {
  const { field } = useController({ name, rules, control, shouldUnregister, defaultValue })
  const { onChange, ...restField } = field

  const handleChange: OnChange = (_, value) => onChange(value)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ...field } }) => (
        <Autocomplete<string, boolean, boolean, boolean>
          freeSolo
          multiple
          options={[]}
          value={field.value as string[]}
          ChipProps={ChipProps}
          onChange={handleChange}
          renderInput={params => <TextField label={label} {...params} {...restField} />}
        />
      )}
    />
  )
}
