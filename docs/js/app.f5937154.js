(function(t){function e(e){for(var n,r,l=e[0],a=e[1],u=e[2],d=0,f=[];d<l.length;d++)r=l[d],o[r]&&f.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,l=1;l<i.length;l++){var a=i[l];0!==o[a]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=a;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),o=i.n(n);o.a},"0b09":function(t,e){},"178b":function(t,e,i){"use strict";var n=i("9e8a"),o=i.n(n);o.a},2767:function(t,e,i){},"2e2f":function(t,e,i){"use strict";var n=i("fa85"),o=i.n(n);o.a},"2e6a":function(t,e,i){},"36f5":function(t,e,i){"use strict";var n=i("2e6a"),o=i.n(n);o.a},3744:function(t,e,i){"use strict";var n=i("82de"),o=i.n(n);o.a},4050:function(t,e,i){"use strict";var n=i("92b8"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",[i("span",{staticClass:"authorName"},[t._v(" Made by João Henrique")]),i("MainTitle",{attrs:{title:t.AppTitle}})],1),i("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"1s","item-selector":".item"}},t._l(t.listsArray,function(e,n){return i("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:n,staticClass:"item"},[i("List",{attrs:{listsArray:t.listsArray[n]},on:{addItemToList:function(e){t.addItemToList(n,e)},colorClick:function(e){t.updateColor(n,e)},deleteListClick:t.deleteListClick,removeClicked:function(e){t.removeList(n)},removeItemFromList:function(e){t.removeItemFromList(n,e)},updateTitleValue:function(e){t.updateTitleValue(n,e)}}})],1)}),0),i("NewListButton",{on:{clicked:t.addNewList}},[t._v("New List")])],1)},s=[],r=i("f499"),l=i.n(r),a=i("3f9b"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.updateColor()},[i("div",{staticClass:"top-container"},[i("ColorButton",{staticClass:"colorButton",attrs:{deleteList:""},on:{clicked:t.colorClick}}),i("div",{staticClass:"title-container"},[!1===t.editableTitle?i("Title",{staticClass:"titleText",domProps:{textContent:t._s(t.listsArray.title)}}):i("TitleInput",{attrs:{title:t.listsArray.title},on:{input:t.updateTitleValue}}),i("EditButton",{attrs:{edit:t.editableTitle},on:{clicked:t.handleEditClick}})],1),i("RemoveButton",{staticClass:"deleteListButton",attrs:{deleteList:""},on:{clicked:t.deleteListClick}})],1),i("Items",{staticClass:"items-container",attrs:{items:t.listsArray.itemsArray},on:{removeThisItem:t.removeItemFromList}}),i("ItemAdder",{staticClass:"itemsAdder-container",on:{submit:t.addItemToList}})],1)},c=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ol",{staticClass:"items-list-container"},t._l(t.items,function(e,n){return i("li",{key:n,staticClass:"item-container"},[t._v("\n      "+t._s(e)+"\n      "),i("RemoveButton",{on:{clicked:function(e){t.removeItemFromList(n)}}})],1)}),0)])},f=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.deleteList?i("button",{staticClass:"remove-list-button",on:{click:t.buttonClick}},[t._v("X")]):i("button",{staticClass:"removeButton-container",on:{click:t.buttonClick}},[t._v("X")])])},p=[],v={methods:{buttonClick:function(){this.$emit("clicked")}},props:{deleteList:Boolean}},h=v,b=(i("2e2f"),i("2877")),_=Object(b["a"])(h,m,p,!1,null,"18c0f0cd",null);_.options.__file="RemoveButton.vue";var C=_.exports,y={components:{RemoveButton:C},methods:{removeItemFromList:function(t){this.$emit("removeThisItem",t)}},props:{items:Array}},I=y,w=(i("178b"),Object(b["a"])(I,d,f,!1,null,"56a4de27",null));w.options.__file="Items.vue";var L=w.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-item-container"},[i("NewItemField",{attrs:{newItemValue:t.newItem}}),i("div",{staticClass:"input-field"},[i("InputField",{on:{input:t.updateNewItem}}),i("AddButton",{on:{submited:t.submit}})],1)],1)},A=[],T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{on:{click:t.submit}},[i("span",{staticClass:"icon"},[t._v("+")])])])},g=[],$={methods:{submit:function(){this.$emit("submited")}}},O=$,x=(i("5f0f"),Object(b["a"])(O,T,g,!1,null,"9dcc5d40",null));x.options.__file="AddButton.vue";var j=x.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.newItemValue.length>3?i("p",[t._v("\n    Add\n    "),i("strong",[t._v(t._s(t.newItemValue))]),t._v(" to the list?\n  ")]):i("p",[t._v("Type the item to add")])])},E=[],N={props:{newItemValue:String}},F=N,S=Object(b["a"])(F,B,E,!1,null,null,null);S.options.__file="NewItemField.vue";var V=S.exports,P=i("8192"),M={components:{AddButton:j,NewItemField:V,InputField:P["default"]},data:function(){return{newItem:""}},methods:{submit:function(){this.newItem.length>2&&(this.$emit("submit",this.newItem),this.newItem="")},updateNewItem:function(t){this.newItem=t}}},R=M,J=(i("deea"),Object(b["a"])(R,k,A,!1,null,"7ad72cac",null));J.options.__file="ItemAdder.vue";var X=J.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{domProps:{textContent:t._s(t.title)}})},D=[],H={props:{title:String}},U=H,z=Object(b["a"])(U,q,D,!1,null,null,null);z.options.__file="Title.vue";var G=z.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input-field",domProps:{value:t.title},on:{input:[function(e){e.target.composing||(t.title=e.target.value)},function(e){t.$emit("input",e.target.value)}]}})},Q=[],W={props:{title:String}},Y=W,Z=(i("5d56"),Object(b["a"])(Y,K,Q,!1,null,"651603ff",null));Z.options.__file="TitleInput.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{on:{click:t.submit}},[t.edit?t._e():i("span",[t._v("Edit")]),t.edit?i("span",[t._v("Save")]):t._e()])])},it=[],nt={methods:{submit:function(){this.$emit("clicked")}},props:{edit:Boolean}},ot=nt,st=(i("4050"),Object(b["a"])(ot,et,it,!1,null,"b05f36f4",null));st.options.__file="EditButton.vue";var rt=st.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{on:{click:t.buttonClick}},[i("span",{staticClass:"text"},[t._v("Color")])])])},at=[],ut={methods:{buttonClick:function(){this.$emit("clicked")}},props:{deleteList:Boolean}},ct=ut,dt=(i("3744"),Object(b["a"])(ct,lt,at,!1,null,"28a65e6c",null));dt.options.__file="ColorButton.vue";var ft=dt.exports,mt={components:{ColorButton:ft,EditButton:rt,ItemAdder:X,Items:L,RemoveButton:C,Title:G,TitleInput:tt},data:function(){return{editableTitle:!1}},props:{listsArray:Object},methods:{updateColor:function(){switch(this.listsArray.color){case 1:return"list-container-green";case 2:return"list-container-red";case 3:return"list-container-blue";default:return"list-container-yellow"}},colorClick:function(){this.$emit("colorClick")},removeItemFromList:function(t){this.$emit("removeItemFromList",t)},addItemToList:function(t){this.$emit("addItemToList",t)},handleEditClick:function(){this.editableTitle=!this.editableTitle},updateTitleValue:function(t){this.$emit("updateTitleValue",t)},deleteListClick:function(){this.$emit("removeClicked")}}},pt=mt,vt=(i("36f5"),Object(b["a"])(pt,u,c,!1,null,"35f3c80e",null));vt.options.__file="List.vue";var ht=vt.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titleDiv"},[i("h1",{domProps:{textContent:t._s(t.title)}})])},_t=[],Ct={props:{title:String}},yt=Ct,It=(i("b224"),Object(b["a"])(yt,bt,_t,!1,null,null,null));It.options.__file="MainTitle.vue";var wt=It.exports,Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"button-container"},[i("button",{on:{click:t.submit}},[i("span",{staticClass:"icon"},[t._v("+")])])])},kt=[],At={methods:{submit:function(){this.$emit("clicked")}}},Tt=At,gt=(i("7287"),Object(b["a"])(Tt,Lt,kt,!1,null,"7f5d9f1e",null));gt.options.__file="NewListButton.vue";var $t=gt.exports;n["a"].use(a["a"]);var Ot={name:"app",components:{List:ht,MainTitle:wt,NewListButton:$t},data:function(){return{AppTitle:"Vue Todo List",listsArray:[{title:"Intructions",color:1,itemsArray:["Add or delete items from the list","Add new lists with the bottom-right add button","Use the color button on top-right of each list to change colors","Change title of lists using the edit button"]}],newList:{title:"New List",color:4,itemsArray:["Sample Item","Sample Item","Sample Item"]}}},methods:{updateColor:function(t){this.listsArray[t].color>3?this.listsArray[t].color=1:this.listsArray[t].color++},copyOfNewListObject:function(){return JSON.parse(l()(this.newList))},addNewList:function(){this.listsArray.push(this.copyOfNewListObject())},removeList:function(t){this.listsArray.splice(t,1)},removeItemFromList:function(t,e){this.listsArray[t].itemsArray.splice(e,1)},addItemToList:function(t,e){this.listsArray[t].itemsArray.push(e)},updateTitleValue:function(t,e){this.listsArray[t].title=e},deleteListClick:function(){this.$emit("removeClicked")}}},xt=Ot,jt=(i("034f"),Object(b["a"])(xt,o,s,!1,null,null,null));jt.options.__file="App.vue";var Bt=jt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Bt)}}).$mount("#app")},"5d56":function(t,e,i){"use strict";var n=i("ea93"),o=i.n(n);o.a},"5f0f":function(t,e,i){"use strict";var n=i("a52b"),o=i.n(n);o.a},"643a":function(t,e,i){},6452:function(t,e,i){},"64a9":function(t,e,i){},7287:function(t,e,i){"use strict";var n=i("643a"),o=i.n(n);o.a},8192:function(t,e,i){"use strict";var n=i("b21a"),o=i("9fe8"),s=(i("a82d"),i("2877")),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"abb11fa6",null);r.options.__file="InputField.vue",e["default"]=r.exports},"82de":function(t,e,i){},"92b8":function(t,e,i){},"9e8a":function(t,e,i){},"9fe8":function(t,e,i){"use strict";var n=i("0b09"),o=i.n(n);e["default"]=o.a},a52b:function(t,e,i){},a82d:function(t,e,i){"use strict";var n=i("2767"),o=i.n(n);o.a},b21a:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("input",{staticClass:"input-field",attrs:{placeholder:"New Item"},on:{input:function(e){t.$emit("input",e.target.value)}}})])},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},b224:function(t,e,i){"use strict";var n=i("d7c7"),o=i.n(n);o.a},d7c7:function(t,e,i){},deea:function(t,e,i){"use strict";var n=i("6452"),o=i.n(n);o.a},ea93:function(t,e,i){},fa85:function(t,e,i){}});
//# sourceMappingURL=app.f5937154.js.map