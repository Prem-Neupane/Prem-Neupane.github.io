(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[4],{52:function(e,a,t){"use strict";t(0);var s=t(1);a.a=function(e){return Object(s.jsx)("div",{className:"title-bar justify-content-center",style:{alignItems:"center",textAlign:"center"},children:Object(s.jsx)("div",{style:{alignItems:"center",textAlign:"center",margin:0,padding:"1em 2em",borderRadius:"25px",background:"var(--light-gradient)",display:"inline-block"},children:Object(s.jsx)("h1",{children:e.title})})})}},53:function(e,a,t){"use strict";var s=t(2),c=t(3),r=t(5),i=t.n(r),n=t(0),l=t.n(n),o=t(6),d=["bsPrefix","fluid","as","className"],j=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.fluid,n=e.as,j=void 0===n?"div":n,b=e.className,u=Object(c.a)(e,d),f=Object(o.a)(t,"container"),m="string"===typeof r?"-"+r:"-fluid";return l.a.createElement(j,Object(s.a)({ref:a},u,{className:i()(b,r?""+f+m:f)}))}));j.displayName="Container",j.defaultProps={fluid:!1},a.a=j},54:function(e,a,t){"use strict";var s=t(2),c=t(3),r=t(5),i=t.n(r),n=t(0),l=t.n(n),o=t(6),d=["bsPrefix","className","noGutters","as"],j=["xl","lg","md","sm","xs"],b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.noGutters,b=e.as,u=void 0===b?"div":b,f=Object(c.a)(e,d),m=Object(o.a)(t,"row"),p=m+"-cols",x=[];return j.forEach((function(e){var a,t=f[e];delete f[e];var s="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&x.push(""+p+s+"-"+a)})),l.a.createElement(u,Object(s.a)({ref:a},f,{className:i.a.apply(void 0,[r,m,n&&"no-gutters"].concat(x))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},a.a=b},55:function(e,a,t){"use strict";var s=t(2),c=t(3),r=t(5),i=t.n(r),n=t(0),l=t.n(n),o=t(6),d=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,b=void 0===n?"div":n,u=Object(c.a)(e,d),f=Object(o.a)(t,"col"),m=[],p=[];return j.forEach((function(e){var a,t,s,c=u[e];if(delete u[e],"object"===typeof c&&null!=c){var r=c.span;a=void 0===r||r,t=c.offset,s=c.order}else a=c;var i="xs"!==e?"-"+e:"";a&&m.push(!0===a?""+f+i:""+f+i+"-"+a),null!=s&&p.push("order"+i+"-"+s),null!=t&&p.push("offset"+i+"-"+t)})),m.length||m.push(f),l.a.createElement(b,Object(s.a)({},u,{ref:a,className:i.a.apply(void 0,[r].concat(m,p))}))}));b.displayName="Col",a.a=b},56:function(e,a,t){"use strict";var s=t(2),c=t(3),r=t(5),i=t.n(r),n=t(0),l=t.n(n),o=t(6),d=t(26),j=["bsPrefix","variant","size","active","className","block","type","as"],b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,n=e.size,b=e.active,u=e.className,f=e.block,m=e.type,p=e.as,x=Object(c.a)(e,j),O=Object(o.a)(t,"btn"),h=i()(u,O,b&&"active",r&&O+"-"+r,f&&O+"-block",n&&O+"-"+n);if(x.href)return l.a.createElement(d.a,Object(s.a)({},x,{as:p,ref:a,className:i()(h,x.disabled&&"disabled")}));a&&(x.ref=a),m?x.type=m:p||(x.type="button");var v=p||"button";return l.a.createElement(v,Object(s.a)({},x,{className:h}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=b},89:function(e,a,t){"use strict";t.r(a);var s=t(14),c=t(15),r=t(17),i=t(16),n=t(0),l=t.n(n),o=t(53),d=t(54),j=t(55),b=t(1),u=function(e){return Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"flip-card",children:Object(b.jsxs)("div",{className:"flip-card-inner",children:[Object(b.jsxs)("div",{className:"flip-card-front",children:[Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{className:"flip-card-img",type:"image/webp",srcset:e.image}),Object(b.jsx)("img",{className:"flip-card-img",src:e.fallback_image,alt:"Avatar"})]}),Object(b.jsx)("t",{children:e.title}),Object(b.jsx)("sm",{children:e.address}),Object(b.jsx)("br",{}),e.degree,Object(b.jsx)("sm",{children:e.major})]}),Object(b.jsxs)("div",{className:"flip-card-back",children:[Object(b.jsx)("t",{children:e.class}),Object(b.jsx)("sm",{children:e.duration}),Object(b.jsx)("sm",{children:Object(b.jsx)("b",{children:e.grade})}),Object(b.jsx)("br",{}),Object(b.jsx)("imp",{style:{textAlign:"justify"},children:Object(b.jsx)("sm",{children:e.details})})]})]})})})},f=(t(56),t(52)),m=t.p+"static/media/nepathyacollege.862c97a5.webp",p=t.p+"static/media/nepathyacollege.0ca2182e.jpg",x=t.p+"static/media/oxfordcollege.64a6f3c8.webp",O=t.p+"static/media/oxfordcollege.64a6f3c8.jpg",h=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"primary outer-structure",style:{display:"flex",flexDirection:"column"},children:Object(b.jsxs)("div",{className:"inner-structure center",style:{flexDirection:"column"},children:[Object(b.jsx)(f.a,{title:"Education"}),Object(b.jsx)(o.a,{fluid:!0,style:{textAlign:"center"},children:Object(b.jsxs)(d.a,{style:{display:"inline-flex"},children:[Object(b.jsx)(u,{image:m,fallback_image:p,title:"Bachelor in CSIT",address:"Butwal-Manigram, Rupandei",degree:"Bachelor in Science CSIT",major:"Computer Science",class:"Class of 2021",duration:"August 2016 - December 2021",grade:"3.00 GPA",details:Object(b.jsxs)(l.a.Fragment,{children:["\u2022\xa0Major: Computer Science & Information Technology",Object(b.jsx)("br",{}),"\u2022\xa0Affilation: Tribhuwan University(TU)",Object(b.jsx)("br",{}),"\u2022\xa0Dean's List (all semesters)",Object(b.jsx)("br",{}),"\u2022\xa0Member, CSIT Association",Object(b.jsx)("br",{}),"\u2022\xa0Web Developer Internship, Bootwal Research & development Pvt. ltd"]})}),Object(b.jsx)(u,{image:x,fallback_image:O,title:"Oxford College",address:"Butwal-Sukkhanagar, Rupandehi",degree:"High School Diploma",major:"Science with Mathematics",class:"Class of 2016",duration:"July 2014 - May 2016",grade:Object(b.jsxs)(l.a.Fragment,{children:["60.0% (Grade 12) ",Object(b.jsx)("br",{})]}),details:Object(b.jsxs)(l.a.Fragment,{children:["\u2022 Simpe Student Learned Quitely",Object(b.jsx)("br",{}),"\u2022 Joined In Nov 2014)",Object(b.jsx)("br",{}),"\u2022 Passout in Apr 2016",Object(b.jsx)("br",{})]})})]})})]})})}}]),t}(l.a.Component);a.default=h}}]);
//# sourceMappingURL=4.15869bca.chunk.js.map