import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Invoices',
  };

export default async function Page() {
    const customers = await fetchCustomers();

    const crumbs = [
        {label: 'Invoices', href: '/dashboard/invoices'},
        {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true
        }
    ];

    return(
        <main>
            <Breadcrumbs breadcrumbs={crumbs} />
            <Form customers={customers}/>
        </main>
    );
}