"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8826],{33687:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(85893),o=s(11151);const r={sidebar_label:"console",title:"io.console"},l=void 0,i={id:"reference/io/console",title:"io.console",description:"IOConsole",source:"@site/docs/reference/io/console.md",sourceDirName:"reference/io",slug:"/reference/io/console",permalink:"/autogen/docs/reference/io/console",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/io/console.md",tags:[],version:"current",frontMatter:{sidebar_label:"console",title:"io.console"},sidebar:"referenceSideBar",previous:{title:"base",permalink:"/autogen/docs/reference/io/base"},next:{title:"messages",permalink:"/autogen/docs/reference/io/messages"}},c={},d=[{value:"IOConsole",id:"ioconsole",level:2},{value:"print",id:"print",level:3},{value:"input",id:"input",level:3}];function a(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"ioconsole",children:"IOConsole"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class IOConsole(IOStream)\n"})}),"\n",(0,t.jsx)(n.p,{children:"A console input/output stream."}),"\n",(0,t.jsx)(n.h3,{id:"print",children:"print"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def print(*objects: Any,\n          sep: str = " ",\n          end: str = "\\n",\n          flush: bool = False) -> None\n'})}),"\n",(0,t.jsx)(n.p,{children:"Print data to the output stream."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"objects"})," ",(0,t.jsx)(n.em,{children:"any"})," - The data to print."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sep"})," ",(0,t.jsx)(n.em,{children:"str, optional"}),' - The separator between objects. Defaults to " ".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"end"})," ",(0,t.jsx)(n.em,{children:"str, optional"}),' - The end of the output. Defaults to "\n".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"flush"})," ",(0,t.jsx)(n.em,{children:"bool, optional"})," - Whether to flush the output. Defaults to False."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"input",children:"input"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def input(prompt: str = "", *, password: bool = False) -> str\n'})}),"\n",(0,t.jsx)(n.p,{children:"Read a line from the input stream."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prompt"})," ",(0,t.jsx)(n.em,{children:"str, optional"}),' - The prompt to display. Defaults to "".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"password"})," ",(0,t.jsx)(n.em,{children:"bool, optional"})," - Whether to read a password. Defaults to False."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"})," - The line read from the input stream."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);