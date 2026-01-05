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
    const { fullName, email, password } = request.body()

    const { data, status, ok } = await this.authService.createUser({
      fullName,
      email,
      password,
    })

    if (!ok) {
      return response.status(status).send(data)
    }

    return response.status(status).send(data)
  }

  /**
   * Logs in user and gets back the token
   *
   * @param UserCredentials
   * @returns UserModel & TokenInformations
   */
  async login({ request, response }: HttpContext) {
    const { fullName, email, password } = request.body()

    const { data, status, ok } = await this.authService.loginUser({
      fullName,
      email,
      password,
    })

    if (!ok) {
      response.clearCookie('oat_token')
      return response.status(status).send(data)
    }

    response.cookie('oat_token', data.token.value as string)
    return response.status(status).send(data)
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

    if (!ok) {
      return response.status(status).send(data)
    }

    response.clearCookie('oat_token')
    return response.status(status).send(data)
  }

  /**
   * Get informations of the authenticated user
   *
   * @param cookie.oat_token
   * @returns UserModel
   */
  async me({ request, response }: HttpContext) {
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')

    const { data, status, ok } = await this.authService.getUser(authToken)

    if (!ok) {
      return response.status(status).send(data)
    }

    return response.status(status).send(data)
  }

  /**
   * Updates user password and/or fullname
   *
   * @param UserUpdateInformations & cookie.oat_token
   * @returns UserModel
   */
  async update({ request, response }: HttpContext) {
    const { newFullName, newPassword } = request.body()
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')

    const { data, status, ok } = await this.authService.updateUser(
      { newFullName, newPassword },
      authToken
    )

    if (!ok) {
      return response.status(status).send(data)
    }

    return response.status(status).send(data)
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
      return response.status(status).send(data)
    }

    return response.status(status).send(data)
  }
}
