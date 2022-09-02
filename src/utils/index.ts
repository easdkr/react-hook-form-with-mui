import { Validator } from 'components/FormInput/FormInput'

export const timeValidator: Validator = value => {
  return value === '' || (parseInt(value, 10) >= 0 && parseInt(value, 10) < 60)
}
