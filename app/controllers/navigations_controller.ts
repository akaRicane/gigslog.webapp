import type { HttpContext } from '@adonisjs/core/http'

export default class NavigationsController {
  home({ inertia }: HttpContext) {
    return inertia.render('home/Home', {})
  }
}
