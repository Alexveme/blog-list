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

        blog.save().then(result => {
            response.status(201).json(result);
            mongoose.connection.close();
        })
    }
}

export default new BlogDAO();