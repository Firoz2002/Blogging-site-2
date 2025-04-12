import { NextResponse } from 'next/server';
import cloudinary from '../../config/cloudinary/config';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const uploadResponse = await cloudinary.uploader.upload(file as string, {
      upload_preset: 'blogs_preset',
    });

    return NextResponse.json({ message: "File uploaded successfully", url: uploadResponse.secure_url });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
