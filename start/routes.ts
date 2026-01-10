/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const NavigationsController = () => import('#controllers/navigations_controller')
const UsersController = () => import('#controllers/users_controller')

import { NavigationRoutes, UsersAuthApiRoutes } from '#common/enums/api_routes'
import router from '@adonisjs/core/services/router'

router.get(NavigationRoutes.HOME, [NavigationsController, 'home'])
router.get(NavigationRoutes.EXPLORE, [NavigationsController, 'explore'])
router.get(NavigationRoutes.ACCOUNT, [NavigationsController, 'account'])
router.get(NavigationRoutes.LOGIN, [NavigationsController, 'login'])

router.post(UsersAuthApiRoutes.REGISTER, [UsersController, 'register'])
router.post(UsersAuthApiRoutes.LOGIN, [UsersController, 'login'])
router.post(UsersAuthApiRoutes.LOGOUT, [UsersController, 'logout'])
router.post(UsersAuthApiRoutes.REMOVE, [UsersController, 'remove'])
router.post(UsersAuthApiRoutes.ME, [UsersController, 'me'])
router.post(UsersAuthApiRoutes.UPDATE, [UsersController, 'update'])
router.post(UsersAuthApiRoutes.UPDATE_PROFILE, [UsersController, 'updateProfile'])
