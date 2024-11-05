
// READ
const getAbout = (req, res) => {
    try {
        res.status(200).render("main.pug", 
        { 
            about: true, 
            msj: 'ABOUT ME' 
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getAbout
}