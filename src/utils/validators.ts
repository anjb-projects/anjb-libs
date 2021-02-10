import * as yup from 'yup'

export const optional = yup.mixed().nullable()

export const numberRequired = yup.number().typeError('O valor deve ser um número')

export const stringOptional = yup.string().nullable()

export const stringRequired = stringOptional.required('Este campo não pode estar vazio')

export const arrayRequired = yup.array().required('Pelo menos uma seleção é necessária.').typeError('')

export const arrayOptional = yup.array().nullable()

export const booleanOptional = yup.boolean().nullable()

export const minimumLengthRequired = (
  length: number,
  fieldName: string = '',
) => yup
  .string()
  .min(length, `O campo '${fieldName}' tem de ter pelo menos ${length} caracteres.`)

export const password = (minimumPasswordLength: number) => {
  const validator = minimumLengthRequired(minimumPasswordLength, 'senha').test(
    'is-not-whitespace',
    'O campo \'senha\' não pode estar vazio',
    (value: string) => !/\s/.test(value),
  )

  return validator
}

export const optionalPassword = (minimumPasswordLength: number) => {
  const validator = yup
  .string()
  .min(minimumPasswordLength, `O campo \'senha'\ tem de ter pelo menos ${minimumPasswordLength}.`)
  .nullable()
  .test(
    'is-not-whitespace',
    'O campo \'senha\' não pode conter espaços.',
    (value: string) => !/\s/.test(value),
  )

  return validator
}