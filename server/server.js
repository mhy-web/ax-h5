/**
 * 没有ax-server服务时，可以启动本地mock服务，npm run mock
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 7001;
const routes = [
    {
        name: 'home_data',
        type: 'get',
        path: '/index/info'
    },
    {
        name: 'project_list',
        type: 'get',
        path: '/project/list'
    },
    {
        name: 'project_list',
        type: 'get',
        path: '/get_detail/:pid'
    },
    {
        name: 'activity_info',
        type: 'get',
        path: '/activity/list'
    },
    {
        name: 'activity_info',
        type: 'get',
        path: '/activity/detail/:aid'
    },
    {
        name: 'persional',
        type: 'get',
        path: '/personal'
    },
    {
        name: 'putApply',
        type: 'post',
        path: '/apply/submit'
    },
    {
        name: 'apply_list',
        type: 'get',
        path: '/apply/list'
    },
    {
        name: 'invitation',
        type: 'get',
        path: '/invate/list'
    }
];

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type, accept');
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE');
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.setHeader('Access-Control-Allow-Credentials', true);
    }
    next();
});

routes.forEach((route, index) => {
    const { name, path } = route;
    const type = route.type;

    if (type === 'get') {
        app.get(path, function(req, res) {
            const { query } = req;
            fs.readFile('./mock/' + name + '.json', function(err, data) {
                if (err) throw err;
                res.json(JSON.parse(data));
            });
        });
    }

    if (type === 'post') {
        app.post(path, function(req, res) {
            const params = req.body;
            res.send({
                'code': 0,
                'msg': ''
            });
        });
    }
});

app.listen(PORT, () => {
    console.log(`mook server start at prot ${PORT}.....`);
});
