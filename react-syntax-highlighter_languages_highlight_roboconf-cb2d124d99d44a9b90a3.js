(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{"9Q8I":function(n,e){n.exports=function(n){var e={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet [a-zA-Z-_][^\\n{]+\\{",end:/\}/,keywords:"facet",contains:[e,n.HASH_COMMENT_MODE]},{begin:"^\\s*instance of [a-zA-Z-_][^\\n{]+\\{",end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",e,n.HASH_COMMENT_MODE]},{begin:"^[a-zA-Z-_][^\\n{]+\\{",end:/\}/,contains:[e,n.HASH_COMMENT_MODE]},n.HASH_COMMENT_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_roboconf-cb2d124d99d44a9b90a3.js.map