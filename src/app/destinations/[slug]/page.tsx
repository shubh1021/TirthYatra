'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Place } from '@prisma/client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Destination {
  id: string
  name: string
  slug: string
  state: string
  slideshowImages?: string[]
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const [place, setPlace] = useState<Place | null>(null)
  const [nearbyDestinations, setNearbyDestinations] = useState<Destination[]>([])

  useEffect(() => {
    const fetchPlaceData = async () => {
      const response = await fetch(`/api/destinations/${params.slug}`)
      const data = await response.json()
      setPlace(data.place)
      setNearbyDestinations(data.nearbyDestinations || [])
    }

    fetchPlaceData()
  }, [params.slug])

  if (!place) return <div>Loading...</div>

  const validNearbyDestinations = nearbyDestinations.filter((d) => d.slug && d.name)

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
      <p className="text-gray-600 mb-6">{place.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Nearby Destinations</h2>
      <div className="flex space-x-4 overflow-x-auto snap-x">
        {validNearbyDestinations.map((place) => (
          <Link href={`/destinations/${place.slug}`} key={place.id}>
            <Card className="min-w-[250px] snap-center scroll-ml-6 cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                <img
                  src={place.slideshowImages?.[0] || '/placeholder.jpg'}
                  alt={place.name}
                  className="h-40 w-full object-cover rounded-xl"
                />
                <div className="text-lg font-medium">{place.name}</div>
                <div className="text-sm text-muted-foreground">{place.state}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
