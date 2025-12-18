import React from 'react'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'

const Login: React.FC = () => {
  // const [authInfos, setAuthInfos] = React.useState<User>({
  //   fullName: '',
  //   email: 'admin@gigslog.com',
  //   password: 'admin123',
  // })

  // const [authToken, setAuthToken] = React.useState<string>('')

  // const onLoginFormSubmit = () => {
  //   console.log('onLoginFormSubmit')

  //   fetch(apiEndpoint + 'users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(authInfos),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { user, token } = { ...data }
  //       console.log(data, user, token)
  //       setAuthInfos(user)
  //       setAuthToken(token.value)

  //       localStorage.setItem('oat_token', token.value)
  //     })
  // }

  return (
    <PageLayout title="login">
      <div>
        {/* <form action={onLoginFormSubmit}>
          <p>name</p>
          <input onChange={(e) => console.log(e.target.value)} value={authInfos.fullName || ''} />
          <p>email</p>
          <input onChange={(e) => console.log(e.target.value)} value={authInfos.email} />
          <p>password</p>
          <input onChange={(e) => console.log(e.target.value)} value={authInfos.password} />
          <button type="submit">submit</button>
        </form>
        <p>Auth token: {authToken}</p> */}
        <p>login page</p>
      </div>
    </PageLayout>
  )
}

export default Login
