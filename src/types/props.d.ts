import { ControllerRenderProps, FieldValues, UseControllerProps } from 'react-hook-form'

type WithoutFormPropsComponent<ComponentProps = unknown> = Omit<ComponentProps, keyof ControllerRenderProps>

export type FormComponentProps<
  Field extends FieldValues,
  ComponentProps = unknown,
> = WithoutFormPropsComponent<ComponentProps> & UseControllerProps<Field>
