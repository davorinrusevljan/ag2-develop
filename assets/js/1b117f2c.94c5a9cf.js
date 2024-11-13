"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3296],{84940:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=s(85893),i=s(11151);const c={sidebar_label:"anthropic",title:"oai.anthropic"},r=void 0,o={id:"reference/oai/anthropic",title:"oai.anthropic",description:"Create an OpenAI-compatible client for the Anthropic API.",source:"@site/docs/reference/oai/anthropic.md",sourceDirName:"reference/oai",slug:"/reference/oai/anthropic",permalink:"/ag2/docs/reference/oai/anthropic",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/oai/anthropic.md",tags:[],version:"current",frontMatter:{sidebar_label:"anthropic",title:"oai.anthropic"},sidebar:"referenceSideBar",previous:{title:"file_logger",permalink:"/ag2/docs/reference/logger/file_logger"},next:{title:"bedrock",permalink:"/ag2/docs/reference/oai/bedrock"}},a={},l=[{value:"AnthropicClient",id:"anthropicclient",level:2},{value:"__init__",id:"__init__",level:3},{value:"load_config",id:"load_config",level:3},{value:"cost",id:"cost",level:3},{value:"message_retrieval",id:"message_retrieval",level:3},{value:"get_usage",id:"get_usage",level:3},{value:"oai_messages_to_anthropic_messages",id:"oai_messages_to_anthropic_messages",level:3}];function d(e){const n={a:"a",accesskey:"accesskey",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",secretkey:"secretkey",sessiontok:"sessiontok",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Create an OpenAI-compatible client for the Anthropic API."}),"\n",(0,t.jsxs)(n.p,{children:["Example usage:\nInstall the ",(0,t.jsx)(n.code,{children:"anthropic"})," package by running ",(0,t.jsx)(n.code,{children:"pip install --upgrade anthropic"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.anthropic.com/en/docs/quickstart-guide",children:"https://docs.anthropic.com/en/docs/quickstart-guide"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"import autogen"}),"\n",(0,t.jsx)(n.p,{children:'config_list = [\n{\n"model": "claude-3-sonnet-20240229",\n"api_key": os.getenv("ANTHROPIC_API_KEY"),\n"api_type": "anthropic",\n}\n]'}),"\n",(0,t.jsx)(n.p,{children:'assistant = autogen.AssistantAgent("assistant", llm_config={"config_list": config_list})'}),"\n",(0,t.jsx)(n.p,{children:"Example usage for Anthropic Bedrock:"}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.code,{children:"anthropic"})," package by running ",(0,t.jsx)(n.code,{children:"pip install --upgrade anthropic"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.anthropic.com/en/docs/quickstart-guide",children:"https://docs.anthropic.com/en/docs/quickstart-guide"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"import autogen"}),"\n",(0,t.jsxs)(n.p,{children:['config_list = [\n{\n"model": "anthropic.claude-3-5-sonnet-20240620-v1:0",\n"aws_access_key":',(0,t.jsxs)(n.accesskey,{children:[',\n"aws_secret_key":',(0,t.jsxs)(n.secretkey,{children:[',\n"aws_session_token":',(0,t.jsx)(n.sessiontok,{children:',\n"aws_region":"us-east-1",\n"api_type": "anthropic",\n}\n]'})]})]})]}),"\n",(0,t.jsx)(n.p,{children:'assistant = autogen.AssistantAgent("assistant", llm_config={"config_list": config_list})'}),"\n",(0,t.jsx)(n.h2,{id:"anthropicclient",children:"AnthropicClient"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class AnthropicClient()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def __init__(**kwargs: Any)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initialize the Anthropic API client."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_key"})," ",(0,t.jsx)(n.em,{children:"str"})," - The API key for the Anthropic API or set the ",(0,t.jsx)(n.code,{children:"ANTHROPIC_API_KEY"})," environment variable."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"load_config",children:"load_config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def load_config(params: Dict[str, Any])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Load the configuration for the Anthropic API client."}),"\n",(0,t.jsx)(n.h3,{id:"cost",children:"cost"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def cost(response) -> float\n"})}),"\n",(0,t.jsx)(n.p,{children:"Calculate the cost of the completion using the Anthropic pricing."}),"\n",(0,t.jsx)(n.h3,{id:"message_retrieval",children:"message_retrieval"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def message_retrieval(response) -> List\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve and return a list of strings or a list of Choice.Message from the response."}),"\n",(0,t.jsx)(n.p,{children:"NOTE: if a list of Choice.Message is returned, it currently needs to contain the fields of OpenAI's ChatCompletion Message object,\nsince that is expected for function or tool calling in the rest of the codebase at the moment, unless a custom agent is being used."}),"\n",(0,t.jsx)(n.h3,{id:"get_usage",children:"get_usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef get_usage(response: ChatCompletion) -> Dict\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the usage of tokens and their cost information."}),"\n",(0,t.jsx)(n.h3,{id:"oai_messages_to_anthropic_messages",children:"oai_messages_to_anthropic_messages"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def oai_messages_to_anthropic_messages(\n        params: Dict[str, Any]) -> list[dict[str, Any]]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Convert messages from OAI format to Anthropic format.\nWe correct for any specific role orders and types, etc."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(67294);const i={},c=t.createContext(i);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);