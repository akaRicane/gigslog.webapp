// app/controllers/auth_controller.ts
import AuthenticationApiService from '#services/api/authentication_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  authService = new AuthenticationApiService()

  /**
   * Creates/registers a new user
   *
   * @param UserCredentials
   * @returns UserModel
   */
  async register({ request, response }: HttpContext) {
    const { email, password, confirmPassword } = request.body()

    const { data, status, ok } = await this.authService.createUser({
      email,
      password,
      confirmPassword,
    })

    ok
      ? response.cookie('oat_token', data.token.value as string)
      : response.clearCookie('oat_token')

    return response.status(status).send({ ...data, status })
  }

  /**
   * Logs in user and gets back the token
   *
   * @param UserCredentials
   * @returns UserModel & TokenInformations
   */
  async login({ request, response }: HttpContext) {
    const { email, password } = request.body()

    const { data, status, ok } = await this.authService.loginUser({
      email,
      password,
    })

    ok
      ? response.cookie('oat_token', data.token.value as string)
      : response.clearCookie('oat_token')

    return response.status(status).send({ ...data, status })
  }

  /**
   * Logs out a user by revoking its token
   *
   * @param cookie.oat_token
   * @returns ApiResponseMessage
   */
  async logout({ request, response }: HttpContext) {
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')

    const { data, status, ok } = await this.authService.logoutUser(authToken)

    if (ok) {
      response.clearCookie('oat_token')
    }

    return response.status(status).send({ ...data, status })
  }

  /**
   * Get informations of the authenticated user
   *
   * @param cookie.oat_token
   * @returns UserModel
   */
  async me({ request, response }: HttpContext) {
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')

    const { data, status } = await this.authService.getUser(authToken)

    return response.status(status).send({ ...data, status })
  }

  /**
   * Updates user password and/or fullname
   *
   * @param UserUpdateInformations & cookie.oat_token
   * @returns UserModel
   */
  async update({ request, response }: HttpContext) {
    const { newPassword, confirmNewPassword } = request.body()
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')

    const { data, status } = await this.authService.updateUser(
      { newPassword, confirmNewPassword },
      authToken
    )

    return response.status(status).send({ ...data, status })
  }

  /**
   * Deletes the user
   *
   * @param UserCredentials + cookie.oat_token
   * @returns ApiResponseMessage
   */
  async delete({ request, response }: HttpContext) {
    const { email, password } = request.body()
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')

    const { data, status, ok } = await this.authService.deleteUser(
      {
        email,
        password,
      },
      authToken
    )

    if (!ok) {
      response.clearCookie('oat_token')
    }

    return response.status(status).send({ ...data, status })
  }
}
