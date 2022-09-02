import { AutocompleteProps, TextFieldProps } from '@mui/material'
import { FieldValues } from 'react-hook-form'
import { FormComponentProps } from 'types/props'

export type BaseTagInputProps = AutocompleteProps<string, boolean, boolean, boolean>
export type OnChange = BaseTagInputProps['onChange']

export interface FormTagInputProps<T extends FieldValues> extends FormComponentProps<T> {
  label?: TextFieldProps['label']
  variant?: TextFieldProps['variant']
  ChipProps?: BaseTagInputProps['ChipProps']
}
