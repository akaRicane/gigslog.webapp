/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthenticationController = () => import('#controllers/authentication_controller')
const NavigationsController = () => import('#controllers/navigations_controller')

import router from '@adonisjs/core/services/router'

router.get('/', [NavigationsController, 'home'])
router.get('/explore', [NavigationsController, 'explore'])
router.get('/account', [NavigationsController, 'account'])
router.get('/login', [NavigationsController, 'login'])

router.post('/auth/register', [AuthenticationController, 'register'])
router.post('/auth/login', [AuthenticationController, 'login'])
router.post('/auth/logout', [AuthenticationController, 'logout'])
router.post('/auth/me', [AuthenticationController, 'me'])
router.post('/auth/update', [AuthenticationController, 'update'])
router.post('/auth/delete', [AuthenticationController, 'delete'])
