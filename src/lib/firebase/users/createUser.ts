import { db } from "../../../app/config/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { User } from "../../../types/User";

export async function createUser(user: User) {
    const userRef = doc(db, 'users', user.id.toString());

    await setDoc(userRef, {
        ...user,
        id: user.id.toString(),
    });

    return user;
}