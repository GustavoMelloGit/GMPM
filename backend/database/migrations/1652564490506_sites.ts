import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sites extends BaseSchema {
  protected tableName = 'sites'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('uuid').primary()
      table
        .string('user_uuid')
        .notNullable()
        .references('uuid')
        .inTable('users')
        .onDelete('CASCADE')
      table.string('url').notNullable()
      table.string('name').notNullable()
      table.string('username')
      table.string('password')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
