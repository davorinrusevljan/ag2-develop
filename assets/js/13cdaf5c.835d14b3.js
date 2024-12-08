"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2683],{69985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(74848),i=t(28453);const l={},s="Optional Dependencies",o={id:"installation/Optional-Dependencies",title:"Optional Dependencies",description:"Different LLMs",source:"@site/docs/installation/Optional-Dependencies.md",sourceDirName:"installation",slug:"/installation/Optional-Dependencies",permalink:"/ag2/docs/installation/Optional-Dependencies",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/installation/Optional-Dependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/ag2/docs/installation/Docker"},next:{title:"Tutorial",permalink:"/ag2/docs/tutorial"}},r={},c=[{value:"Different LLMs",id:"different-llms",level:2},{value:"LLM Caching",id:"llm-caching",level:2},{value:"IPython Code Executor",id:"ipython-code-executor",level:2},{value:"blendsearch",id:"blendsearch",level:2},{value:"retrievechat",id:"retrievechat",level:2},{value:"Teachability",id:"teachability",level:2},{value:"Large Multimodal Model (LMM) Agents",id:"large-multimodal-model-lmm-agents",level:2},{value:"mathchat",id:"mathchat",level:2},{value:"Graph",id:"graph",level:2},{value:"Long Context Handling",id:"long-context-handling",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"optional-dependencies",children:"Optional Dependencies"}),"\n",(0,a.jsx)(n.h2,{id:"different-llms",children:"Different LLMs"}),"\n",(0,a.jsx)(n.p,{children:"AG2 installs OpenAI package by default. To use LLMs by other providers, you can install the following packages:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install autogen[gemini,anthropic,mistral,together,groq,cohere]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Check out the ",(0,a.jsx)(n.a,{href:"/docs/notebooks/autogen_uniformed_api_calling",children:"notebook"})," and\n",(0,a.jsx)(n.a,{href:"/blog/2024/06/24/AltModels-Classes",children:"blogpost"})," for more details."]}),"\n",(0,a.jsx)(n.h2,{id:"llm-caching",children:"LLM Caching"}),"\n",(0,a.jsxs)(n.p,{children:["To use LLM caching with Redis, you need to install the Python package with\nthe option ",(0,a.jsx)(n.code,{children:"redis"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[redis]"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/topics/llm-caching",children:"LLM Caching"})," for details."]}),"\n",(0,a.jsx)(n.h2,{id:"ipython-code-executor",children:"IPython Code Executor"}),"\n",(0,a.jsxs)(n.p,{children:["To use the IPython code executor, you need to install the ",(0,a.jsx)(n.code,{children:"jupyter-client"}),"\nand ",(0,a.jsx)(n.code,{children:"ipykernel"})," packages:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[ipython]"\n'})}),"\n",(0,a.jsx)(n.p,{children:"To use the IPython code executor:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from autogen import UserProxyAgent\n\nproxy = UserProxyAgent(name="proxy", code_execution_config={"executor": "ipython-embedded"})\n'})}),"\n",(0,a.jsx)(n.h2,{id:"blendsearch",children:"blendsearch"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"pyautogen<0.2"})," offers a cost-effective hyperparameter optimization technique ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2303.04673",children:"EcoOptiGen"})," for tuning Large Language Models. Please install with the [blendsearch] option to use it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[blendsearch]<0.2"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Checkout ",(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/oai_completion.ipynb",children:"Optimize for Code Generation"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/oai_chatgpt_gpt4.ipynb",children:"Optimize for Math"})," for details."]}),"\n",(0,a.jsx)(n.h2,{id:"retrievechat",children:"retrievechat"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"autogen"})," supports retrieval-augmented generation tasks such as question answering and code generation with RAG agents. Please install with the [retrievechat] option to use it with ChromaDB."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[retrievechat]"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively ",(0,a.jsx)(n.code,{children:"autogen"})," also supports PGVector and Qdrant which can be installed in place of ChromaDB, or alongside it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[retrievechat-pgvector]"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[retrievechat-qdrant]"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["RetrieveChat can handle various types of documents. By default, it can process\nplain text and PDF files, including formats such as 'txt', 'json', 'csv', 'tsv',\n'md', 'html', 'htm', 'rtf', 'rst', 'jsonl', 'log', 'xml', 'yaml', 'yml' and 'pdf'.\nIf you install ",(0,a.jsx)(n.a,{href:"https://unstructured-io.github.io/unstructured/installation/full_installation.html",children:"unstructured"}),"\n(",(0,a.jsx)(n.code,{children:'pip install "unstructured[all-docs]"'}),"), additional document types such as 'docx',\n'doc', 'odt', 'pptx', 'ppt', 'xlsx', 'eml', 'msg', 'epub' will also be supported."]}),"\n",(0,a.jsxs)(n.p,{children:["You can find a list of all supported document types by using ",(0,a.jsx)(n.code,{children:"autogen.retrieve_utils.TEXT_FORMATS"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Example notebooks:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_RetrieveChat.ipynb",children:"Automated Code Generation and Question Answering with Retrieval Augmented Agents"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_groupchat_RAG.ipynb",children:"Group Chat with Retrieval Augmented Generation (with 5 group member agents and 1 manager agent)"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_RetrieveChat_qdrant.ipynb",children:"Automated Code Generation and Question Answering with Qdrant based Retrieval Augmented Agents"})}),"\n",(0,a.jsx)(n.h2,{id:"teachability",children:"Teachability"}),"\n",(0,a.jsx)(n.p,{children:"To use Teachability, please install AG2 with the [teachable] option."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[teachable]"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Example notebook: ",(0,a.jsx)(n.a,{href:"/docs/notebooks/agentchat_teachability",children:"Chatting with a teachable agent"})]}),"\n",(0,a.jsx)(n.h2,{id:"large-multimodal-model-lmm-agents",children:"Large Multimodal Model (LMM) Agents"}),"\n",(0,a.jsx)(n.p,{children:"We offered Multimodal Conversable Agent and LLaVA Agent. Please install with the [lmm] option to use it."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[lmm]"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Example notebook: ",(0,a.jsx)(n.a,{href:"/docs/notebooks/agentchat_lmm_llava",children:"LLaVA Agent"})]}),"\n",(0,a.jsx)(n.h2,{id:"mathchat",children:"mathchat"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"pyautogen<0.2"})," offers an experimental agent for math problem solving. Please install with the [mathchat] option to use it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[mathchat]<0.2"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Example notebook: ",(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_MathChat.ipynb",children:"Using MathChat to Solve Math Problems"})]}),"\n",(0,a.jsx)(n.h2,{id:"graph",children:"Graph"}),"\n",(0,a.jsxs)(n.p,{children:["To use a graph in ",(0,a.jsx)(n.code,{children:"GroupChat"}),", particularly for graph visualization, please install AutoGen with the [graph] option."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[graph]"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Example notebook: ",(0,a.jsx)(n.a,{href:"/docs/notebooks/agentchat_groupchat_finite_state_machine",children:"Finite State Machine graphs to set speaker transition constraints"})]}),"\n",(0,a.jsx)(n.h2,{id:"long-context-handling",children:"Long Context Handling"}),"\n",(0,a.jsxs)(n.p,{children:["AG2 includes support for handling long textual contexts by leveraging the LLMLingua library for text compression. To enable this functionality, please install AutoGen with the ",(0,a.jsx)(n.code,{children:"[long-context]"})," option:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[long-context]"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},l=a.createContext(i);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);