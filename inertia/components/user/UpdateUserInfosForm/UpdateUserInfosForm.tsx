import { UserModel } from '#common/types/models_api'
import './UpdateUserInfosForm.css'

type UpdateUserInfosFormProps = {
  user: UserModel
}

const UpdateUserInfosForm: React.FC<UpdateUserInfosFormProps> = ({ user }) => {
  return (
    <div>
      <form>
        <div>
          <p>Profile Informations</p>
          <div>
            <p>username</p>
            <p>{user.profile.displayName}</p>
          </div>
          <div>
            <p>location</p>
            <p>
              {user.profile.city}, {user.profile.country}
            </p>
          </div>
          <div>
            <p>bio</p>
            <p>{user.profile.bio}</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateUserInfosForm
