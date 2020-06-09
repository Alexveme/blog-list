import blogDAO from '../dao.js';

const list = async (req, res) => {

    try {
        const blogs = await blogDAO.list();
        res.json(blogs);
    } catch (error){
        console.log(error);
    }
}

export default list;