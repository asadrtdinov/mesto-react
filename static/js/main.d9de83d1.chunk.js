(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),a=n(6),c=n.n(a),u=(n(14),n(9)),r=n(2),s=n.p+"static/media/logo.03b78ada.svg",l=n(0);function p(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:s,alt:"\u043b\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 '\u041c\u0435\u0441\u0442\u043e'",className:"header__logo"})})}var b=i.a.createContext();function j(e){var t=e.url,n=e.alt,i=e.title,a=e.likes,c=e.owner,u=e.id,r=e.onCardClick,s=e.onRemoveButtonClick,p=e.onCardLike,j=Object(o.useContext)(b),h=c._id===j._id,d="button element__remove-button ".concat(h?"element__remove-button_visible":"element__remove-button_hidden"),m=a.some((function(e){return e._id===j._id})),_="button element__like-button ".concat(m&&"element__like-button_active");return Object(l.jsxs)("article",{className:"element",children:[Object(l.jsx)("button",{type:"button",className:d,onClick:function(){s(u)}}),Object(l.jsx)("img",{src:t,alt:n,className:"element__image",onClick:function(){r(t,i)}}),Object(l.jsxs)("div",{className:"element__description",children:[Object(l.jsx)("h2",{className:"element__title",children:i}),Object(l.jsxs)("div",{className:"element__like-container",children:[Object(l.jsx)("button",{type:"button",className:_,onClick:function(){p(a,u)}}),Object(l.jsx)("p",{className:"element__like-counter",children:a.length})]})]})]})}function h(e){var t=e.onEditAvatar,n=e.onEditProfile,i=e.onAddPlace,a=e.onCardClick,c=e.onRemoveButtonClick,u=e.cards,r=e.onCardLike,s=Object(o.useContext)(b);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("div",{className:"profile__image-container",onClick:t,children:Object(l.jsx)("img",{src:s.avatar,alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__image"})}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__title",children:s.name}),Object(l.jsx)("button",{type:"button",className:"profile__edit-button button",onClick:n}),Object(l.jsx)("p",{className:"profile__subtitle",children:s.about})]}),Object(l.jsx)("button",{type:"button",className:"profile__add-button button",onClick:i})]}),Object(l.jsx)("section",{className:"elements",children:u.map((function(e){return Object(l.jsx)(j,{url:e.link,alt:e.name,title:e.name,likes:e.likes,owner:e.owner,id:e._id,onCardClick:a,onRemoveButtonClick:c,onCardLike:r},e._id)}))})]})}function d(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})}function m(e){var t=e.title,n=e.name,o=e.isOpen,i=e.onClose,a=e.buttonValue,c=e.children,u=e.onSubmit;return Object(l.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(o&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{type:"button",className:"popup__close-button button",onClick:i}),Object(l.jsx)("h2",{className:"popup__title",children:t}),Object(l.jsxs)("form",{name:n,className:"form",onSubmit:u,children:[c,Object(l.jsx)("button",{type:"submit",className:"popup__save-button popup__submit-button form__submit",children:a})]})]})})}function _(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,a=e.buttonText,c=Object(o.useRef)();return Object(l.jsxs)(m,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",isOpen:t,onClose:n,buttonValue:a,onSubmit:function(e){e.preventDefault(),i({avatar:c.current.value})},children:[Object(l.jsx)("input",{name:"avatar",type:"url",className:"popup__input popup__input_type_avatar form__input",id:"avatar-input",placeholder:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",ref:c,required:!0}),Object(l.jsx)("span",{className:"form__input-error avatar-input-error"})]})}function f(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,a=e.buttonText,c=Object(o.useContext)(b),u=Object(o.useState)(""),s=Object(r.a)(u,2),p=s[0],j=s[1],h=Object(o.useState)(""),d=Object(r.a)(h,2),_=d[0],f=d[1];return Object(o.useEffect)((function(){j(c.name),f(c.about)}),[c,t]),Object(l.jsxs)(m,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",isOpen:t,onClose:n,buttonValue:a,onSubmit:function(e){e.preventDefault(),i({name:p,about:_})},children:[Object(l.jsx)("input",{name:"name",type:"text",className:"popup__input popup__input_type_name form__input",id:"name-input",required:!0,minLength:"2",maxLength:"40",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:p,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("span",{className:"form__input-error name-input-error"}),Object(l.jsx)("input",{name:"about",type:"text",className:"popup__input popup__input_type_about form__input",id:"about-input",required:!0,minLength:"2",maxLength:"200",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",value:_,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("span",{className:"form__input-error about-input-error"})]})}function O(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,a=e.buttonText,c=Object(o.useState)(""),u=Object(r.a)(c,2),s=u[0],p=u[1],b=Object(o.useState)(""),j=Object(r.a)(b,2),h=j[0],d=j[1];return Object(l.jsxs)(m,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",isOpen:t,onClose:n,buttonValue:a,onSubmit:function(e){e.preventDefault(),console.log(s,h),i({name:s,link:h}),p(""),d("")},children:[Object(l.jsx)("input",{name:"title",type:"text",className:"popup__input popup__input_type_title form__input",id:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:s,onChange:function(e){return p(e.target.value)},required:!0}),Object(l.jsx)("span",{className:"form__input-error title-input-error"}),Object(l.jsx)("input",{name:"link",type:"url",className:"popup__input popup__input_type_link form__input",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:h,onChange:function(e){return d(e.target.value)},required:!0}),Object(l.jsx)("span",{className:"form__input-error link-input-error"})]})}function x(e){var t=e.isOpen,n=e.onClose,o=e.onDelete,i=e.buttonText;return Object(l.jsx)(m,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirm",isOpen:t,onClose:n,buttonValue:i,onSubmit:function(e){e.preventDefault(),o()}})}function v(e){var t=e.url,n=e.title,o=e.onClose;return Object(l.jsx)("div",{className:"popup popup-image ".concat(n&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container popup-image__container",children:[Object(l.jsx)("button",{type:"button",className:"popup__close-button popup-image__close-button button",onClick:o}),Object(l.jsxs)("figure",{className:"popup-image__figure",children:[Object(l.jsx)("img",{className:"popup-image__image",src:t,alt:n}),Object(l.jsx)("figcaption",{className:"popup-image__caption",children:n})]})]})})}var k=n(7),C=n(8),g=new(function(){function e(t){Object(k.a)(this,e),this.checkResult=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this._url=t,this._authorizationToken="4bbad6bd-2811-470e-a5ed-e059873eda41"}return Object(C.a)(e,[{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:{authorization:this._authorizationToken}}).then(this.checkResult)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:{authorization:this._authorizationToken}}).then(this.checkResult)}},{key:"editProfile",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.checkResult)}},{key:"addCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.checkResult)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/"+e,{method:"DELETE",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then(this.checkResult)}},{key:"addLike",value:function(e){return fetch(this._url+"/cards/likes/"+e,{method:"PUT",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then(this.checkResult)}},{key:"removeLike",value:function(e){return fetch(this._url+"/cards/likes/"+e,{method:"DELETE",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then(this.checkResult)}},{key:"editAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.checkResult)}}]),e}())("https://nomoreparties.co/v1/cohort-28");var N=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(o.useState)(!1),c=Object(r.a)(a,2),s=c[0],j=c[1],m=Object(o.useState)(!1),k=Object(r.a)(m,2),C=k[0],N=k[1],y=Object(o.useState)(!1),T=Object(r.a)(y,2),S=T[0],L=T[1],z=Object(o.useState)([]),P=Object(r.a)(z,2),R=P[0],E=P[1],A=Object(o.useState)({}),D=Object(r.a)(A,2),U=D[0],w=D[1],B=Object(o.useState)({name:"",about:""}),I=Object(r.a)(B,2),q=I[0],J=I[1],V=Object(o.useState)(""),F=Object(r.a)(V,2),H=F[0],M=F[1],G=Object(o.useState)("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),K=Object(r.a)(G,2),Q=K[0],W=K[1],X=Object(o.useState)("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=Object(o.useState)("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),te=Object(r.a)(ee,2),ne=te[0],oe=te[1],ie=Object(o.useState)("\u0414\u0430"),ae=Object(r.a)(ie,2),ce=ae[0],ue=ae[1];Object(o.useEffect)((function(){g.getInitialCards().then((function(e){E(e)})).catch((function(e){return console.log(e),[]}))}),[]),Object(o.useEffect)((function(){g.getUserInfo().then((function(e){J(e)})).catch((function(e){return console.log(e),[]}))}),[]);var re=function(){i(!1),j(!1),N(!1),L(!1),w({})},se=function(){ue("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),g.deleteCard(H).then((function(){E((function(e){return e.filter((function(e){return e._id!==H}))}))})).catch((function(e){return console.log(e),[]})).finally((function(){re(),ue("\u0414\u0430")}))};return Object(l.jsxs)(b.Provider,{value:q,children:[Object(l.jsx)(p,{}),Object(l.jsx)(h,{onEditAvatar:function(){i(!0)},onEditProfile:function(){j(!0)},onAddPlace:function(){N(!0)},onCardClick:function(e,t){w({url:e,title:t})},onRemoveButtonClick:function(e){M(e),L(!0)},cards:R,onCardLike:function(e,t){e.some((function(e){return e._id===q._id}))?g.removeLike(t).then((function(e){E((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return console.log(e),[]})):g.addLike(t).then((function(e){E((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return console.log(e),[]}))},onCardDelete:se}),Object(l.jsx)(d,{}),Object(l.jsx)(_,{isOpen:n,onClose:re,onUpdateAvatar:function(e){W("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),g.editAvatar(e).then((function(e){return J(e)})).then((function(){re(),W("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})).catch((function(e){return console.log(e),[]}))},buttonText:Q}),Object(l.jsx)(f,{isOpen:s,onClose:re,onUpdateUser:function(e,t){$("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),g.editProfile(e,t).then((function(e){return J(e)})).then((function(){re(),$("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})).catch((function(e){return console.log(e),[]}))},buttonText:Z}),Object(l.jsx)(O,{isOpen:C,onClose:re,onAddPlace:function(e,t){oe("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),g.addCard(e,t).then((function(e){return E([e].concat(Object(u.a)(R)))})).then((function(){re(),oe("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")})).catch((function(e){return console.log(e),[]}))},buttonText:ne}),Object(l.jsx)(v,{onClose:re,url:U.url,title:U.title}),Object(l.jsx)(x,{isOpen:S,onClose:re,onDelete:se,buttonText:ce})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),a(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.d9de83d1.chunk.js.map