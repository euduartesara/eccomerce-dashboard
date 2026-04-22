import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    service: 'hospicenter-ecommerce-dashboard',
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}
