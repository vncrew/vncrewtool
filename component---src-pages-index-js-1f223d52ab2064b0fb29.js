(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=(a(215),a(0)),u=a.n(i),o=a(165),c=a.n(o),l=a(218),s=a.n(l),m=a(266),d=a(169),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={time:new Date},t}return r()(t,e),t.prototype.render=function(){var e=this;return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,{style:{width:100},showSecond:!1,defaultValue:c()(),className:"xxx",onChange:function(t){return e.setState({time:t&&t.format("YYYY-MM-DD HH:mm:ss")})}}),u.a.createElement("ul",null,u.a.createElement("li",null,"Ngắn nội địa: ",u.a.createElement(s.a,{format:"HH:mm",subtract:{hours:1,minutes:20}},this.state.time)),u.a.createElement("li",null,"Ngắn quốc tế: ",u.a.createElement(s.a,{format:"HH:mm",subtract:{hours:1,minutes:35}},this.state.time)),u.a.createElement("li",null,"Dài: ",u.a.createElement(s.a,{format:"HH:mm",subtract:{hours:2,minutes:5}},this.state.time)))))},t}(u.a.Component);p.displayName="TestComponent",t.default=p},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),o=a(144),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(27);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(150),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},150:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},162:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),o=a(53),c=a(1),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){},169:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),u=a(4),o=a.n(u),c=a(177),l=a.n(c),s=a(148),m=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},d=(a(163),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});d.propTypes={children:o.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-1f223d52ab2064b0fb29.js.map