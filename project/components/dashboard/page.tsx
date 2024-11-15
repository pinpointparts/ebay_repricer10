'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { DashboardView } from '@/components/dashboard/views/dashboard-view'
import { ListingsView } from '@/components/dashboard/views/listings-view'
import { RulesView } from '@/components/dashboard/views/rules-view'
import { AnalyticsView } from '@/components/dashboard/views/analytics-view'

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'listings' && <ListingsView />}
          {activeTab === 'rules' && <RulesView />}
          {activeTab === 'analytics' && <AnalyticsView />}
        </main>
      </div>
    </div>
  )
}