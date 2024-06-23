"use client"
import Typography from '@/components/Typography'
import Button from '@/components/button'
import DashboardContainer from '@/layout/dashboard'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <DashboardContainer>
      <div id='dash-display'>
        <Typography.h1>This is your dasboard</Typography.h1>
        <Typography.p>There is nothing here, route to the user</Typography.p>
        <Button 
          type='button' variant='primary' title='Go to User'
          onClick={() => router.push('/dashboard/users')}
        />
      </div>
    </DashboardContainer>
  )
}
