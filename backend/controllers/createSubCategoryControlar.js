let SubCategory = require("../model/subCatmodel");
let Category = require("../model/catModel");

let createSubCategoryControlar = async (req, res) => {
  const { name, ownerId, categoryId } = req.body;
  let existingName = await SubCategory.findOne({ name: name });
  if (existingName) {
    res.send({ error: "already exists" });
  } else {
    const subCat = new SubCategory({
      name: name,
      ownerId: ownerId,
      categoryId: categoryId,
    });
    subCat.save();
  await  Category.findOneAndUpdate({ _id: categoryId }, { $push: { subcatList: subCat._id } })

    res.send({ success: "Category Created. wait for admn approval " });
  }
};

module.exports = createSubCategoryControlar;
