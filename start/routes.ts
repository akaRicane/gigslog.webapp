/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const NavigationsController = () => import('#controllers/navigations_controller')

import router from '@adonisjs/core/services/router'

router.get('/', [NavigationsController, 'home'])
router.get('/explore', [NavigationsController, 'explore'])
router.get('/account', [NavigationsController, 'account'])
router.get('/login', [NavigationsController, 'login'])
