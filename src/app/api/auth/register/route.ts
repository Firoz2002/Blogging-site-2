import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { createUser } from "@/lib/firebase/users/createUser";

export async function POST(req: Request) {
    try {
        const { name, email, password, image } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const hashedPassword = await hash(password, 10);

        const user = await createUser(name, email, image, hashedPassword);

        if (!user) {
            return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
        }

        return NextResponse.json({ message: "User added successfully", user });

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}