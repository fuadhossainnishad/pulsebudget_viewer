'use client'
import { client } from '@/lib/client'
import React, { useEffect, useState } from 'react'

export interface TransactionInterface {
    Transaction_ID: string;
    Date: Date;
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
                    setTransaction(res.data.data || [])
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
        <main className=''>
            {transaction.length > 0 ? (
                transaction.map((tr,i) => (
                    <div key={i}>{tr.Transaction_ID}</div>
                ))
            ) : (
                <div>No transactions available</div>
            )}
        </main>
    )
}
