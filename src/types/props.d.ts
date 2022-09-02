import { ControllerRenderProps, FieldValues, UseControllerProps } from 'react-hook-form'

type WithOutFormPropsComponent<ComponentProps = unknown> = Omit<ComponentProps, keyof ControllerRenderProps>

export type FormComponentProps<
  Field extends FieldValues,
  ComponentProps = unknown,
> = WithOutFormPropsComponent<ComponentProps> & UseControllerProps<Field>
