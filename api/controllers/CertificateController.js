/**
 * CertificateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    get:function(req,res) {
    	Certificate.find() 
    	           .exec(function(err, certificates) {
    	           	   if(err) {
    	           	   	   return res.json(err);
    	           	   }
    	           	   return res.json(certificates);
    	           })
    },

    create: function(req,res) {
    	console.log(req, '___________++++++++++>');
    	var name1 = req.body.name1;
    	var subject = req.body.subject;
    	var year = req.body.year;
    	var qualification = req.body.qualification;

    	Certificate.create({
    		name1: name1,
    		subject: subject,
    		year: year,
    		qualification: qualification
    	})
    	.exec(function(err, certif) {
    	           	if(err) {
    	           		return res.json(err);
    	           	}
    	           	 console.log(certif, '_________certificat++>');

    	           	return res.json(certif);

    	           });
    }

};

/*module.exports = {
    run: function(req, res) {
        Author.create({
            fullName: req.body,
            bio: "Lives in Bedrock, blogs in cyberspace",
            username: "fredf",
            email: "fred@flintstone.com"
        }).exec(function (err, author) {
            Entry.create({
                title: "Hello",
                body: "Yabba dabba doo!",
                author: author
            }).exec(function (err, created) {
                Entry.create({
                    title: "Quit",
                    body: "Mr Slate is a jerk",
                    author: author.id
                }).exec(function (err, created) {
                    return res.send("Database seeded");
                });
            });
        });
    }
};
*/