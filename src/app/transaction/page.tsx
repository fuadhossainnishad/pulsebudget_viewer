'use client'
import { client } from '@/lib/client'
import React, { useEffect, useState } from 'react'

export interface TransactionInterface {
    Transaction_ID: string;
    Date: string;
    Subsidiary: string;
    Sector: string;
    User_ID: string;
    Transaction_Type: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface APiResponse {
    data: TransactionInterface[]
    message: string
}

export default function TransactionPage() {
    const [transaction, setTransaction] = useState<TransactionInterface[]>([])
    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const res = await client.get<APiResponse>('/transaction')
                console.log('Response data:', res.data || []);
                if (res.status === 200) {
                    const parseData = res.data.data.map((tr) => (
                        {
                            ...tr,
                            Date: tr.Date.split('T')[0],
                            createdAt: tr.createdAt ? new Date(tr.createdAt) : undefined,
                            updatedAt: tr.updatedAt ? new Date(tr.updatedAt) : undefined,
                        }
                    ))
                    setTransaction(parseData || [])
                    console.log('Transaactions:', res.data.data);
                }

            } catch (err) {
                setTransaction([])
                console.error("Error fetching transaction:", err);
            }
        }

        fetchTransaction()
    }, [])
    return (
        <main className="px-20 py-10">
            {transaction.length > 0 ? (
                <table className="min-w-full border-collapse border border-blue-700">
                    <caption className="text-lg font-semibold mb-2">Transaction Records</caption>
                    <thead>
                        <tr className="bg-blue-200 text-black">
                            <th className="border border-gray-300 p-4 text-left">Table Row</th>
                            <th className="border border-gray-300 p-4 text-left">Transaction ID</th>
                            <th className="border border-gray-300 p-4 text-left">Date</th>
                            <th className="border border-gray-300 p-4 text-left">Subsidiary</th>
                            <th className="border border-gray-300 p-4 text-left">Sector</th>
                            <th className="border border-gray-300 p-4 text-left">User ID</th>
                            <th className="border border-gray-300 p-4 text-left">Transaction Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaction.map((tr, i) => (
                            <tr key={i} className="hover:bg-amber-100/20">
                                <td className="border border-gray-300 px-4 py-3">{i + 1}</td>
                                <td className="border border-gray-300 px-4 py-3">{tr.Transaction_ID}</td>
                                <td className="border border-gray-300 px-4 py-3">{tr.Date}</td>
                                <td className="border border-gray-300 px-4 py-3">{tr.Subsidiary}</td>
                                <td className="border border-gray-300 px-4 py-3">{tr.Sector}</td>
                                <td className="border border-gray-300 px-4 py-3">{tr.User_ID}</td>
                                <td className="border border-gray-300 px-4 py-3">{tr.Transaction_Type}</td>
                                {/* <td className="border border-gray-300 px-4 py-3">
                                    {tr.createdAt ? tr.createdAt.toLocaleDateString() : 'N/A'}
                                </td>
                                <td className="border border-gray-300 p-2">
                                    {tr.updatedAt ? tr.updatedAt.toLocaleDateString() : 'N/A'}
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center p-4">No transactions available</div>
            )}
        </main>
    )
}
