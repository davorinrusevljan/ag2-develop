"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9083],{81979:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(85893),a=t(11151);const s={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/tutorial/tool-use.ipynb",source_notebook:"/website/docs/tutorial/tool-use.ipynb",title:"Tool Use"},r="Tool Use",i={id:"tutorial/tool-use",title:"Tool Use",description:"Open In Colab",source:"@site/docs/tutorial/tool-use.mdx",sourceDirName:"tutorial",slug:"/tutorial/tool-use",permalink:"/ag2/docs/tutorial/tool-use",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/tutorial/tool-use.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/tutorial/tool-use.ipynb",source_notebook:"/website/docs/tutorial/tool-use.ipynb",title:"Tool Use"},sidebar:"docsSidebar",previous:{title:"Code Executors",permalink:"/ag2/docs/tutorial/code-executors"},next:{title:"Conversation Patterns",permalink:"/ag2/docs/tutorial/conversation-patterns"}},l={},c=[{value:"Creating Tools",id:"creating-tools",level:2},{value:"Registering Tools",id:"registering-tools",level:2},{value:"Using Tool",id:"using-tool",level:2},{value:"Tool Schema",id:"tool-schema",level:2},{value:"How to hide tool usage and code execution within a single agent?",id:"how-to-hide-tool-usage-and-code-execution-within-a-single-agent",level:2},{value:"Summary",id:"summary",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"tool-use",children:"Tool Use"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/website/docs/tutorial/tool-use.ipynb",children:(0,o.jsx)(e.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(e.a,{href:"https://github.com/ag2ai/ag2/blob/main/website/docs/tutorial/tool-use.ipynb",children:(0,o.jsx)(e.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsx)(e.p,{children:"In the previous chapter, we explored code executors which give agents\nthe super power of programming. Agents writing arbitrary code is useful,\nhowever, controlling what code an agent writes can be challenging. This\nis where tools come in."}),"\n",(0,o.jsx)(e.p,{children:"Tools are pre-defined functions that agents can use. Instead of writing\narbitrary code, agents can call tools to perform actions, such as\nsearching the web, performing calculations, reading files, or calling\nremote APIs. Because you can control what tools are available to an\nagent, you can control what actions an agent can perform."}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Tool use is currently only available for LLMs\nthat support OpenAI-compatible tool call API."})}),"\n",(0,o.jsx)(e.h2,{id:"creating-tools",children:"Creating Tools"}),"\n",(0,o.jsx)(e.p,{children:"Tools can be created as regular Python functions. For example, let\u2019s\ncreate a calculator tool which can only perform a single operation at a\ntime."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'from typing import Annotated, Literal\n\nOperator = Literal["+", "-", "*", "/"]\n\n\ndef calculator(a: int, b: int, operator: Annotated[Operator, "operator"]) -> int:\n    if operator == "+":\n        return a + b\n    elif operator == "-":\n        return a - b\n    elif operator == "*":\n        return a * b\n    elif operator == "/":\n        return int(a / b)\n    else:\n        raise ValueError("Invalid operator")\n'})}),"\n",(0,o.jsxs)(e.p,{children:["The above function takes three arguments: ",(0,o.jsx)(e.code,{children:"a"})," and ",(0,o.jsx)(e.code,{children:"b"})," are the integer\nnumbers to be operated on; ",(0,o.jsx)(e.code,{children:"operator"})," is the operation to be performed.\nWe used type hints to define the types of the arguments and the return\nvalue."]}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"Always use type hints to define the types of the arguments and the return value\nas they provide helpful hints to the agent about the tool's usage."})}),"\n",(0,o.jsx)(e.h2,{id:"registering-tools",children:"Registering Tools"}),"\n",(0,o.jsx)(e.p,{children:"Once you have created a tool, you can register it with the agents that\nare involved in conversation."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'import os\n\nfrom autogen import ConversableAgent\n\n# Let\'s first define the assistant agent that suggests tool calls.\nassistant = ConversableAgent(\n    name="Assistant",\n    system_message="You are a helpful AI assistant. "\n    "You can help with simple calculations. "\n    "Return \'TERMINATE\' when the task is done.",\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]},\n)\n\n# The user proxy agent is used for interacting with the assistant agent\n# and executes tool calls.\nuser_proxy = ConversableAgent(\n    name="User",\n    llm_config=False,\n    is_termination_msg=lambda msg: msg.get("content") is not None and "TERMINATE" in msg["content"],\n    human_input_mode="NEVER",\n)\n\n# Register the tool signature with the assistant agent.\nassistant.register_for_llm(name="calculator", description="A simple calculator")(calculator)\n\n# Register the tool function with the user proxy agent.\nuser_proxy.register_for_execution(name="calculator")(calculator)\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"<function __main__.calculator(a: int, b: int, operator: Annotated[Literal['+', '-', '*', '/'], 'operator']) -> int>\n"})}),"\n",(0,o.jsxs)(e.p,{children:["In the above code, we registered the ",(0,o.jsx)(e.code,{children:"calculator"})," function as a tool\nwith the assistant and user proxy agents. We also provide a name and a\ndescription for the tool for the assistant agent to understand its\nusage."]}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"Always provide a clear and concise description for the tool as it helps the\nagent's underlying LLM to understand the tool's usage."})}),"\n",(0,o.jsxs)(e.p,{children:["Similar to code executors, a tool must be registered with at least two\nagents for it to be useful in conversation. The agent registered with\nthe tool\u2019s signature through\n",(0,o.jsx)(e.a,{href:"../../docs/reference/agentchat/conversable_agent#register_for_llm",children:(0,o.jsx)(e.code,{children:"register_for_llm"})}),"\ncan call the tool; the agent registered with the tool\u2019s function object\nthrough\n",(0,o.jsx)(e.a,{href:"../../docs/reference/agentchat/conversable_agent#register_for_execution",children:(0,o.jsx)(e.code,{children:"register_for_execution"})}),"\ncan execute the tool\u2019s function."]}),"\n",(0,o.jsxs)(e.p,{children:["Alternatively, you can use\n",(0,o.jsx)(e.a,{href:"../../docs/reference/agentchat/conversable_agent#register_function-1",children:(0,o.jsx)(e.code,{children:"autogen.register_function"})}),"\nfunction to register a tool with both agents at once."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'from autogen import register_function\n\n# Register the calculator function to the two agents.\nregister_function(\n    calculator,\n    caller=assistant,  # The assistant agent can suggest calls to the calculator.\n    executor=user_proxy,  # The user proxy agent can execute the calculator calls.\n    name="calculator",  # By default, the function name is used as the tool name.\n    description="A simple calculator",  # A description of the tool.\n)\n'})}),"\n",(0,o.jsx)(e.h2,{id:"using-tool",children:"Using Tool"}),"\n",(0,o.jsxs)(e.p,{children:["Once the tool is registered, we can use it in conversation. In the code\nbelow, we ask the assistant to perform some arithmetic calculation using\nthe ",(0,o.jsx)(e.code,{children:"calculator"})," tool."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'chat_result = user_proxy.initiate_chat(assistant, message="What is (44232 + 13312 / (232 - 32)) * 5?")\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:'User (to Assistant):\n\nWhat is (44232 + 13312 / (232 - 32)) * 5?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_4rElPoLggOYJmkUutbGaSTX1): calculator *****\nArguments: \n{\n  "a": 232,\n  "b": 32,\n  "operator": "-"\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_4rElPoLggOYJmkUutbGaSTX1) *****\n200\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_SGtr8tK9A4iOCJGdCqkKR2Ov): calculator *****\nArguments: \n{\n  "a": 13312,\n  "b": 200,\n  "operator": "/"\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_SGtr8tK9A4iOCJGdCqkKR2Ov) *****\n66\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_YsR95CM1Ice2GZ7ZoStYXI6M): calculator *****\nArguments: \n{\n  "a": 44232,\n  "b": 66,\n  "operator": "+"\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_YsR95CM1Ice2GZ7ZoStYXI6M) *****\n44298\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_oqZn4rTjyvXYcmjAXkvVaJm1): calculator *****\nArguments: \n{\n  "a": 44298,\n  "b": 5,\n  "operator": "*"\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_oqZn4rTjyvXYcmjAXkvVaJm1) *****\n221490\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\nThe result of the calculation is 221490. TERMINATE\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)(e.p,{children:"Let\u2019s verify the answer:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"(44232 + int(13312 / (232 - 32))) * 5\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"221490\n"})}),"\n",(0,o.jsx)(e.p,{children:"The answer is correct. You can see that the assistant is able to\nunderstand the tool\u2019s usage and perform calculation correctly."}),"\n",(0,o.jsx)(e.h2,{id:"tool-schema",children:"Tool Schema"}),"\n",(0,o.jsxs)(e.p,{children:["If you are familiar with ",(0,o.jsx)(e.a,{href:"https://platform.openai.com/docs/guides/function-calling",children:"OpenAI\u2019s tool use\nAPI"}),", you\nmight be wondering why we didn\u2019t create a tool schema. In fact, the tool\nschema is automatically generated from the function signature and the\ntype hints. You can see the tool schema by inspecting the ",(0,o.jsx)(e.code,{children:"llm_config"}),"\nattribute of the agent."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'assistant.llm_config["tools"]\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"[{'type': 'function',\n  'function': {'description': 'A simple calculator',\n   'name': 'calculator',\n   'parameters': {'type': 'object',\n    'properties': {'a': {'type': 'integer', 'description': 'a'},\n     'b': {'type': 'integer', 'description': 'b'},\n     'operator': {'enum': ['+', '-', '*', '/'],\n      'type': 'string',\n      'description': 'operator'}},\n    'required': ['a', 'b', 'operator']}}}]\n"})}),"\n",(0,o.jsx)(e.p,{children:"You can see the tool schema has been automatically generated from the\nfunction signature and the type hints, as well as the description. This\nis why it is important to use type hints and provide a clear description\nfor the tool as the LLM uses them to understand the tool\u2019s usage."}),"\n",(0,o.jsx)(e.p,{children:"You can also use Pydantic model for the type hints to provide more\ncomplex type schema. In the example below, we use a Pydantic model to\ndefine the calculator input."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'from pydantic import BaseModel, Field\n\n\nclass CalculatorInput(BaseModel):\n    a: Annotated[int, Field(description="The first number.")]\n    b: Annotated[int, Field(description="The second number.")]\n    operator: Annotated[Operator, Field(description="The operator.")]\n\n\ndef calculator(input: Annotated[CalculatorInput, "Input to the calculator."]) -> int:\n    if input.operator == "+":\n        return input.a + input.b\n    elif input.operator == "-":\n        return input.a - input.b\n    elif input.operator == "*":\n        return input.a * input.b\n    elif input.operator == "/":\n        return int(input.a / input.b)\n    else:\n        raise ValueError("Invalid operator")\n'})}),"\n",(0,o.jsxs)(e.p,{children:["Same as before, we register the tool with the agents using the name\n",(0,o.jsx)(e.code,{children:'"calculator"'}),"."]}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"Registering tool to the same name will override the previous tool."})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'assistant.register_for_llm(name="calculator", description="A calculator tool that accepts nested expression as input")(\n    calculator\n)\nuser_proxy.register_for_execution(name="calculator")(calculator)\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"<function __main__.calculator(input: typing.Annotated[__main__.CalculatorInput, 'Input to the calculator.']) -> int>\n"})}),"\n",(0,o.jsx)(e.p,{children:"You can see the tool schema has been updated to reflect the new type\nschema."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'assistant.llm_config["tools"]\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"[{'type': 'function',\n  'function': {'description': 'A calculator tool that accepts nested expression as input',\n   'name': 'calculator',\n   'parameters': {'type': 'object',\n    'properties': {'input': {'properties': {'a': {'description': 'The first number.',\n        'title': 'A',\n        'type': 'integer'},\n       'b': {'description': 'The second number.',\n        'title': 'B',\n        'type': 'integer'},\n       'operator': {'description': 'The operator.',\n        'enum': ['+', '-', '*', '/'],\n        'title': 'Operator',\n        'type': 'string'}},\n      'required': ['a', 'b', 'operator'],\n      'title': 'CalculatorInput',\n      'type': 'object',\n      'description': 'Input to the calculator.'}},\n    'required': ['input']}}}]\n"})}),"\n",(0,o.jsx)(e.p,{children:"Let\u2019s use the tool in conversation."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'chat_result = user_proxy.initiate_chat(assistant, message="What is (1423 - 123) / 3 + (32 + 23) * 5?")\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:'User (to Assistant):\n\nWhat is (1423 - 123) / 3 + (32 + 23) * 5?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_Uu4diKtxlTfkwXuY6MmJEb4E): calculator *****\nArguments: \n{\n    "input": {\n        "a": (1423 - 123) / 3,\n        "b": (32 + 23) * 5,\n        "operator": "+"\n    }\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_Uu4diKtxlTfkwXuY6MmJEb4E) *****\nError: Expecting value: line 1 column 29 (char 28)\n You argument should follow json format.\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\nI apologize for the confusion, I seem to have made a mistake. Let me recalculate the expression properly.\n\nFirst, we need to do the calculations within the brackets. So, calculating (1423 - 123), (32 + 23), and then performing remaining operations.\n***** Suggested tool call (call_mx3M3fNOwikFNoqSojDH1jIr): calculator *****\nArguments: \n{\n    "input": {\n        "a": 1423,\n        "b": 123,\n        "operator": "-"\n    }\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_mx3M3fNOwikFNoqSojDH1jIr) *****\n1300\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_hBAL2sYi6Y5ZtTHCNPCmxdN3): calculator *****\nArguments: \n{\n    "input": {\n        "a": 32,\n        "b": 23,\n        "operator": "+"\n    }\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_hBAL2sYi6Y5ZtTHCNPCmxdN3) *****\n55\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_wO3AP7EDeJvsVLCpvv5LohUa): calculator *****\nArguments: \n{\n    "input": {\n        "a": 1300,\n        "b": 3,\n        "operator": "/"\n    }\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_wO3AP7EDeJvsVLCpvv5LohUa) *****\n433\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_kQ2hDhqem8BHNlaHaE9ezvvQ): calculator *****\nArguments: \n{\n    "input": {\n        "a": 55,\n        "b": 5,\n        "operator": "*"\n    }\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_kQ2hDhqem8BHNlaHaE9ezvvQ) *****\n275\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\n***** Suggested tool call (call_1FLDUdvAZmjlSD7g5GFFJOpO): calculator *****\nArguments: \n{\n    "input": {\n        "a": 433,\n        "b": 275,\n        "operator": "+"\n    }\n}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION calculator...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool (call_1FLDUdvAZmjlSD7g5GFFJOpO) *****\n708\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nAssistant (to User):\n\nThe calculation result of the expression (1423 - 123) / 3 + (32 + 23) * 5 is 708. Let\'s proceed to the next task.\nTERMINATE\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)(e.p,{children:"Let\u2019s verify the answer:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"int((1423 - 123) / 3) + (32 + 23) * 5\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"708\n"})}),"\n",(0,o.jsx)(e.p,{children:"Again, the answer is correct. You can see that the assistant is able to\nunderstand the new tool schema and perform calculation correctly."}),"\n",(0,o.jsx)(e.h2,{id:"how-to-hide-tool-usage-and-code-execution-within-a-single-agent",children:"How to hide tool usage and code execution within a single agent?"}),"\n",(0,o.jsxs)(e.p,{children:["Sometimes it is preferable to hide the tool usage inside a single agent,\ni.e., the tool call and tool response messages are kept invisible from\noutside of the agent, and the agent responds to outside messages with\ntool usages as \u201cinternal monologues\u201d. For example, you might want build\nan agent that is similar to the ",(0,o.jsx)(e.a,{href:"https://platform.openai.com/docs/assistants/how-it-works",children:"OpenAI\u2019s\nAssistant"}),"\nwhich executes built-in tools internally."]}),"\n",(0,o.jsxs)(e.p,{children:["To achieve this, you can use ",(0,o.jsx)(e.a,{href:"../../docs/tutorial/conversation-patterns#nested-chats",children:"nested\nchats"}),". Nested\nchats allow you to create \u201cinternal monologues\u201d within an agent to call\nand execute tools. This works for code execution as well. See ",(0,o.jsx)(e.a,{href:"../../docs/notebooks/agentchat_nested_chats_chess",children:"nested\nchats for tool use"}),"\nfor an example."]}),"\n",(0,o.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(e.p,{children:"In this chapter, we showed you how to create, register and use tools.\nTools allows agents to perform actions without writing arbitrary code.\nIn the next chapter, we will introduce conversation patterns, and show\nhow to use the result of a conversation."})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>r});var o=t(67294);const a={},s=o.createContext(a);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);