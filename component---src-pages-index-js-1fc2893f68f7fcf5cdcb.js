(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),l=a.n(i),c=a(188),u=a.n(c),o=a(222),m=a.n(o),s=a(223),d=a.n(s),p=a(165),f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).styles={container:{display:"flex",flexWrap:"wrap"},textField:{width:200}},t.state={time:u()().format("YYYY-MM-DD HH:mm:ss")},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("div",{style:{marginBottom:"30px"}},l.a.createElement("h3",null,"Chọn giờ bay"),l.a.createElement("form",{style:this.styles.container,noValidate:!0},l.a.createElement(d.a,{id:"time",type:"time",defaultValue:u()().format("HH:mm"),InputLabelProps:{shrink:!0},inputProps:{step:300},style:this.styles.textField,onChange:function(t){return e.setState({time:u()(t.target.value,"HH:mm").format("YYYY-MM-DD HH:mm:ss")})}}))),l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Chặng"),l.a.createElement("th",null,"Giờ briefing")),l.a.createElement("tr",null,l.a.createElement("td",null,"Nội địa"),l.a.createElement("td",null,l.a.createElement(m.a,{format:"HH:mm",subtract:{hours:1,minutes:20}},this.state.time))),l.a.createElement("tr",null,l.a.createElement("td",null,"Ngắn"),l.a.createElement("td",null,l.a.createElement(m.a,{format:"HH:mm",subtract:{hours:1,minutes:35}},this.state.time))),l.a.createElement("tr",null,l.a.createElement("td",null,"Trung"),l.a.createElement("td",null,l.a.createElement(m.a,{format:"HH:mm",subtract:{hours:1,minutes:50}},this.state.time))),l.a.createElement("tr",null,l.a.createElement("td",null,"Dài"),l.a.createElement("td",null,l.a.createElement(m.a,{format:"HH:mm",subtract:{hours:2,minutes:15}},this.state.time))))),l.a.createElement("p",{style:{fontSize:"12px",fontStyle:"italic",color:"#9BB0C2"}},"Lưu ý: Nội địa có mặt trước 1h20p, Ngắn có mặt trước 1h35p, Trung có mặt trước 1h50p và Dài có mặt trước 2h15p"),l.a.createElement("p",{style:{fontSize:"12px",fontStyle:"italic",textAlign:"center"}},l.a.createElement("span",{role:"img","aria-label":"heart"},"❤️")," via Ha93")))},t}(l.a.Component);f.displayName="TestComponent",t.default=f},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(146),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(27);a.d(t,"waitForRouteChange",function(){return o.c});var m=a(155),s=a.n(m);a.d(t,"PageRenderer",function(){return s.a});var d=a(39);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Briefing time caculator"}}}}},160:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(55),u=a(1),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},161:function(e,t,a){},165:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),l=a(4),c=a.n(l),u=a(174),o=a.n(u),m=a(154),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h3",{style:{margin:0}},i.a.createElement(m.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},d=(a(161),function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-1fc2893f68f7fcf5cdcb.js.map