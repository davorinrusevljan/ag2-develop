"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3173],{72550:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(85893),i=s(11151);const r={},a="Agent Monitoring and Debugging with AgentOps",o={id:"ecosystem/agentops",title:"Agent Monitoring and Debugging with AgentOps",description:"AgentOps provides session replays, metrics, and monitoring for AI agents.",source:"@site/docs/ecosystem/agentops.md",sourceDirName:"ecosystem",slug:"/ecosystem/agentops",permalink:"/ag2/docs/ecosystem/agentops",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/ecosystem/agentops.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Ecosystem",permalink:"/ag2/docs/ecosystem"},next:{title:"Azure Cosmos DB",permalink:"/ag2/docs/ecosystem/azure_cosmos_db"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Autogen + AgentOps examples",id:"autogen--agentops-examples",level:2},{value:"Extra links",id:"extra-links",level:2}];function d(e){const n={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",u:"u",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"agent-monitoring-and-debugging-with-agentops",children:"Agent Monitoring and Debugging with AgentOps"}),"\n",(0,t.jsx)(n.img,{src:"https://github.com/AgentOps-AI/agentops/blob/main/docs/images/external/logo/banner-badge.png?raw=true",style:{width:"40%"},alt:"AgentOps logo"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://agentops.ai/?=autogen",children:"AgentOps"})," provides session replays, metrics, and monitoring for AI agents."]}),"\n",(0,t.jsxs)(n.p,{children:["At a high level, AgentOps gives you the ability to monitor LLM calls, costs, latency, agent failures, multi-agent interactions, tool usage, session-wide statistics, and more. For more info, check out the ",(0,t.jsx)(n.a,{href:"https://github.com/AgentOps-AI/agentops",children:"AgentOps Repo"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\ud83d\udcca ",(0,t.jsx)(n.strong,{children:"Replay Analytics and Debugging"})]}),(0,t.jsx)(n.td,{children:"Step-by-step agent execution graphs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\ud83d\udcb8 ",(0,t.jsx)(n.strong,{children:"LLM Cost Management"})]}),(0,t.jsx)(n.td,{children:"Track spend with LLM foundation model providers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\ud83e\uddea ",(0,t.jsx)(n.strong,{children:"Agent Benchmarking"})]}),(0,t.jsx)(n.td,{children:"Test your agents against 1,000+ evals"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\ud83d\udd10 ",(0,t.jsx)(n.strong,{children:"Compliance and Security"})]}),(0,t.jsx)(n.td,{children:"Detect common prompt injection and data exfiltration exploits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\ud83e\udd1d ",(0,t.jsx)(n.strong,{children:"Framework Integrations"})]}),(0,t.jsx)(n.td,{children:"Native Integrations with CrewAI, AutoGen, & LangChain"})]})]})]}),"\n",(0,t.jsxs)(n.details,{open:!0,children:["\n  ",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:(0,t.jsx)(n.u,{children:"Agent Dashboard"})})}),"\n  ",(0,t.jsxs)(n.a,{href:"https://app.agentops.ai?ref=gh",children:["\n   ",(0,t.jsx)(n.img,{src:"https://github.com/AgentOps-AI/agentops/blob/main/docs/images/external/app_screenshots/overview.png?raw=true",style:{width:"70%"},alt:"Agent Dashboard"}),"\n  "]}),"\n"]}),"\n",(0,t.jsxs)(n.details,{children:["\n  ",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:(0,t.jsx)(n.u,{children:"Session Analytics"})})}),"\n  ",(0,t.jsxs)(n.a,{href:"https://app.agentops.ai?ref=gh",children:["\n    ",(0,t.jsx)(n.img,{src:"https://github.com/AgentOps-AI/agentops/blob/main/docs/images/external/app_screenshots/session-overview.png?raw=true",style:{width:"70%"},alt:"Session Analytics"}),"\n  "]}),"\n"]}),"\n",(0,t.jsxs)(n.details,{children:["\n  ",(0,t.jsx)(n.summary,{children:(0,t.jsx)(n.b,{children:(0,t.jsx)(n.u,{children:"Session Replays"})})}),"\n  ",(0,t.jsxs)(n.a,{href:"https://app.agentops.ai?ref=gh",children:["\n    ",(0,t.jsx)(n.img,{src:"https://github.com/AgentOps-AI/agentops/blob/main/docs/images/external/app_screenshots/session-replay.png?raw=true",style:{width:"70%"},alt:"Session Replays"}),"\n  "]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"AgentOps works seamlessly with applications built using Autogen."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Install AgentOps"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install agentops\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Create an API Key:"}),"\nCreate a user API key here: ",(0,t.jsx)(n.a,{href:"https://app.agentops.ai/settings/projects",children:"Create API Key"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Configure Your Environment:"}),"\nAdd your API key to your environment variables"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"AGENTOPS_API_KEY=<YOUR_AGENTOPS_API_KEY>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Initialize AgentOps"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To start tracking all available data on Autogen runs, simply add two lines of code before implementing Autogen."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import agentops\nagentops.init() # Or: agentops.init(api_key="your-api-key-here")\n'})}),"\n",(0,t.jsx)(n.p,{children:"After initializing AgentOps, Autogen will now start automatically tracking your agent runs."}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"LLM Costs"}),": Track spend with foundation model providers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Replay Analytics"}),": Watch step-by-step agent execution graphs"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Recursive Thought Detection"}),": Identify when agents fall into infinite loops"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Reporting:"})," Create custom analytics on agent performance"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Analytics Dashboard:"})," Monitor high level statistics about agents in development and production"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Public Model Testing"}),": Test your agents against benchmarks and leaderboards"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Tests:"})," Run your agents against domain specific tests"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Time Travel Debugging"}),":  Save snapshots of session states to rewind and replay agent runs from chosen checkpoints."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compliance and Security"}),": Create audit logs and detect potential threats such as profanity and PII leaks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Prompt Injection Detection"}),": Identify potential code injection and secret leaks"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"autogen--agentops-examples",children:"Autogen + AgentOps examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/notebooks/agentchat_agentops",children:"AgentChat with AgentOps Notebook"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.agentops.ai/v1/quickstart",children:"More AgentOps Examples"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"extra-links",children:"Extra links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://twitter.com/agentopsai/",children:"\ud83d\udc26 Twitter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://discord.gg/JHPt4C7r",children:"\ud83d\udce2 Discord"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://app.agentops.ai/ref?=autogen",children:"\ud83d\udd87\ufe0f AgentOps Dashboard"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.agentops.ai/introduction",children:"\ud83d\udcd9 Documentation"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);