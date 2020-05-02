const User = require('../models/User');

module.exports = {
    // ======== CREATE ========
    addUser: async (req, res) => {
        const body = req.body;
        if (!body) {
            return res.status(400).json({ success: false, error: 'No user provided' });
        }
        const user = new User(body);
        if (!user) {
            return res.status(400).json({ success: false, error: err });
        }
        user.save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: user._id,
                    message: 'Successfully added user!'
                })
            })
            .catch(err => {
                return res.status(400).json({
                    err,
                    message: 'Failed to add user!'
                });
            });
    },
    // ======== READ: ========
    findAll: async (req, res) => {
        await User.find({}, (err, users) => {
            if (err) {
                return res.status(400).json({ success: false, error: err });
            }
            if (!users.length) {
                return res.status(400).json({ success: false, error: err });
            }
            return res.status(200).json({ success: true, data: users });
        })
            .catch(err => console.log(err));
    },
    findById: async (req, res) => {
        await User.findOne({ _id: req.params.id }, (err, user) => {
            if (err) {
                return res.status(400).json({ success: false, error: err });
            }
            if (!user) {
                return res.status(404).json({ success: false, error: 'User not found!' });
            }
            return res.status(200).json({ success: true, data: user });
        })
            .catch(err => console.log(err));
    },
    // ======== UPDATE: ========
    updateUser: async (req, res) => {
        const body = req.body
        if (!body) {
            return res.status(400).json({ success: false, error: "You must provide a user to update" });
        }
        await User.findOneAndUpdate(
            { _id: body._id },
            {
                email: body.email,
                password: body.password,
                updatedAt: Date.now()
            },
            // passing { new: true } assures that the function will return
            // the NEW document and not the old one.
            { new: true }
        )
            .then(update => {
                return res.json({
                    success: true,
                    userEmail: update.email,
                    userId: update._id
                });
            });
    },
    // ======== DELETE ========
    deleteById: async (req, res) => {
        await User.findByIdAndDelete(
            { _id: req.params.id },
        )
            .then(result => res.json({ success: true, deleted: result.email }));
    }
}