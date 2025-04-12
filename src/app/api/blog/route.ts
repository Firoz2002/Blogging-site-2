import { NextResponse } from 'next/server';
import { db } from '../../config/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "blogs"), body);
    return NextResponse.json({ message: "Blog added successfully", id: docRef.id });

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
