"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7897],{21342:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=t(85893),o=t(11151);const a={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/async_human_input.ipynb",description:"Async human inputs.",source_notebook:"/notebook/async_human_input.ipynb",tags:["async","human"],title:"Agent Chat with Async Human Inputs"},i="Agent Chat with Async Human Inputs",r={id:"notebooks/async_human_input",title:"Agent Chat with Async Human Inputs",description:"Async human inputs.",source:"@site/docs/notebooks/async_human_input.mdx",sourceDirName:"notebooks",slug:"/notebooks/async_human_input",permalink:"/ag2/docs/notebooks/async_human_input",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/async_human_input.ipynb",tags:[{label:"async",permalink:"/ag2/docs/tags/async"},{label:"human",permalink:"/ag2/docs/tags/human"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/async_human_input.ipynb",description:"Async human inputs.",source_notebook:"/notebook/async_human_input.ipynb",tags:["async","human"],title:"Agent Chat with Async Human Inputs"},sidebar:"notebooksSidebar",previous:{title:"Demonstrating the `AgentEval` framework using the task of solving math problems as an example",permalink:"/ag2/docs/notebooks/agenteval_cq_math"},next:{title:"Automatically Build Multi-agent System from Agent Library",permalink:"/ag2/docs/notebooks/autobuild_agent_library"}},c={},u=[];function l(n){const e={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"agent-chat-with-async-human-inputs",children:"Agent Chat with Async Human Inputs"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/async_human_input.ipynb",children:(0,s.jsx)(e.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,s.jsx)(e.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/async_human_input.ipynb",children:(0,s.jsx)(e.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'%pip install "autogen" chromadb sentence_transformers tiktoken pypdf nest-asyncio\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import asyncio\nfrom typing import Any, Callable, Dict, List, Optional, Tuple, Union\n\nimport nest_asyncio\n\nfrom autogen import AssistantAgent\nfrom autogen.agentchat.contrib.retrieve_user_proxy_agent import RetrieveUserProxyAgent\nfrom autogen.agentchat.user_proxy_agent import UserProxyAgent\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'# Define an asynchronous function that simulates some asynchronous task (e.g., I/O operation)\n\n\nasync def my_asynchronous_function():\n    print("Start asynchronous function")\n    await asyncio.sleep(2)  # Simulate some asynchronous task (e.g., I/O operation)\n    print("End asynchronous function")\n    return "input"\n\n\n# Define a custom class `CustomisedUserProxyAgent` that extends `UserProxyAgent`\n\n\nclass CustomisedUserProxyAgent(UserProxyAgent):\n    # Asynchronous function to get human input\n    async def a_get_human_input(self, prompt: str) -> str:\n        # Call the asynchronous function to get user input asynchronously\n        user_input = await my_asynchronous_function()\n\n        return user_input\n\n    # Asynchronous function to receive a message\n\n    async def a_receive(\n        self,\n        message: Union[Dict, str],\n        sender,\n        request_reply: Optional[bool] = None,\n        silent: Optional[bool] = False,\n    ):\n        # Call the superclass method to handle message reception asynchronously\n        await super().a_receive(message, sender, request_reply, silent)\n\n\nclass CustomisedAssistantAgent(AssistantAgent):\n    # Asynchronous function to get human input\n    async def a_get_human_input(self, prompt: str) -> str:\n        # Call the asynchronous function to get user input asynchronously\n        user_input = await my_asynchronous_function()\n\n        return user_input\n\n    # Asynchronous function to receive a message\n    async def a_receive(\n        self,\n        message: Union[Dict, str],\n        sender,\n        request_reply: Optional[bool] = None,\n        silent: Optional[bool] = False,\n    ):\n        # Call the superclass method to handle message reception asynchronously\n        await super().a_receive(message, sender, request_reply, silent)\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def create_llm_config(model, temperature, seed):\n    config_list = [\n        {\n            "model": "<model_name>",\n            "api_key": "<api_key>",\n        },\n    ]\n\n    llm_config = {\n        "seed": int(seed),\n        "config_list": config_list,\n        "temperature": float(temperature),\n    }\n\n    return llm_config\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'nest_asyncio.apply()\n\n\nasync def main():\n    boss = CustomisedUserProxyAgent(\n        name="boss",\n        human_input_mode="ALWAYS",\n        max_consecutive_auto_reply=0,\n        code_execution_config=False,\n    )\n\n    assistant = CustomisedAssistantAgent(\n        name="assistant",\n        system_message="You will provide some agenda, and I will create questions for an interview meeting. Every time when you generate question then you have to ask user for feedback and if user provides the feedback then you have to incorporate that feedback and generate new set of questions and if user don\'t want to update then terminate the process and exit",\n        llm_config=create_llm_config("gpt-4", "0.4", "23"),\n    )\n\n    await boss.a_initiate_chat(\n        assistant,\n        message="Resume Review, Technical Skills Assessment, Project Discussion, Job Role Expectations, Closing Remarks.",\n        n_results=3,\n    )\n\n\nawait main()  # noqa: F704\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"boss (to assistant):\n\nResume Review, Technical Skills Assessment, Project Discussion, Job Role Expectations, Closing Remarks.\n\n--------------------------------------------------------------------------------\nassistant (to boss):\n\n1. Can you walk me through your resume, highlighting the most significant parts?\n2. What technical skills do you possess that make you a strong candidate for this position?\n3. Can you discuss a project you've worked on that you believe showcases your abilities?\n4. What are your expectations for this job role?\n5. Do you have any questions or concerns before we conclude this interview?\n\nCan you please provide your feedback on these questions?\n\n--------------------------------------------------------------------------------\nProvide feedback to assistant. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: exit\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>i});var s=t(67294);const o={},a=s.createContext(o);function i(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);