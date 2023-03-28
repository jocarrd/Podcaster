import { render, screen } from '@testing-library/react'
import { mockPodcast } from '../../mocks'
import { PodcastDetail } from '.'

describe('PodcastDetail component', () => {
  it('renders the podcast detail', () => {
    render(<PodcastDetail podcastInfo={mockPodcast} />)

    const podcastTitle = screen.getByText(mockPodcast['im:name'].label)
    expect(podcastTitle)

    const podcastAuthor = screen.getByText(
      `by ${mockPodcast['im:artist'].label}`
    )
    expect(podcastAuthor)

    const podcastImage = screen.getByAltText(`${mockPodcast.title.label} image`)
    expect(podcastImage)
  })
})
