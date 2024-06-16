import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import prismadb from '@/lib/prismadb';
import { DollarSign, Package, Plus, Wallet } from 'lucide-react';
import CardDashboard from './components/CardDashboard';

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
          <CardDashboard
            title="Total Revernue"
            value="$118.00"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
          <CardDashboard
            title="Sales"
            value="+2"
            icon={<Wallet className="h-4 w-4 text-muted-foreground" />}
          />
          <CardDashboard
            title="Products in stock"
            value="6"
            icon={<Package className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
