function y(n){return n===void 0}function h(n){return n===null}function c(n){return typeof n=="boolean"}function l(n){return n===Object(n)}function A(n){return Array.isArray(n)}function F(n){return n instanceof Date}function f(n,t){return t?l(n)&&!y(n.uri):l(n)&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.slice=="function"}function N(n,t){return f(n,t)&&typeof n.name=="string"&&(l(n.lastModifiedDate)||typeof n.lastModified=="number")}function o(n){return y(n)?!1:n}function u(n,t,e,s){t=t||{},e=e||new FormData,t.indices=o(t.indices),t.nullsAsUndefineds=o(t.nullsAsUndefineds),t.booleansAsIntegers=o(t.booleansAsIntegers),t.allowEmptyArrays=o(t.allowEmptyArrays),t.noFilesWithArrayNotation=o(t.noFilesWithArrayNotation),t.dotsForObjectNotation=o(t.dotsForObjectNotation);const d=typeof e.getParts=="function";return y(n)||(h(n)?t.nullsAsUndefineds||e.append(s,""):c(n)?t.booleansAsIntegers?e.append(s,n?1:0):e.append(s,n):A(n)?n.length?n.forEach((i,r)=>{let a=s+"["+(t.indices?r:"")+"]";t.noFilesWithArrayNotation&&N(i,d)&&(a=s),u(i,t,e,a)}):t.allowEmptyArrays&&e.append(s+"[]",""):F(n)?e.append(s,n.toISOString()):l(n)&&!f(n,d)?Object.keys(n).forEach(i=>{const r=n[i];if(A(r))for(;i.length>2&&i.lastIndexOf("[]")===i.length-2;)i=i.substring(0,i.length-2);const a=s?t.dotsForObjectNotation?s+"."+i:s+"["+i+"]":i;u(r,t,e,a)}):e.append(s,n)),e}var O={serialize:u};export{O as s};