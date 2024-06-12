import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";

const BillboardEditPage = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between">
                    <Heading title="Dashboard" description="Overview of your store" />
                    <Button variant="destructive">
                        <Trash className="w-4 h-4" />
                    </Button>
                </div>
                <Separator />
                <div>
                    <div>Background image</div>
                    <div>
                        <Button variant="destructive">
                            <Trash className="w-4 h-4" />
                        </Button>
                        <img className="h-100 w-100 object-cover transition-all hover:scale-105 aspect-[3/4]" src="https://picsum.photos/id/237/200/300" alt="" />
                        <Input id="picture" type="file" />
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="label">Label</Label>
                            <Input id="label" />
                        </div>
                        <Button>
                            Save change
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillboardEditPage