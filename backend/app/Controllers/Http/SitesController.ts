import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Site from 'App/Models/Site'

export default class SitesController {
  public async create({ request }: HttpContextContract) {
    const { name, url, email, password } = request.only(['name', 'url', 'email', 'password'])
    try {
      const site = await Site.create({
        name,
        url,
        email,
        password,
      })
      return site
    } catch (e) {
      return { error: e }
    }
  }

  public async read() {
    try {
      const all = await Site.all()
      return all
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
