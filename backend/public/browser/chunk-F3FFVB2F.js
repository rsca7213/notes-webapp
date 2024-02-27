import{a as Y}from"./chunk-KRUIRFKR.js";import{A as f,B as C,C as _,D as l,F as w,L as V,N as W,U as J,V as U,W as D,X as Q,Y as I,Z as G,_ as j,aa as O,ba as A,c as b,ca as B,e as v,f as h,g as T,h as u,ha as X,i as y,ia as k,k as F,ka as L,m as p,ma as Z,n as M,o as E,p as S,q as N,s as K,t as P,u as r,v as n,w as c,x,y as d,z as g}from"./chunk-OXQK2SU4.js";var ne=["modal"];function ae(i,e){if(i&1){let m=x();r(0,"div",1),c(1,"span",2),l(2," Create Category "),n(),r(3,"div",3)(4,"form",4)(5,"div",5)(6,"label",6),c(7,"span",7),l(8," Name "),n(),c(9,"input",8),r(10,"div",9),l(11),n()()()(),r(12,"div",10)(13,"button",11),d("click",function(){u(m);let t=g();return y(t.closeModal())}),c(14,"span",12),l(15," Cancel "),n(),r(16,"button",13),d("click",function(){u(m);let t=g();return y(t.createCategory())}),c(17,"span",14),l(18," Confirm "),n()()}if(i&2){let m=g();p(4),S("formGroup",m.form),p(5),N(m.formErrors.name?"is-invalid":""),p(2),w(" ",m.formErrors.name," ")}}var $=(()=>{let e=class e{constructor(o){this.modalService=o,this.categoryCreated=new v,this.form=new G({name:new j("",[D.required,D.minLength(3)])}),this.formErrors={name:""}}closeModal(){this.modal.close(),this.form.reset()}validateForm(){return this.form.get("name")?.invalid&&(this.formErrors.name="Name is required and must be at least 3 characters long"),this.form.valid}createCategory(){if(!this.validateForm())return;let o={id:0,name:this.form.get("name")?.value??""};this.categoryCreated.emit(o),this.closeModal()}openModal(){this.modal=this.modalService.open(this.modalRef,{centered:!0})}};e.\u0275fac=function(t){return new(t||e)(M(k))},e.\u0275cmp=h({type:e,selectors:[["app-components-categories-create-category-modal"]],viewQuery:function(t,a){if(t&1&&f(ne,5),t&2){let s;C(s=_())&&(a.modalRef=s.first)}},outputs:{categoryCreated:"categoryCreated"},decls:2,vars:0,consts:[["modal",""],[1,"modal-header"],["data-icon","mdi-plus-circle",1,"iconify","me-2"],[1,"modal-body"],[3,"formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["data-icon","mdi-tag",1,"iconify"],["type","text","id","name","name","name","formControlName","name",1,"form-control"],[1,"invalid-feedback"],[1,"modal-footer","text-end"],[1,"btn","btn-secondary",3,"click"],["data-icon","mdi-close",1,"iconify"],[1,"btn","btn-success",3,"click"],["data-icon","mdi-check",1,"iconify"]],template:function(t,a){t&1&&E(0,ae,19,4,"ng-template",null,0,V)},dependencies:[O,U,Q,I,A,B]});let i=e;return i})();var ce=["modal"];function me(i,e){if(i&1){let m=x();r(0,"div",1),c(1,"span",2),l(2," Update Category "),n(),r(3,"div",3)(4,"form",4)(5,"div",5)(6,"label",6),c(7,"span",7),l(8," Name "),n(),c(9,"input",8),r(10,"div",9),l(11),n()()()(),r(12,"div",10)(13,"button",11),d("click",function(){u(m);let t=g();return y(t.closeModal())}),c(14,"span",12),l(15," Cancel "),n(),r(16,"button",13),d("click",function(){u(m);let t=g();return y(t.updateCategory())}),c(17,"span",14),l(18," Confirm "),n()()}if(i&2){let m=g();p(4),S("formGroup",m.form),p(5),N(m.formErrors.name?"is-invalid":""),p(2),w(" ",m.formErrors.name," ")}}var z=(()=>{let e=class e{constructor(o){this.modalService=o,this.categoryUpdated=new v,this.form=new G({name:new j("",[D.required,D.minLength(3)])}),this.formErrors={name:""}}closeModal(){this.modal.close(),this.form.reset()}validateForm(){return this.form.get("name")?.invalid&&(this.formErrors.name="Name is required and must be at least 3 characters long"),this.form.valid}updateCategory(){if(!this.validateForm())return;let o={id:this.category.id,name:this.form.get("name")?.value??""};this.categoryUpdated.emit(o),this.closeModal()}openModal(o){this.category=o,this.form.get("name")?.setValue(o.name),this.modal=this.modalService.open(this.modalRef,{centered:!0})}};e.\u0275fac=function(t){return new(t||e)(M(k))},e.\u0275cmp=h({type:e,selectors:[["app-components-categories-update-category-modal"]],viewQuery:function(t,a){if(t&1&&f(ce,5),t&2){let s;C(s=_())&&(a.modalRef=s.first)}},outputs:{categoryUpdated:"categoryUpdated"},decls:2,vars:0,consts:[["modal",""],[1,"modal-header"],["data-icon","mdi-edit",1,"iconify","me-2"],[1,"modal-body"],[3,"formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["data-icon","mdi-tag",1,"iconify"],["type","text","id","name","name","name","formControlName","name",1,"form-control"],[1,"invalid-feedback"],[1,"modal-footer","text-end"],[1,"btn","btn-secondary",3,"click"],["data-icon","mdi-close",1,"iconify"],[1,"btn","btn-success",3,"click"],["data-icon","mdi-check",1,"iconify"]],template:function(t,a){t&1&&E(0,me,19,4,"ng-template",null,0,V)},dependencies:[O,U,Q,I,A,B]});let i=e;return i})();var de=["modal"];function pe(i,e){if(i&1){let m=x();r(0,"div",1),c(1,"span",2),l(2," Delete Category "),n(),r(3,"div",3)(4,"p"),l(5),n()(),r(6,"div",4)(7,"button",5),d("click",function(){u(m);let t=g();return y(t.closeModal())}),c(8,"span",6),l(9," Cancel "),n(),r(10,"button",7),d("click",function(){u(m);let t=g();return y(t.deleteCategory())}),c(11,"span",8),l(12," Confirm "),n()()}if(i&2){let m=g();p(5),w("Are you sure you want to delete the category titled ",m.category.name,"?")}}var H=(()=>{let e=class e{constructor(o){this.modalService=o,this.categoryDeleted=new v}deleteCategory(){this.categoryDeleted.emit(this.category.id),this.modal.close()}closeModal(){this.modal.close()}openModal(o){this.category=o,this.modal=this.modalService.open(this.modalRef,{centered:!0})}};e.\u0275fac=function(t){return new(t||e)(M(k))},e.\u0275cmp=h({type:e,selectors:[["app-components-categories-delete-category-modal"]],viewQuery:function(t,a){if(t&1&&f(de,5),t&2){let s;C(s=_())&&(a.modalRef=s.first)}},outputs:{categoryDeleted:"categoryDeleted"},decls:2,vars:0,consts:[["modal",""],[1,"modal-header"],["data-icon","mdi-trash",1,"iconify","me-2"],[1,"modal-body"],[1,"modal-footer","text-end"],[1,"btn","btn-secondary",3,"click"],["data-icon","mdi-close",1,"iconify"],[1,"btn","btn-success",3,"click"],["data-icon","mdi-check",1,"iconify"]],template:function(t,a){t&1&&E(0,pe,13,1,"ng-template",null,0,V)}});let i=e;return i})();var te=(()=>{let e=class e{constructor(){this.categoryDeleteRequested=new v,this.categoryUpdateRequested=new v}deleteCategory(){this.categoryDeleteRequested.emit(this.category)}updateCategory(){this.categoryUpdateRequested.emit(this.category)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-categories-category"]],inputs:{category:"category"},outputs:{categoryDeleteRequested:"categoryDeleteRequested",categoryUpdateRequested:"categoryUpdateRequested"},decls:11,vars:1,consts:[[1,"card","shadow"],[1,"card-body"],[1,"card-title"],["data-icon","mdi-tag",1,"iconify"],[1,"btn","ms-1","btn-sm","btn-warning",3,"click"],["data-icon","mdi-pencil",1,"iconify"],[1,"btn","ms-1","btn-sm","btn-danger",3,"click"],["data-icon","mdi-trash",1,"iconify"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),c(3,"span",3),l(4),n(),r(5,"button",4),d("click",function(){return a.updateCategory()}),c(6,"span",5),l(7," Edit "),n(),r(8,"button",6),d("click",function(){return a.deleteCategory()}),c(9,"span",7),l(10," Delete "),n()()()),t&2&&(p(4),w(" ",a.category.name," "))}});let i=e;return i})();var ye=(i,e)=>e.id;function fe(i,e){if(i&1){let m=x();r(0,"div",9)(1,"app-components-categories-category",10),d("categoryDeleteRequested",function(t){u(m);let a=g();return y(a.openDeleteCategoryModal(t))})("categoryUpdateRequested",function(t){u(m);let a=g();return y(a.openUpdateCategoryModal(t))}),n()()}if(i&2){let m=e.$implicit;p(),S("category",m)}}function Ce(i,e){i&1&&(r(0,"div",11)(1,"p",12),c(2,"span",13),l(3," No categories found. "),n()())}var oe=(()=>{let e=class e{constructor(o){this.categoriesService=o,this.categories=[]}openCreateCategoryModal(){this.createCategoryModalComponent.openModal()}openUpdateCategoryModal(o){this.updateCategoryModalComponent.openModal(o)}openDeleteCategoryModal(o){this.deleteCategoryModalComponent.openModal(o)}getCategories(){return b(this,null,function*(){this.categoriesService.getCategories().subscribe({next:o=>{this.categories=o},error:()=>{this.errorModalComponent.openModal("Couldn't fetch categories, please try again.")}})})}createCategory(o){return b(this,null,function*(){this.categoriesService.createCategory(o).subscribe({next:()=>{this.getCategories()},error:()=>{this.errorModalComponent.openModal("Couldn't create category, please try again.")}})})}updateCategory(o){return b(this,null,function*(){this.categoriesService.updateCategoryById(o).subscribe({next:()=>{let t=this.categories.find(a=>a.id===o.id);t&&(t.name=o.name)},error:()=>{this.errorModalComponent.openModal("Couldn't update category, please try again.")}})})}deleteCategory(o){return b(this,null,function*(){this.categoriesService.deleteCategoryById(o).subscribe({next:()=>{this.categories=this.categories.filter(t=>t.id!==o)},error:()=>{this.errorModalComponent.openModal("Couldn't delete category, please try again.")}})})}ngOnInit(){return b(this,null,function*(){this.getCategories()})}};e.\u0275fac=function(t){return new(t||e)(M(Y))},e.\u0275cmp=h({type:e,selectors:[["app-views-categories"]],viewQuery:function(t,a){if(t&1&&(f($,5),f(z,5),f(H,5),f(L,5)),t&2){let s;C(s=_())&&(a.createCategoryModalComponent=s.first),C(s=_())&&(a.updateCategoryModalComponent=s.first),C(s=_())&&(a.deleteCategoryModalComponent=s.first),C(s=_())&&(a.errorModalComponent=s.first)}},decls:18,vars:1,consts:[[3,"categoryCreated"],[3,"categoryUpdated"],[3,"categoryDeleted"],[1,"container"],[1,"row","my-3"],[1,"col","text-center"],[1,"btn","btn-primary",3,"click"],["data-icon","mdi-plus-circle",1,"iconify"],[1,"row"],[1,"col-12","col-lg-6","py-2"],[3,"category","categoryDeleteRequested","categoryUpdateRequested"],[1,"col-12","mt-3","py-2","alert","alert-warning"],[1,"text-center","h3"],["data-icon","mdi-note-off",1,"iconify"],["class","col-12 col-lg-6 py-2"],["class","col-12 mt-3 py-2 alert alert-warning"]],template:function(t,a){t&1&&(r(0,"app-components-categories-create-category-modal",0),d("categoryCreated",function(q){return a.createCategory(q)}),n(),r(1,"app-components-categories-update-category-modal",1),d("categoryUpdated",function(q){return a.updateCategory(q)}),n(),r(2,"app-components-categories-delete-category-modal",2),d("categoryDeleted",function(q){return a.deleteCategory(q)}),n(),c(3,"app-components-shared-error-modal"),r(4,"div",3)(5,"div",4)(6,"div",5)(7,"h4"),l(8,"Categories"),n()()(),r(9,"div",4)(10,"div",5)(11,"button",6),d("click",function(){return a.openCreateCategoryModal()}),c(12,"span",7),l(13," Create Category "),n()()(),r(14,"div",8),K(15,fe,2,1,"div",14,ye,!1,Ce,4,0,"div",15),n()()),t&2&&(p(15),P(a.categories))},dependencies:[L,te,$,z,H]});let i=e;return i})();var _e=[{path:"",component:oe}],ie=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[J.forChild(_e),J]});let i=e;return i})();var ct=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[W,ie,X,Z]});let i=e;return i})();export{ct as CategoriesModule};