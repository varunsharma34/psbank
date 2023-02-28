"use strict";(self.webpackChunkpsbank=self.webpackChunkpsbank||[]).push([[884],{9629:function(e,r,a){a.d(r,{Z:function(){return v}});var n=a(1889),t=a(7865),l=a(6151),s=a(1134),i=a(1413),o=a(8550),u=a(184),d=function(e){var r=e.name,a=e.control,n=e.label,t=e.type,l=void 0===t?"text":t,d=e.required,c=void 0!==d&&d,m=e.formstate,p=e.register;return(0,u.jsx)(s.Qr,{name:r,control:a,render:function(e){return(0,u.jsx)(o.Z,(0,i.Z)({InputLabelProps:{shrink:"date"===l||e.value},fullWidth:!0,type:l,label:n,variant:"outlined",name:r,error:!!m.errors[r],helperText:m.errors[r]?m.errors[r].message:""},p(r,{required:c})))},defaultValue:""})},c=a(5987),m=a(8096),p=a(4925),f=a(6869),h=a(7071),x=["name","label","control","defaultValue","children","errors"],b=function(e){var r=e.name,a=e.label,n=e.control,t=e.defaultValue,l=e.children,o=e.errors,d=(0,c.Z)(e,x),b="".concat(r,"-label");return(0,u.jsxs)(m.Z,(0,i.Z)((0,i.Z)({fullWidth:!0},d),{},{children:[(0,u.jsx)(p.Z,{id:b,children:a}),(0,u.jsx)(s.Qr,{defaultValue:t,render:function(e){var r=e.field;return(0,u.jsx)(f.Z,(0,i.Z)((0,i.Z)({},r),{},{labelId:b,label:a,children:l}))},name:r,control:n}),(0,u.jsx)(h.Z,{children:o.type?o.type.message:""})]}))},v=function(e){var r=e.data,a=e.formSubmitHandler,i=e.children,o=r.formFields,c=r.submitButtonText,m=void 0===c?"Submit":c,p=(0,s.cI)(),f=p.register,h=p.handleSubmit,x=p.control,v=p.formState;return(0,u.jsx)("form",{onSubmit:h((function(e){a(e)})),children:(0,u.jsxs)(n.ZP,{container:!0,direction:"column",spacing:2,justifyContent:"center",children:[o.length&&o.map((function(e){return"select"===e.type?(0,u.jsx)(n.ZP,{item:!0,xs:12,children:(0,u.jsx)(b,{id:e.name,name:e.name,label:e.label,control:x,defaultValue:e.options&&e.options.length&&e.options[0].value,errors:v.errors,error:!!v.errors.type,children:e.options&&e.options.length&&e.options.map((function(e){return(0,u.jsx)(t.Z,{value:e.value,children:e.name},e.value)}))})},e.name):(0,u.jsx)(n.ZP,{item:!0,xs:12,children:(0,u.jsx)(d,{name:e.name,label:e.label,type:e.type,control:x,register:f,formstate:v,required:e.required})},e.name)})),(0,u.jsx)(n.ZP,{item:!0,xs:12,children:(0,u.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:m})}),i]})})}},1884:function(e,r,a){a.r(r),a.d(r,{default:function(){return b}});var n=a(4165),t=a(5861),l=a(9439),s=a(2791),i=a(7689),o=a(1087),u=a(9526),d=a(9629),c={formName:"Signup",submitButtonText:"Sign Up",formFields:[{label:"Name",name:"name",type:"text",required:{value:!0,message:"Name is required"},defaultValue:""},{label:"Email",name:"email",type:"text",required:{value:!0,message:"Email is required"},defaultValue:""},{label:"Password",name:"password",type:"password",required:{value:!0,message:"Password is required"},defaultValue:""},{label:"Date of birth",name:"dob",type:"date",required:{value:!0,message:"Date is required"},defaultValue:""},{label:"Phone",name:"phone",type:"number",required:{value:!0,message:"Phone is required"},defaultValue:""},{label:"Address",name:"address",type:"text",required:{value:!0,message:"Address is required"},defaultValue:""},{label:"Occupation",name:"occupation",type:"text",required:{value:!0,message:"Occupation is required"},defaultValue:""},{label:"Annual Income",name:"income",type:"number",required:{value:!0,message:"Please provide your annual income"},defaultValue:""},{label:"Government ID",name:"govt_id",type:"text",required:{value:!0,message:"Please provide your Government Id number"},defaultValue:""}]},m=a(9658),p=a(1889),f=a(890),h=a(1104),x=a(184),b=function(){var e=(0,i.s0)(),r=(0,i.TH)(),a=(0,s.useState)(),b=(0,l.Z)(a,2),v=b[0],g=b[1],y=(0,s.useContext)(u.S).emailPasswordSignup,Z=function(){var a=r.search.replace("?redirectTo=","");e(a||"/")},j=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(r){var a,t,l,s,i,o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({email:r.email,password:r.password});case 3:if(!(a=e.sent)){e.next=17;break}return t=a.mongoClient("mongodb-atlas"),l=t.db("psbank").collection("users"),s={userID:a.id,dob:r.dob,name:r.name,address:r.address,govtId:r.govt_id,income:r.income,phone:r.phone},e.next=10,l.insertOne(s);case 10:return i=e.sent,console.log(i),e.next=14,a.refreshCustomData();case 14:o=e.sent,console.log(o),Z();case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),u="AccountNameInUse"===e.t0.errorCode?"User already exist with email : ".concat(r.email):"Signup failed. Please try again!",g(u);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(r){return e.apply(this,arguments)}}();return(0,x.jsxs)(h.Z,{type:"formpage",children:[(0,x.jsx)("h1",{children:"Signup"}),v&&(0,x.jsx)(m.Z,{severity:"error",sx:{marginBottom:"20px"},children:v}),(0,x.jsx)(d.Z,{data:c,formSubmitHandler:j,children:(0,x.jsx)(p.ZP,{item:!0,xs:12,marginBottom:"20px",children:(0,x.jsxs)(f.Z,{children:["Already have an account? ",(0,x.jsx)(o.rU,{to:"/login",children:"Login"})]})})})]})}}}]);
//# sourceMappingURL=884.c20b8dcb.chunk.js.map