const express= require('express')

const app =express();
const port=3333;

app.set('view engine','ejs');
app.listen(port,()=>{
    console.log("http://localhost:3333")
})




app.get('/', function(req, res) {
    const items = [
        { name: 'Bajaj Pulsar NS200', price: "1.18L", url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/58025/pulsar-ns-right-side-view-9.png?isig=0&q=80&wm=3' },
        { name: 'Bajaj Dominar 250', price: "2.38L", url: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/114431/dominar-250-right-side-view-2.png?isig=0&q=80'  },
        { name: 'Triumph Scrambler 400 X', price: "2.62 L", url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/138933/scrambler-400-right-side-view-6.png?isig=0&q=80' },
        { name: 'Kawasaki Ninja ZX-6R', price: "11.2L", url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/167523/ninja-zx-6r-right-side-view.png?isig=0&q=80'  },
        { name:'BMW G 310 GS',price:"3.30L",url:'https://imgd.aeplcdn.com/664x374/n/cw/ec/126519/g-310-gs-right-side-view.jpeg?isig=0&q=80'},
        { name: 'Kawasaki Ninja H2R', price: "79.9L", url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/95229/ninja-h2r-right-side-view-2.png?isig=0&q=80'  },
        { name: 'Bajaj Pulsar NS200', price: "1.18L", url: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/58025/pulsar-ns-right-side-view-9.png?isig=0&q=80&wm=3' },
        { name: 'Bajaj Dominar 250', price: "2.38L", url: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/114431/dominar-250-right-side-view-2.png?isig=0&q=80'  },
        { name: 'Triumph Scrambler 400 X', price: "2.62 L", url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/138933/scrambler-400-right-side-view-6.png?isig=0&q=80' },
        { name: 'Kawasaki Ninja ZX-6R', price: "11.2L", url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/167523/ninja-zx-6r-right-side-view.png?isig=0&q=80'  },
        { name:'BMW G 310 GS',price:"3.30L",url:'https://imgd.aeplcdn.com/664x374/n/cw/ec/126519/g-310-gs-right-side-view.jpeg?isig=0&q=80'},
        { name: 'Kawasaki Ninja H2R', price: "79.9L", url: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/95229/ninja-h2r-right-side-view-2.png?isig=0&q=80'  },
      ];
    res.render('index', { title: 'MOTORBIKES', items: items });
  });
