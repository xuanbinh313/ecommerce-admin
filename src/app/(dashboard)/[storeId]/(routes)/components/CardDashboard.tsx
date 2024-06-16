import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CardDashboardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}
const CardDashboard: React.FC<CardDashboardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default CardDashboard;
