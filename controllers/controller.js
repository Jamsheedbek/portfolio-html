const FS = require('../lib/fsDeal');

module.exports = {
    GET: (_, res) => {
        res.render('index');
    },
    POST: (req, res) => {
        const { name, email, message } = req.body;
        const allMessages = new FS('../model/messages.json');
        const Messages = JSON.parse(allMessages.read());

        Messages.push({
            id: Messages.length + 1,
            name,
            email,
            message,
        });

        allMessages.write(Messages);
        res.json(Messages);
    },
};
