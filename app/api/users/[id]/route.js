import { getUserById } from "@/server/users";
import { NextResponse } from "next/server";

export async function GET(request, { params }){
    try {
        const { id } = await params;
        const user = await getUserById(id);
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to get user!" }, { status: 500 })
    }
}