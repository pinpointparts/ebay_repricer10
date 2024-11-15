'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AnalyticsView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sales">
          <TabsList>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="repricing">Repricing Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="sales">
            <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Sales chart placeholder</p>
            </div>
          </TabsContent>
          <TabsContent value="repricing">
            <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Repricing activity chart placeholder</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}