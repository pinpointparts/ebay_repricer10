'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/components/ui/use-toast"
import { useListings } from '@/hooks/use-listings'

export function ListingsView() {
  const { listings, sortListings, handleNewPriceChange, handlePriceUpdate } = useListings()
  const [sortBy, setSortBy] = useState('dateOldest')

  const handleSort = (value: string) => {
    sortListings(value)
    setSortBy(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Your Listings
          <Select value={sortBy} onValueChange={handleSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dateOldest">Date: Oldest to Newest</SelectItem>
              <SelectItem value="dateNewest">Date: Newest to Oldest</SelectItem>
              <SelectItem value="priceHighest">Price: Highest to Lowest</SelectItem>
              <SelectItem value="priceLowest">Price: Lowest to Highest</SelectItem>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>MPN</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Competitor Price</TableHead>
              <TableHead>New Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Listed</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listings.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell>{listing.mpn}</TableCell>
                <TableCell>{listing.title}</TableCell>
                <TableCell>${listing.currentPrice.toFixed(2)}</TableCell>
                <TableCell>${listing.competitorPrice.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={listing.newPrice}
                      onChange={(e) => handleNewPriceChange(listing.id, e.target.value)}
                      className="w-20"
                    />
                    <Slider
                      value={[parseFloat(listing.newPrice) || listing.currentPrice]}
                      min={Math.max(0, listing.currentPrice * 0.5)}
                      max={listing.currentPrice * 1.5}
                      step={0.01}
                      onValueChange={(value) => handleNewPriceChange(listing.id, value[0].toString())}
                      className="w-[100px]"
                    />
                  </div>
                </TableCell>
                <TableCell>{listing.status}</TableCell>
                <TableCell>{listing.date}</TableCell>
                <TableCell>
                  <Button onClick={() => handlePriceUpdate(listing.id)} size="sm">
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}