(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{15:function(t,e,n){"use strict";e.a={transactions:{url:"/api/transactions/",global:"/api/transactions/global/"},categories:{url:"/api/categories/",transactionsByCategories:"/api/categories/transactions_by_categories/"},widget:{url:"/api/widgets/",colors:"colors/"},user:{url:"/user/",auth:"auth",reg:"reg",getInfo:"info",refresh_token:"refresh"}}},16:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(46),r=n(47),c=function(){function t(){Object(a.a)(this,t)}return Object(r.a)(t,null,[{key:"getCountDaysInMonth",value:function(t){return 32-new Date(2021,t-1,32).getDate()}},{key:"getDayOnWeek",value:function(t){return t.getDay()}}]),t}();c.monthRuNames=["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],c.monthEngNames=["January","February","March","April","May","June","July","August","September","October","November","December"],c.periodTypes=["\u0414\u0435\u043d\u044c","\u041d\u0435\u0434\u0435\u043b\u044f","\u041c\u0435\u0441\u044f\u0446","\u0413\u043e\u0434"],c.dayRuNames=[{name:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",abbreviation:"\u041f\u043d"},{name:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",abbreviation:"\u0412\u0442"},{name:"\u0421\u0440\u0435\u0434\u0430",abbreviation:"\u0421\u0440"},{name:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",abbreviation:"\u0427\u0442"},{name:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",abbreviation:"\u041f\u0442"},{name:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430",abbreviation:"\u0421\u0431"},{name:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",abbreviation:"\u0412\u0441"}],c.dayEngNames=[{name:"Monday",abbreviation:"Mon"},{name:"Tuesday",abbreviation:"Tue"},{name:"Wednesday",abbreviation:"Wed"},{name:"Thursday",abbreviation:"Thu"},{name:"Friday",abbreviation:"Fri"},{name:"Saturday",abbreviation:"Sat"},{name:"Sunday",abbreviation:"Sun"}],c.getPrevDate=function(t,e){switch(e){case"\u0414\u0435\u043d\u044c":return t.setDate(t.getDate()-1);case"\u041d\u0435\u0434\u0435\u043b\u044f":return t.setDate(t.getDate()-7);case"\u041c\u0435\u0441\u044f\u0446":return t.setMonth(t.getMonth()-1);case"\u0413\u043e\u0434":default:return t.setFullYear(t.getFullYear()-1)}},c.getNextDate=function(t,e){switch(e){case"\u0414\u0435\u043d\u044c":return t.setDate(t.getDate()+1);case"\u041d\u0435\u0434\u0435\u043b\u044f":return t.setDate(t.getDate()+7);case"\u041c\u0435\u0441\u044f\u0446":return t.setMonth(t.getMonth()+1);case"\u0413\u043e\u0434":default:return t.setFullYear(t.getFullYear()+1)}}},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(2),r=n.n(a),c=n(5),o=n(7),i=n(6),s=n(9),u={SET_ITEMS:"CATEGORIES@SET:ITEMS",SET_ITEMS_TRANSACTIONS:"CATEGORIES@SET:ITEMS_TRANSACTIONS",LOADING:"CATEGORIES@LOADING",ERROR:"CATEGORIES@LOADING:ERROR"},d={fetchCategories:function(){var t=this;return function(){var e=Object(c.a)(r.a.mark((function e(n,a,c){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=c.api,i.a.get(o.categories.url).then((function(e){var a=e.data;return n(t.setCategories(a.result))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},fetchTransactionsByCategories:function(){var t=this;return function(){var e=Object(c.a)(r.a.mark((function e(n,a,c){var u,d,l,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=c.api,d=a().calendar,l=d.nowDateStamp,f=d.prevDateStamp,i.a.get(u.categories.transactionsByCategories,{params:{start_date:f,end_date:l}}).then((function(e){var a=e.data;n(t.setTransactionsByCategories(a.result))})).catch((function(e){Object(o.b)((function(){n(t.setLoading(!0)),n(s.a.addNotify({type:"error",text:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}))}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},addCategory:function(t){var e=this,n=t.name,a=t.category_type;return function(){var t=Object(c.a)(r.a.mark((function t(c,o,u){var d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d=u.api,i.a.post(d.categories.url,{name:n,is_income:a}).then((function(){return c(e.fetchCategories())})).catch((function(t){c(s.a.addNotify({type:"error",text:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"}))}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},setTransactionsByCategories:function(t){return{type:u.SET_ITEMS_TRANSACTIONS,payload:t}},setCategories:function(t){return{type:u.SET_ITEMS,payload:t}},setLoading:function(t){return{type:u.LOADING,payload:t}}};e.b=d},20:function(t,e,n){t.exports={select:"style_select__24nQI",select_svg:"style_select_svg__3aISt",open:"style_open__13ohM",select_option:"style_select_option__37Kih",select_label:"style_select_label__1h4WW",select_options:"style_select_options__fGj3a"}},21:function(t,e,n){t.exports={notify:"style_notify__3qZwk",notify_close:"style_notify_close__3froJ",notify_text:"style_notify_text__3TYFB",notify__success:"style_notify__success__3nEf5",notify__warning:"style_notify__warning__2p9ox",notify__error:"style_notify__error__11lAZ"}},27:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f}));var a=n(24),r=n(2),c=n.n(r),o=n(5),i=n(7),s=n(17),u=n(6),d=n(9),l={SET_ITEMS:"TRANSACTIONS@SET:ITEMS",SET_GLOBAL_ITEMS:"TRANSACTIONS@SET:GLOBAL_ITEMS",LOADING:"TRANSACTIONS@LOADING:START",ERROR:"TRANSACTIONS@LOADING:ERROR"},f={fetchTransactions:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return function(){var a=Object(o.a)(c.a.mark((function a(r,o,s){var l,f,p,y;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:l=s.api,f=o().calendar,p=f.nowDateStamp,y=f.prevDateStamp,u.a.get(l.transactions.url,{params:{start_date:y,end_date:p,offset:e,limit:n}}).then((function(e){var n=e.data;r(t.setTransactions(n.result))})).catch((function(e){Object(i.b)((function(){r(t.setLoading(!0)),r(d.a.addNotify({type:"error",text:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"}))}))}));case 3:case"end":return a.stop()}}),a)})));return function(t,e,n){return a.apply(this,arguments)}}()},addTransaction:function(t){var e=this,n=t.amount,r=t.date,l=t.category;return function(){var t=Object(o.a)(c.a.mark((function t(o,f,p){var y,b,h,_,v,O;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y=p.api,b=new Date(r),h=+b,_=f(),v=_.transactions,O=_.categories,u.a.post(y.transactions.url,{amount:n,transaction_date:h,category_id:l.id}).then((function(t){var r=t.data;Object(i.b)((function(){o(e.setTransactions([{id:r.id,transaction_date:h/1e3,category:O.items.find((function(t){return l.id===t.id}))||O.items[0],amount:n}].concat(Object(a.a)(v.items)))),o(s.b.fetchTransactionsByCategories()),o(e.fetchGlobalTransactions())}))})).catch((function(t){o(d.a.addNotify({type:"error",text:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e"}))}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},updateTransaction:function(t){var e=this,n=t.id,r=t.amount,d=t.date,l=t.category;return function(){var t=Object(o.a)(c.a.mark((function t(o,f,p){var y,b,h,_;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y=p.api,b=new Date(d),h=f(),_=h.transactions,u.a.put("".concat(y.transactions.url).concat(n,"/"),{amount:r,transaction_date:+b,category_id:l.id}).then((function(t){var r=t.data,c=Object(a.a)(_.items);_.items.forEach((function(t,e){t.id===n&&(c[e]=r.result)})),Object(i.b)((function(){o(e.setTransactions(c)),o(s.b.fetchTransactionsByCategories()),o(e.fetchGlobalTransactions())}))}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},deleteTransaction:function(t){var e=this;return function(){var n=Object(o.a)(c.a.mark((function n(a,r,o){var l,f,p;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l=o.api,f=r(),p=f.transactions,u.a.delete("".concat(l.transactions.url).concat(t,"/")).then((function(){Object(i.b)((function(){a(e.setTransactions(p.items.filter((function(e){return e.id!==t})))),a(s.b.fetchTransactionsByCategories()),a(e.fetchGlobalTransactions())}))})).catch((function(t){a(d.a.addNotify({type:"error",text:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e"}))}));case 3:case"end":return n.stop()}}),n)})));return function(t,e,a){return n.apply(this,arguments)}}()},fetchGlobalTransactions:function(){var t=this;return function(){var e=Object(o.a)(c.a.mark((function e(n,a,r){var o,i,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.api,i=a().calendar,s=i.nowDateStamp,d=i.prevDateStamp,u.a.get(o.transactions.global,{params:{start_date:d,end_date:s}}).then((function(e){var a=e.data;n(t.setGlobalTransactions(a.result))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},setTransactions:function(t){return{type:l.SET_ITEMS,payload:t}},setGlobalTransactions:function(t){return{type:l.SET_GLOBAL_ITEMS,payload:t}},setLoading:function(t){return{type:l.LOADING,payload:t}}}},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p}));var a=n(2),r=n.n(a),c=n(5),o=n(19),i=n.n(o),s=n(6),u=n(16),d=n(7),l=n(9),f={SET_ITEMS:"WIDGETS@SET:ITEMS",SET_COLORS:"WIDGETS@SET:COLORS",LOADED:"WIDGETS@LOADED:START",ERROR:"WIDGETS@LOADING:ERROR"},p={fetchWidgets:function(){var t=this;return function(){var e=Object(c.a)(r.a.mark((function e(n,a,c){var o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=c.api,i=a().calendar.nowDateStamp,s.a.get(o.widget.url,{params:{date:i}}).then((function(e){var a=e.data;return n(t.setWidgets(a.result))})).catch((function(e){console.log("tyt"),Object(d.b)((function(){n(t.setLoaded(!0)),n(l.a.addNotify({type:"error",text:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0438\u0434\u0436\u0435\u0442\u044b"}))}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},fetchWidgetColors:function(){var t=this;return function(){var e=Object(c.a)(r.a.mark((function e(n,a,c){var o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=c.api,s="".concat(o.widget.url).concat(o.widget.colors),i.a.get(s).then((function(e){var a=e.data;return n(t.setWidgetColor(a.result))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},addWidgetAction:function(t){var e=this;return function(){var n=Object(c.a)(r.a.mark((function n(a,c,o){var i,d;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=o.api,d={category_id:t.category.id,limit:t.limit,period:t.period.value,color_id:t.color.id,expire_at:u.a.getNextDate(new Date,t.period.value),is_more:t.isMore},s.a.post(i.widget.url,d).then((function(){return a(e.fetchWidgets())}));case 3:case"end":return n.stop()}}),n)})));return function(t,e,a){return n.apply(this,arguments)}}()},deleteWidgetAction:function(t){var e=this;return function(){var n=Object(c.a)(r.a.mark((function n(a,c,o){var i,u,d;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=o.api,u=c(),d=u.widgets,s.a.delete("".concat(i.widget.url).concat(t,"/")).then((function(){a(e.setWidgets(d.items.filter((function(e){return e.id!==t}))))}));case 3:case"end":return n.stop()}}),n)})));return function(t,e,a){return n.apply(this,arguments)}}()},setWidgets:function(t){return{type:f.SET_ITEMS,payload:t}},setWidgetColor:function(t){return{type:f.SET_COLORS,payload:t}},setLoaded:function(t){return{type:f.LOADED,payload:t}}}},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return i}));var a={SET_DAY:"CALENDAR@SET:DAY",SET_MONTH:"CALENDAR@SET:MONTH",SET_YEAR:"CALENDAR@SET:YEAR",SET_SELECTED_OPTION:"CALENDAR@SET:SELECTED_OPTION"},r=function(t){return{type:a.SET_DAY,payload:t}},c=function(t){return{type:a.SET_MONTH,payload:t}},o=function(t){return{type:a.SET_YEAR,payload:t}},i=function(t){return{type:a.SET_SELECTED_OPTION,payload:t}}},36:function(t,e,n){t.exports={modal:"style_modal__1sNdq","modal-wrapper":"style_modal-wrapper__22jWJ",modal_close:"style_modal_close__2GKuW"}},41:function(t,e,n){t.exports={btn:"style_btn__1YbeP",btn_plus:"style_btn_plus__3OdyH"}},42:function(t,e,n){t.exports={indicator:"style_indicator__1ArUc","indicator-container":"style_indicator-container__3PB17",slidein:"style_slidein__1UBPD"}},45:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return h})),n.d(e,"b",(function(){return O})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return I})),n.d(e,"a",(function(){return M}));var a=n(0),r=n.n(a),c=n(41),o=n.n(c),i=n(1),s=function(t){var e=t.children,n=t.onClick;return Object(i.jsxs)("button",{className:o.a.btn,onClick:n,children:[Object(i.jsx)("span",{className:o.a.btn_plus,children:"+"}),e]})},u=n(18),d=n(37),l=n(22),f=n.n(l),p=n(20),y=n.n(p),b=function(t){var e=t.options,n=t.onClick,a=t.onClose,c=r.a.useRef(null),o=r.a.useCallback((function(){a()}),[a]);return r.a.useEffect((function(){return document.body.addEventListener("click",o),function(){return document.body.removeEventListener("click",o)}}),[o]),Object(i.jsx)("div",{className:y.a.select_options,ref:c,children:e.map((function(t){return Object(i.jsx)("div",{onClick:function(){return n(t)},className:y.a.select_option,children:t},t)}))})},h=function(t){var e=t.options,n=t.onChange,a=r.a.useState(e[2]),c=Object(d.a)(a,2),o=c[0],s=c[1],l=r.a.useState(!1),p=Object(d.a)(l,2),h=p[0],_=p[1];return Object(i.jsxs)("div",{className:y.a.select,children:[Object(i.jsxs)("div",{className:y.a.select_label,onClick:function(){_((function(t){return!t}))},children:[Object(i.jsx)("span",{children:o}),Object(i.jsx)("span",{className:f()(y.a.select_svg,Object(u.a)({},y.a.open,h)),children:Object(i.jsx)("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M13.7 1.7L7.7 7.7C7.5 7.9 7.3 8 7 8C6.7 8 6.5 7.9 6.3 7.7L0.3 1.7C-0.1 1.3 -0.1 0.7 0.3 0.3C0.7 -0.1 1.3 -0.1 1.7 0.3L7 5.6L12.3 0.3C12.7 -0.1 13.3 -0.1 13.7 0.3C14.1 0.7 14.1 1.3 13.7 1.7Z",fill:"#5D5FEF"})})})]}),h&&Object(i.jsx)(b,{options:e,onClick:function(t){s(t),n&&n(t)},onClose:function(){_(!1)}})]})},_=n(63),v=n.n(_),O=function(t){var e=t.children,n=t.className;return Object(i.jsx)("button",{className:f()(v.a.button,n),children:e})},T=n(36),m=n.n(T),g=function(t){var e=t.children,n=t.onClose,a=r.a.useCallback((function(t){"string"===typeof t.target.className&&t.target.className.includes("modal-wrapper")&&n()}),[n]),c=r.a.useCallback((function(t){"Escape"===t.key&&n()}),[n]);return r.a.useEffect((function(){return document.addEventListener("keydown",c),function(){return document.removeEventListener("keydown",c)}}),[c]),Object(i.jsx)("div",{className:m.a["modal-wrapper"],onClick:a,children:Object(i.jsxs)("div",{className:m.a.modal,children:[Object(i.jsx)("button",{className:m.a.modal_close,onClick:function(){n()},children:"\xd7"}),e]})})},E=n(21),S=n.n(E),j=function(t){var e,n=t.type,a=t.text,r=t.onClose;return Object(i.jsxs)("div",{className:f()(S.a.notify,(e={},Object(u.a)(e,S.a.notify__success,"success"===n),Object(u.a)(e,S.a.notify__warning,"warning"===n),Object(u.a)(e,S.a.notify__error,"error"===n),e)),children:[Object(i.jsx)("span",{className:S.a.notify_close,onClick:r,children:"\xd7"}),Object(i.jsx)("p",{className:S.a.notify_text,children:a})]})},D=n(7),w=n(48),N=n(9),x=function(){var t=Object(D.c)();return{notificationItems:Object(w.a)((function(t){return t.notifications.items})),deleteNotify:function(e){t(N.a.deleteNotify(e))},addNotify:function(e){t(N.a.addNotify(e))}}},A=n(44),C=n(64),L=n.n(C),I=function(){var t=x(),e=t.notificationItems,n=t.deleteNotify;return Object(i.jsx)("div",{className:L.a["notify-container"],children:Object(A.map)(e,(function(t,e){return Object(i.jsx)(j,{type:t.type,text:t.text,onClose:function(){n(e)}},"".concat(t.text,"_").concat(e))}))})},R=n(42),k=n.n(R),M=function(){return Object(i.jsx)("div",{className:k.a["indicator-container"],children:Object(i.jsx)("span",{className:k.a.indicator})})}},48:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=n(7).d},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var a=n(2),r=n.n(a),c=n(5),o=n(19),i=n.n(o),s=n(15),u=n(6),d={SET_USERNAME:"USER@SET:USERNAME"},l={authAction:function(t){return i.a.post("".concat(s.a.user.url).concat(s.a.user.auth),t)},regAction:function(t){return i.a.post("".concat(s.a.user.url).concat(s.a.user.reg),t)},fetchInfoAction:function(){var t=this;return function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.get("".concat(s.a.user.url).concat(s.a.user.getInfo)).then((function(e){var a=e.data;n(t.setUsername(a.username))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setUsername:function(t){return{type:d.SET_USERNAME,payload:t}}}},6:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(2),r=n.n(a),c=n(5),o=n(38),i=n(19),s=n.n(i),u=n(33),d=n(15),l=s.a.create({responseType:"json",withCredentials:!0,timeout:3e4,headers:{"Content-Type":"application/json","Acess-Control-Allow-Origin":"*",Accept:"application/json"}});l.interceptors.request.use((function(t){return t.headers=Object(o.a)(Object(o.a)({},t.headers),{},{Authorization:"Bearer ".concat(u.reactLocalStorage.get("token"))}),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),function(){var t=Object(c.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.config,401!==(null===(n=e.response)||void 0===n?void 0:n.status)||!a.headers){t.next=5;break}return t.next=4,s.a.post("".concat(d.a.user.url).concat(d.a.user.refresh_token),{},{headers:{Authorization:"Bearer ".concat(u.reactLocalStorage.get("refresh_token"))}}).then((function(t){var e=t.data;u.reactLocalStorage.set("token",e.access_token)}));case 4:return t.abrupt("return",l.request(a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},63:function(t,e,n){t.exports={button:"style_button__36BKB"}},64:function(t,e,n){t.exports={"notify-container":"style_notify-container__13tfQ"}},65:function(t,e,n){t.exports={container:"style_container__BsDYz"}},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n(2),r=n.n(a),c=n(24),o=n(5),i={SET_ITEMS:"NOTIFY@SET:ITEM"},s={addNotify:function(t){var e=this;return function(){var n=Object(o.a)(r.a.mark((function n(a,o){var i,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=o(),s=i.notifications,a(e.setNotifyAction([].concat(Object(c.a)(s.items),[t])));case 2:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},deleteNotify:function(t){var e=this;return function(){var n=Object(o.a)(r.a.mark((function n(a,o){var i,s,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=o(),s=i.notifications,(u=Object(c.a)(s.items)).splice(t,1),a(e.setNotifyAction(u));case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},setNotifyAction:function(t){return{type:i.SET_ITEMS,payload:t}}}},97:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(34),o=n.n(c),i=n(7),s=n(51),u=n(25),d=n(62),l=n(15),f=n(14),p=n(27),y={items:[],globalItems:[],isLoaded:!1,error:[]},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;return Object(f.a)(t,(function(t){switch(e.type){case p.b.SET_ITEMS:t.items=e.payload,t.isLoaded=!0;break;case p.b.SET_GLOBAL_ITEMS:t.globalItems=e.payload;break;case p.b.LOADING:t.isLoaded=e.payload;break;case p.b.ERROR:t.isLoaded=!1,t.error=e.payload}}))},h=n(29),_={items:[],colors:[],isLoaded:!1,error:[]},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;return Object(f.a)(t,(function(t){switch(e.type){case h.a.SET_ITEMS:t.items=e.payload,t.isLoaded=!0;break;case h.a.SET_COLORS:t.colors=e.payload;break;case h.a.LOADED:t.isLoaded=e.payload;break;case h.a.ERROR:t.isLoaded=!1,t.error=e.payload}}))},O=n(17),T={items:[],itemsTransactions:[],isLoaded:!1,error:[]},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;return Object(f.a)(t,(function(t){switch(e.type){case O.a.SET_ITEMS:t.items=e.payload,t.isLoaded=!0;break;case O.a.SET_ITEMS_TRANSACTIONS:t.itemsTransactions=e.payload,t.isLoaded=!0;break;case O.a.LOADING:t.isLoaded=e.payload;break;case O.a.ERROR:t.isLoaded=!0,t.error=e.payload}}))},g=n(9),E={items:[]},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;return Object(f.a)(t,(function(t){switch(e.type){case g.b.SET_ITEMS:t.items=e.payload}}))},j=n(16),D=n(30),w=new Date,N=function(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())},x={selectedDay:w.getDate(),selectedMonth:w.getMonth(),selectedYear:w.getFullYear(),options:j.a.periodTypes,selectedOption:j.a.periodTypes[2],nowDateStamp:+N(w),prevDateStamp:j.a.getPrevDate(N(w),j.a.periodTypes[2])},A=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;return Object(f.a)(e,(function(e){switch(n.type){case D.a.SET_DAY:e.selectedDay=n.payload,t=N(new Date(e.selectedYear,e.selectedMonth,n.payload)),e.nowDateStamp=+t,e.prevDateStamp=j.a.getPrevDate(t,e.selectedOption);break;case D.a.SET_MONTH:e.selectedMonth=n.payload,t=N(new Date(e.selectedYear,n.payload,e.selectedDay)),e.nowDateStamp=+t,e.prevDateStamp=j.a.getPrevDate(t,e.selectedOption);break;case D.a.SET_YEAR:e.selectedYear=n.payload,t=N(new Date(n.payload,e.selectedMonth,e.selectedDay)),e.nowDateStamp=+t,e.prevDateStamp=j.a.getPrevDate(t,e.selectedOption);break;case D.a.SET_SELECTED_OPTION:e.selectedOption=n.payload,t=N(new Date(e.selectedYear,e.selectedMonth,e.selectedDay)),e.nowDateStamp=+t,e.prevDateStamp=j.a.getPrevDate(t,n.payload)}}))},C=n(50),L={username:null},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;return Object(f.a)(t,(function(t){switch(e.type){case C.a.SET_USERNAME:t.username=e.payload}}))},R=Object(u.b)({transactions:b,widgets:v,categories:m,notifications:S,user:I,calendar:A}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,M=[d.a.withExtraArgument({api:l.a})],G=Object(u.d)(R,k(u.a.apply(void 0,M))),Y=n(4),B=n(45),W=n(65),P=n.n(W),F=n(1),U=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,178))})),J=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,179))})),z=function(){return Object(F.jsxs)("div",{className:P.a.container,children:[Object(F.jsx)(B.e,{}),Object(F.jsxs)(Y.d,{children:[Object(F.jsx)(Y.b,{path:"/auth",children:Object(F.jsx)(r.a.Suspense,{fallback:Object(F.jsx)("div",{children:"Loading..."}),children:Object(F.jsx)(J,{isReg:!1})})}),Object(F.jsx)(Y.b,{path:"/reg",children:Object(F.jsx)(r.a.Suspense,{fallback:Object(F.jsx)("div",{children:"Loading..."}),children:Object(F.jsx)(J,{isReg:!0})})}),Object(F.jsx)(Y.b,{path:"/",exact:!0,children:Object(F.jsx)(r.a.Suspense,{fallback:Object(F.jsx)("div",{children:"Loading..."}),children:Object(F.jsx)(U,{})})})]})]})};o.a.render(Object(F.jsx)(i.a,{store:G,children:Object(F.jsx)(s.a,{children:Object(F.jsx)(z,{})})}),document.getElementById("root"))}},[[97,2,3]]]);
//# sourceMappingURL=main.fd5eef2c.chunk.js.map