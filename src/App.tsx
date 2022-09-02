import { Box, Button } from '@mui/material'
import FormInput from 'components/FormInput'
import FormTagInput from 'components/FormTagInput'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { container, layout } from 'styles'
import { timeValidator } from 'utils'

const defaultValues = {
  FormInput: 12,
  TagInput: ['A', 'B'],
}

export default function App() {
  const { control, handleSubmit } = useForm({
    reValidateMode: 'onBlur',
    defaultValues,
  })

  const handleOnSubmit: SubmitHandler<typeof defaultValues> = data => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Box sx={layout} component="form" onSubmit={handleSubmit(handleOnSubmit)}>
      <Box sx={container}>
        <FormInput control={control} name="FormInput" validator={timeValidator} label={'Input'} />
        <FormTagInput control={control} name="TagInput" label={'TagInput'} />
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}
