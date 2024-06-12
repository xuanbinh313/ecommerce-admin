import { useParams } from "next/navigation";
import BillboardClient from "./components/client";
import prismadb from "@/lib/prismadb";


const BillboardPage = async ({ params }: { params: { billboardId: string } }) => {
	const billboards = await prismadb.billboard.findMany({
		where: {
			id: params.billboardId
		},
		orderBy: {
			createdAt: 'desc'
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<BillboardClient data={billboards} />
			</div>
		</div>
	);
};

export default BillboardPage;
