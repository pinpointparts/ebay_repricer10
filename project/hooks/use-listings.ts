'use client'

import { useState } from 'react'
import { toast } from "@/components/ui/use-toast"

interface Listing {
  id: number
  mpn: string
  title: string
  currentPrice: number
  competitorPrice: number
  status: string
  date: string
  newPrice: string
}

export function useListings() {
  const [listings, setListings] = useState<Listing[]>([
    { id: 1, mpn: 'ABC123', title: 'Widget A', currentPrice: 19.99, competitorPrice: 18.50, status: 'Active', date: '2023-05-15', newPrice: '' },
    { id: 2, mpn: 'DEF456', title: 'Gadget B', currentPrice: 24.99, competitorPrice: 26.00, status: 'Active', date: '2023-06-01', newPrice: '' },
    { id: 3, mpn: 'GHI789', title: 'Tool C', currentPrice: 39.99, competitorPrice: 39.99, status: 'Paused', date: '2023-05-20', newPrice: '' },
    { id: 4, mpn: 'JKL012', title: 'Device D', currentPrice: 49.99, competitorPrice: 48.50, status: 'Active', date: '2023-06-10', newPrice: '' },
    { id: 5, mpn: 'MNO345', title: 'Accessory E', currentPrice: 9.99, competitorPrice: 10.50, status: 'Active', date: '2023-05-25', newPrice: '' },
  ])

  const sortListings = (sortType: string) => {
    let sortedListings = [...listings]
    switch (sortType) {
      case 'dateOldest':
        sortedListings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case 'dateNewest':
        sortedListings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case 'priceHighest':
        sortedListings.sort((a, b) => b.currentPrice - a.currentPrice)
        break
      case 'priceLowest':
        sortedListings.sort((a, b) => a.currentPrice - b.currentPrice)
        break
    }
    setListings(sortedListings)
  }

  const handleNewPriceChange = (id: number, value: string) => {
    const updatedListings = listings.map(listing =>
      listing.id === id ? { ...listing, newPrice: value } : listing
    )
    setListings(updatedListings)
  }

  const handlePriceUpdate = (id: number) => {
    const listingToUpdate = listings.find(listing => listing.id === id)
    if (listingToUpdate && listingToUpdate.newPrice) {
      const newPrice = parseFloat(listingToUpdate.newPrice)
      if (!isNaN(newPrice) && newPrice > 0) {
        const updatedListings = listings.map(listing =>
          listing.id === id ? { ...listing, currentPrice: newPrice, newPrice: '' } : listing
        )
        setListings(updatedListings)
        toast({
          title: "Price Updated",
          description: `New price for ${listingToUpdate.title} set to $${newPrice.toFixed(2)}`,
        })
      } else {
        toast({
          title: "Invalid Price",
          description: "Please enter a valid price greater than 0.",
          variant: "destructive",
        })
      }
    }
  }

  return {
    listings,
    sortListings,
    handleNewPriceChange,
    handlePriceUpdate,
  }
}