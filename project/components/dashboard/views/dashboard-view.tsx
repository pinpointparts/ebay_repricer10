'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Active Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">152</p>
          <p className="text-sm text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Sales (30 days)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">$12,450</p>
          <p className="text-sm text-muted-foreground">+8.2% from last period</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Repricing Actions (24h)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">1,234</p>
          <p className="text-sm text-muted-foreground">234 pending updates</p>
        </CardContent>
      </Card>
    </div>
  )
}