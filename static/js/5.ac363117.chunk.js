(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(46),c=a(47),s=function(){function e(){Object(n.a)(this,e)}return Object(c.a)(e,null,[{key:"validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t,a,n){var c=void 0;return e.forEach((function(e){c||(c=e.validate(t,a,n))})),c}}}]),e}()},103:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(46),c=a(47),s=function(){function e(t){var a=t.msg;Object(n.a)(this,e),this.msg="",this.msg=a}return Object(c.a)(e,[{key:"validate",value:function(e,t,a){var n=e&&"string"===typeof e?e.trim():e;if((!n||null===n||""===n||void 0===n)&&(null===a||void 0===a?void 0:a.visited))return this.msg}}]),e}()},106:function(e,t,a){"use strict";a.d(t,"b",(function(){return _})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return x})),a.d(t,"c",(function(){return N}));var n=a(38),c=a(135),s=a(0),i=a.n(s),l=a(22),r=a.n(l),o=a(110),d=a.n(o),u=a(1),_=function(e){var t=e.placeholder,a=e.className,s=Object(c.a)(e,["placeholder","className"]);return Object(u.jsxs)("div",{className:d.a["input-container"],children:[s.label&&Object(u.jsx)("label",{className:d.a.input_label,children:s.label}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({className:r()(d.a.input,a),onChange:s.input.onChange,value:s.input.value,name:s.input.name},s.input),{},{placeholder:t}))]})},j=a(111),b=a.n(j),m=function(e){var t=e.className,a=e.fieldProps,n=i.a.useRef(null);return Object(u.jsx)("input",{className:r()(b.a.date,t),ref:n,type:"text",onChange:a.input.onChange,name:a.input.name,value:a.input.value,placeholder:"\u0414\u0430\u0442\u0430",onFocus:function(){n&&n.current&&(n.current.type="date")},onBlur:function(){n&&n.current&&(n.current.type="text")}})},h=a(37),f=a(44),p=a(112),O=a.n(p),v=function(e){var t=e.options,a=e.onClick,n=e.onClose,c=i.a.useRef(null),s=i.a.useCallback((function(){n()}),[n]);return i.a.useEffect((function(){return document.body.addEventListener("click",s),function(){return document.body.removeEventListener("click",s)}}),[s]),Object(u.jsx)("div",{className:O.a.select_options,ref:c,children:Object(f.map)(t,(function(e,t){return Object(u.jsx)("div",{onClick:function(){return a(e)},className:O.a.select_options_item,children:e.value},"".concat(e.value,"_").concat(t))}))})},x=function(e){var t=e.fieldProps,a=e.options,n=void 0===a?[]:a,c=e.placeholder,s=i.a.useState(!1),l=Object(h.a)(s,2),r=l[0],o=l[1],d=function(){o(!1)};return Object(u.jsxs)("div",{className:O.a.select,children:[Object(u.jsx)("p",{className:O.a.select_value,onClick:function(){o((function(e){return!e}))},children:t.value.value||c||n.length&&n[0].value}),r&&Object(u.jsx)(v,{onClick:function(e){t.onChange(e),d()},options:n,onClose:d})]})},y=a(101),g=a(45),w=a(113),C=a.n(w),N=function(e){var t=e.children,a=e.title,n=e.buttonText,c=e.onSubmit,s=e.onClose;return Object(u.jsx)(g.d,{onClose:s,children:Object(u.jsx)(y.b,{onSubmit:c,render:function(e){var c=e.handleSubmit,s=e.errors;return Object(u.jsxs)("form",{onSubmit:c,children:[Object(u.jsx)("h2",{className:C.a.form_title,children:a}),t,"object"===typeof s&&Object.keys(s).length>0&&Object(u.jsx)("ul",{className:C.a.form_errors,children:Object(f.map)(Object.keys(s),(function(e,t){return Object(u.jsx)("li",{children:s[e]},"".concat(e,"_").concat(t))}))}),Object(u.jsx)("button",{className:C.a.form_btn,children:n})]})}})})}},110:function(e,t,a){e.exports={input:"style_input__2vQF3",input_label:"style_input_label__FoSHQ"}},111:function(e,t,a){e.exports={date:"style_date__1dYRe"}},112:function(e,t,a){e.exports={select:"style_select__1JzaF",select_value:"style_select_value__2D-fm",select_options:"style_select_options__2Tx-j",select_options_item:"style_select_options_item__2OxXP"}},113:function(e,t,a){e.exports={form_title:"style_form_title__1R8pq",form_errors:"style_form_errors__1KvuQ",form_btn:"style_form_btn__2sLPt"}},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(46),c=a(47),s=function(){function e(t){var a=t.max,c=t.min;Object(n.a)(this,e),this.max=void 0,this.min=void 0,this.max=a,this.min=c}return Object(c.a)(e,[{key:"validate",value:function(e,t,a){var n=e&&"string"===typeof e?e.trim():e;if(null===a||void 0===a?void 0:a.visited){if(this.max&&n&&n.length>this.max.count)return this.max.msg;if(this.min&&n&&n.length<this.min.count)return this.min.msg;if(!n&&(this.min||this.max)){if(this.min)return this.min.msg;if(this.max)return this.max.msg}}}}]),e}()},123:function(e,t,a){"use strict";var n=a(2),c=a.n(n),s=a(5),i=a(37),l=a(0),r=a.n(l),o=a(7),d=a(50),u=a(33),_=a(48);t.a=function(){var e=Object(o.c)(),t=r.a.useState(!!u.reactLocalStorage.get("token")),a=Object(i.a)(t,2),n=a[0],l=a[1],j=Object(_.a)((function(e){return e.user.username})),b=r.a.useCallback(function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.b.authAction(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return{reg:r.a.useCallback(function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.b.regAction(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),auth:b,fetchInfo:r.a.useCallback(Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(d.b.fetchInfoAction());case 1:case"end":return t.stop()}}),t)}))),[e]),username:j,loggedIn:n,setLoggedIn:l}}},138:function(e,t,a){e.exports={income:"style_income__1bGW2",table:"style_table__1Rzb6",table_width:"style_table_width__J9xlN",table_edit:"style_table_edit__2HoTv",table_delete:"style_table_delete__3Wjw6",table_header:"style_table_header__2HmC_",table_body:"style_table_body___w4vQ",table_body_scroll:"style_table_body_scroll__2eCYp",table_cell:"style_table_cell__1rxX7",table_date:"style_table_date__2oT7h",table_amount:"style_table_amount__2hIAO",table_empty:"style_table_empty__kzIFj"}},139:function(e,t,a){e.exports={category:"style_category__3CT4a","fields-container":"style_fields-container__3Vrh-",amount:"style_amount__2elO5",fields:"style_fields__3WB3B"}},140:function(e,t,a){e.exports={summary:"style_summary__2AfnG",summary_header:"style_summary_header__2D4Ue",table:"style_table__1uHhY",table_head:"style_table_head__3YG_H",table_scroll:"style_table_scroll__4w5tF",table_cell:"style_table_cell__1jP9B",table_category:"style_table_category__2KUHo",table_amount:"style_table_amount__gW5IH",table_empty:"style_table_empty__1mqyR",income:"style_income___m9Cu"}},141:function(e,t,a){e.exports={tabs:"style_tabs__Exn9M",tabs_item:"style_tabs_item__AjACS",tabs_item__active:"style_tabs_item__active__37_1r"}},142:function(e,t,a){e.exports={"fields-container":"style_fields-container__10XNp","fields-tabs":"style_fields-tabs__20_JJ",input:"style_input__2jtRK"}},143:function(e,t,a){e.exports={widget:"style_widget__1mU7T",widget_left:"style_widget_left__1oq8h",widget_right:"style_widget_right__1gxD-",widget_delete:"style_widget_delete__3SZme",widget_img:"style_widget_img__TO2zV",widget_validity:"style_widget_validity__2Jlz8",widget_title:"style_widget_title__OiX-U",widget_sum:"style_widget_sum__kOHkd"}},144:function(e,t,a){e.exports={fields:"style_fields__11scn","fields-container":"style_fields-container__2t20h","fields-top":"style_fields-top__efq35",input:"style_input__386Bv","color-field":"style_color-field__1x0yk","color-field_item":"style_color-field_item__kXl4a",active:"style_active__18N9D",tabs:"style_tabs__Ozs2R",tabs_item:"style_tabs_item__3ppPT"}},145:function(e,t,a){e.exports={"widgets-container":"style_widgets-container__3zYDX","widgets-container__reverse":"style_widgets-container__reverse__KTecL","widgets-items":"style_widgets-items__K_tpn",center:"style_center__233q8","widgets-item":"style_widgets-item__GmZpx",widgets_more:"style_widgets_more__2gzF2",widgets_handler:"style_widgets_handler__3Xc1L",widgets_add:"style_widgets_add__1Z0H4",widgets_next:"style_widgets_next__2BoEY",widgets_next__reverse:"style_widgets_next__reverse__3BP4b"}},171:function(e,t,a){e.exports={title:"style_title__3mX14",hint:"style_hint__1yIdz"}},172:function(e,t,a){e.exports={calendar:"style_calendar__1Q2Ll","calendar_month-switch":"style_calendar_month-switch__1_xwR","calendar_month-switch_svg":"style_calendar_month-switch_svg__1V9E0","calendar_month-switch_date":"style_calendar_month-switch_date__110eb","calendar_month-switch_month":"style_calendar_month-switch_month__3wQ_f","calendar_month-switch_year":"style_calendar_month-switch_year__YiMeR","calendar_week-days":"style_calendar_week-days__3dYlH","calendar_week-days_item":"style_calendar_week-days_item__1UGVY",calendar_day:"style_calendar_day__ftudp",disabled:"style_disabled__2A2rd",select:"style_select__GRqWL",now:"style_now__2I2F4","calendar-container":"style_calendar-container__1sVEF",calendar_title:"style_calendar_title__1ypYf",calendar_select:"style_calendar_select__ofXqF"}},173:function(e,t,a){e.exports={"total-amount":"style_total-amount__23uFI","total-amount_title":"style_total-amount_title__3FIuX","total-amount_content":"style_total-amount_content__173vO","total-amount_juke":"style_total-amount_juke__1V53h","total-amount_juke_text":"style_total-amount_juke_text__l-aD8","total-amount_row":"style_total-amount_row__14VnF","total-amount_count":"style_total-amount_count__2CTws"}},174:function(e,t,a){e.exports={home:"style_home__2IdAK",pockets:"style_pockets__2xMzS","pockets-wrapper":"style_pockets-wrapper__1rsQV",pockets_content:"style_pockets_content__2SnDt",pockets_tables:"style_pockets_tables__3MPHV",utils:"style_utils__xEDPs",utils_calendar:"style_utils_calendar__2XVJz",profile:"style_profile__3Jsnd",profile_photo:"style_profile_photo__Sm3W4","profile_photo-container":"style_profile_photo-container__25Qsi","profile_photo_edit-container":"style_profile_photo_edit-container__3bJKs","total-amount_title":"style_total-amount_title__1TkuX"}},178:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a.p+"static/media/edit.17d10101.svg",i=a(18),l=a(37),r=a(44),o=a(22),d=a.n(o),u=a(45),_=a(138),j=a.n(_),b=a(2),m=a.n(b),h=a(5),f=a(7),p=a(27),O=a(30),v=a(16),x=a(48),y=function(){var e=Object(f.c)(),t=Object(x.a)((function(e){var t=e.calendar;return[t.selectedDay,t.selectedMonth,t.selectedYear,t.options,t.selectedOption,t.nowDateStamp,t.prevDateStamp]})),a=Object(l.a)(t,7),n=a[0],c=a[1],s=a[2],i=a[3],r=a[4],o=a[5],d=a[6];return{selectedDay:n,selectedMonth:c,selectedYear:s,setSelectedDay:function(t){return e(Object(O.b)(t))},setSelectedMonth:function(t){return e(Object(O.c)(t))},setSelectedYear:function(t){return e(Object(O.d)(t))},setSelectedOption:function(t){return e(Object(O.e)(t))},selectedDayName:v.a.dayRuNames[n],selectedMonthName:v.a.monthRuNames[c],options:i,nowDateStamp:o,prevDateStamp:d,selectedOption:r}},g=function(){var e=Object(f.c)(),t=y(),a=t.nowDateStamp,n=t.prevDateStamp,s=t.selectedOption,i=Object(x.a)((function(e){var t=e.transactions;return[t.items,t.globalItems,t.isLoaded]})),r=Object(l.a)(i,3),o=r[0],d=r[1],u=r[2],_=c.a.useCallback(function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(p.a.addTransaction(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),j=c.a.useCallback(function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(p.a.updateTransaction(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),b=c.a.useCallback(function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.confirm("\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c?")&&e(p.a.deleteTransaction(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]);return c.a.useEffect((function(){Object(f.b)((function(){e(p.a.fetchTransactions()),e(p.a.fetchGlobalTransactions())}))}),[e,a,n,s]),{transactionGlobalItems:d,isLoaded:u,transactionItems:o,addTransaction:_,updateTransaction:j,deleteTransaction:b}},w=a(38),C=a(101),N=a(106),k=a(102),L=a(103),S=a(17),M=function(){var e=Object(f.c)(),t=y(),a=t.nowDateStamp,n=t.prevDateStamp,s=t.selectedOption,i=Object(x.a)((function(e){var t=e.categories;return[t.items,t.itemsTransactions,t.isLoaded]})),r=Object(l.a)(i,3),o=r[0],d=r[1],u=r[2],_=c.a.useCallback(function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(S.b.addCategory(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]);return c.a.useEffect((function(){e(S.b.fetchTransactionsByCategories())}),[e,a,n,s]),c.a.useEffect((function(){e(S.b.fetchCategories())}),[e]),{categoryItems:o,addCategory:_,itemsTransactions:d,isLoaded:u}},D=a(139),T=a.n(D),V=a(1),I=function(e){var t=e.id,a=e.onClose,n=!!t,c=M().categoryItems,s=Object(r.map)(c,(function(e){return{id:e.id,value:e.name}})),i=g(),l=i.addTransaction,o=i.updateTransaction;return Object(V.jsx)(N.c,{title:"".concat(n?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"," \u0434\u0430\u043d\u043d\u044b\u0435"),buttonText:n?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onSubmit:function(e){n&&(e=Object(w.a)(Object(w.a)({},e),{},{id:t})),(n?o:l)(e)},onClose:a,children:Object(V.jsxs)("div",{className:T.a["fields-container"],children:[Object(V.jsx)("div",{className:T.a.fields,children:Object(V.jsx)(C.a,{name:"date",render:function(e){return Object(V.jsx)(N.a,{fieldProps:e})},defaultValue:(new Date).toISOString().split("T")[0]})}),Object(V.jsx)("div",{className:T.a.category,children:Object(V.jsx)(C.a,{name:"category",render:function(e){return Object(V.jsx)(N.d,{placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",options:s,fieldProps:e.input})},validate:function(e,t,a){k.a.validate([new L.a({msg:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"})])((null===e||void 0===e?void 0:e.value)||void 0,t,a)}})}),Object(V.jsx)("div",{className:T.a.fields,children:Object(V.jsx)(C.a,{name:"amount",component:"input",type:"number",placeholder:"\u0421\u0443\u043c\u043c\u0430",className:T.a.amount,validate:k.a.validate([new L.a({msg:"\u0421\u0443\u043c\u043c\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"})])})})]})})},H=function(){var e=c.a.useRef(null),t=c.a.useState(0),a=Object(l.a)(t,2),n=a[0],s=a[1],o=g(),_=o.transactionItems,b=o.deleteTransaction,m=o.isLoaded,h=c.a.useState(!1),f=Object(l.a)(h,2),p=f[0],O=f[1],v=c.a.useRef(null),x=function(e){s(Math.floor(e.currentTarget.scrollTop/59))};return c.a.useEffect((function(){var t=e.current;return null===t||void 0===t||t.addEventListener("scroll",x),function(){return null===t||void 0===t?void 0:t.removeEventListener("scroll",x)}}),[]),Object(V.jsxs)("div",{children:[p&&Object(V.jsx)(I,{id:v.current,onClose:function(){return O(!1)}}),Object(V.jsx)("table",{className:j.a.table,children:Object(V.jsx)("thead",{className:j.a.table_header,children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{className:j.a.table_width,children:"\u0434\u0430\u0442\u044b"}),Object(V.jsx)("th",{className:j.a.table_width,children:"\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(V.jsx)("th",{className:j.a.table_width,children:"\u0441\u0443\u043c\u043c\u044b"}),Object(V.jsx)("th",{className:j.a.table_width,children:Object(V.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(V.jsx)(u.c,{onClick:function(){v.current=null,O(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})})]})})}),Object(V.jsx)("div",{className:j.a.table_body_scroll,ref:e,children:m?_.length?Object(V.jsx)("table",{className:j.a.table_body,children:Object(V.jsxs)("tbody",{children:[Object(V.jsx)("tr",{style:{height:59*n}}),Object(r.map)(_.slice(n,9+n),(function(e){return Object(V.jsxs)("tr",{className:d()(Object(i.a)({},j.a.income,e.category.is_income)),children:[Object(V.jsx)("td",{className:"".concat(j.a.table_cell," ").concat(j.a.table_date," ").concat(j.a.table_width),children:new Date(1e3*e.transaction_date).toLocaleDateString()}),Object(V.jsx)("td",{className:"".concat(j.a.table_cell," ").concat(j.a.table_width),children:e.category.name}),Object(V.jsx)("td",{className:"".concat(j.a.table_cell," ").concat(j.a.table_amount," ").concat(j.a.table_width),children:e.amount}),Object(V.jsxs)("td",{className:"".concat(j.a.table_cell," ").concat(j.a.table_width),children:[Object(V.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg",className:j.a.table_edit,onClick:function(){return t=e.id,v.current=t,void O(!0);var t},children:Object(V.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.7 5.7L11.7 15.7C11.5 15.9 11.3 16 11 16H7C6.4 16 6 15.6 6 15V11C6 10.7 6.1 10.5 6.3 10.3L16.3 0.3C16.7 -0.1 17.3 -0.1 17.7 0.3L21.7 4.3C22.1 4.7 22.1 5.3 21.7 5.7ZM20 13.7V19C20 20.7 18.7 22 17 22H3C1.3 22 0 20.7 0 19V5C0 3.3 1.3 2 3 2H8.3C8.9 2 9.3 2.4 9.3 3C9.3 3.6 8.9 4 8.3 4H3C2.4 4 2 4.4 2 5V19C2 19.6 2.4 20 3 20H17C17.6 20 18 19.6 18 19V13.7C18 13.1 18.4 12.7 19 12.7C19.6 12.7 20 13.1 20 13.7ZM17 2.4L19.6 5L10.6 14H8V11.4L17 2.4Z"})}),Object(V.jsx)("svg",{width:"20",height:"22",viewBox:"0 0 20 22",xmlns:"http://www.w3.org/2000/svg",className:j.a.table_delete,onClick:function(){return b(e.id)},children:Object(V.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 4H15V3C15 1.3 13.7 0 12 0H8C6.3 0 5 1.3 5 3V4H1C0.4 4 0 4.4 0 5C0 5.6 0.4 6 1 6H2V19C2 20.7 3.3 22 5 22H15C16.7 22 18 20.7 18 19V6H19C19.6 6 20 5.6 20 5C20 4.4 19.6 4 19 4ZM7 3C7 2.4 7.4 2 8 2H12C12.6 2 13 2.4 13 3V4H7V3ZM15 20C15.6 20 16 19.6 16 19V6H4V19C4 19.6 4.4 20 5 20H15ZM9 10V16C9 16.6 8.6 17 8 17C7.4 17 7 16.6 7 16V10C7 9.4 7.4 9 8 9C8.6 9 9 9.4 9 10ZM13 16V10C13 9.4 12.6 9 12 9C11.4 9 11 9.4 11 10V16C11 16.6 11.4 17 12 17C12.6 17 13 16.6 13 16Z"})})]})]},e.id)})),Object(V.jsx)("tr",{style:{height:59*(_.length-(9+n))}})]})}):Object(V.jsx)("div",{className:j.a.table_empty,children:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):Object(V.jsx)(u.a,{})})]})},E=a(140),R=a.n(E),F=a(114),P=a(141),B=a.n(P),Z=function(e){var t=e.items,a=e.fieldProps,n=c.a.useState(t[0]),s=Object(l.a)(n,2),o=s[0],u=s[1];return Object(V.jsx)("div",{className:B.a.tabs,children:Object(r.map)(t,(function(e){return Object(V.jsx)("span",{className:d()(B.a.tabs_item,Object(i.a)({},B.a.tabs_item__active,o.id===e.id)),onClick:function(){return function(e){u(e),a.onChange(e.value)}(e)},children:e.label},e.id)}))})},Y=a(142),W=a.n(Y),A=function(e){var t=e.onClose,a=M().addCategory,n=[{id:1,label:"\u0414\u043e\u0445\u043e\u0434",value:!0},{id:2,label:"\u0420\u0430\u0441\u0445\u043e\u0434",value:!1}];return Object(V.jsx)(N.c,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",buttonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onSubmit:function(e){a(e)},onClose:t,children:Object(V.jsxs)("div",{className:W.a["fields-container"],children:[Object(V.jsx)("div",{className:W.a["fields-tabs"],children:Object(V.jsx)(C.a,{name:"category_type",render:function(e){return Object(V.jsx)(Z,{items:n,fieldProps:e.input})}})}),Object(V.jsx)(C.a,{name:"name",component:"input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:W.a.input,validate:k.a.validate([new L.a({msg:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"}),new F.a({min:{count:2,msg:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"},max:{count:255,msg:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c 255 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"}})])})]})})},X=function(){var e=M(),t=e.itemsTransactions,a=e.isLoaded,n=c.a.useState(!1),s=Object(l.a)(n,2),o=s[0],_=s[1],j=t.filter((function(e){return e.transactions_sum>0}));return Object(V.jsxs)("div",{className:R.a.summary,children:[o&&Object(V.jsx)(A,{onClose:function(){return _(!1)}}),Object(V.jsxs)("div",{className:R.a.summary_header,children:[Object(V.jsx)("h3",{children:"\u0421\u0443\u043c\u043c\u0430\u0440\u043d\u043e"}),Object(V.jsx)(u.c,{onClick:function(){_(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})]}),Object(V.jsx)("table",{className:"".concat(R.a.table," ").concat(R.a.table_head),children:Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{className:R.a.table_cell,children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"}),Object(V.jsx)("th",{className:R.a.table_cell,children:"\u0421\u0443\u043c\u043c\u0430"})]})})}),Object(V.jsx)("div",{className:R.a.table_scroll,children:a?j.length?Object(V.jsx)("table",{className:R.a.table,children:Object(V.jsx)("tbody",{children:Object(r.map)(j,(function(e){return Object(V.jsxs)("tr",{className:d()(R.a.table_row,Object(i.a)({},R.a.income,e.is_income)),children:[Object(V.jsx)("td",{className:"".concat(R.a.table_cell," ").concat(R.a.table_category),children:e.name}),Object(V.jsx)("td",{className:"".concat(R.a.table_cell," ").concat(R.a.table_amount),children:e.transactions_sum})]},e.id)}))})}):Object(V.jsx)("div",{className:R.a.table_empty,children:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):Object(V.jsx)(u.a,{})})]})},z=a(29),J=function(){var e=Object(f.c)(),t=y(),a=t.nowDateStamp,n=t.prevDateStamp,s=t.selectedOption,i=Object(x.a)((function(e){var t=e.widgets;return[t.items,t.colors,t.isLoaded]})),r=Object(l.a)(i,3),o=r[0],d=r[1],u=r[2],_=c.a.useCallback(function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(z.b.addWidgetAction(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),j=c.a.useCallback(function(){var t=Object(h.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(z.b.deleteWidgetAction(a));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]);return c.a.useEffect((function(){e(z.b.fetchWidgetColors())}),[e]),c.a.useEffect((function(){e(z.b.fetchWidgets())}),[e,a,n,s]),{widgetItems:o,widgetColors:d,isLoaded:u,addWidget:_,deleteWidget:j}},G=a(143),Q=a.n(G),q=function(e){var t=e.color,a=e.isMore,n=e.period,c=e.limit,s=e.transactionsSum,i=e.categoryName,l=e.onClick;return Object(V.jsxs)("div",{className:Q.a.widget,style:{background:t+"22"},children:[Object(V.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:Q.a.widget_delete,onClick:l,children:Object(V.jsx)("path",{d:"M18.8639 10.1622L11.0968 17.5442C9.90192 18.6799 8.36558 19.1667 6.82924 19.1667C5.2929 19.1667 3.75656 18.5988 2.56163 17.5442C0.257125 15.354 0.257125 11.7035 2.56163 9.51327L10.414 2.05014C11.1822 1.32005 12.2918 0.833328 13.4014 0.833328C14.5109 0.833328 15.6205 1.23893 16.3887 2.05014C18.0957 3.67256 18.0957 6.18731 16.3887 7.80973L8.53628 15.2729C7.51206 16.2463 5.89037 16.2463 4.95149 15.2729C4.52473 14.8673 4.26868 14.2183 4.26868 13.5693C4.26868 12.9203 4.52473 12.2714 5.03684 11.8658L12.2918 4.9705C12.6332 4.64601 13.1453 4.64601 13.4867 4.9705C13.8281 5.29498 13.8281 5.78171 13.4867 6.10619L6.23177 13.0015C6.06107 13.1637 5.97572 13.326 5.97572 13.5693C5.97572 13.8127 6.06107 13.9749 6.23177 14.1372C6.57318 14.4616 7.0853 14.4616 7.4267 14.1372L15.2791 6.67404C16.3033 5.70058 16.3033 4.15929 15.2791 3.26696C14.3402 2.37463 12.6332 2.37463 11.6943 3.26696L3.84191 10.7301C2.13487 12.3525 2.13487 14.8673 3.84191 16.4897C5.54896 18.1121 8.19487 18.1121 9.90192 16.4897L17.7543 9.02654C18.0957 8.70206 18.6078 8.70206 18.9492 9.02654C19.2907 9.35103 19.2053 9.83775 18.8639 10.1622Z",fill:"black"})}),Object(V.jsxs)("div",{className:Q.a.widget_left,children:[Object(V.jsx)("div",{className:Q.a.widget_img,children:Object(V.jsx)("svg",{width:"24",height:"36",viewBox:"0 0 24 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.4782 12.237C23.4782 5.93709 18.313 0.782608 12 0.782608C5.68695 0.782608 0.521729 5.93709 0.521729 12.237C0.521729 15.9597 2.24347 19.2528 4.96955 21.2573L3.39129 33.5708C3.24782 34.1435 3.53477 34.7163 3.96521 35.0026C4.39564 35.289 4.96955 35.289 5.54347 35.0026L12 31.1368L18.4565 35.0026C18.6 35.1458 18.8869 35.1458 19.1739 35.1458C19.4609 35.1458 19.7478 35.0026 19.8913 34.8594C20.3217 34.5731 20.6087 34.0004 20.4652 33.4276L18.8869 21.2573C21.7565 19.2528 23.4782 15.9597 23.4782 12.237ZM3.39129 12.237C3.39129 7.51207 7.26521 3.64621 12 3.64621C16.7348 3.64621 20.6087 7.51207 20.6087 12.237C20.6087 16.9619 16.7348 20.8278 12 20.8278C7.26521 20.8278 3.39129 16.9619 3.39129 12.237ZM12.7174 28.2732L17.3087 30.9936L16.3043 22.8324C15.013 23.4051 13.5783 23.6914 12 23.6914C10.4217 23.6914 8.98695 23.4051 7.69564 22.8324L6.69129 30.9936L11.2826 28.2732C11.713 27.9868 12.2869 27.9868 12.7174 28.2732Z",fill:t})})}),Object(V.jsx)("p",{className:Q.a.widget_validity,children:n})]}),Object(V.jsxs)("div",{className:Q.a.widget_right,children:[Object(V.jsxs)("p",{className:Q.a.widget_title,children:["\u0422\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 ",i.toLowerCase()," ",a?"\u0431\u043e\u043b\u044c\u0448\u0435":"\u043c\u0435\u043d\u044c\u0448\u0435"," ",c," \u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(V.jsxs)("p",{className:Q.a.widget_sum,style:{color:t},children:[s,"/",c]})]})]})},K=a(144),U=a.n(K),$=[{id:1,value:"\u0414\u0435\u043d\u044c"},{id:2,value:"\u041d\u0435\u0434\u0435\u043b\u044f"},{id:3,value:"\u041c\u0435\u0441\u044f\u0446"},{id:4,value:"\u0413\u043e\u0434"}],ee=function(e){var t=e.colors,a=e.fieldProps;return c.a.useEffect((function(){t.length&&!a.value&&a.onChange(t[0])}),[a,t]),Object(V.jsx)("div",{className:U.a["color-field"],children:Object(r.map)(t,(function(e){return Object(V.jsx)("span",{onClick:function(){return function(e){a.onChange(e)}(e)},className:d()(U.a["color-field_item"],Object(i.a)({},U.a.active,e.id===a.value.id)),style:{background:e.value}},e.id)}))})},te=function(e){var t=e.fieldProps,a=c.a.useState(!1),n=Object(l.a)(a,2),s=n[0],r=n[1];return c.a.useEffect((function(){t.value||t.onChange(!1)}),[t]),Object(V.jsxs)("div",{className:U.a.tabs,children:[Object(V.jsx)("div",{className:d()(U.a.tabs_item,Object(i.a)({},U.a.active,s)),onClick:function(){r(!0),t.onChange(!0)},children:"\u0411\u043e\u043b\u044c\u0448\u0435"}),Object(V.jsx)("div",{className:d()(U.a.tabs_item,Object(i.a)({},U.a.active,!s)),onClick:function(){r(!1),t.onChange(!1)},children:"\u041c\u0435\u043d\u044c\u0448\u0435"})]})},ae=function(e){var t=e.onClose,a=J(),n=a.widgetColors,c=a.addWidget,s=M().categoryItems,i=Object(r.map)(Object(r.filter)(s,(function(e){return!e.is_income})),(function(e){return{id:e.id,value:e.name}}));return Object(V.jsx)(N.c,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",buttonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onSubmit:function(e){c(e)},onClose:t,children:Object(V.jsxs)("div",{className:U.a["fields-container"],children:[Object(V.jsxs)("div",{className:U.a["fields-top"],children:[Object(V.jsx)(C.a,{name:"color",render:function(e){return Object(V.jsx)(ee,{colors:n,fieldProps:e.input})}}),Object(V.jsx)("div",{className:U.a.fields,children:Object(V.jsx)(C.a,{name:"limit",component:"input",type:"number",placeholder:"\u041b\u0438\u043c\u0438\u0442",className:U.a.input,validate:k.a.validate([new L.a({msg:"\u041b\u0438\u043c\u0438\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"})])})}),Object(V.jsx)("div",{className:U.a.fields,children:Object(V.jsx)(C.a,{name:"category",render:function(e){return Object(V.jsx)(N.d,{placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",options:i,fieldProps:e.input})},validate:function(e,t,a){k.a.validate([new L.a({msg:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"})])(null===e||void 0===e?void 0:e.value,t,a)}})}),Object(V.jsx)("div",{className:U.a.fields,children:Object(V.jsx)(C.a,{name:"period",render:function(e){return Object(V.jsx)(N.d,{placeholder:"\u0421\u0440\u043e\u043a",options:$,fieldProps:e.input})},validate:function(e,t,a){k.a.validate([new L.a({msg:"\u0421\u0440\u043e\u043a \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"})])(null===e||void 0===e?void 0:e.value,t,a)}})})]}),Object(V.jsx)(C.a,{name:"isMore",render:function(e){return Object(V.jsx)(te,{fieldProps:e.input})}})]})})},ne=a(145),ce=a.n(ne),se=a(176),ie=a(171),le=a.n(ie),re=function(e){var t=e.onClose,a=c.a.useState(!1),n=Object(l.a)(a,2),s=n[0],i=n[1],o=c.a.useState([]),d=Object(l.a)(o,2),_=d[0],j=d[1],b=M().itemsTransactions;return c.a.useEffect((function(){j(Object(r.map)(b,(function(e){return{id:e.id,name:e.name,transactionsSum:e.transactions_sum}})))}),[b]),Object(V.jsxs)(u.d,{onClose:t,children:[Object(V.jsx)("h2",{className:le.a.title,children:"\u0413\u0440\u0430\u0444\u0438\u043a"}),Object(V.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(V.jsx)(se.b,{innerRadius:120,radius:175,getAngle:function(e){return e.transactionsSum},onValueClick:function(e){return console.log(e)},data:_,onValueMouseOver:function(e){return i(e)},onSeriesMouseOut:function(){return i(!1)},width:360,height:360,children:!1!==s&&Object(V.jsx)(se.a,{value:s,children:Object(V.jsx)("div",{className:le.a.hint,children:s.name})})})})]})},oe=function(){var e=J(),t=e.widgetItems,a=e.deleteWidget,n=e.isLoaded,s=c.a.useState(0),o=Object(l.a)(s,2),_=o[0],j=o[1],b=0===t.length,m=c.a.useState(!1),h=Object(l.a)(m,2),f=h[0],p=h[1],O=c.a.useState(!1),v=Object(l.a)(O,2),x=v[0],y=v[1];return Object(V.jsxs)("div",{className:d()(ce.a["widgets-container"]),children:[f&&Object(V.jsx)(ae,{onClose:function(){return p(!1)}}),x&&Object(V.jsx)(re,{onClose:function(){return y(!1)}}),Object(V.jsx)("div",{className:d()(ce.a["widgets-items"],Object(i.a)({},ce.a.center,b)),children:n?Object(V.jsx)(V.Fragment,{children:b?Object(V.jsx)("p",{children:"\u0412\u0438\u0434\u0436\u0435\u0442\u043e\u0432 \u043d\u0435\u0442"}):Object(V.jsx)(V.Fragment,{children:Object(r.map)(t.slice(_,_+4),(function(e){return Object(V.jsx)("div",{className:ce.a["widgets-item"],children:Object(V.jsx)(q,{color:e.color,isMore:e.is_more,period:e.period,limit:e.limit,transactionsSum:e.transactions_sum,categoryName:e.category.name,onClick:function(){return a(e.id)}})},e.id)}))})}):Object(V.jsx)(u.a,{})}),Object(V.jsxs)("div",{className:ce.a.widgets_more,children:[t.length>4&&Object(V.jsx)("button",{className:d()(ce.a.widgets_next,Object(i.a)({},ce.a.widgets_next__reverse,_>0)),onClick:function(){j((function(e){return e>0?0:2}))},children:Object(V.jsx)("svg",{width:"184",height:"24",viewBox:"0 0 184 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{d:"M183.061 13.0606C183.646 12.4749 183.646 11.5251 183.061 10.9393L173.515 1.39338C172.929 0.807596 171.979 0.807596 171.393 1.39338C170.808 1.97917 170.808 2.92892 171.393 3.5147L179.879 12L171.393 20.4853C170.808 21.0711 170.808 22.0208 171.393 22.6066C171.979 23.1924 172.929 23.1924 173.515 22.6066L183.061 13.0606ZM1.31134e-07 13.5L182 13.5L182 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z",fill:"#5D5FEF"})})}),Object(V.jsxs)("div",{className:ce.a.widgets_handler,children:[Object(V.jsx)("button",{className:ce.a.widgets_add,onClick:function(){return y(!0)},children:"\u0413\u0440\u0430\u0444\u0438\u043a\u0438"}),Object(V.jsx)("button",{className:ce.a.widgets_add,onClick:function(){return p(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0436\u0435\u0442"})]})]})]})},de=a(172),ue=a.n(de),_e=function(){var e=y(),t=e.selectedDay,a=e.selectedMonth,n=e.selectedYear,c=e.setSelectedDay,s=e.setSelectedMonth,l=e.setSelectedYear,o=e.options,_=e.setSelectedOption,j=new Date,b=v.a.getDayOnWeek(new Date(n,a,0)),m=v.a.getCountDaysInMonth(a+1),h=v.a.getCountDaysInMonth(a),f=42-(m+b),p=function(){var e=a-1;e<0&&(e=11,l(n-1)),s(e)},O=function(){var e=a+1;e>11&&(e=0,l(n+1)),s(e)};return Object(V.jsxs)("div",{className:ue.a["calendar-container"],children:[Object(V.jsxs)("div",{className:ue.a.calendar_title,children:[Object(V.jsx)("h3",{children:"\u0412\u044b\u0431\u043e\u0440 \u0434\u0430\u0442\u044b"}),Object(V.jsx)("div",{className:ue.a.calendar_select,children:Object(V.jsx)(u.f,{options:o,onChange:function(e){_(e)}})})]}),Object(V.jsxs)("div",{className:ue.a["calendar_month-switch"],children:[Object(V.jsx)("span",{className:ue.a["calendar_month-switch_svg"],onClick:p,children:Object(V.jsx)("svg",{width:"6",height:"12",viewBox:"0 0 6 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{d:"M5.775 9.975C6.075 10.275 6.075 10.725 5.775 11.025C5.625 11.175 5.475 11.25 5.25 11.25C5.025 11.25 4.875 11.175 4.725 11.025L0.225 6.525C-0.075 6.225 -0.075 5.775 0.225 5.475L4.725 0.975C5.025 0.675 5.475 0.675 5.775 0.975C6.075 1.275 6.075 1.725 5.775 2.025L1.8 6L5.775 9.975Z",fill:"#6E6B7B"})})}),Object(V.jsxs)("div",{className:ue.a["calendar_month-switch_date"],children:[Object(V.jsx)("span",{className:ue.a["calendar_month-switch_month"],children:v.a.monthRuNames[a]}),Object(V.jsx)("span",{className:ue.a["calendar_month-switch_year"],children:n})]}),Object(V.jsx)("span",{className:ue.a["calendar_month-switch_svg"],onClick:O,children:Object(V.jsx)("svg",{width:"6",height:"12",viewBox:"0 0 6 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(V.jsx)("path",{d:"M5.775 6.525L1.275 11.025C1.125 11.175 0.975 11.25 0.75 11.25C0.525 11.25 0.375 11.175 0.225 11.025C-0.075 10.725 -0.075 10.275 0.225 9.975L4.2 6L0.225 2.025C-0.075 1.725 -0.075 1.275 0.225 0.975C0.525 0.675 0.975 0.675 1.275 0.975L5.775 5.475C6.075 5.775 6.075 6.225 5.775 6.525Z",fill:"#6E6B7B"})})})]}),Object(V.jsx)("div",{className:ue.a["calendar_week-days"],children:Object(r.map)(v.a.dayRuNames,(function(e){return Object(V.jsx)("div",{className:ue.a["calendar_week-days_item"],children:e.abbreviation},e.abbreviation)}))}),Object(V.jsxs)("div",{className:ue.a.calendar,children:[Object(r.range)(h-b+1,h+1).map((function(e){return Object(V.jsx)("div",{className:"".concat(ue.a.calendar_day," ").concat(ue.a.disabled),onClick:function(){p(),c(e)},children:e},"prev_".concat(e))})),Object(r.range)(1,m+1).map((function(e){var s;return Object(V.jsx)("div",{className:d()(ue.a.calendar_day,(s={},Object(i.a)(s,ue.a.now,e===j.getDate()&&j.getMonth()===a&&j.getFullYear()===n),Object(i.a)(s,ue.a.select,e===t),s)),onClick:function(){return c(e)},children:e},"active_".concat(e))})),Object(r.range)(1,f+1).map((function(e){return Object(V.jsx)("div",{className:"".concat(ue.a.calendar_day," ").concat(ue.a.disabled),onClick:function(){O(),c(e)},children:e},"next_".concat(e))}))]})]})},je=a(173),be=a.n(je),me=function(){var e=g().transactionGlobalItems,t=y(),a=t.selectedMonthName,n=t.selectedYear,c=t.selectedOption,s=e.filter((function(e){return e.amount>0}));return Object(V.jsxs)("div",{className:be.a["total-amount"],children:[Object(V.jsxs)("div",{className:be.a["total-amount_content"],children:[Object(V.jsxs)("h2",{className:be.a["total-amount_title"],children:[a," ",n]}),s.length?Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{children:Object(r.map)(s,(function(e,t){return Object(V.jsxs)("div",{className:be.a["total-amount_row"],children:[Object(V.jsx)("span",{children:e.name}),Object(V.jsx)("span",{className:be.a["total-amount_count"],children:e.amount})]},"".concat(t,"_").concat(e.name))}))})}):Object(V.jsx)("div",{style:{width:"100%",height:"50%",display:"flex",justifyContent:"center",alignItems:"center"},children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),Object(V.jsx)("div",{className:be.a["total-amount_juke"],children:Object(V.jsxs)("span",{className:be.a["total-amount_juke_text"],children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0437\u0430 ",c.toLowerCase()]})})]})},he=a(123),fe=a(4),pe=a(174),Oe=a.n(pe);t.default=function(){var e=Object(he.a)(),t=e.username,a=e.fetchInfo,n=e.loggedIn;return c.a.useEffect((function(){!t&&n&&a()}),[t,a,n]),Object(V.jsx)("div",{className:Oe.a.home,children:n?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:Oe.a["pockets-wrapper"],children:Object(V.jsxs)("div",{className:Oe.a.pockets,children:[Object(V.jsx)("h2",{children:"Pockets"}),Object(V.jsxs)("div",{className:Oe.a.pockets_content,children:[Object(V.jsxs)("div",{className:Oe.a.pockets_tables,children:[Object(V.jsx)(H,{}),Object(V.jsx)(X,{})]}),Object(V.jsx)(oe,{})]})]})}),Object(V.jsxs)("div",{className:Oe.a.utils,children:[Object(V.jsxs)("div",{children:[Object(V.jsxs)("div",{className:Oe.a.profile,children:[Object(V.jsxs)("div",{className:Oe.a["profile_photo-container"],children:[Object(V.jsx)("img",{src:"https://thispersondoesnotexist.com/image",className:Oe.a.profile_photo,alt:"personal_photo"}),Object(V.jsx)("div",{className:Oe.a["profile_photo_edit-container"],children:Object(V.jsx)("img",{src:s,className:Oe.a.profile_photo_edit,alt:"personal_photo"})})]}),Object(V.jsxs)("h2",{children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",t]})]}),Object(V.jsx)("div",{className:Oe.a.utils_calendar,children:Object(V.jsx)(_e,{})})]}),Object(V.jsxs)("div",{className:Oe.a["total-amount"],children:[Object(V.jsx)("h3",{className:Oe.a["total-amount_title"],children:"\u0412\u0441\u0435\u0433\u043e"}),Object(V.jsx)(me,{})]})]})]}):Object(V.jsx)(fe.a,{to:"/auth"})})}}}]);
//# sourceMappingURL=5.ac363117.chunk.js.map