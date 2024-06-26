import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name } = body
        if (!userId) {
            return new NextResponse("Unauthentication", { status: 401 })
        }
        if (!name) {
            return new NextResponse("Name is required", { status: 400 })
        }
        if (!params.storeId) {
            return new NextResponse("Store id is required", { status: 400 });
        }
    } catch (e) {
        console.log("[BILLBOARDS_POST]", e)
        return new NextResponse("Internal error", { status: 500 })
    }
}