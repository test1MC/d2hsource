(function(){var o=function(n){n.data=="getContent"&&window.parent&&window.parent.postMessage({doc:document.documentElement.outerHTML},"*")},u;if(window.addEventListener?window.addEventListener("message",o):window.attachEvent&&window.attachEvent("message",o),!/\Wnhr=false(\W|$)/i.test(location.href)&&!window.top.nethelp||/\Wnhr=true(\W|$)/i.test(location.href)){var n="../",e=document,f=location,t,h=f.hash,r=f.search||"",c=e.getElementsByTagName("script"),s=c[c.length-1],l=/(.*)nethelp\.redirector\.js$/i.exec(s.src)[1],i=e.createElement("a");i.href=".",u=i.href==="."?function(n){return i.href=n,i.getAttribute("href",4)}:function(n){return i.setAttribute("href",n),i.href},t=u("#").replace(/(\?.*|#)$/,""),n=s.getAttribute("data-target-path")||u((l||"./")+n),window.nethelpRedirect=function(i,e){var o=/(([^?#]+\/)*[^\/?#]*)(\?[^#]*)?(?:#.*)?$/.exec(u(n+(i||"default.htm"))),s=e?e:"#!";o&&(i=o[1],n=o[2]||"",t=t.indexOf(n)===0?t.substring(n.length):t,o[3]&&o[3].length>1&&(r=o[3]+(r.length>1?"&"+r.substring(1):"")),i=i+(r.length>1?r:"")+s+t+(h.length>1?h:""),/\Wnhr=debug(\W|$)/i.test(f.href)?window.console?console.log(i):alert(i):f.replace(i))},e.write('<script type="text/javascript" src="'+n+'nethelppage.js"><\/script>')}})()