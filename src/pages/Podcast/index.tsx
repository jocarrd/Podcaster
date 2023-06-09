import { Navigate, useParams } from 'react-router-dom'
import { EpisodesTable } from '../../components/EpisodesTable'
import { Layout } from '../../components/Layout'
import { PodcastDetail } from '../../components/PodcastDetail'
import { useEpisodes } from '../../hooks/useEpisodes'

export const Podcast = () => {
  const { id = '' } = useParams()
  const {
    state: { episodes, podcastInfo, loading },
  } = useEpisodes({ id })

  if (!podcastInfo) return <Navigate to="/" />

  return (
    <Layout loading={loading}>
      <div className="md:grid md:grid-cols-3 flex flex-col px-4 md:px-9 gap-28 py-4 ">
        {podcastInfo && <PodcastDetail podcastInfo={podcastInfo} />}
        {episodes && (
          <div className="flex flex-col md:col-span-2 gap-8 ">
            <div className="p-2 shadow-md text-xl border-gray-100 border-2 ">
              <b>{`Episodes: ${episodes?.resultCount}`}</b>
            </div>
            <div className="p-2 flex shadow-md border-gray-100 border-2 ">
              {episodes && (
                <EpisodesTable
                  episodes={episodes?.results?.slice(1)}
                  id={id || ''}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
