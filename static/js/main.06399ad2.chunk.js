(this.webpackJsonpproj2=this.webpackJsonpproj2||[]).push([[0],{64:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(34),s=a.n(r),i=a(38),l=a(10),o=a(8),u=a.n(o),j=a(12),d=a(20),b=a(9),m=a(2),h=a(35),O=a(36),p=a.n(O).a.create({baseURL:"http://localhost:3006/"}),x=(a(64),a(0)),f=function(){return Object(x.jsx)("div",{className:"ui fixed menu",children:Object(x.jsx)("div",{className:"ui container center",children:Object(x.jsx)("h2",{children:"Contact Manager"})})})},v=a(16),N=a(17),g=a(19),y=a(18),C=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:""},e.add=function(t){t.preventDefault(),""!==e.state.name&&""!==e.state.email?(e.props.addContactHandler(e.state),e.setState({name:"",email:""}),e.props.history.push("/"),console.log(e.props)):alert("All the fields are mandatory!")},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"ui container ",children:[Object(x.jsx)("h2",{children:"Add Contact"}),Object(x.jsxs)("form",{className:"ui form",onSubmit:this.add,children:[Object(x.jsxs)("div",{className:"field",children:[Object(x.jsx)("label",{children:"Name"}),Object(x.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(x.jsxs)("div",{className:"field",children:[Object(x.jsx)("label",{children:"E-mail"}),Object(x.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})]}),Object(x.jsx)("button",{className:"ui button blue",children:"ADD"})]})]})}}]),a}(c.a.Component),w=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var n;Object(v.a)(this,a),(n=t.call(this,e)).update=function(e){e.preventDefault(),""!==n.state.name&&""!==n.state.email?(n.props.updateContactHandler(n.state),n.setState({name:"",email:""}),n.props.history.push("/"),console.log(n.props)):alert("All the fields are mandatory!")};var c=e.location.state.contact,r=c.id,s=c.name,i=c.email;return n.state={id:r,name:s,email:i},n}return Object(N.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"ui container ",children:[Object(x.jsx)("h2",{children:"Edit Contact"}),Object(x.jsxs)("form",{className:"ui form",onSubmit:this.update,children:[Object(x.jsxs)("div",{className:"field",children:[Object(x.jsx)("label",{children:"Name"}),Object(x.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(x.jsxs)("div",{className:"field",children:[Object(x.jsx)("label",{children:"E-mail"}),Object(x.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})]}),Object(x.jsx)("button",{className:"ui button blue",children:"UPDATE"})]})]})}}]),a}(c.a.Component),k=a.p+"static/media/user.f414aa60.png",S=function(e){var t=e.contact,a=t.id,n=t.name,c=t.email;return Object(x.jsxs)("div",{className:"item",children:[Object(x.jsx)("img",{className:"ui avatar image",src:k,alt:"user"}),Object(x.jsx)("div",{className:" content",children:Object(x.jsxs)(b.b,{to:{pathname:"/contact/".concat(a),state:{contact:e.contact}},children:[Object(x.jsx)("div",{className:"header",children:n}),Object(x.jsx)("div",{children:c})]})}),Object(x.jsx)("i",{className:"trash alternate outline icon ",style:{color:"red",marginTop:"27px",float:"right"},onClick:function(){return e.clickHandler(a)}}),Object(x.jsx)(b.b,{to:{pathname:"/edit",state:{contact:e.contact}},children:Object(x.jsx)("i",{className:"edit alternate outline icon",style:{color:"blue",marginTop:"27px",float:"right",marginLeft:"10px"}})})]})},E=function(e){var t=Object(n.useRef)(""),a=function(t){e.getContactId(t)},c=e.contacts.map((function(e){return Object(x.jsx)(S,{contact:e,clickHandler:a},e.id)}));return Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)("h2",{children:"Contact List"}),Object(x.jsx)(b.b,{to:"/add",children:Object(x.jsx)("button",{className:"ui button blue",floated:"right",children:"Add Contact"})}),Object(x.jsx)("div",{className:"ui search",children:Object(x.jsxs)("div",{className:"ui icon input",children:[Object(x.jsx)("input",{ref:t,type:"text",placeholder:"Search Contacts",className:"prompt",value:e.term,onChange:function(){e.searchKeyword(t.current.value)}}),Object(x.jsx)("i",{className:"seach icon"})]})}),Object(x.jsx)("div",{className:"ui celled list",children:c.length>0?c:"No contacts Available"})]})},A=function(e){var t=e.location.state.contact,a=t.name,n=t.email;return Object(x.jsxs)("div",{className:"main",children:[Object(x.jsxs)("div",{className:"ui card centered",children:[Object(x.jsx)("div",{className:"image",children:Object(x.jsx)("img",{src:k,alt:"user"})}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("div",{className:"header",children:a}),Object(x.jsx)("div",{className:"description",children:n})]})]}),Object(x.jsx)("div",{className:"center-div",children:Object(x.jsx)(b.b,{to:"/",children:Object(x.jsx)("button",{className:"ui button blue center",children:"Back to contact List"})})})]})};var H=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(d.a)(r,2),o=s[0],O=s[1],v=Object(n.useState)([]),N=Object(d.a)(v,2),g=N[0],y=N[1],k=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)({id:Object(h.uuid)()},t),e.next=3,p.post("/contacts",n);case 3:r=e.sent,c([].concat(Object(i.a)(a),[r.data]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.put("/contacts/".concat(t.id),t);case 2:n=e.sent,r=n.data.id,c(a.map((function(e){return e.id===r?Object(l.a)({},n.data):e})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/contacts/".concat(t));case 2:n=a.filter((function(e){return e.id!==t})),c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){if(O(e),""!==e){var t=a.filter((function(t){return Object.values(t).join(" ").toLowerCase().includes(e.toLowerCase())}));y(t)}else y(a)};return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:(t=e.sent)&&c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){}),[a]),Object(x.jsx)("div",{className:"ui container",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{path:"/",exact:!0,render:function(e){return Object(x.jsx)(E,Object(l.a)(Object(l.a)({},e),{},{contacts:o.length<1?a:g,getContactId:L,term:o,searchKeyword:D}))}}),Object(x.jsx)(m.a,{path:"/add",render:function(e){return Object(x.jsx)(C,Object(l.a)(Object(l.a)({},e),{},{addContactHandler:S}))}}),Object(x.jsx)(m.a,{path:"/contact/:id",component:A}),Object(x.jsx)(m.a,{path:"/edit",render:function(e){return Object(x.jsx)(w,Object(l.a)(Object(l.a)({},e),{},{updateContactHandler:H}))}})]})]})})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.06399ad2.chunk.js.map