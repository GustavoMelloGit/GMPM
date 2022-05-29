import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const { name, email, password } = request.only(['name', 'email', 'password'])
    try {
      const emailExists = await User.findBy('email', email)
      if (emailExists) {
        return response.status(400).send('Email já existe')
      }
      const user = await User.create({
        name,
        email,
        password,
        role: 'user',
      })
      return user
    } catch (e) {
      return { error: e }
    }
  }

  public async read() {
    try {
      const all = await User.all()
      return all
        .filter((user) => user.role !== 'admin')
        .map((user) => ({ name: user.name, email: user.email }))
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

  public async update({ params, request }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('uuid', params.uuid)
      const { name, email, password } = request.only(['name', 'email', 'password'])
      user.merge({ name, email, password })
      await user.save()
      return { name: user.name, email: user.email, uuid: user.uuid }
    } catch (e) {
      return { error: e }
    }
  }

  public async delete({ params }: HttpContextContract) {
    try {
      const user = await User.findByOrFail('uuid', params.uuid)
      await user.delete()
      return { message: 'User deleted' }
    } catch (e) {
      return { error: e }
    }
  }
}
