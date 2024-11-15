'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function RulesView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Repricing Rules</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mpn">Manufacturer Part Number (MPN)</Label>
            <Input type="text" id="mpn" placeholder="Enter MPN" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="min-price">Minimum Price</Label>
            <Input type="number" id="min-price" placeholder="0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="max-price">Maximum Price</Label>
            <Input type="number" id="max-price" placeholder="0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="strategy">Repricing Strategy</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a strategy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Match lowest price</SelectItem>
                <SelectItem value="beat">Beat lowest price by $0.01</SelectItem>
                <SelectItem value="percent">Stay within % of lowest price</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save Rule</Button>
        </form>
      </CardContent>
    </Card>
  )
}