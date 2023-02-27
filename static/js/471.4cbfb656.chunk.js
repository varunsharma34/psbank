"use strict";(self.webpackChunkpsbank=self.webpackChunkpsbank||[]).push([[471],{5231:function(e,n,r){var t=r(1614),a=r(1889),i=r(7047),s=(r(2791),r(184));n.Z=function(){return(0,s.jsx)(t.Z,{fixed:!0,children:(0,s.jsxs)(a.ZP,{item:!0,xs:12,justifyContent:"center",sx:{marginTop:"20px"},children:[(0,s.jsx)(i.Z,{height:60}),(0,s.jsx)(i.Z,{animation:"wave"}),(0,s.jsx)(i.Z,{animation:!1}),(0,s.jsx)(i.Z,{}),(0,s.jsx)(i.Z,{animation:"wave"}),(0,s.jsx)(i.Z,{animation:!1})]})})}},4851:function(e,n,r){r.d(n,{Z:function(){return x}});var t=r(3906),a=r(195),i=r(9658),s=r(1691),c=r(1889),o=r(6151),l=r(9629),d={formName:"Create Transaction",submitButtonText:"Create",formFields:[{label:"Payee Account Number",name:"destination_account",type:"number",required:{value:!0,message:"Please enter payee account number"},defaultValue:""},{label:"Transaction amount",name:"amount",type:"number",required:{value:!0,message:"Please add amount to be transfered"},defaultValue:""},{label:"Description",name:"description",type:"string",defaultValue:""}]},u=r(184),x=function(e){var n=e.createTransactionFormSubmitHandler,r=e.createTransactionApiError,x=e.openCreateTransactionModal,h=e.handleModalClose;return(0,u.jsx)(t.Z,{isOpen:x,handleClose:h,children:(0,u.jsxs)(a.Z,{children:[r&&(0,u.jsx)(i.Z,{severity:"error",sx:{marginBottom:"20px"},children:r}),(0,u.jsx)(s.Z,{sx:{marginBottom:"20px"},children:"Please provide details below:"}),(0,u.jsx)(l.Z,{data:d,formSubmitHandler:n,children:(0,u.jsx)(c.ZP,{item:!0,xs:12,children:(0,u.jsx)(o.Z,{fullWidth:!0,size:"large",variant:"outlined",onClick:h,children:"Cancel"})})})]})})}},3906:function(e,n,r){var t=r(4164),a=r(9818),i=r(184),s=function(e){var n=e.children,r=e.handleClose,s=e.isOpen;return(0,t.createPortal)((0,i.jsx)(a.Z,{open:s,onClose:r,fullWidth:!0,children:n}),document.body)};s.defaultProps={isOpen:!1},n.Z=s},3389:function(e,n,r){var t=r(4942),a=r(9439),i=r(2791),s=r(4554),c=r(9836),o=r(3382),l=r(8745),d=r(618),u=r(9281),x=r(6890),h=r(7550),p=r(5855),m=r(5527),Z=r(6934),f=r(184),b=function(e){var n=e.data,r=e.tableHeadings,b=i.useState(0),j=(0,a.Z)(b,2),g=j[0],v=j[1],y=i.useState(5),C=(0,a.Z)(y,2),P=C[0],w=C[1],S=g>0?Math.max(0,(1+g)*P-n.length):0,k=(0,Z.ZP)(l.Z)((function(e){var n,r=e.theme;return n={},(0,t.Z)(n,"&.".concat(d.Z.head),{backgroundColor:r.palette.common.black,color:r.palette.common.white}),(0,t.Z)(n,"&.".concat(d.Z.body),{fontSize:14}),n})),q=(0,Z.ZP)(p.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));return(0,f.jsx)(s.Z,{sx:{width:"100%"},children:(0,f.jsxs)(m.Z,{sx:{width:"100%",mb:2},children:[(0,f.jsx)(u.Z,{children:(0,f.jsxs)(c.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[r&&r.length&&(0,f.jsx)(x.Z,{sx:{fontWeight:"bold"},children:(0,f.jsx)(p.Z,{hover:!0,tabIndex:-1,children:r.map((function(e){return(0,f.jsx)(k,{component:"th",scope:"row",padding:"normal",children:e.name},e.name)}))})}),(0,f.jsxs)(o.Z,{children:[n.length&&n.slice(g*P,g*P+P).map((function(e){var n="enhanced-table-checkbox-".concat(e.number),r=new Date(e.createdAt),t="".concat(r.getDate(),"/").concat(r.getMonth()+1,"/").concat(r.getFullYear());return(0,f.jsxs)(q,{hover:!0,tabIndex:-1,children:[(0,f.jsx)(k,{component:"th",id:n,scope:"row",padding:"normal",children:e.number}),(0,f.jsx)(k,{children:e.amount}),(0,f.jsx)(k,{children:e.destination_account}),(0,f.jsx)(k,{children:e.description}),(0,f.jsx)(k,{children:t})]},e._id)})),S>0&&(0,f.jsx)(p.Z,{children:(0,f.jsx)(l.Z,{colSpan:6})})]})]})}),(0,f.jsx)(h.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:n.length,rowsPerPage:P,page:g,onPageChange:function(e,n){v(n)},onRowsPerPageChange:function(e){w(parseInt(e.target.value,10)),v(0)}})]})})};b.defaultProps={data:[]},n.Z=b},9629:function(e,n,r){r.d(n,{Z:function(){return b}});var t=r(1889),a=r(7865),i=r(6151),s=r(1134),c=r(1413),o=r(8550),l=r(184),d=function(e){var n=e.name,r=e.control,t=e.label,a=e.type,i=void 0===a?"text":a,d=e.required,u=void 0!==d&&d,x=e.formstate,h=e.register;return(0,l.jsx)(s.Qr,{name:n,control:r,render:function(e){return(0,l.jsx)(o.Z,(0,c.Z)({InputLabelProps:{shrink:"date"===i||e.value},fullWidth:!0,type:i,label:t,variant:"outlined",name:n,error:!!x.errors[n],helperText:x.errors[n]?x.errors[n].message:""},h(n,{required:u})))},defaultValue:""})},u=r(5987),x=r(8096),h=r(4925),p=r(6869),m=r(7071),Z=["name","label","control","defaultValue","children","errors"],f=function(e){var n=e.name,r=e.label,t=e.control,a=e.defaultValue,i=e.children,o=e.errors,d=(0,u.Z)(e,Z),f="".concat(n,"-label");return(0,l.jsxs)(x.Z,(0,c.Z)((0,c.Z)({fullWidth:!0},d),{},{children:[(0,l.jsx)(h.Z,{id:f,children:r}),(0,l.jsx)(s.Qr,{defaultValue:a,render:function(e){var n=e.field;return(0,l.jsx)(p.Z,(0,c.Z)((0,c.Z)({},n),{},{labelId:f,label:r,children:i}))},name:n,control:t}),(0,l.jsx)(m.Z,{children:o.type?o.type.message:""})]}))},b=function(e){var n=e.data,r=e.formSubmitHandler,c=e.children,o=n.formFields,u=n.submitButtonText,x=void 0===u?"Submit":u,h=(0,s.cI)(),p=h.register,m=h.handleSubmit,Z=h.control,b=h.formState;return(0,l.jsx)("form",{onSubmit:m((function(e){r(e)})),children:(0,l.jsxs)(t.ZP,{container:!0,direction:"column",spacing:2,justifyContent:"center",children:[o.length&&o.map((function(e){return"select"===e.type?(0,l.jsx)(t.ZP,{item:!0,xs:12,children:(0,l.jsx)(f,{id:e.name,name:e.name,label:e.label,control:Z,defaultValue:e.options&&e.options.length&&e.options[0].value,errors:b.errors,error:!!b.errors.type,children:e.options&&e.options.length&&e.options.map((function(e){return(0,l.jsx)(a.Z,{value:e.value,children:e.name},e.value)}))})},e.name):(0,l.jsx)(t.ZP,{item:!0,xs:12,children:(0,l.jsx)(d,{name:e.name,label:e.label,type:e.type,control:Z,register:p,formstate:b,required:e.required})},e.name)})),(0,l.jsx)(t.ZP,{item:!0,xs:12,children:(0,l.jsx)(i.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:x})}),c]})})}},6921:function(e,n,r){var t,a=r(4165),i=r(5861),s=r(168),c=r(2348),o=r(5702),l=(0,o.gql)(t||(t=(0,s.Z)(["\n  mutation AddTransaction($data: TransactionInsertInput!) {\n    insertOneTransaction(data: $data) {\n      _id\n      number\n      createdAt\n      amount\n      source_account\n      destination_account\n    }\n  }\n"]))),d=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var r,t,i,s,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.queryVariables,t=void 0===r?{}:r,i=n.headers,s=void 0===i?{}:i,e.next=3,(0,o.request)(c.Z2,l,t,s);case 3:return d=e.sent,e.abrupt("return",d);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.Z=d},7471:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t,a,i=r(1104),s=r(3433),c=r(4165),o=r(5861),l=r(9439),d=r(2791),u=r(7689),x=r(9526),h=r(4554),p=r(5527),m=r(890),Z=r(1889),f=r(9658),b=r(6151),j=r(168),g=r(2348),v=r(5702),y=(0,v.gql)(t||(t=(0,j.Z)(["\n  query getCard($id: ObjectId) {\n    card(query: { _id: $id }) {\n      _id\n      type\n      number\n      balance\n      limit\n      expiry\n      userId\n      currency\n      createdAt\n      annualCharges\n      transactions {\n        _id\n        number\n        amount\n        createdAt\n        description\n        destination_account\n      }\n    }\n  }\n"]))),C=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(n){var r,t,a,i,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.queryVariables,t=void 0===r?{}:r,a=n.headers,i=void 0===a?{}:a,e.next=3,(0,v.request)(g.Z2,y,t,i);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=C,w=r(6921),S=r(184),k=function(e){var n=e.data,r=new Date(n.createdAt),t=r.getUTCFullYear().toString().slice(2),a=("0"+(r.getMonth()+1)).slice(-2),i=new Date(n.expiry),s=i.getUTCFullYear().toString().slice(2),c=("0"+(i.getMonth()+1)).slice(-2);return(0,S.jsx)(Z.ZP,{item:!0,xs:12,children:(0,S.jsx)(p.Z,{sx:{display:"flex",flexWrap:"wrap",padding:"20px",flex:"1",color:"white",background:"linear-gradient(90deg, rgb(22 118 210) 0%, rgb(185 136 255) 100%)"},children:(0,S.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Available Credit"}),(0,S.jsxs)(m.Z,{variant:"h5",sx:{fontWeight:"bold",letterSpacing:"2px"},children:[g.oq," ",n.balance]})]}),(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Credit limit"}),(0,S.jsxs)(m.Z,{variant:"h5",sx:{fontWeight:"bold",letterSpacing:"2px"},children:[g.oq," ",n.limit]})]}),(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Card Number"}),(0,S.jsx)(m.Z,{variant:"h6",sx:{fontWeight:"bold",letterSpacing:"8px"},children:n.number})]}),(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Card Type"}),(0,S.jsxs)(m.Z,{variant:"h6",sx:{fontWeight:"bold",letterSpacing:"2px",textTransform:"capitalize"},children:[g.oq," ",n.type]})]}),(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Valid from"}),(0,S.jsxs)(m.Z,{variant:"h6",sx:{fontWeight:"bold",letterSpacing:"2px",textTransform:"capitalize"},children:[a,"/",t]})]}),(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Valid thru"}),(0,S.jsxs)(m.Z,{variant:"h6",sx:{fontWeight:"bold",letterSpacing:"2px",textTransform:"capitalize"},children:[c,"/",s]})]}),(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Annual charges"}),(0,S.jsxs)(m.Z,{variant:"h6",sx:{letterSpacing:"1px"},children:[g.oq," ",n.annualCharges]})]}),(0,S.jsxs)(Z.ZP,{item:!0,xs:12,md:6,lg:6,children:[(0,S.jsx)(m.Z,{children:"Currency"}),(0,S.jsxs)(m.Z,{variant:"h6",sx:{letterSpacing:"1px"},children:[g.oq," ",n.currency]})]})]})})})},q=r(3389),T=r(4851),_=(0,v.gql)(a||(a=(0,j.Z)(["\n  mutation updateAccount($query: CardQueryInput, $set: CardUpdateInput!) {\n    updateOneCard(query: $query, set: $set) {\n      _id\n      type\n      number\n      balance\n      limit\n      userId\n      currency\n      createdAt\n      expiry\n      annualCharges\n      transactions {\n        _id\n        number\n        amount\n        createdAt\n        description\n        source_account\n        destination_account\n      }\n    }\n  }\n"]))),A=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(n){var r,t,a,i,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.updateCardQueryVariables,t=void 0===r?{}:r,a=n.headers,i=void 0===a?{}:a,e.next=3,(0,v.request)(g.Z2,_,t,i);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=A,V=r(5231),W=function(){var e=(0,d.useState)(!1),n=(0,l.Z)(e,2),r=n[0],t=n[1],a=(0,d.useContext)(x.S).user,i=(0,d.useState)([]),j=(0,l.Z)(i,2),v=j[0],y=j[1],C=(0,d.useState)(!0),_=(0,l.Z)(C,2),A=_[0],W=_[1],O=(0,d.useState)(!1),M=(0,l.Z)(O,2),F=M[0],$=M[1],z=(0,u.UO)(),D={Authorization:"Bearer ".concat(a._accessToken)},H={id:z.id},N=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({queryVariables:H,headers:D});case 2:n=e.sent,console.log("Card data: ",JSON.stringify(n)),y(n.card),W(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){N()}),[]);var Q=function(){t(!r)},B=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(n){var r,t,i,o,l,d;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(n.amount<=v.balance)){e.next=17;break}return r={data:{number:parseInt(Math.floor(1e12*Math.random())+1),amount:parseInt(n.amount),createdAt:new Date,userId:a.id,source_account:v.number,destination_account:n.destination_account,description:n.description}},e.next=6,(0,w.Z)({queryVariables:r,headers:D});case 6:return t=e.sent,i=v.transactions.map((function(e){return e.number})),o=[].concat((0,s.Z)(i||[]),["".concat(t.insertOneTransaction.number)]),l={query:{number:v.number},set:{balance:v.balance-t.insertOneTransaction.amount,transactions:{link:o}}},e.next=12,I({updateCardQueryVariables:l,headers:D});case 12:d=e.sent,Q(),y(d.updateOneCard),e.next=18;break;case 17:$("Transaction amount exceeds available credit.");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),$(e.t0.error);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(n){return e.apply(this,arguments)}}();return(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(p.Z,{sx:{padding:"15px 20px",display:"flex",margin:"20px 0",backgroundColor:"#f9f9f9"},children:(0,S.jsx)(m.Z,{variant:"h5",sx:{flex:"1"},children:"Card Summary"})}),A?(0,S.jsx)(V.Z,{}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Z.ZP,{container:!0,spacing:2,children:v?(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(k,{data:v})}):(0,S.jsx)(Z.ZP,{item:!0,children:(0,S.jsx)(f.Z,{severity:"error",children:"No account detail found!"})})}),(0,S.jsxs)(p.Z,{sx:{padding:"15px 20px",display:"flex",margin:"20px 0",backgroundColor:"#f9f9f9"},children:[(0,S.jsx)(m.Z,{variant:"h5",sx:{flex:"1"},children:"Recent Transactions"}),(0,S.jsx)(b.Z,{variant:"contained",onClick:function(){return t(!0)},children:"Make transaction"})]}),(0,S.jsx)(T.Z,{createTransactionFormSubmitHandler:B,createTransactionApiError:F,openCreateTransactionModal:r,handleModalClose:Q}),v&&v.transactions&&v.transactions.length?(0,S.jsx)(q.Z,{data:v.transactions,tableHeadings:g.QP}):(0,S.jsx)(f.Z,{severity:"error",children:"No transaction found!"})]})]})},O=function(){return(0,S.jsx)(i.Z,{children:(0,S.jsx)(W,{})})}}}]);
//# sourceMappingURL=471.4cbfb656.chunk.js.map