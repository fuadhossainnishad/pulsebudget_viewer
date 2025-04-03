'use client'
import { client } from '@/lib/client'
import React, { useEffect, useState } from 'react'

export interface DashBoardInterface {
  totalAllocatedBudget: number
  totalSpentAmount: number
  totalRemainBudget: number
}

export default function Home() {
  const [dashBoard, setDashBoard] = useState<DashBoardInterface>()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.get('/dashboard')
        if (res.status === 200) {
          setDashBoard(res.data.data[0])
          console.log('Dashboard data:', res.data.data[0]);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, [])
  return (
    <main>
      <section className='flex h-full gap-10 justify-center mt-10'>
        <section className='bg-amber-100 rounded-3xl p-12 w-1/4 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
          <h1>Total Allocated Budget</h1>
          <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{dashBoard?.totalAllocatedBudget || "00.00"}</h1>
        </section>
        <section className='bg-amber-100 rounded-3xl p-12 w-1/4 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
          <h1>Total Spent Amount</h1>
          <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{dashBoard?.totalSpentAmount || "00.00"}</h1>
        </section>
        <section className='bg-amber-100 rounded-3xl p-12 w-1/4 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
          <h1>Total Remain Budget</h1>
          <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{dashBoard?.totalRemainBudget || "00.00"}</h1>
        </section>
      </section>
      {/* <section className='justify-center mt-10'>
        <section className='bg-green-200 rounded-3xl w-fit flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
          <h1>Branches</h1>
          <h1 className='bg-blue-300  p-3 rounded-xl'>3</h1>
        </section>
        <section className='bg-amber-100 rounded-3xl p-12 w-1/4 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
          <h1>Branches</h1>
          <h1 className='bg-blue-300 w-full p-3 rounded-xl'>3</h1>
        </section>
        <section className='bg-amber-100 rounded-3xl p-12 w-1/4 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
          <h1>Branches</h1>
          <h1 className='bg-blue-300 w-full p-3 rounded-xl'>3</h1>
        </section>
      </section> */}
    </main>

  )
}
