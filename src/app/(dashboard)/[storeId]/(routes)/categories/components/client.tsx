'use client';

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import React from 'react';
import { DataTable } from '@/components/data-table';
import { ApiAlert } from '@/components/ui/api-alert';
import { useParams, useRouter } from 'next/navigation';
import { Category, columns } from './columns';

export const payments: Category[] = [
  {
    id: '728ed52f',
    billboard: 'abc',
    name: 'T-Shirt',
    date: '2023/06/26',
  },
  {
    id: '123ed52f',
    billboard: 'xyz',
    name: 'T-Shirt Man',
    date: '2023/06/26',
  },
];
const CategoryClient = ({ data = [] }) => {
  const params = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (1)`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>
      <Separator />
      <div className="grid md:grid-cols-4">
        <Input placeholder="Search" />
      </div>
      <div className="mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <Heading title="API" description="API Calls for Categories" />
      <Separator />
      {/* <ApiAlert */}
      {/*   title="NEXT_PUBLIC_API_URL" */}
      {/*   description={`${origin}/api/${params.storeId}`} */}
      {/*   variant="admin" */}
      {/* /> */}
    </>
  );
};

export default CategoryClient;
