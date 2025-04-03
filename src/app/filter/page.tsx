'use client'

import { client } from '@/lib/client'
import React, { useState } from 'react'

interface FilterData {
  id: number;
  name: string;
  budget: number;
}

export default function FilterPage() {
  const [select, setSelect] = useState<{ [key: string]: string }>({})
  const [filterdata, setFilterdata] = useState<FilterData[]>([]);
    const handleFilter = (type: string, value: string) => {
    setSelect(prev => ({
      ...prev,
      [type]: prev[type] === value ? "" : value, // Toggle selection
    }));
  }
  const handleFilterSubmit = async () => {
    try {
      const queryString = new URLSearchParams(select).toString()
      const res = await client.get(`/filter?${queryString}`)
      console.log('Filter data:', res.data);
      console.log('Filter data:', select);
      if (res.status === 200) {
        setFilterdata(res.data)
        console.log('Filter data:', res.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }

  }
  return (
    <main className="flex">
      <section className='flex mt-[8%] gap-10 w-fit bg-gray-400 ml-10 rounded-xl px-8 py-20 text-lg'>
        <section className='h-full space-y-5'>
          {filters.map((filter, index) => (
            <section key={index}>
              <h1 className='border px-2 rounded-lg'>{filter.type}</h1>
              <div className='flex flex-col gap-4 px-5'>
                {filter.values.map((value, i) => (
                  <div key={i} className='flex gap-4'>
                    <input
                      type='checkbox'
                      id={value}
                      name={value}
                      checked={select[filter.type] === value}
                      onChange={() => {
                        handleFilter(filter.type, value)

                      }}
                    />
                    <label htmlFor={value}>{value}</label>
                  </div>

                ))}
              </div>
            </section>
          ))}
        </section>
        <button
          onClick={() => handleFilterSubmit()}
          className='cursor-pointer'
        >Apply Filter</button>
      </section>
      <section className="grow items-center mt-[8%]">
        <section className='flex  gap-10 justify-center  grow'>
          <section className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
            <h1>Sector1 Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.[0]?.budget}</h1>
          </section>
          <section className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
            <h1>Sector1 Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>2000000</h1>
          </section>
          <section className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
            <h1>Sector1 Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>2000000</h1>
          </section>
        </section>
        <section className='flex  gap-10 justify-center mt-10 grow'>
          <section className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
            <h1>Sector1 Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>2000000</h1>
          </section>
          <section className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
            <h1>Sector1 Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>2000000</h1>
          </section>
          <section className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
       justify-center items-end'>
            <h1>Sector1 Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>2000000</h1>
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
      </section>

    </main>

  )
}

export const filters = [
  {
    type: "subsidiary",
    values: ["subsidiary1", "subsidiary2", "subsidiary3"]
  },
  {
    type: "sector",
    values: ["sector", "sector2", "sector3"]
  }
]
