const { Video } = require("../../models/video");

//To Upload Video
const uploadVideo = async (req, res) => {
  try {
    console.log(`Logged in User is `);
    console.log(req.session.user);
    const { videoName, videoDescription } = req.body;
    const newVideo = {
      title: videoName,
      description: videoDescription,
      creator: req.session.user._id,
      filePath: req.file.path,
      fileType: req.file.mimetype,
    };
    console.log(req.body);
    console.log(req.file);
    //Do some more stuff
    const newUploadedVideo = new Video(newVideo);
    await newUploadedVideo.save();
    req.flash("success", "Video Uploaded Success");
    res.redirect("/");
  } catch (err) {
    req.flash("error", `Something went wrong ${err.message}`);
    console.log(err);
    //To Remove from filesystem ( fs )
    res.redirect("/error");
  }
};

//To Display the form
const renderUploadVideoForm = async (req, res) => {
  try {
    res.render("uploadVideo");
  } catch (err) {
    req.flash("error", `Something went wrong ${err.message}`);
    console.log(err);
    res.redirect("/error");
  }
};
//To Display All Videos on Home
const displayAllVideosHome = async (req, res) => {
  try {
    const foundVideos = await Video.find({}).populate("creator", "name email");
    //console.log(foundVideos)
    res.render("./landing/home", { videos: foundVideos });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  uploadVideo,
  renderUploadVideoForm,
  displayAllVideosHome
};
