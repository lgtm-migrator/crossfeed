(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{sbla:function(e,n){e.exports=function(e){var n={keyword:"if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",literal:"true false nil",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},a="[A-Za-z$_][0-9A-Za-z$_]*",s={className:"subst",begin:/#\{/,end:/\}/,keywords:n},i=[e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s]}]},{className:"built_in",begin:"@__"+e.IDENT_RE},{begin:"@"+e.IDENT_RE},{begin:e.IDENT_RE+"\\\\"+e.IDENT_RE}];s.contains=i;var t=e.inherit(e.TITLE_MODE,{begin:a}),r={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(i)}]};return{name:"MoonScript",aliases:["moon"],keywords:n,illegal:/\/\*/,contains:i.concat([e.COMMENT("--","$"),{className:"function",begin:"^\\s*"+a+"\\s*=\\s*(\\(.*\\)\\s*)?\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[t,r]},{begin:/[\(,:=]\s*/,relevance:0,contains:[{className:"function",begin:"(\\(.*\\)\\s*)?\\B[-=]>",end:"[-=]>",returnBegin:!0,contains:[r]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[t]},t]},{className:"name",begin:a+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_moonscript-9c1b5359dab495aa149c.js.map