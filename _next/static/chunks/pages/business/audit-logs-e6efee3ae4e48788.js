(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{8334:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/business/audit-logs",function(){return r(8430)}])},979:function(e,s,r){"use strict";var n=r(5893),t=r(1163),i=r(7391);s.Z={logo:(0,n.jsx)("strong",{children:"Dashlane CLI"}),project:{link:"https://github.com/Dashlane/dashlane-cli"},docsRepositoryBase:"https://github.com/Dashlane/dashlane-cli/blob/master/documentation",banner:{key:"2.0-release",text:(0,n.jsx)("a",{href:"https://github.com/Dashlane/dashlane-cli/releases",target:"_blank",children:"\uD83D\uDCC2 Download Dashlane CLI builds for Macos, Windows and Linux here →"})},footer:{text:(0,n.jsxs)("span",{children:["Apache $",new Date().getFullYear()," \xa9 Dashlane, Inc."]})},useNextSeoProps(){let{asPath:e}=(0,t.useRouter)();if("/"!==e)return{titleTemplate:"%s - Dashlane CLI"}},head:()=>{let{asPath:e,defaultLocale:s,locale:r}=(0,t.useRouter)(),{frontMatter:o}=(0,i.ZR)(),l="https://dashlane.github.io/dashlane-cli"+(s===r?e:"/".concat(r).concat(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"og:url",content:l}),(0,n.jsx)("meta",{property:"og:title",content:o.title||"Dashlane CLI"}),(0,n.jsx)("meta",{property:"og:description",content:o.description||"Learn how to access your Dashlane vault and API endpoints from the command line."})]})}}},8430:function(e,s,r){"use strict";r.r(s);var n=r(5893),t=r(2673),i=r(7391),o=r(979);r(9966);var l=r(1151);r(5675);var c=r(1149);let a={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/business/audit-logs.mdx",route:"/business/audit-logs",headings:[{depth:1,value:"Audit logs",id:"audit-logs"},{depth:2,value:"Fetching the logs",id:"fetching-the-logs"},{depth:2,value:"Filtering the logs",id:"filtering-the-logs"},{depth:2,value:"Logs types (default)",id:"logs-types-default"},{depth:2,value:"Logs types (sensitive)",id:"logs-types-sensitive"},{depth:2,value:"Logs categories",id:"logs-categories"}],pageMap:[{kind:"Meta",data:{index:"Introduction",install:"Install",personal:"Personal",business:"Business",reset:"Reset local data"}},{kind:"Folder",name:"business",route:"/business",children:[{kind:"Meta",data:{index:"Get Started","audit-logs":"Audit Logs",members:"Members",reports:"Reports"}},{kind:"MdxPage",name:"audit-logs",route:"/business/audit-logs"},{kind:"MdxPage",name:"index",route:"/business"},{kind:"MdxPage",name:"members",route:"/business/members"},{kind:"MdxPage",name:"reports",route:"/business/reports"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"install",route:"/install"},{kind:"Folder",name:"personal",route:"/personal",children:[{kind:"Meta",data:{index:"Get Started",authentication:"Authentication",devices:"Managing your Devices",vault:"Accessing your Vault"}},{kind:"MdxPage",name:"authentication",route:"/personal/authentication"},{kind:"MdxPage",name:"devices",route:"/personal/devices"},{kind:"MdxPage",name:"index",route:"/personal"},{kind:"MdxPage",name:"vault",route:"/personal/vault"}]},{kind:"MdxPage",name:"reset",route:"/reset"}],flexsearch:{codeblocks:!0},title:"Audit logs"},pageNextRoute:"/business/audit-logs",nextraLayout:i.ZP,themeConfig:o.Z};function d(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Audit logs"}),"\n",(0,n.jsx)(c.UW,{emoji:"\uD83D\uDCA1",children:"Needs team credentials to use this command."}),"\n",(0,n.jsx)(s.h2,{id:"fetching-the-logs",children:"Fetching the logs"}),"\n",(0,n.jsxs)(s.p,{children:["You can query the audit logs using the ",(0,n.jsx)(s.code,{children:"logs"})," command. For example:"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"dcli"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"t"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"logs"})]})})}),"\n",(0,n.jsx)(s.p,{children:"The logs are output in JSON format, each line is a new log entry."}),"\n",(0,n.jsx)(s.pre,{"data-language":"json","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"json","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"uuid"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"e2d9ce5b-[..redacted..]-b6de479b3483"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"team_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1315574321"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"category"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"authentication"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"log_type"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"user_device_added"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"date_time"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1688629046919"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"properties"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"device_name"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Dashlane CLI"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_login"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"admin@something.io"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"device_platform"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"server_standalone"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_user_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"28080685"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"schema_version"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1.0.0"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"uuid"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"d2f5db34-[..redacted..]-1dfcc3bdf911"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"team_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1315574321"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"category"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"authentication"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"log_type"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"user_device_added"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"date_time"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1688628172021"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"properties"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"device_name"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Chrome - Mac OS"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_login"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"admin@something.io"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"device_platform"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"server_standalone"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_user_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"28080685"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"schema_version"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1.0.0"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"uuid"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"4ca3bb56-[..redacted..]-66cbb387cb54"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"team_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1315574321"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"category"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"authentication"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"log_type"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"user_device_added"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"date_time"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1683303544898"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"properties"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"device_name"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Firefox - Ubuntu"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_login"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"user@something.io"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"device_platform"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"server_standalone"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_user_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"28086620"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"schema_version"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1.0.0"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"uuid"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"68e70f62-[..redacted..]-1bb9830f9f18"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"team_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1315574321"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"category"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"team_settings_sso"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"log_type"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"sso_service_provider_url_set"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"date_time"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1671629557924"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"properties"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_login"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"admin@something.io"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"service_provider_url"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://sso.nitro.dashlane.com"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"author_user_id"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"28080685"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:'"schema_version"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"1.0.0"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"filtering-the-logs",children:"Filtering the logs"}),"\n",(0,n.jsx)(s.p,{children:"With the following options you can filter the logs by start and end date, log type and category."}),"\n",(0,n.jsx)(s.pre,{"data-language":"sh","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"sh","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"--start"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"star"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"t"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"start"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"timestamp"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (default: "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"--end"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"en"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"d"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"end"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"timestamp"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (default: "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"now"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"--type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"typ"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"type"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"--category"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"categor"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"y"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"category"})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"logs-types-default",children:"Logs types (default)"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Event message"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"master_password_reset_accepted"}),(0,n.jsx)(s.td,{children:"Accepted an Account Recovery request from %(email)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"master_password_reset_refused"}),(0,n.jsx)(s.td,{children:"Denied an Account Recovery request from %(email)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_device_added"}),(0,n.jsx)(s.td,{children:"Added the device %(name)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_device_removed"}),(0,n.jsx)(s.td,{children:"Removed the device %(name)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"requested_account_recovery"}),(0,n.jsx)(s.td,{children:"Requested Account Recovery"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"completed_account_recovery"}),(0,n.jsx)(s.td,{children:"Recovered their account through Account Recovery"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"dwm_email_added"}),(0,n.jsx)(s.td,{children:"Added %(email)s to Dark Web Monitoring"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"dwm_email_removed"}),(0,n.jsx)(s.td,{children:"Removed %(email)s from Dark Web Monitoring"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_group_created"}),(0,n.jsx)(s.td,{children:"Created a group named %(groupName)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_group_renamed"}),(0,n.jsx)(s.td,{children:"Renamed the %(oldGroupName)s group to %(newGroupName)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_group_deleted"}),(0,n.jsx)(s.td,{children:"Deleted the %(groupName)s group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_joined_user_group"}),(0,n.jsx)(s.td,{children:"Joined the %(groupName)s group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_invited_to_user_group"}),(0,n.jsx)(s.td,{children:"Invited %(email)s to the %(groupName)s group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_declined_invite_to_user_group"}),(0,n.jsx)(s.td,{children:"Declined to join the %(groupName)s group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_removed_from_user_group"}),(0,n.jsx)(s.td,{children:"Removed %(email)s from the %(groupName)s group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"team_name_changed"}),(0,n.jsx)(s.td,{children:"Changed your company name to “%(name)s”"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"new_billing_period_created"}),(0,n.jsx)(s.td,{children:"Extended your account until %(date)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"seats_added"}),(0,n.jsx)(s.td,{children:"Added %(count)s seats to your account"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"domain_requested"}),(0,n.jsx)(s.td,{children:"Added %(domain)s as an unverified domain"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"domain_validated"}),(0,n.jsx)(s.td,{children:"Verified the domain %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"collect_sensitive_data_audit_logs_enabled"}),(0,n.jsx)(s.td,{children:"(user) turned on unencrypted vault logs"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"collect_sensitive_data_audit_logs_disabled"}),(0,n.jsx)(s.td,{children:"(user) turned off unencrypted vault logs"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sso_idp_metadata_set"}),(0,n.jsx)(s.td,{children:"Updated SSO identity provider metadata"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sso_service_provider_url_set"}),(0,n.jsx)(s.td,{children:"Configured SSO service provider URL"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sso_enabled"}),(0,n.jsx)(s.td,{children:"Enabled SSO"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sso_disabled"}),(0,n.jsx)(s.td,{children:"Disabled SSO"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"contact_email_changed"}),(0,n.jsx)(s.td,{children:"Changed contact email to %(email)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"master_password_mobile_reset_enabled"}),(0,n.jsx)(s.td,{children:"Turned on biometric recovery for %(deviceName)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"two_factor_authentication_login_method_added"}),(0,n.jsx)(s.td,{children:"Activated a 2FA method"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"two_factor_authentication_login_method_removed"}),(0,n.jsx)(s.td,{children:"Removed a 2FA method"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_invited"}),(0,n.jsx)(s.td,{children:"Invited %(email)s to your account"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_removed"}),(0,n.jsx)(s.td,{children:"Revoked %(email)s from your account"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"team_captain_added"}),(0,n.jsx)(s.td,{children:"Changed %(email)s to admin rights"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"team_captain_removed"}),(0,n.jsx)(s.td,{children:"Changed %(email)s to member rights"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"group_manager_added"}),(0,n.jsx)(s.td,{children:"Changed %(email)s to group manager rights"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"group_manager_removed"}),(0,n.jsx)(s.td,{children:"Changed %(email)s to member rights"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_reinvited"}),(0,n.jsx)(s.td,{children:"Resent an invite to %(email)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"billing_admin_added"}),(0,n.jsx)(s.td,{children:"Made %(name)s the billing contact"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"billing_admin_removed"}),(0,n.jsx)(s.td,{children:"Revoked %(name)s as the billing contact"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"logs-types-sensitive",children:"Logs types (sensitive)"}),"\n",(0,n.jsxs)(s.p,{children:["You can turn on logging sensitive actions in the Policies section of Settings in the Admin Console. Read more about it in our ",(0,n.jsx)(s.a,{href:"https://support.dashlane.com/hc/en-us/articles/4414606120210",children:"dedicated Help Center article"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Event message"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"collect_sensitive_data_audit_logs_enabled"}),(0,n.jsx)(s.td,{children:"(user) turned on additional activity logs (unencrypted)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"collect_sensitive_data_audit_logs_disabled"}),(0,n.jsx)(s.td,{children:"(user) turned off additional activity logs (unencrypted)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_shared_credential_with_group"}),(0,n.jsx)(s.td,{children:"(user) shared %(rights [limited/full]) rights to the %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_shared_credential_with_email"}),(0,n.jsx)(s.td,{children:"(user) shared %(rights [limited/full]) rights to the %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_shared_credential_with_external"}),(0,n.jsx)(s.td,{children:"(user) shared %(rights [limited/full]) rights to the %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_accepted_sharing_invite_credential"}),(0,n.jsx)(s.td,{children:"(user) accepted a sharing invitation for the %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_rejected_sharing_invite_credential"}),(0,n.jsx)(s.td,{children:"(user) rejected a sharing invitation for the %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_revoked_shared_credential_group"}),(0,n.jsx)(s.td,{children:"(user) revoked access to the %(domain)s login"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_revoked_shared_credential_external"}),(0,n.jsx)(s.td,{children:"(user) revoked access to the %(domain)s login"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_revoked_shared_credential_email"}),(0,n.jsx)(s.td,{children:"(user) revoked access to the %(domain)s login"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_created_credential"}),(0,n.jsx)(s.td,{children:"(user) created a login for %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_modified_credential"}),(0,n.jsx)(s.td,{children:"(user) modified the login for %(domain)s"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"user_deleted_credential"}),(0,n.jsx)(s.td,{children:"(user) deleted the login for %(domain)s"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"logs-categories",children:"Logs categories"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.th,{children:"Category"})})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"authentication"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"dark_web_monitoring"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"groups"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"sharing"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"team_account"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"team_settings"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"team_settings_sso"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"users"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"user_settings"})}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"vault_passwords"})})]})]})]})}s.default=(0,t.j)(a)}},function(e){e.O(0,[774,606,888,179],function(){return e(e.s=8334)}),_N_E=e.O()}]);