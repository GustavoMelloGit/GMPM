/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/users', 'UsersController.create')

Route.group(() => {
  Route.get('/users', 'UsersController.read')
  Route.get('/users/:uuid', 'UsersController.findOne')
  Route.put('/users/:uuid', 'UsersController.update')
  Route.delete('/users/:uuid', 'UsersController.delete')
}).middleware(['auth'])

Route.group(() => {
  Route.post('/sites', 'SitesController.create')
  Route.get('/sites', 'SitesController.read')
  Route.get('/sites/:uuid', 'SitesController.findOne')
  Route.put('/sites/:uuid', 'SitesController.update')
  Route.delete('/sites/:uuid', 'SitesController.delete')
}).middleware(['auth'])

Route.post('/login', 'AuthController.login')
