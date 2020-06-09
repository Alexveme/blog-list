import mongoose from 'mongoose';
import blogSchema from './schema.js';
import { response } from 'express';

const Blog = mongoose.model('Blog', blogSchema);

class BlogDAO{
    constructor(){

    }

    list(){
        return Blog.find({});
    }

    create(pBlog){
        const blog = new Blog({
            title: pBlog.title,
            author: pBlog.author,
            url: pBlog.url,
            likes: pBlog.likes,
        })

        return blog.save();
    }
}

export default new BlogDAO();