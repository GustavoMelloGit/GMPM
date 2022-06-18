import { DateTime } from 'luxon'
import {
  BaseModel,
  beforeCreate,
  beforeUpdate,
  BelongsTo,
  belongsTo,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import crypto from 'crypto'
import CryptoJS from 'crypto-js'
import User from './User'

export default class Site extends BaseModel {
  @column({ isPrimary: true })
  public uuid: string

  @column()
  public name: string

  @column()
  public url: string

  @column()
  public username: string

  @column()
  public password: string

  @column()
  public user_uuid: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async generateUuid(site: Site) {
    site.uuid = crypto.randomBytes(16).toString('hex')
  }

  @beforeCreate()
  public static async encryptCreatePassword(site: Site) {
    const envKey = process.env.CRYPTO_KEY

    if (envKey) {
      const encrypted = CryptoJS.AES.encrypt(site.password, envKey)
      site.password = encrypted.toString()
    }
  }

  @beforeUpdate()
  public static async encryptUpdatePassword(site: Site) {
    const envKey = process.env.CRYPTO_KEY

    if (envKey) {
      const encrypted = CryptoJS.AES.encrypt(site.password, envKey)
      site.password = encrypted.toString()
    }
  }

  @belongsTo(() => User, {
    localKey: 'user_uuid',
    foreignKey: 'uuid',
  })
  public user: BelongsTo<typeof User>
}
