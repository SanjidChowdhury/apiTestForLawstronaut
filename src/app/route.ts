import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const apiKey = searchParams.get('apiKey');

	if (apiKey !== '12345') {
		return NextResponse.json({ error: 'Unauthorized: Invalid API key' }, { status: 401 });
	}

	const products = [
		{ id: 1, name: 'MacBook Pro', price: 1999 },
		{ id: 2, name: 'iPhone 15 Pro', price: 999 },
		{ id: 3, name: 'AirPods Pro', price: 249 },
	];

	return NextResponse.json({ success: true, data: products });
}
