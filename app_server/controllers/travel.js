const travel = (req, res) => {
    pageTitle = process.eventNames.npm_package_description + ' - Travel';
    res.render('travel', {title: 'Travlr Getaways'});
}

module.exports = {
    travel
}