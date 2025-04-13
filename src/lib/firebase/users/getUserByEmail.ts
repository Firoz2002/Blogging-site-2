import { db } from "../../app/config/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getUserByEmail(email: string) {
    const userRef = collection(db, 'users');
    const q = query(userRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if(querySnapshot.empty) return null;

    const doc = querySnapshot.docs[0];

    return {
        id: doc.id,
        ...doc.data()
    }
}