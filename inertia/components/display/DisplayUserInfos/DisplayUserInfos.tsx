import { User } from '~/types/api_models'

type UserInfosProps = {
  user: User | null
}

const DisplayUserInfos: React.FC<UserInfosProps> = (props) => {
  if (!props.user) return <div>you are not connected</div>

  return (
    <div>
      <p>you are connected as</p>
      <p>{props.user.fullName}</p>
      <p>{props.user.email}</p>
    </div>
  )
}

export default DisplayUserInfos
