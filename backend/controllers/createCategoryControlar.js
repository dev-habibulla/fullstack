
let Category = require("../model/catModel")

let createCategoryControlar = async (req, res) => {
    const { name, ownerId } = req.body;

    let existingName = await Category.findOne({ name: name })

    if (existingName) {
        res.send({ error: "already exists" })
    } else {
        const cat = new Category({
            name: name,
            ownerId: ownerId,
        })
        cat.save()
        res.send({ success: "Category Created. wait for admn approval " })
    }


};

module.exports = createCategoryControlar;