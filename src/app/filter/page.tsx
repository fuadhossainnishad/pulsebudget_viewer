'use client'

import { client } from '@/lib/client'
import React, { useEffect, useState } from 'react'

interface FilterDataInterface {
  _id: { [key: string]: string }
  totalAllocatedBudget: number | string
  totalRemainBudget: number | string
  totalSpentAmount: number | string
}



interface ApiResponse {
  message: string;
  data: {
    filtered: FilterDataInterface[];
    subsidiary: FilterDataInterface[];
    sector: FilterDataInterface[];
  };
}

export interface FilterInterface {
  type: string;
  values: string[];
}

export default function FilterPage() {
  const [select, setSelect] = useState<{ [key: string]: string }>({})
  const [filterdata, setFilterdata] = useState<ApiResponse>();
  const [filters, setFilters] = useState<FilterInterface[]>([])
  const handleFilter = (type: string, value: string) => {
    setSelect(prev => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
  }
  const handleFilterSubmit = async () => {
    try {
      const queryString = new URLSearchParams(select).toString()
      const res = await client.get<ApiResponse>(`/filter?${queryString}`)
      console.log('Response data:', res.data || []);
      console.log('Filter select:', select);
      if (res.status === 200) {
        setFilterdata(res.data)
        console.log('Filter data:', res.data);
        console.log(filterdata)
      }

    } catch (err) {
      console.error("Error fetching data:", err);
    }

  }

  useEffect(() => {
    const fetchFields = async () => {
      const res = await client.get('/fields')
      console.log('fields:', res.data.fields);
      const transformed = Object.entries(res.data.fields).map(([key, values]) => ({
        type: key,
        values: values as string[],
      }));

      setFilters(transformed);
    }
    fetchFields();
  }, [])

  return (
    <main className="flex items-center py-12 gap-10">
      <section className='flex items-center gap-10 w-fit bg-gray-400 ml-10 rounded-xl px-8 py-20 text-lg'>
        <section className='h-fit space-y-5'>
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
          <button
            onClick={() => handleFilterSubmit()}
            className='cursor-pointer justify-self-center rounded-xl bg-blue-700 border  border-amber-300 p-3 w-full'
          >Apply Filter</button>
        </section>

      </section>
      <section className="w-full  grow items-center space-y-5">
        <h1 className=' text-2xl font-semibold '>
          Subsidiary- {select.subsidiary ? `${select.subsidiary}` : "Select One"}  |  Sector- {select.sector ? `${select.sector}` : "Select One"}
        </h1>
        <section className='w-full flex  gap-10   grow'>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
                     justify-center items-end'>
            <h1>Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.filtered[0].totalAllocatedBudget}</h1>
          </section>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
               justify-center items-end'>
            <h1>Total Spent</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.filtered[0].totalSpentAmount}</h1>
          </section>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
                justify-center items-end'>
            <h1>Total Remaining Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.filtered[0].totalAllocatedBudget}</h1>
          </section>
        </section>
        <h1 className=' text-2xl font-semibold '>
          Subsidiary- {select.subsidiary ? `${select.subsidiary}` : "Select One"}</h1>
        <section className='w-full flex  gap-10  grow'>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
                     justify-center items-end'>
            <h1>Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.subsidiary[0].totalAllocatedBudget}</h1>
          </section>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
               justify-center items-end'>
            <h1>Total Spent</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.subsidiary[0].totalSpentAmount}</h1>
          </section>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
                justify-center items-end'>
            <h1>Total Remaining Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.subsidiary[0].totalAllocatedBudget}</h1>
          </section>
        </section>
        <h1 className=' text-2xl font-semibold '>
          Sector- {select.sector ? `${select.sector}` : "Select One"}
        </h1>
        <section className='flex  gap-10   grow'>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
                     justify-center items-end'>
            <h1>Allocated Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.sector[0].totalAllocatedBudget}</h1>
          </section>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
               justify-center items-end'>
            <h1>Total Spent</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.sector[0].totalSpentAmount}</h1>
          </section>
          <section
            className='bg-amber-100 rounded-3xl p-12 flex flex-col gap-4 text-xl text-black font-medium
                justify-center items-end'>
            <h1>Total Remaining Budget</h1>
            <h1 className='bg-blue-300 w-full p-3 rounded-xl'>{filterdata?.data.sector[0].totalAllocatedBudget}</h1>
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


