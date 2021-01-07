import { yupResolver } from '@hookform/resolvers/yup'
import { Flex } from '@ui'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex dir="column" align="center">
        <input name="username" defaultValue="test" ref={register} />
        {errors.username && <span>{errors.username.message}</span>}
        <input name="password" ref={register({ required: true })} />
        {errors.password && <span>{errors.password.message}</span>}

        <input type="submit" />
      </Flex>
    </form>
  )
}
