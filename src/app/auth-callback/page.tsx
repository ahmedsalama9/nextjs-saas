import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    return (
        <div>
            
        </div>
    )
}

export default page
