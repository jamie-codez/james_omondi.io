import {NextResponse} from "next/server";

export const GET = () => {
    return NextResponse.json({statusCode: 200, statusMessage: "OK", message: "Successful.", data: null}, {status: 200, statusText: "OK"});
}