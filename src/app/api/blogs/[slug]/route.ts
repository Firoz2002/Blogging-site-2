import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../config/firebase/config";
import { doc, addDoc, getDoc } from "firebase/firestore";

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await context.params;
  
        if (!slug) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        
        const docRef = doc(db, "blogs", slug);
        const docSnap = await getDoc(docRef);

        if(!docSnap.exists()) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json(docSnap.data());
        
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
