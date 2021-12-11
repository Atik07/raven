//Landing Routes Goes Here
const multer = require('multer')
const express=require("express")
const router=express.Router()
const {uploadVideo, renderUploadVideoForm, likeVideo }=require('../../controllers/video/video')
const {isLoggedIn}=require('../../middleware/authMiddleware')
const storage=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename:function(req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    },
})
const upload= multer({storage: storage}).single("video")
/*---------------------
    GET Routes
----------------------*/
router.get('/upload', [isLoggedIn],renderUploadVideoForm)
/*---------------------
    POST Routes
----------------------*/
router.post('/',[isLoggedIn,upload],uploadVideo)
module.exports=router