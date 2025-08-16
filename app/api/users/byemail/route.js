import { getUserByEmail } from '@/server/users';
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });
  const user = await getUserByEmail(email);
  return NextResponse.json(user, { status: user ? 200 : 404 });
}