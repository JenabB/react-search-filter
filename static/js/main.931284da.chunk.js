(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(0),o=t.n(c),n=t(2),r=t.n(n),i=(t(13),t(3)),s=t(4),l=t(6),m=t(5),u=t(7),g=(t(14),[{image:"https://images-na.ssl-images-amazon.com/images/I/81HdszfPvNL._SX466_.jpg",name:"Nutela",price:3e3,stock:21,category:"Food",subcategory:"Chocolate"},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b1N7WT8Bh7tXD9PN7KvK7fgNknvg9XxUbQ&usqp=CAU",name:"M&M",price:3e3,stock:11,category:"Food",subcategory:"Chocolate"},{image:"https://ecs7.tokopedia.net/img/cache/700/product-1/2020/1/9/82335368/82335368_2c0491c1-784e-47ba-ae0d-d1847ee81cf3_1000_1000",name:"TSR-909",price:3e3,stock:7,category:"Electronic",subcategory:"Radio"},{image:"https://cf.shopee.co.id/file/541d21ff38701a3aabf5aed15de56158",name:"Monstera",price:3e3,stock:7,category:"Plant",subcategory:"Keladi"},{image:"https://cf.shopee.co.id/file/a3ac64581ba4aa18e2e5e03b9f51d8d0",name:"Sirih Gading",price:3e3,stock:7,category:"Plant",subcategory:"Keladi"},{image:"https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/29/26564976/26564976_01c12514-cac9-4772-910c-f8ee9a603b6f_700_700.jpg",name:"Lidah Buaya",price:3e3,stock:7,category:"Plant",subcategory:"Keladi"},{image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-3812372/houze-living_houze-living-harrison-kursi-rotan_full02.jpg",name:"Kursi Rotan",price:3e3,stock:7,category:"Furnitur",subcategory:"Kursi"},{image:"https://www.digitalalliance.co.id/wp-content/uploads/2019/05/LUNA_03.jpg",name:"Digital Alliance Luna",price:3e3,stock:7,category:"Electronic",subcategory:"Mouse"}]),p=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).searchSpace=function(a){var t=a.target.value;e.setState({search:t})},e.state={search:null},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=g.filter(function(a){return null==e.state.search?a:a.name.toLowerCase().includes(e.state.search.toLowerCase())||a.category.toLowerCase().includes(e.state.search.toLowerCase())||a.subcategory.toLowerCase().includes(e.state.search.toLowerCase())?a:void 0}).map(function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"item-container"},o.a.createElement("img",{className:"product-image",src:e.image,alt:"productimage"}),o.a.createElement("div",{className:"item-description"},o.a.createElement("h3",null,e.name),o.a.createElement("h5",null,e.price),o.a.createElement("p",{style:{fontSize:"10pt"}},"stock: ",e.stock),o.a.createElement("h6",null,e.category))))});return o.a.createElement("div",null,o.a.createElement("div",{className:"app-container"},o.a.createElement("input",{type:"text",placeholder:"Enter item to be searched",onChange:function(a){return e.searchSpace(a)}}),o.a.createElement("div",{className:"app-body"},o.a.createElement("div",{className:"app-item"},a))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.931284da.chunk.js.map