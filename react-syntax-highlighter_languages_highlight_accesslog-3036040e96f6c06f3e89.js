(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{mY11:function(n,e){function a(n){return n?"string"==typeof n?n:n.source:null}function r(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var l=e.map((function(n){return a(n)})).join("");return l}function l(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var l="("+e.map((function(n){return a(n)})).join("|")+")";return l}n.exports=function(n){var e=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:r(/"/,l.apply(void 0,e)),end:/"/,keywords:e,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_accesslog-3036040e96f6c06f3e89.js.map