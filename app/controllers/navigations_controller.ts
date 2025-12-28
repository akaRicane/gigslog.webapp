import type { HttpContext } from '@adonisjs/core/http'

export default class NavigationsController {
  home({ inertia }: HttpContext) {
    return inertia.render('home/Home', {})
  }

  explore({ inertia }: HttpContext) {
    return inertia.render('explore/Explore', {})
  }

  account({ inertia }: HttpContext) {
    return inertia.render('account/Account', {})
  }

  login({ inertia }: HttpContext) {
    return inertia.render('login/Login', {})
  }
}
