import BackendApiService from '#services/backend_api_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class NavigationsController {
  backendApi = new BackendApiService()

  home({ inertia }: HttpContext) {
    return inertia.render('home/Home', {})
  }

  explore({ inertia }: HttpContext) {
    return inertia.render('explore/Explore', {})
  }

  async account(ctx: HttpContext) {
    const authToken: string = ctx.request.cookie('oat_token', 'invalid_oat_token')

    if (authToken) {
      const { data, ok } = await this.backendApi.getUser(authToken)
      if (!ok) {
        return ctx.response.redirect('login')
      }
      return ctx.inertia.render('account/Account', { user: data })
    } else {
      return ctx.response.redirect('login')
    }
  }

  login({ inertia }: HttpContext) {
    return inertia.render('login/Login', {})
  }
}
