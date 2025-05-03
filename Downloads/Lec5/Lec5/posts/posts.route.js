const {Router} = require("express")
const postModels = require("../models/post.models");
const { isValidObjectId } = require("mongoose");

const postRouter =  Router()
postRouter.get('/', async ( req, res) => {
    const posts = await postModels
      .find()
      .sort({ _id: -1 })
      .populate({ path: "author", selectr:"fullName email" });
})

postRouter.post("/", async (req, res) => {
  const {content} = req.body
 if(!content){
    return res.status(400).json({message:"consteb=nt is required "})
 }
 await postModels.create({content, author : req.userId})
 res.status(201).json({message: "gud"})
});
postRouter.delete("/:id", async (req, res) => {
  const {id} = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "wrong " });
  }
  const post = await postModels.findById(id)
  if(post.author.toString() !== req.userId){
return res.status(401).json({ message: "bad " });
  }
  await postModels.findByIdAndDelete(id);
  res.status(200).json({ message: "delete" });
});

module.exports = postRouter;