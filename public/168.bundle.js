"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[168],{168:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var n=s(540),i=s(848),r=s(976),c=s(468),o=s(246);const l=function(t){var e=t.id,s=t.title,r=t.price,l=t.type,a=t.count,d=t.size,h=(0,c.wA)(),j=n.useMemo((function(){return r*a}),[r,a]);return(0,i.jsx)("div",{className:"content__items",children:(0,i.jsxs)("div",{className:"cart__item",children:[(0,i.jsx)("div",{className:"cart__item-img",children:(0,i.jsx)("img",{className:"item-block__image",src:"https://gdr.one/simg/128",alt:"item"})}),(0,i.jsxs)("div",{className:"cart__item-info",children:[(0,i.jsx)("h3",{children:s}),(0,i.jsxs)("p",{children:[l,", ",d]})]}),(0,i.jsxs)("div",{className:"cart__item-count",children:[(0,i.jsx)("div",{onClick:function(){a>1&&h((0,o.G8)(e))},className:"button button--outline button--circle cart__item-count-minus ".concat(1===a?"button_disabled":""),children:(0,i.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,i.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),(0,i.jsx)("b",{children:a}),(0,i.jsx)("div",{onClick:function(){h((0,o.B5)({id:e}))},className:"button button--outline button--circle cart__item-count-plus",children:(0,i.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,i.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),(0,i.jsx)("div",{className:"cart__item-price",children:(0,i.jsxs)("b",{children:[j," ₽"]})}),(0,i.jsx)("div",{onClick:function(){window.confirm("Вы уверены, что хотитие удалить данный товар?")&&h((0,o.Ai)(e))},className:"cart__item-remove",children:(0,i.jsx)("div",{className:"button button--outline button--circle",children:(0,i.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,i.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})})},a=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"cart cart--empty",children:[(0,i.jsx)("h2",{children:"Корзина пустая"}),(0,i.jsxs)("p",{children:["Вероятней всего, вы не выбрали нужный товар.",(0,i.jsx)("br",{}),"Для того, чтобы заказать товар, перейди на главную страницу."]}),(0,i.jsx)("img",{}),(0,i.jsx)(r.N_,{to:"/",className:"button button--black",children:(0,i.jsx)("span",{children:"Вернуться назад"})})]})})};var d=function(){return d=Object.assign||function(t){for(var e,s=1,n=arguments.length;s<n;s++)for(var i in e=arguments[s])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},d.apply(this,arguments)};const h=function(){var t=(0,c.d4)((function(t){return t.cart})),e=t.totalPrice,s=t.items,h=s.reduce((function(t,e){return t+e.count}),0),j=(0,c.wA)();return e?(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("div",{className:"container container--cart",children:(0,i.jsxs)("div",{className:"cart",children:[(0,i.jsxs)("div",{className:"cart__top",children:[(0,i.jsxs)("h2",{className:"content__title",children:[(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Корзина"]}),(0,i.jsxs)("div",{onClick:function(){window.confirm("Вы уверены, что хотитие удалить все товары?")&&j((0,o.N2)())},className:"cart__clear",children:[(0,i.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,i.jsx)("span",{children:"Очистить корзину"})]})]}),s.map((function(t){return(0,n.createElement)(l,d({},t,{key:t.id}))})),(0,i.jsxs)("div",{className:"cart__bottom",children:[(0,i.jsxs)("div",{className:"cart__bottom-details",children:[(0,i.jsxs)("span",{children:[" ","Всего товаров: ",(0,i.jsxs)("b",{children:[h," шт."]})," "]}),(0,i.jsxs)("span",{children:[" ","Сумма заказа: ",(0,i.jsxs)("b",{children:[e," ₽"]})," "]})]}),(0,i.jsxs)("div",{className:"cart__bottom-buttons",children:[(0,i.jsxs)(r.N_,{to:"/",className:"button button--outline button--add go-back-btn",children:[(0,i.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,i.jsx)("span",{children:"Вернуться назад"})]}),(0,i.jsx)("div",{className:"button pay-btn",children:(0,i.jsx)("span",{children:"Оплатить сейчас"})})]})]})]})})})}):(0,i.jsx)(a,{})}}}]);