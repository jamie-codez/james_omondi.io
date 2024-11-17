import {NextRequest} from "next/server";

export const GET = (request: NextRequest, context: { params: any }) => {
    const id = context.params.id;
    const searchParams = new URLSearchParams(request.url);
}