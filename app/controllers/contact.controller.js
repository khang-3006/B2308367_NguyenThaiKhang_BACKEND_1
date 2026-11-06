exports.create = (req, res) => {
    res.send({ message: 'Create handler' });
};

exports.findAll = (req, res) => {
    res.send({ message: 'Find All handler' });
};

exports.findOne = (req, res) => {
    res.send({ message: 'Find One handler' });
};

exports.update = (req, res) => {
    res.send({ message: 'Update handler' });
};

exports.delete = (req, res) => {
    res.send({ message: 'Delete handler' });
};

exports.deleteAll = (req, res) => {
    res.send({ message: 'Delete All handler' });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: 'Find All Favorite handler' });
};