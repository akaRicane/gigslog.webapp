import AuthenticationApiService from '#services/api/authentication_service'
import { ContentApiService } from '#services/api/content_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class NavigationsController {
  authService = new AuthenticationApiService()
  contentService = new ContentApiService()

  home({ inertia }: HttpContext) {
    return inertia.render('home/Home', {})
  }

  async explore(ctx: HttpContext) {
    // Load content and share to client
    const artists = await this.contentService.getAllArtists()
    const venues = await this.contentService.getAllVenues()

    return ctx.inertia.render('explore/Explore', {
      artists,
      venues,
    })
  }

  async account(ctx: HttpContext) {
    const authToken: string = ctx.request.cookie('oat_token', 'invalid_oat_token')

    if (authToken) {
      const { data, ok } = await this.authService.getUser(authToken)
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
