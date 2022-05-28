import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Site from 'App/Models/Site'

export default class SitesController {
  public async create({ request, auth }: HttpContextContract) {
    const userUuid = auth.user?.$attributes.uuid
    const { name, url, email, password } = request.only(['name', 'url', 'email', 'password'])
    try {
      const site = await Site.create({
        name,
        url,
        email,
        password,
        user_uuid: userUuid,
      })
      return site
    } catch (e) {
      return { error: e }
    }
  }

  public async read({ auth }: HttpContextContract) {
    const userUuid = auth.user?.$attributes.uuid
    try {
      const all = await Site.query().where('user_uuid', userUuid)

      return all.map((site) => ({
        uuid: site.uuid,
        name: site.name,
        url: site.url,
        email: site.email,
        password: site.password,
      }))
    } catch (e) {
      return { error: e }
    }
  }

  public async findOne({ params }: HttpContextContract) {
    try {
      const site = await Site.findByOrFail('uuid', params.uuid)
      return site
    } catch (e) {
      return { error: e }
    }
  }

  public async update({ params, request }: HttpContextContract) {
    try {
      const site = await Site.findByOrFail('uuid', params.uuid)
      const { name, url, email, password } = request.only(['name', 'url', 'email', 'password'])
      site.merge({ name, url, email, password })
      await site.save()
      return site
    } catch (e) {
      return { error: e }
    }
  }

  public async delete({ params }: HttpContextContract) {
    try {
      const site = await Site.findByOrFail('uuid', params.uuid)
      await site.delete()
      return { message: 'Site deleted' }
    } catch (e) {
      return { error: e }
    }
  }
}
