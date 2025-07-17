import {NextResponse} from 'next/server';

export async function GET() {
    const apiUrl = process.env.API_URL_RUNTIME ||
        'http://192.168.20.158:8080';
    return NextResponse.json({apiUrl});
}
