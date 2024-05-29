"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import React from "react";
import { DataTable } from "@/components/data-table";
import { Billboard, columns } from "./columns";
import { ApiAlert } from "@/components/ui/api-alert";
import { useParams } from "next/navigation";

export const payments: Billboard[] = [
	{
		id: "728ed52f",
		label: "T-Shirt",
		date: "2023/06/26",
	},
	{
		id: "123ed52f",
		label: "T-Shirt Man",
		date: "2023/06/26",
	},
];
const BillboardPage = () => {
	const params = useParams();
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between">
					<Heading
						title={`Billboards (${payments.length})`}
						description="Manage billboards for your store"
					/>
					<Button>
						<Plus className="w-4 h-4 mr-2" /> Add New
					</Button>
				</div>
				<Separator />
				<div className="grid md:grid-cols-4">
					<Input placeholder="Search" />
				</div>
				<div className="mx-auto py-10">
					<DataTable columns={columns} data={payments} />
				</div>
				<Heading title="API" description="API Calls for Products" />
				<Separator />
				<ApiAlert
					title="NEXT_PUBLIC_API_URL"
					description={`${origin}/api/${params.storeId}`}
					variant="admin"
				/>
			</div>
		</div>
	);
};

export default BillboardPage;
