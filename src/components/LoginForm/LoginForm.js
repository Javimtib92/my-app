import { login } from '@api/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '@hooks'
import { Flex } from '@ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useHistory, useLocation } from 'react-router-dom'
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
  const { storeToken } = useAuth()

  const [loading, setLoading] = useState(false)
  const [authError, setAuthError] = useState(null)

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const location = useLocation()
  const history = useHistory()

  const onSubmit = (userCreds) => {
    setAuthError(null)
    setLoading(true)

    mutation.mutate(userCreds)
  }

  const mutation = useMutation((userCreds) => login(userCreds), {
    onSuccess: (data) => {
      storeToken(data.headers.Authorization)

      const { from } = location.state || { from: { pathname: '/' } }
      history.replace(from)
    },
    onError: (error) => {
      setAuthError(error)
      setLoading(false)
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex dir="column" align="center">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          defaultValue="test"
          ref={register}
        />
        {errors.username && <span>{errors.username.message}</span>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <input type="submit" />

        {loading && <div>Loging in, please wait...</div>}
        {authError && <div>There was an error with the login</div>}
      </Flex>
    </form>
  )
}
