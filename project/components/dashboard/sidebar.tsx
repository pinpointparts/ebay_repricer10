'use client'

import { Button } from "@/components/ui/button"
import { Home, List, Settings, BarChart, LogOut } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const { logout } = useAuth()
  const router = useRouter()

  const handleSignOut = () => {
    logout()
    router.push('/')
    toast({
      title: "Signed out successfully",
      description: "Come back soon!",
    })
  }

  return (
    <div className="w-64 bg-white shadow-md flex flex-col h-full">
      <div className="p-4">
        <h1 className="text-2xl font-bold">eBay Repricer</h1>
      </div>
      <nav className="mt-6 flex-1">
        <Button 
          variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
          className="w-full justify-start" 
          onClick={() => setActiveTab('dashboard')}
        >
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button 
          variant={activeTab === 'listings' ? 'default' : 'ghost'} 
          className="w-full justify-start" 
          onClick={() => setActiveTab('listings')}
        >
          <List className="mr-2 h-4 w-4" />
          Listings
        </Button>
        <Button 
          variant={activeTab === 'rules' ? 'default' : 'ghost'} 
          className="w-full justify-start" 
          onClick={() => setActiveTab('rules')}
        >
          <Settings className="mr-2 h-4 w-4" />
          Rules
        </Button>
        <Button 
          variant={activeTab === 'analytics' ? 'default' : 'ghost'} 
          className="w-full justify-start" 
          onClick={() => setActiveTab('analytics')}
        >
          <BarChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
      </nav>
      <div className="p-4 border-t">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}