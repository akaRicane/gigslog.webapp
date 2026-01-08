import { UserCredentials } from '#common/types/backend_api'
import { test } from '@japa/runner'

/* STATUS CODE MEMENTO
 * 200: ok
 * 201: created ok
 * 204: no content ok
 */

enum WebAppAuthRoutes {
  REGISTER = '/auth/register',
  DELETE = '/auth/delete',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  ME = '/auth/me',
  UPDATE = '/auth/update',
}

const generateTempUserInformations = (): UserCredentials => {
  const time: string = JSON.stringify(Date.now())
  return {
    email: time + '@test.com',
    password: 'test_secret',
    confirmPassword: 'test_secret',
  } as UserCredentials
}

test.group('Authentication', () => {
  test('User | register, login, read user infos & remove', async ({ client }) => {
    const tempUser: UserCredentials = generateTempUserInformations()

    const registerResponse = await client.post(WebAppAuthRoutes.REGISTER).json(tempUser)
    registerResponse.assertStatus(201)
    registerResponse.assertBodyContains({
      user: {
        email: tempUser.email,
      },
    })

    const loginResponse = await client.post(WebAppAuthRoutes.LOGIN).json(tempUser)
    loginResponse.assertStatus(200)

    // non persistent cookies in tests, extract from login response.
    const oatToken = loginResponse.body().token.value

    const meResponse = await client.post(WebAppAuthRoutes.ME).withCookie('oat_token', oatToken)

    meResponse.assertStatus(200)
    meResponse.assertBodyContains({
      user: {
        email: tempUser.email,
      },
    })

    const deleteResponse = await client
      .post(WebAppAuthRoutes.DELETE)
      .withCookie('oat_token', oatToken)
      .json(tempUser)

    deleteResponse.assertStatus(200)
  })

  test('User | update user password, logout & login again', async ({ client }) => {
    const tempUser: UserCredentials = generateTempUserInformations()

    const registerResponse = await client.post(WebAppAuthRoutes.REGISTER).json(tempUser)
    registerResponse.assertStatus(201)

    // non persistent cookies in tests, extract from register response.
    const oatToken = registerResponse.body().token.value

    const updateResponse = await client
      .post(WebAppAuthRoutes.UPDATE)
      .withCookie('oat_token', oatToken)
      .json({ newPassword: 'thisisthenewpassword', confirmNewPassword: 'thisisthenewpassword' })

    updateResponse.assertStatus(200)

    const logoutResponse = await client
      .post(WebAppAuthRoutes.LOGOUT)
      .withCookie('oat_token', oatToken)

    logoutResponse.assertStatus(200)

    const newLoginResponse = await client.post(WebAppAuthRoutes.LOGIN).json({
      email: tempUser.email,
      password: 'thisisthenewpassword',
    })

    newLoginResponse.assertStatus(200)

    const newOatToken = newLoginResponse.body().token.value

    const deleteResponse = await client
      .post(WebAppAuthRoutes.DELETE)
      .withCookie('oat_token', newOatToken)
      .json({
        email: tempUser.email,
        password: 'thisisthenewpassword',
      })

    deleteResponse.assertStatus(200)
  })
})
