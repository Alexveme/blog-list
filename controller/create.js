import blogDAO from '../dao.js';

const create = async (req, res) => {

    try {
        const blog = req.body;
        const insertId = await blogDAO.create(blog);
        blog.id = insertId;
        res.json(blog);
    } catch (error){
        console.log(error);
    };
}

export default create;