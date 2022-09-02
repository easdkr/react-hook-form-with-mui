import { TextFieldProps } from '@mui/material'
import { FormComponentProps } from 'types/props'
import { FieldValues } from 'react-hook-form'

export type Validator = (v: string) => boolean

export interface FormInputProps<T extends FieldValues> extends FormComponentProps<T, TextFieldProps> {
  validator?: Validator
}

export type OnChangeWithValidator = (validator?: Validator) => TextFieldProps['onChange']
