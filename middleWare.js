/**
 * Created by Ferkat on 6/8/17.
 */

var middleWare={
    requireAuthentication:function (req, res, next) {
        console.log('Private route hit!');
        next();
    },

    logger: function (req, res, next) {

        console.log('Request: '+req.method + ' '+req.originalUrl +' '+ new Date().toDateString() + ' '+ new Date().getTimezoneOffset().toString());
        next();
    }
};


module.exports=middleWare;