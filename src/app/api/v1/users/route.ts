import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/lib/db/database";
import User from "@/lib/models/user";


export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        await connect();
        const user = await User.create({...request.body});
        if (!user) return NextResponse.json({statusCode:500,statusMessage:"Internal server error",message:"Error creating user",data:body.message},{status:500,statusText:"Internal server error."})
        return NextResponse.json({statusCode:201,statusMessage:"Created",message:"Created successfully",data:user},{status:201,statusText:"Created"})
    }catch (error) {
        return NextResponse.json({statusCode: 500, statusMessage: "Internal Server Error", message: error!.message}, {status: 500, statusText: "Internal Server Error"})
    }
}

export const GET = async () => {
    try {
        await connect();
        const users = await User.find();
        if (!users || users.length === 0)
            return NextResponse.json({statusCode: 404, statusMessage: "Not found", message: "No users found", data: null}, {status: 404, statusText: "Not found"})
        return NextResponse.json({statusCode: 200, statusMessage: "Ok", message: "Users retrieved successfully", data: users}, {status: 200, statusText: "Ok"})
    } catch (error) {
        return NextResponse.json({statusCode: 500, statusMessage: "Internal Server Error", message: error}, {status: 500, statusText: "Internal Server Error"})
    }
}