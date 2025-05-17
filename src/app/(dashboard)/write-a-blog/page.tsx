'use client';
import React, { useState } from 'react'
import TextEditor from '@components/editor/TextEditor';

export default function WriteABlog() {
  const [file, setFile] = useState(null);
  const [blogtTitle, setBlogTitle] = useState('');
  const [bannerImage, setBannerImage] = useState(null);

  const inputRef = React.useRef(null);
  const blogContentRef = React.useRef(null);

  const blogBannerHandler = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      try {
        const dataURL = await convertToBase64(selectedFile);
        setFile(dataURL);
        setBannerImage(dataURL);
      } catch (error) {
        console.error("Error converting file to base64:", error);
      }
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handlePublish = async(e: React.FormEvent) => {
    e.preventDefault();

    const content = blogContentRef.current.getContent();
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const images = doc.querySelectorAll('img');

    for(const img of images) {
      if(!img.src.startsWith('http')) {
        const uploadedImageUrl = await uploadImageToCloudinary(img.src);
        if(uploadedImageUrl) {
          img.src = uploadedImageUrl;
        }
      }
    }

    const updatedContent = doc.body.innerHTML;
    const bannerImageUrl = await uploadImageToCloudinary(file);

    const blogData = {
      title: blogtTitle,
      banner: bannerImageUrl,
      content: updatedContent,
    };

    if(!blogData.title || !blogData.banner || !blogData.content) {
      alert('All fields are required');
      return;
    }

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();
      console.log(data);

      if(response.ok) {
        alert('Blog published successfully');
      }
      
    } catch (err) {
      console.error(err);
    }
  }

  const uploadImageToCloudinary = async (image: string) => {
    if(!image) {
      return null;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      return data.url;

    } catch (err) {
      console.error(err);
      return null;
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="relative z-10 mb-8">
        <h1 className="text-3xl font-medium mb-6 font-['helveticaneuemedium',sans-serif] text-black">Create Your Blog</h1>
      </div>
      
      <div className="bg-white shadow-lg rounded-none overflow-hidden border border-[#dcdcdc]">
        <div className="p-8">
          <div className="space-y-12">
            {/* Banner Image Upload */}
            <div className="relative">
              <h5 className="mb-5 text-[18px] font-medium text-black">Blog Banner</h5>
              <div className="w-full h-80 bg-[#f8f8f8] overflow-hidden border border-[#dcdcdc] relative">
                <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-[#f0f0f0] transition-colors">
                  {
                    bannerImage ? (
                      <img src={bannerImage} alt="blog banner" className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#878787]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <span className="mt-3 text-sm text-[#878787] uppercase tracking-[3px]">Upload cover image</span>
                      </>
                    )
                  }
                </label>
                <input
                  type="file"
                  className="z-50 w-full h-full opacity-0 absolute cursor-pointer"
                  accept="image/*"
                  ref={inputRef}
                  onChange={blogBannerHandler}
                />
              </div>
            </div>
            
            {/* Blog Title */}
            <div>
              <h5 className="mb-5 text-[18px] font-medium text-black">Blog Title</h5>
              <input 
                type="text"  
                value={blogtTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Add a title to your blog" 
                className="w-full text-xl font-medium border border-[#dcdcdc] outline-none py-4 px-6 font-['helveticaneuemedium',sans-serif] focus:border-black"
              />
            </div>
            
            {/* Blog Content */}
            <div>
              <h5 className="mb-5 text-[18px] font-medium text-black">Blog Content</h5>
              <TextEditor editorRef={blogContentRef} />
            </div>
            
            {/* Publish Button */}
            <div className="flex justify-end pt-4">
              <button 
                onClick={(e) => handlePublish(e)}
                className="relative z-1 px-8 min-w-[175px] h-[60px] border border-[#dcdcdc] text-[14px] uppercase tracking-[3px] font-['Open Sans',sans-serif] shadow-md text-black hover:bg-black hover:text-white transition-colors">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
