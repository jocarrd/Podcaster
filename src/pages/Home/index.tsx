import { usePodcasts } from '../../hooks/usePodcasts'
import { PodcastCard } from '../../components/PodcastCard'
import { Podcast } from '../../types/Podcast'
import { Searcher } from '../../components/Searcher'
import { Layout } from '../../components/Layout'

export const Home = () => {
  const {
    state: { podcasts, loading },
    actions: { filterPodcasts },
  } = usePodcasts()

  return (
    <Layout loading={loading}>
      <div className="flex flex-col p-4 gap-36 ">
        <div className="flex gap-4 justify-end items-center">
          <span className="bg-blue-500 text-white px-2 py-1 text-xl rounded-full font-bold w-14 flex place-content-center">
            {podcasts?.length}
          </span>
          <Searcher podcasts={podcasts} filterPodcasts={filterPodcasts} />
        </div>
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  gap-y-32">
          {!loading &&
            podcasts?.map((podcast: Podcast) => (
              <PodcastCard
                key={podcast.id.attributes['im:id']}
                podcast={podcast}
              />
            ))}
        </div>
      </div>
    </Layout>
  )
}
