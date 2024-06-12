import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { DollarSign, Plus } from "lucide-react";
import CardDashboard from "./components/CardDashboard";

interface DashboardPageProps {
    params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {

    const store = await prismadb.store.findFirst({
        where: { id: params.storeId },
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between">
                    <Heading title="Dashboard" description="Overview of your store" />
                    <Button>
                        <Plus className="w-4 h-4 mr-2" /> Add New
                    </Button>
                </div>
                <Separator />
                <div className="grid gap-4 grid-cols-3">
                    <CardDashboard />
                    <CardDashboard />
                    <CardDashboard />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
