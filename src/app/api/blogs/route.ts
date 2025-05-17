import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { db } from '../../config/firebase/config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getBlogsByUserId } from '@/lib/firebase/blogs/getBlogsByUserId';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "blogs"), body);
    return NextResponse.json({ message: "Blog added successfully", id: docRef.id });

  } catch (error) {
    console.error('Error uploading blog:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    let user = searchParams.get('user');
    if (user === "current") {
      const token = await getToken({ req });
      if (token) {
        user = token.id as string;
      } else {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const blogs = await getBlogsByUserId(user as string);
    if (!blogs) {
      return NextResponse.json({ error: 'No blogs found' }, { status: 404 });
    }
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
