import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getSession, useSession } from 'next-auth/react';

import { IncomingMessage } from 'http';

export async function GET(request: IncomingMessage) {
  // const session = await getSession({ req: request as any });
  // const users = await prisma.account.findMany();

  // const user  =  users[0]
  
  // console.log(users);
  
  // return NextResponse.json(session);
  return NextResponse.json({message: 'hello'})
}

