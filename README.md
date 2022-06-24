### ExpressJs Introduction

    * Express js is a open source web framwork for Node.js
    * ExpressJs is a fast,robust and asynchronous is nature
    * We can Design single-page or multi-page web application
    * Allow the middleware to responce to http to request
    * express is a allow routing concept difference page user action http method URL
    * express is a template allow to a HTML pages Render.
    * learn all the topic such as http method,routing,cookie management,scaffolding,file upload,template,session,url building,authrntication,middleware,RESTful API etc...

### Install Express-js
    - open terminal=>npm install express

* middleware handling JSON,,Raw,Text,URL encoded form data
    -npm install body-parser --save
* cookies handle
    - npm install cookie-paser
* multipart/form data
    - npm install multer

### HTTP Method

* GET
    - the get method is a retrieve  the data,limited amount of data only and data visible address
* POST
    - post method is a large amount of data,not visible thr URL Address
* PUT
    - data enclosed request accpt servers modification

* DELETE
    - this method request server delete specify source

### Request Responce
        Request         Responce
        1.req.app       1.res.app
        2.req.body      2.res.sent
        3.req.params    3.res.redirect
        4.req.path      4.res.location
        5.req.query     5.res.append
        6.req.route     6.res.attachment
        7.req.cookie    7.res.cookie
        8.req.secure    8.res.download
        9.req.subdomains 9.res.render
        10.req.baseurl  10.res.end

### Routing

    - Routing is a process in which user directed to difference page based on their action or request

    example: google-->youtube-->search-->ngmavr

    - URL into the browser,and url path matches any'route' inside the route file,redirect to the particular route
    - routing specifies how application respond a client req to a particular route GET,POST,etc..

### Middleware

    - middleware function are occur in between request and responce.
    - Syntex-app.use(path,(req,res,next))
    - next()->fnction used called next middleware function when curent middleware is not terminated
    - types of middlewaare
        * Application level Middleware
        * Error Handling Middleware
        * Router level middleware
        * build in middleware
        * Thrid part middleware
            1.Body parser
            2.cookie parser
            3.Session parser
    

### Templates

        * Pug is a templating engine for Express.
        * pug is very powerfull engine,Features such as Filter,includes,inheritance,interpolation,etc.
        * use the below command for installing pug
                npm install pug --save
        * And your js file to a include
                app.set('view engine','pug');
                app.set('views','./views')
        **View Engine:
                template specify to the pug include template
        **Views : 
                Template engine folder location