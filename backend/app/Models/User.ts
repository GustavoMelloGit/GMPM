import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  beforeCreate,
  beforeUpdate,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import crypto from 'crypto'
import Site from './Site'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public uuid: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public name: string

  @column()
  public role: 'admin' | 'user'

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async hashPassword(user: User) {
    user.password = await Hash.make(user.password)
  }

  @beforeCreate()
  public static async generateUuid(user: User) {
    user.uuid = crypto.randomBytes(16).toString('hex')
  }

  @beforeUpdate()
  public static async hashPasswordOnUpdate(user: User) {
    if (user.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => Site, {
    localKey: 'uuid',
    foreignKey: 'user_uuid',
  })
  public sites: HasMany<typeof Site>
}
