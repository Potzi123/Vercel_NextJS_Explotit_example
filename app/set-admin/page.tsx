'use client'

import { useRouter } from 'next/navigation'

export default function SetAdmin() {
  const router = useRouter()

  const setAdminCookie = () => {
    document.cookie = 'isAdmin=true; path=/'
    router.push('/admin')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Set Admin Cookie</h1>
      <button onClick={setAdminCookie}>Set Admin Cookie</button>
    </div>
  )
} 