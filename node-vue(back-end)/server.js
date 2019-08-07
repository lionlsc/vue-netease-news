const https=require("https")
const http=require("http");
const express=require("express");
const path=require("path");
const app=express();
const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.resolve(__dirname,"./public")))
app.use(function (req,res,next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type','text/plain;charset=utf-8');
	res.setHeader('Access-Control-Allow-Headers','*')
    next()
})                /*类似javaweb中的过滤器*/
app.post("/api/news",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})        /*新闻版块对应接口*/
app.post("/api/amuse",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})       /*娱乐版块对应接口*/
app.post("/api/sport",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})       /*运动版块对应接口*/
app.post("/api/finance",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})     /*金融版块对应接口*/
app.post("/api/war",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})         /*军事版块对应接口*/
app.post("/api/tech",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})        /*科技版块对应接口*/
app.post("/api/mobile",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})      /*手机版块对应接口*/
app.post("/api/digital",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})     /*数字版块对应接口*/
app.post("/api/fasion",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})      /*时尚版块对应接口*/
app.post("/api/game",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})        /*游戏版块对应接口*/
app.post("/api/edu",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })
})         /*教育版块对应接口*/
app.post("/api/health",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})      /*健康版块对应接口*/
app.post("/api/travel",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })

})      /*旅游版块对应接口*/

app.get("/api/hotwords",function (req,res) {
    let chunk="";
    https.get('https://c.m.163.com/nc/search/hotWord.html',function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })
})
app.post("/api/search",function (req,res) {
    let chunk="";
    https.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })
})
app.post("/api/video",function (req,res) {
    let chunk="";
    http.get(req.body.requestUri,function (response) {
        response.on("data",function (data) {
            chunk+=data;
        });
        response.on("end",function () {
            res.send(chunk)
        })
    })
})

app.listen(5000)

