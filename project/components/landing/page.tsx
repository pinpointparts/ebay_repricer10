'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, BarChart2, Zap, Shield, CheckCircle2 } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { toast } from '@/components/ui/use-toast'

export function LandingPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(loginData.email, loginData.password)
    if (success) {
      setIsLoginOpen(false)
      router.push('/dashboard')
      toast({
        title: "Logged in successfully",
        description: "Welcome back!",
      })
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">eBay Repricer</h1>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost">Log in</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Log in to your account</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      />
                    </div>
                    <Button type="submit" className="w-full">Log in</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
                <DialogTrigger asChild>
                  <Button>Sign up</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create your account</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" placeholder="Create a password" />
                    </div>
                    <Button className="w-full">Sign up</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Automate Your eBay Pricing Strategy
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Stay competitive and maximize profits with our intelligent eBay repricing solution. Monitor competitors, adjust prices automatically, and boost your sales.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8">Get Started</Button>
              </DialogTrigger>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg px-8">Learn More</Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Pricing</h3>
              <p className="text-gray-600">Automatically adjust prices based on market conditions and competition.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <BarChart2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">Detailed insights and performance metrics to optimize your strategy.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Instant price adjustments based on competitor changes.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Price Protection</h3>
              <p className="text-gray-600">Set min/max prices to protect your profits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Up to 100 listings</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Basic analytics</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Daily updates</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary">
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <p className="text-4xl font-bold mb-6">$79<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Up to 1000 listings</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Advanced analytics</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Hourly updates</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Priority support</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">$199<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Unlimited listings</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Custom analytics</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> Real-time updates</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> 24/7 support</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" /> API access</li>
              </ul>
              <Button className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              We're a team of eBay sellers and developers who understand the challenges of staying competitive in the marketplace. Our mission is to help sellers maximize their profits through intelligent automation.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 2024, we've helped thousands of sellers optimize their pricing strategies and grow their businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">eBay Repricer</h3>
              <p className="text-gray-400">Automated pricing solutions for eBay sellers.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 eBay Repricer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}