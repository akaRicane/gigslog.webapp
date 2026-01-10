// app/controllers/auth_controller.ts
import { ProfileModel } from '#common/types/models_api'
import UserApiService from '#services/api/user_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UserController {
  userService = new UserApiService()

  /**
   * Creates/registers a new user
   *
   * @param UserCredentials
   * @returns UserModel
   */
  async register({ request, response }: HttpContext) {
    const { email, password, confirmPassword } = request.body()

    const { data, status, ok } = await this.userService.createUser({
      email,
      password,
      confirmPassword,
    })

    console.log(data, status)

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

    const { data, status, ok } = await this.userService.loginUser({
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

    const { data, status, ok } = await this.userService.logoutUser(authToken)

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

    const { data, status } = await this.userService.getUser(authToken)

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

    const { data, status } = await this.userService.updateUser(
      { newPassword, confirmNewPassword },
      authToken
    )

    return response.status(status).send({ ...data, status })
  }

  /**
   * Remomves / Deletes the user
   *
   * @param UserCredentials + cookie.oat_token
   * @returns ApiResponseMessage
   */
  async remove({ request, response }: HttpContext) {
    const { email, password } = request.body()
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')

    const { data, status, ok } = await this.userService.deleteUser(
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

  /**
   * Updates user profile informations
   *
   * @param Partial<ProfileModel> & cookie.oat_token
   * @returns UserModel
   */
  async updateProfile({ request, response }: HttpContext) {
    const authToken: string = request.cookie('oat_token', 'invalid_oat_token')
    const profileUpdateData: Partial<ProfileModel> = request.body()

    const { data, status, ok } = await this.userService.updateProfile(
      { ...profileUpdateData },
      authToken
    )

    if (!ok) {
      response.clearCookie('oat_token')
    }

    return response.status(status).send({ ...data, status })
  }
}
