import { ProfileModel, UserModel } from '#common/types/models_api'

type DisplayUserInfosProps = {
  user: UserModel | null
  profile: ProfileModel | null
}

const DisplayUserInfos: React.FC<DisplayUserInfosProps> = ({ user, profile }) => {
  if (!user) return <div>you are not connected</div>

  return (
    <div>
      <p>you are connected as</p>
      <p>{user.email}</p>
      <p>{profile?.userPublicId || 'not defined'}</p>
    </div>
  )
}

export default DisplayUserInfos
