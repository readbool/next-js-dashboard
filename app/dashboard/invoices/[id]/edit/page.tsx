import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from '@/app/ui/invoices/edit-form';
import { notFound } from "next/navigation";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Edit Invoices',
  };

export default async function Page({params}: {params: {id: string}}) {
    const id = params.id;

    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ]);

    if(!invoice) {
        notFound();
    }

    const crumbs = [
        {label: 'Invoices', href:'/dashboard/invoices'},
        {label: 'Edit Invoice', href:`/dashboard/invoices/${id}/edit`, active: true}
    ];

    return(
        <main>
            <Breadcrumbs breadcrumbs={crumbs} />
            <Form invoice={invoice} customers={customers}/>
        </main>
    );
}