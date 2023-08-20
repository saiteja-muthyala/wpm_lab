const index = (req,res) =>{

  res.render('index', { title: 'Auto Mobiles' });
};

module.exports = {
    index
};
