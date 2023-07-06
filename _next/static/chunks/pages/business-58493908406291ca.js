(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{8548:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/business",function(){return n(1290)}])},979:function(e,s,n){"use strict";var t=n(5893),a=n(1163),r=n(7391);s.Z={logo:(0,t.jsx)("strong",{children:"Dashlane CLI"}),project:{link:"https://github.com/Dashlane/dashlane-cli"},docsRepositoryBase:"https://github.com/Dashlane/dashlane-cli/blob/master/documentation",banner:{key:"2.0-release",text:(0,t.jsx)("a",{href:"https://github.com/Dashlane/dashlane-cli/releases",target:"_blank",children:"\uD83D\uDCC2 Download Dashlane CLI builds for Macos, Windows and Linux here →"})},footer:{text:(0,t.jsxs)("span",{children:["Apache $",new Date().getFullYear()," \xa9 Dashlane, Inc."]})},useNextSeoProps(){let{asPath:e}=(0,a.useRouter)();if("/"!==e)return{titleTemplate:"%s - Dashlane CLI"}},head:()=>{let{asPath:e,defaultLocale:s,locale:n}=(0,a.useRouter)(),{frontMatter:i}=(0,r.ZR)(),o="https://dashlane.github.io/dashlane-cli"+(s===n?e:"/".concat(n).concat(e));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{property:"og:url",content:o}),(0,t.jsx)("meta",{property:"og:title",content:i.title||"Dashlane CLI"}),(0,t.jsx)("meta",{property:"og:description",content:i.description||"Learn how to access your Dashlane vault and API endpoints from the command line."})]})}}},1290:function(e,s,n){"use strict";n.r(s);var t=n(5893),a=n(2673),r=n(7391),i=n(979);n(9966);var o=n(1151);n(5675);var l=n(1149);let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/business/index.mdx",route:"/business",headings:[{depth:1,value:"Get started with Business Commands",id:"get-started-with-business-commands"},{depth:2,value:"Generate credentials",id:"generate-credentials"},{depth:2,value:"Revoke credentials",id:"revoke-credentials"}],pageMap:[{kind:"Meta",data:{index:"Introduction",install:"Install",personal:"Personal",business:"Business",reset:"Reset local data"}},{kind:"Folder",name:"business",route:"/business",children:[{kind:"Meta",data:{index:"Get Started","audit-logs":"Audit Logs",members:"Members",reports:"Reports"}},{kind:"MdxPage",name:"audit-logs",route:"/business/audit-logs"},{kind:"MdxPage",name:"index",route:"/business"},{kind:"MdxPage",name:"members",route:"/business/members"},{kind:"MdxPage",name:"reports",route:"/business/reports"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"install",route:"/install"},{kind:"Folder",name:"personal",route:"/personal",children:[{kind:"Meta",data:{index:"Get Started",authentication:"Authentication",vault:"Accessing your Vault"}},{kind:"MdxPage",name:"authentication",route:"/personal/authentication"},{kind:"MdxPage",name:"index",route:"/personal"},{kind:"MdxPage",name:"vault",route:"/personal/vault"}]},{kind:"MdxPage",name:"reset",route:"/reset"}],flexsearch:{codeblocks:!0},title:"Get started with Business Commands"},pageNextRoute:"/business",nextraLayout:r.ZP,themeConfig:i.Z};function c(e){let s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Get started with Business Commands"}),"\n",(0,t.jsx)(s.p,{children:"Commands related to business use a different authentication than your personal vault."}),"\n",(0,t.jsxs)(s.p,{children:["Commands are calling a server API to perform actions and retrieve data. The first step is to login with the personal account (",(0,t.jsx)(s.a,{href:"/personal/authentication",children:"follow this guide"}),") of a team admin and to generate a set of credentials."]}),"\n",(0,t.jsx)(s.h2,{id:"generate-credentials",children:"Generate credentials"}),"\n",(0,t.jsx)(l.UW,{emoji:"\uD83D\uDCA1",children:"Needs to be authenticated as an admin to use this command."}),"\n",(0,t.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,t.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"dcli"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"t"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"generate-credentials"})]})})}),"\n",(0,t.jsx)(s.p,{children:"You will be prompted with a list of variables to export in your environment."}),"\n",(0,t.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,t.jsxs)(s.code,{"data-language":"sh","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" DASHLANE_TEAM_UUID"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"08"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"a48d4f-[..redacted..]-fba9193d968c"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" DASHLANE_TEAM_ACCESS_KEY"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"f56[..redacted..]56ce"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" DASHLANE_TEAM_SECRET_KEY"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"839"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"c9[..redacted..]3ada5"})]})]})}),"\n",(0,t.jsx)(s.h2,{id:"revoke-credentials",children:"Revoke credentials"}),"\n",(0,t.jsx)(l.UW,{emoji:"\uD83D\uDCA1",children:"Needs to be authenticated as an admin to use this command."}),"\n",(0,t.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,t.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"dcli"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"t"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"revoke-credentials"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"DASHLANE_TEAM_ACCESS_KE"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Y"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})})]})}s.default=(0,a.j)(d)}},function(e){e.O(0,[774,606,888,179],function(){return e(e.s=8548)}),_N_E=e.O()}]);