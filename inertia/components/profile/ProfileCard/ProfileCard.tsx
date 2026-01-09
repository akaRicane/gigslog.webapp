import { ProfileModel } from '#common/types/models_api'
import { GrLocationPin, GrUser } from 'react-icons/gr'
import './ProfileCard.css'

type ProfileCardProps = {
  profile: ProfileModel
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        {profile.avatarUrl ? <img src={profile.avatarUrl} /> : <GrUser />}
      </div>
      <p className="profile-username">{profile.displayName || 'Michel'}</p>
      <div className="profile-location">
        <GrLocationPin />
        <p>
          {profile.city}, {profile.country}
        </p>
      </div>
      <p className="profile-bio">{profile.bio || 'lorem'}</p>
    </div>
  )
}

export default ProfileCard
