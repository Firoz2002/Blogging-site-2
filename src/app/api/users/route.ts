import { NextResponse } from "next/server";
import { db } from "../../config/firebase/config";
import { collection, addDoc } from "firebase/firestore";