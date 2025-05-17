import { db } from "@app/config/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { User } from "@/types/User";

export async function createUser(name: string, email: string, image: string | null, password: string): Promise<User> {
    const user = {
        email,
        password,
        name,
        image : image || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    
    const userRef = await addDoc(collection(db, 'users'), user);

    return { ...user, id: Number(userRef.id) };
}