import { UserModel } from '#types/models_api'

type DisplayUserInfosProps = {
  user: UserModel | null
}

const DisplayUserInfos: React.FC<DisplayUserInfosProps> = ({ user }) => {
  if (!user) return <div>you are not connected</div>

  return (
    <div>
      <p>you are connected as</p>
      <p>{user.fullName}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default DisplayUserInfos
