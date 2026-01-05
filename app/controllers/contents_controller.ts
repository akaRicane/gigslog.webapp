import type { HttpContext } from '@adonisjs/core/http'

import { ContentApiService } from '#services/api/content_service'

export default class ContentsController {
  contentService = new ContentApiService()

  async create({}: HttpContext) {}
  async read({}: HttpContext) {}
  async update({}: HttpContext) {}
  async delete({}: HttpContext) {}
}
