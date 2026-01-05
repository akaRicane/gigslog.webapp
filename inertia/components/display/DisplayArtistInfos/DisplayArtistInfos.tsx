import { ArtistModel } from '#types/models_api'
import './DisplayArtistInfos.css'

type ArtistInfosProps = {
  artist: ArtistModel
}

const DisplayArtistInfos: React.FC<ArtistInfosProps> = ({ artist }) => {
  return (
    <div key={artist.id} className="display-artist-container">
      <p className="name">{artist.fullName}</p>

      <p>Wikipedia: {artist.wikipedia}</p>
      <p>Website: {artist.website}</p>

      {artist.picture && <img src={artist.picture} alt="artist picture" height={200} width={200} />}
    </div>
  )
}

export default DisplayArtistInfos
