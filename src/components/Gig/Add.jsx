import React, { useState } from 'react';
import Container from '../container/Container';
import Button from '../Button';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Add() {
    const categories = [
        { value: "design", label: "Design" },
        { value: "web", label: "Web Development" },
        { value: "animation", label: "Animation" },
        { value: "music", label: "Music" },
        { value: "photography", label: "Photography" },
        { value: "writing", label: "Writing" },
        { value: "digital-marketing", label: "Marketing" },
        { value: "video", label: "Video Editing" },
        { value: "programming", label: "Programming" }
    ];
    const [coverImage, setCoverImage] = useState(null);
    const [images, setImages] = useState(null);
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        description: '',
        coverImage: '',
        serviceTitle: '',
        shortDescription: '',
        deliveryTime: '',
        revisionNumber: '',
        features: [],
        price: ''
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Append form data to FormData object
        formData.append('title', formValues.title);
        formData.append('category', formValues.category);
        formData.append('description', formValues.description);
        formData.append('serviceTitle', formValues.serviceTitle);
        formData.append('shortDescription', formValues.shortDescription);
        formData.append('deliveryTime', formValues.deliveryTime);
        formData.append('revisionNumber', formValues.revisionNumber);
        formData.append('price', formValues.price);
        formData.append('coverImage', coverImage);
        formData.append('images', images);
        // Append coverImage
    
        // Append images
       
        console.log(formData);
        // Append features
        const featuresArray = [];
        for (let i = 1; i <= 4; i++) {
            if (formValues[`feature${i}`]) {
                featuresArray.push(formValues[`feature${i}`]);
            }
        }
        formData.append('features', JSON.stringify(featuresArray));
    
        
        console.log('Form data:', formData);
        console.log('Form values:', formValues);
        axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/gigs`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        })
        .then(response => {
            toast.success('Gig successfully created');
            setFormValues({
                title: '',
                category: '',
                description: '',
                coverImage: '',
                serviceTitle: '',
                shortDescription: '',
                deliveryTime: '',
                revisionNumber: '',
                features: [],
                price: ''
            });

            console.log('Gig successfully created:', response.data);
        })
        .catch(error => {
            console.error('Error creating gig:', error);
        });
    };
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormValues({
                ...formValues,
                [name]: files[0] // Only consider the first file for cover image
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: value
            });
        }
    };

    return (
        <section>
            <Container>
                <div className="flex justify-between">
                    <div className="py-12 w-full">
                        <h1 className='mb-4 opacity-65 font-Roboto text-xl'>Add New Gig</h1>
                        <form onSubmit={handleSubmit} className="flex justify-between gap-24">
                            <div className="font-Roboto w-1/2 flex flex-col gap-4 justify-between">
                                <label htmlFor="" className='opacity-80'>Title</label>
                                <input
                                    className='p-3 border'
                                    type="text"
                                    name='title'
                                    placeholder="e.g. I will do something I'm really good at"
                                    value={formValues.title}
                                    onChange={handleChange}
                                />
                                <label htmlFor="" className='opacity-80'>Category</label>
                                <select className='p-3 border' name="category" onChange={handleChange}>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category.value} className='bg-gray-900 text-white'>{category.label}</option>
                                    ))}
                                </select>
                                <label htmlFor="" className='opacity-80'>Cover Image</label>
                                <input className='p-3' name='coverImage' type="file"  onChange={(e) => setCoverImage(e.target.files[0])} />
                                <label htmlFor="" className='opacity-80'>Upload Images</label>
                                <input className='p-3' type="file" name='images' multiple onChange={(e) => setImages(e.target.files[0])}/>
                                <label htmlFor="" className='opacity-80'>Description</label>
                                <textarea className='p-3 border outline-none' name="description" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="10" onChange={handleChange}></textarea>
                                <Button type='submit' className='p-3 text-white font-medium bg-blue-500 cursor-pointer'>Create</Button>
                            </div>
                            <div className="font-Roboto flex w-1/2 flex-col gap-4">
                                <label htmlFor="" className='opacity-80'>Service Title</label>
                                <input
                                    value={formValues.serviceTitle}
                                    type="text"
                                    name='serviceTitle'
                                    placeholder="e.g. One-page web design"
                                    className='p-3 border'
                                    onChange={handleChange} />
                                <label htmlFor="" className='opacity-80'>Short Description</label>
                                <textarea name="shortDescription" id="" placeholder="Short description of your service" cols="30" rows="6"
                                    className='border p-3 outline-none' onChange={handleChange}></textarea>
                                <label htmlFor="" className='opacity-80'>Delivery Time (e.g. 3 days)</label>
                                <input type="number" 
                                value={formValues.deliveryTime}
                                className='border p-3' name='deliveryTime' onChange={handleChange} />
                                <label htmlFor="" className='opacity-80'>Revision Number</label>
                                <input 
                                type="number" 
                                className='border p-3' 
                                name='revisionNumber' 
                                value={formValues.revisionNumber}
                                onChange={handleChange} />
                                <label htmlFor="" className='opacity-80'>Add Features</label>
                                {[1, 2, 3, 4].map(index => (
                                    <input key={index} type="text" name={`feature${index}`} className='p-3 border' placeholder={`e.g. feature ${index}`} onChange={handleChange} />
                                ))}
                                <label htmlFor="" className='opacity-80'>Price</label>
                                <input 
                                type="number"
                                value={formValues.price}
                                    className='p-3 border' name='price' onChange={handleChange} />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Add;
