import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password)
      const { name } = token.user
      return { token: token.token, name, email }
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }
}
