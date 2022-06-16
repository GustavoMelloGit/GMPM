import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Site from 'App/Models/Site'

export default class SitesController {
  public async create({ request, auth }: HttpContextContract) {
    const userUuid = auth.user?.$attributes.uuid
    const { name, url, username, password } = request.only(['name', 'url', 'username', 'password'])

    try {
      const site = await Site.create({
        name,
        url,
        username,
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
        username: site.username,
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
      const { name, url, username, password } = request.only([
        'name',
        'url',
        'username',
        'password',
      ])
      site.merge({ name, url, username, password })
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
