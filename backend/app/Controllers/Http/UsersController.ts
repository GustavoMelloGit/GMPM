import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { name, email, password } = request.only(['name', 'email', 'password'])
    const user = await User.create({
      name,
      email,
      password,
    })
    return user
  }

  public async index() {
    const all = await User.all()
    return all.map((user) => ({ name: user.name, email: user.email, uuid: user.uuid }))
  }
}
