(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{3729:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/business/reports",function(){return n(7107)}])},979:function(s,e,n){"use strict";var r=n(5893),o=n(1163),l=n(7391);e.Z={logo:(0,r.jsx)("strong",{children:"Dashlane CLI"}),project:{link:"https://github.com/Dashlane/dashlane-cli"},docsRepositoryBase:"https://github.com/Dashlane/dashlane-cli/blob/master/documentation",banner:{key:"2.0-release",text:(0,r.jsx)("a",{href:"https://github.com/Dashlane/dashlane-cli/releases",target:"_blank",children:"\uD83D\uDCC2 Download Dashlane CLI builds for Macos, Windows and Linux here →"})},footer:{text:(0,r.jsxs)("span",{children:["Apache $",new Date().getFullYear()," \xa9 Dashlane, Inc."]})},useNextSeoProps(){let{asPath:s}=(0,o.useRouter)();if("/"!==s)return{titleTemplate:"%s - Dashlane CLI"}},head:()=>{let{asPath:s,defaultLocale:e,locale:n}=(0,o.useRouter)(),{frontMatter:i}=(0,l.ZR)(),t="https://dashlane.github.io/dashlane-cli"+(e===n?s:"/".concat(n).concat(s));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{property:"og:url",content:t}),(0,r.jsx)("meta",{property:"og:title",content:i.title||"Dashlane CLI"}),(0,r.jsx)("meta",{property:"og:description",content:i.description||"Learn how to access your Dashlane vault and API endpoints from the command line."})]})}}},7107:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var r=n(5893),o=n(2673),l=n(7391),i=n(979);n(9966);var t=n(1151),a=n(5675),c=n.n(a),h={src:"/dashlane-cli//_next/static/media/password-health-graphic.b18bb5ce.png",height:866,width:1706,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAKlBMVEX9/f38/Pz7+/v6+vv6+vr6+vn5+fn4+fn4+Pj3+Pj39/f29vb19vby8/RFMgUeAAAAHElEQVR42mMI6iyvYNiT5GLCcJZRUIihY9WqJQBCFwbSYPVfvAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},p=n(1149);let d={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.ah)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(x,{...s})}):x(s)},pageOpts:{filePath:"pages/business/reports.mdx",route:"/business/reports",headings:[{depth:1,value:"Reports",id:"reports"},{depth:2,value:"Fetch reports",id:"fetch-reports"},{depth:2,value:"Generate graphics from reports",id:"generate-graphics-from-reports"}],pageMap:[{kind:"Meta",data:{index:"Introduction",install:"Install",personal:"Personal",business:"Business",reset:"Reset local data"}},{kind:"Folder",name:"business",route:"/business",children:[{kind:"Meta",data:{index:"Get Started","audit-logs":"Audit Logs",members:"Members",reports:"Reports"}},{kind:"MdxPage",name:"audit-logs",route:"/business/audit-logs"},{kind:"MdxPage",name:"index",route:"/business"},{kind:"MdxPage",name:"members",route:"/business/members"},{kind:"MdxPage",name:"reports",route:"/business/reports"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"install",route:"/install"},{kind:"Folder",name:"personal",route:"/personal",children:[{kind:"Meta",data:{index:"Get Started",authentication:"Authentication",devices:"Managing your Devices",vault:"Accessing your Vault"}},{kind:"MdxPage",name:"authentication",route:"/personal/authentication"},{kind:"MdxPage",name:"devices",route:"/personal/devices"},{kind:"MdxPage",name:"index",route:"/personal"},{kind:"MdxPage",name:"vault",route:"/personal/vault"}]},{kind:"MdxPage",name:"reset",route:"/reset"}],flexsearch:{codeblocks:!0},title:"Reports"},pageNextRoute:"/business/reports",nextraLayout:l.ZP,themeConfig:i.Z};function x(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span"},(0,t.ah)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Reports"}),"\n",(0,r.jsx)(e.p,{children:"You can get reports on your team about the number of seats provisioned, used and pending. You can also get reports on the aggregated password health history of your team."}),"\n",(0,r.jsx)(p.UW,{emoji:"\uD83D\uDCA1",children:"Needs team credentials to use this command."}),"\n",(0,r.jsx)(e.h2,{id:"fetch-reports",children:"Fetch reports"}),"\n",(0,r.jsx)(e.p,{children:"The following commands take in input the number of days to look back for the password health history. The default is 0 day."}),"\n",(0,r.jsx)(e.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,r.jsx)(e.code,{"data-language":"sh","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"dcli"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"t"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"report"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"30"})]})})}),"\n",(0,r.jsx)(e.h2,{id:"generate-graphics-from-reports",children:"Generate graphics from reports"}),"\n",(0,r.jsx)(e.p,{children:"One way to consume password health history reports is to generate graphics from them."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(c(),{alt:"Example of graphic generated from a report",placeholder:"blur",src:h})}),"\n",(0,r.jsx)(e.p,{children:"The following Python script example will generate a graphic from the report."}),"\n",(0,r.jsx)(e.pre,{"data-language":"python","data-theme":"default",filename:"generate-graph.py",hasCopyCode:!0,children:(0,r.jsxs)(e.code,{"data-line-numbers":"","data-language":"python","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" matplotlib"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pyplot "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" plt"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" numpy "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" np"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"format_month"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"month"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"str"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"match"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" month"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"01"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Jan"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"02"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Feb"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"03"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Mar"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"04"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Apr"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"05"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"May"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"06"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Jun"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"07"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Jui"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"08"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Aug"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"09"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Sep"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"10"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Oct"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"11"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Nov"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"12"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Dec"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"format_x_label"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"label"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"str"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    year"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" month "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" label"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"split"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"-"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"f"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"format_month"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(month)"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"}"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"year"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"}"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"generate_graph"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"file_path"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"str"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    dates "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    values "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" value "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" data"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        dates"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"append"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(np."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"datetime64"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(value["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"date"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]))"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        values"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"append"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(value["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"securityIndex"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"])"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# create two subplots with the shared x and y axes"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    fig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (ax) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" plt"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"subplots"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(figsize"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"))"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"plot"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(dates, values, lw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:", color"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"#4e828f"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"grid"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"True"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"set_ylabel"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Security score"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    labels "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"get_xticklabels"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" label "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" labels"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        label"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"_text "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"format_x_label"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(label._text)"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"set_xticklabels"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(labels)"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ax"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"set_ylim"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"min"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(values) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    fig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"suptitle"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Evolution of the team security score"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    fig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"autofmt_xdate"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    plt"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"savefig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(file_path)"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    plt"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"close"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" file_path"})]})]})})]})}var k=(0,o.j)(d)}},function(s){s.O(0,[774,606,888,179],function(){return s(s.s=3729)}),_N_E=s.O()}]);