import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
	const additions = await prisma.addition.findMany();

	return NextResponse.json(additions);
}
