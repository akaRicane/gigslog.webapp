import { UserModel } from '#common/types/models_api'
import React from 'react'
import './UpdateUserInfosForm.css'

type UpdateUserInfosFormProps = {
  user: UserModel
}

const UpdateUserInfosForm: React.FC<UpdateUserInfosFormProps> = ({ user }) => {
  const [userState, _setUserState] = React.useState<UserModel>(user)

  return (
    <div>
      <form action={() => console.log(userState)}>
        <p>User Informations</p>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default UpdateUserInfosForm
