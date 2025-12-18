import React from 'react'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Account.css'

const Account: React.FC = () => {
  // const [authToken, setAuthToken] = React.useState<string>('')
  // const [userInfos, setUserInfos] = React.useState<User | null>(null)

  // React.useEffect(() => {
  //   setAuthToken(localStorage.getItem('oat_token') || '')
  //   fetchingMeInfos()
  // }, [authToken])

  // const fetchingMeInfos = () => {
  //   console.log('fetchingMeInfos')
  //   if (authToken !== '') {
  //     fetch(apiEndpoint + 'users/me', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${authToken}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((user: User) => setUserInfos(user))
  //   }
  // }

  // const queryLogout = () => {
  //   console.log('queryLogout')
  //   fetch(apiEndpoint + 'users/logout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${authToken}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((message) => {
  //       console.log('logged out ?', message)
  //       setAuthToken('')
  //       setUserInfos(null)
  //       localStorage.setItem('oat_token', '')
  //     })
  // }

  return (
    <PageLayout title="My account">
      <div>
        <p>account connected page</p>
        {/* <p>{authToken || ''}</p>
        <button onClick={() => fetchingMeInfos()}>{authToken !== '' ? 'me' : 'no token'}</button>
        <button onClick={() => queryLogout()}>logout</button> */}

        {/* <DisplayUserInfos user={userInfos} /> */}
      </div>
    </PageLayout>
  )
}

export default Account
