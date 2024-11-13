"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1094],{71493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(85893),s=t(11151);const o={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_human_feedback.ipynb",description:"Code generation, execution, debugging and human feedback.",source_notebook:"/notebook/agentchat_human_feedback.ipynb",tags:["human","code generation"],title:"Auto Generated Agent Chat: Task Solving with Code Generation, Execution, Debugging & Human Feedback"},i="Auto Generated Agent Chat: Task Solving with Code Generation, Execution, Debugging & Human Feedback",r={id:"notebooks/agentchat_human_feedback",title:"Auto Generated Agent Chat: Task Solving with Code Generation, Execution, Debugging & Human Feedback",description:"Code generation, execution, debugging and human feedback.",source:"@site/docs/notebooks/agentchat_human_feedback.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_human_feedback",permalink:"/ag2/docs/notebooks/agentchat_human_feedback",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_human_feedback.ipynb",tags:[{label:"human",permalink:"/ag2/docs/tags/human"},{label:"code generation",permalink:"/ag2/docs/tags/code-generation"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_human_feedback.ipynb",description:"Code generation, execution, debugging and human feedback.",source_notebook:"/notebook/agentchat_human_feedback.ipynb",tags:["human","code generation"],title:"Auto Generated Agent Chat: Task Solving with Code Generation, Execution, Debugging & Human Feedback"},sidebar:"notebooksSidebar",previous:{title:"Using Guidance with AutoGen",permalink:"/ag2/docs/notebooks/agentchat_guidance"},next:{title:"Generate Dalle Images With Conversable Agents",permalink:"/ag2/docs/notebooks/agentchat_image_generation_capability"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Construct Agents",id:"construct-agents",level:2},{value:"Perform a task",id:"perform-a-task",level:2},{value:"Analyze the conversation",id:"analyze-the-conversation",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"auto-generated-agent-chat-task-solving-with-code-generation-execution-debugging--human-feedback",children:"Auto Generated Agent Chat: Task Solving with Code Generation, Execution, Debugging & Human Feedback"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_human_feedback.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_human_feedback.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsxs)(n.p,{children:["AutoGen offers conversable agents powered by LLM, tool, or human, which\ncan be used to perform tasks collectively via automated chat. This\nframework allows tool use and human participation through multi-agent\nconversation. Please find documentation about this feature\n",(0,a.jsx)(n.a,{href:"https://ag2ai.github.io/autogen/docs/Use-Cases/agent_chat",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In this notebook, we demonstrate how to use ",(0,a.jsx)(n.code,{children:"AssistantAgent"})," and\n",(0,a.jsx)(n.code,{children:"UserProxyAgent"})," to solve a challenging math problem with human\nfeedback. Here ",(0,a.jsx)(n.code,{children:"AssistantAgent"})," is an LLM-based agent that can write\nPython code (in a Python coding block) for a user to execute for a given\ntask. ",(0,a.jsx)(n.code,{children:"UserProxyAgent"})," is an agent which serves as a proxy for a user to\nexecute the code written by ",(0,a.jsx)(n.code,{children:"AssistantAgent"}),". By setting\n",(0,a.jsx)(n.code,{children:"human_input_mode"})," properly, the ",(0,a.jsx)(n.code,{children:"UserProxyAgent"})," can also prompt the\nuser for feedback to ",(0,a.jsx)(n.code,{children:"AssistantAgent"}),". For example, when\n",(0,a.jsx)(n.code,{children:"human_input_mode"})," is set to \u201cALWAYS\u201d, the ",(0,a.jsx)(n.code,{children:"UserProxyAgent"})," will always\nprompt the user for feedback. When user feedback is provided, the\n",(0,a.jsx)(n.code,{children:"UserProxyAgent"})," will directly pass the feedback to ",(0,a.jsx)(n.code,{children:"AssistantAgent"}),".\nWhen no user feedback is provided, the ",(0,a.jsx)(n.code,{children:"UserProxyAgent"})," will execute the\ncode written by ",(0,a.jsx)(n.code,{children:"AssistantAgent"})," and return the execution results\n(success or failure and corresponding outputs) to ",(0,a.jsx)(n.code,{children:"AssistantAgent"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(n.p,{children:["AutoGen requires ",(0,a.jsx)(n.code,{children:"Python>=3.8"}),". To run this notebook example, please\ninstall:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# %pip install "pyautogen>=0.2.3"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,a.jsxs)(n.p,{children:["The\n",(0,a.jsx)(n.a,{href:"https://ag2ai.github.io/autogen/docs/reference/oai/openai_utils#config_list_from_json",children:(0,a.jsx)(n.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import json\n\nimport autogen\n\nconfig_list = autogen.config_list_from_json("OAI_CONFIG_LIST")\n'})}),"\n",(0,a.jsx)(n.p,{children:"It first looks for environment variable \u201cOAI_CONFIG_LIST\u201d which needs to\nbe a valid json string. If that variable is not found, it then looks for\na json file named \u201cOAI_CONFIG_LIST\u201d. It filters the configs by models\n(you can filter by other keys as well). Only the models with matching\nnames are kept in the list based on the filter condition."}),"\n",(0,a.jsx)(n.p,{children:"The config list looks like the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"config_list = [\n    {\n        'model': 'gpt-4',\n        'api_key': '<your OpenAI API key here>',\n    },\n    {\n        'model': 'gpt-3.5-turbo',\n        'api_key': '<your Azure OpenAI API key here>',\n        'base_url': '<your Azure OpenAI API base here>',\n        'api_type': 'azure',\n        'api_version': '2024-02-01',\n    },\n    {\n        'model': 'gpt-3.5-turbo-16k',\n        'api_key': '<your Azure OpenAI API key here>',\n        'base_url': '<your Azure OpenAI API base here>',\n        'api_type': 'azure',\n        'api_version': '2024-02-01',\n    },\n]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can set the value of config_list in any way you prefer. Please refer\nto this\n",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/topics/llm_configuration.ipynb",children:"notebook"}),"\nfor full code examples of the different methods."]}),"\n",(0,a.jsx)(n.h2,{id:"construct-agents",children:"Construct Agents"}),"\n",(0,a.jsx)(n.p,{children:"We construct the assistant agent and the user proxy agent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# create an AssistantAgent instance named "assistant"\nassistant = autogen.AssistantAgent(\n    name="assistant",\n    llm_config={\n        "cache_seed": 41,\n        "config_list": config_list,\n    },\n)\n# create a UserProxyAgent instance named "user_proxy"\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    human_input_mode="ALWAYS",\n    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),\n    code_execution_config={\n        "use_docker": False\n    },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"perform-a-task",children:"Perform a task"}),"\n",(0,a.jsxs)(n.p,{children:["We invoke the ",(0,a.jsx)(n.code,{children:"initiate_chat()"})," method of the user proxy agent to start\nthe conversation. When you run the cell below, you will be prompted to\nprovide feedback after receiving a message from the assistant agent. If\nyou don\u2019t provide any feedback (by pressing Enter directly), the user\nproxy agent will try to execute the code suggested by the assistant\nagent on behalf of you, or terminate if the assistant agent sends a\n\u201cTERMINATE\u201d signal at the end of the message."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'math_problem_to_solve = """\nFind $a + b + c$, given that $x+y \\\\neq -1$ and\n\\\\begin{align}\n    ax + by + c & = x + 7,\\\\\n    a + bx + cy & = 2x + 6y,\\\\\n    ay + b + cx & = 4x + y.\n\\\\end{align}.\n"""\n\n# the assistant receives a message from the user, which contains the task description\nuser_proxy.initiate_chat(assistant, message=math_problem_to_solve)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"user_proxy (to assistant):\n\n\nFind $a + b + c$, given that $x+y \\neq -1$ and \n\\begin{align}\n    ax + by + c & = x + 7,\\\n    a + bx + cy & = 2x + 6y,\\\n    ay + b + cx & = 4x + y.\n\\end{align}.\n\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nTo solve the system of linear equations, I will use NumPy library in Python to calculate the coefficients and constants and then use the linalg.solve() function to find the values of a, b, and c. Finally, I will add them up to find $a + b + c$.\n\nStep 1: Define the coefficients and constants\n\nStep 2: Solve the system of equations using NumPy\n\nStep 3: Calculate the sum of a, b, and c\n\n--------------------------------------------------------------------------------\nuser_proxy (to assistant):\n\nuse sympy\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nSure, I will use Sympy to solve the system of linear equations.\n\nStep 1: Import Sympy library and define the symbols\n``` python\nfrom sympy import symbols, Eq, solve\n\na, b, c, x, y = symbols('a b c x y')\n```\n\nStep 2: Define the equations\n``` python\neq1 = Eq(a * x + b * y + c, x + 7)\neq2 = Eq(a + b * x + c * y, 2 * x + 6 * y)\neq3 = Eq(a * y + b + c * x, 4 * x + y)\n```\n\nStep 3: Solve the system of equations\n``` python\nsolutions = solve((eq1, eq2, eq3), (a, b, c))\n```\n\nStep 4: Calculate the sum of a, b, and c\n``` python\na_value, b_value, c_value = solutions[a], solutions[b], solutions[c]\nsum_abc = a_value + b_value + c_value\n```\n\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nuser_proxy (to assistant):\n\nexitcode: 1 (execution failed)\nCode output: \n  File \"\", line 2\n    Step 2: Define the equations\n         ^\nSyntaxError: invalid syntax\n\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nApologies for the confusion. I should have provided the code in a single block without the step-by-step comments. Here is the code to solve the system of linear equations using Sympy:\n\n```python\nfrom sympy import symbols, Eq, solve\n\na, b, c, x, y = symbols('a b c x y')\n\neq1 = Eq(a * x + b * y + c, x + 7)\neq2 = Eq(a + b * x + c * y, 2 * x + 6 * y)\neq3 = Eq(a * y + b + c * x, 4 * x + y)\n\nsolutions = solve((eq1, eq2, eq3), (a, b, c))\n\na_value, b_value, c_value = solutions[a], solutions[b], solutions[c]\nsum_abc = a_value + b_value + c_value\nprint(sum_abc)\n```\n\nPlease run the provided code to find the sum of a, b, and c.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nuser_proxy (to assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: \n(2*x**2 - 3*x + y)/(x**2 - x*y - x + y**2 - y + 1) + (x**2 - 3*x*y + 2*x + y**2 - y)/(x**2 - x*y - x + y**2 - y + 1) + (4*x**2 - 4*x*y - 6*x + 6*y**2 - 7*y + 7)/(x**2 - x*y - x + y**2 - y + 1)\n\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nI apologize for the confusion. The code provided the sum of a, b, and c in a symbolic representation. To get an answer, we need to put some constraints on x and y for which x + y is not equal to -1.\n\nWe can choose any values for x and y that don't satisfy x + y = -1, and then substitute them into the equation to find the corresponding sum of a, b, and c. Let's use x = 1 and y = 0, which satisfy the given condition.\n\nHere is the updated code with the chosen values for x and y:\n\n```python\nfrom sympy import symbols, Eq, solve\n\na, b, c, x, y = symbols('a b c x y')\n\neq1 = Eq(a * x + b * y + c, x + 7)\neq2 = Eq(a + b * x + c * y, 2 * x + 6 * y)\neq3 = Eq(a * y + b + c * x, 4 * x + y)\n\nsolutions = solve((eq1, eq2, eq3), (a, b, c))\n\nchosen_x = 1\nchosen_y = 0\n\na_value, b_value, c_value = solutions[a].subs(x, chosen_x).subs(y, chosen_y), solutions[b].subs(x, chosen_x).subs(y, chosen_y), solutions[c].subs(x, chosen_x).subs(y, chosen_y)\nsum_abc = a_value + b_value + c_value\nprint(sum_abc)\n```\n\nPlease run the provided code again to find the sum of a, b, and c.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nuser_proxy (to assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: \n7\n\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nGreat! Now we have the sum of a, b, and c. The answer is:\n\n$$a + b + c = 7$$\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"analyze-the-conversation",children:"Analyze the conversation"}),"\n",(0,a.jsx)(n.p,{children:"The human user can provide feedback at each step. When the human user\ndidn\u2019t provide feedback, the code was executed. The executed results and\nerror messages are returned to the assistant, and the assistant is able\nto modify the code based on the feedback. In the end, the task is\ncomplete and a \u201cTERMINATE\u201d signal is sent from the assistant. The user\nskipped feedback in the end and the conversation is finished."}),"\n",(0,a.jsxs)(n.p,{children:["After the conversation is finished, we can save the conversations\nbetween the two agents. The conversation can be accessed from\n",(0,a.jsx)(n.code,{children:"user_proxy.chat_messages"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"print(user_proxy.chat_messages[assistant])\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'json.dump(user_proxy.chat_messages[assistant], open("conversations.json", "w"), indent=2)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);