"use strict";(self.webpackChunklanding_page_gem=self.webpackChunklanding_page_gem||[]).push([[917],{917:function(e,t){function n(e){return Math.floor(e.getBoundingClientRect().top)}function o(e){const t=e.target.getAttribute("href").replace(/^#/,""),o=document.getElementById(t),r=n(o);e.preventDefault(),window.scrollBy({top:r,left:0,behavior:"smooth"});const c=setInterval((()=>{const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-2;(0===n(o)||e)&&(document.querySelector('.inputWrapper input[placeholder="First Name"]').select(),clearInterval(c))}),100)}t.default=function(){document.querySelector('a[href="#page-top"]').addEventListener("click",o)}}}]);