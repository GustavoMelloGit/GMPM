import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { name, email, password } = request.only(['name', 'email', 'password'])
    try {
      const user = await User.create({
        name,
        email,
        password,
      })
      return user
    } catch (e) {
      return { error: e }
    }
  }

  public async read({ auth }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const all = await User.all()
      return all.map((user) => ({ name: user.name, email: user.email }))
    } catch (e) {
      return { error: e }
    }
  }

  public async findOne({ params }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('uuid', params.uuid)
      return { name: user.name, email: user.email, uuid: user.uuid }
    } catch (e) {
      return { error: e }
    }
  }
}
