"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2434],{71009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=t(85893),a=t(11151);const o={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_planning.ipynb",description:"Use planning agent in a function call.",source_notebook:"/notebook/agentchat_planning.ipynb",tags:["planning","orchestration","nested chat","tool/function"],title:"Auto Generated Agent Chat: Collaborative Task Solving with Coding and Planning Agent"},i="Auto Generated Agent Chat: Collaborative Task Solving with Coding and Planning Agent",r={id:"notebooks/agentchat_planning",title:"Auto Generated Agent Chat: Collaborative Task Solving with Coding and Planning Agent",description:"Use planning agent in a function call.",source:"@site/docs/notebooks/agentchat_planning.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_planning",permalink:"/ag2/docs/notebooks/agentchat_planning",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_planning.ipynb",tags:[{label:"planning",permalink:"/ag2/docs/tags/planning"},{label:"orchestration",permalink:"/ag2/docs/tags/orchestration"},{label:"nested chat",permalink:"/ag2/docs/tags/nested-chat"},{label:"tool/function",permalink:"/ag2/docs/tags/tool-function"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_planning.ipynb",description:"Use planning agent in a function call.",source_notebook:"/notebook/agentchat_planning.ipynb",tags:["planning","orchestration","nested chat","tool/function"],title:"Auto Generated Agent Chat: Collaborative Task Solving with Coding and Planning Agent"},sidebar:"notebooksSidebar",previous:{title:"Auto Generated Agent Chat: GPTAssistant with Code Interpreter",permalink:"/ag2/docs/notebooks/agentchat_oai_code_interpreter"},next:{title:"SocietyOfMindAgent",permalink:"/ag2/docs/notebooks/agentchat_society_of_mind"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Construct Agents",id:"construct-agents",level:2},{value:"Perform a task",id:"perform-a-task",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"auto-generated-agent-chat-collaborative-task-solving-with-coding-and-planning-agent",children:"Auto Generated Agent Chat: Collaborative Task Solving with Coding and Planning Agent"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_planning.ipynb",children:(0,s.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_planning.ipynb",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,s.jsxs)(n.p,{children:["AutoGen offers conversable agents powered by LLM, tool, or human, which\ncan be used to perform tasks collectively via automated chat. This\nframework allows tool use and human participation through multi-agent\nconversation. Please find documentation about this feature\n",(0,s.jsx)(n.a,{href:"https://ag2ai.github.io/autogen/docs/Use-Cases/agent_chat",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In this notebook, we demonstrate how to use multiple agents to work\ntogether and accomplish a task that requires finding info from the web\nand coding. ",(0,s.jsx)(n.code,{children:"AssistantAgent"})," is an LLM-based agent that can write and\ndebug Python code (in a Python coding block) for a user to execute for a\ngiven task. ",(0,s.jsx)(n.code,{children:"UserProxyAgent"})," is an agent which serves as a proxy for a\nuser to execute the code written by ",(0,s.jsx)(n.code,{children:"AssistantAgent"}),". We further create\na planning agent for the assistant agent to consult. The planning agent\nis a variation of the LLM-based ",(0,s.jsx)(n.code,{children:"AssistantAgent"})," with a different system\nmessage."]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.p,{children:["AutoGen requires ",(0,s.jsx)(n.code,{children:"Python>=3.8"}),". To run this notebook example, please\ninstall autogen and docker:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install autogen docker\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# %pip install "autogen" docker\n'})}),"\n",(0,s.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The\n",(0,s.jsx)(n.a,{href:"https://ag2ai.github.io/autogen/docs/reference/oai/openai_utils#config_list_from_json",children:(0,s.jsx)(n.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file. It first looks for an environment variable with a specified\nname. The value of the environment variable needs to be a valid json\nstring. If that variable is not found, it looks for a json file with the\nsame name. It filters the configs by filter_dict."]}),"\n",(0,s.jsx)(n.p,{children:"It\u2019s OK to have only the OpenAI API key, or only the Azure OpenAI API\nkey + base."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import autogen\n\nconfig_list = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "model": ["gpt-4", "gpt-4-0314", "gpt4", "gpt-4-32k", "gpt-4-32k-0314", "gpt-4-32k-v0314"],\n    },\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The config list looks like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"config_list = [\n    {\n        'model': 'gpt-4',\n        'api_key': '<your OpenAI API key here>',\n    },  # OpenAI API endpoint for gpt-4\n    {\n        'model': 'gpt-4',\n        'api_key': '<your Azure OpenAI API key here>',\n        'base_url': '<your Azure OpenAI API base here>',\n        'api_type': 'azure',\n        'api_version': '2024-02-01',\n    },  # Azure OpenAI API endpoint for gpt-4\n    {\n        'model': 'gpt-4-32k',\n        'api_key': '<your Azure OpenAI API key here>',\n        'base_url': '<your Azure OpenAI API base here>',\n        'api_type': 'azure',\n        'api_version': '2024-02-01',\n    },  # Azure OpenAI API endpoint for gpt-4-32k\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can set the value of config_list in any way you prefer. Please refer\nto this\n",(0,s.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/oai_openai_utils.ipynb",children:"notebook"}),"\nfor full code examples of the different methods."]}),"\n",(0,s.jsx)(n.h2,{id:"construct-agents",children:"Construct Agents"}),"\n",(0,s.jsxs)(n.p,{children:["We construct the planning agent named \u201cplanner\u201d and a user proxy agent\nfor the planner named \u201cplanner_user\u201d. We specify ",(0,s.jsx)(n.code,{children:"human_input_mode"})," as\n\u201cNEVER\u201d in the user proxy agent, which will never ask for human\nfeedback. We define ",(0,s.jsx)(n.code,{children:"ask_planner"})," function to send a message to the\nplanner and return the suggestion from the planner."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'planner = autogen.AssistantAgent(\n    name="planner",\n    llm_config={"config_list": config_list},\n    # the default system message of the AssistantAgent is overwritten here\n    system_message="You are a helpful AI assistant. You suggest coding and reasoning steps for another AI assistant to accomplish a task. Do not suggest concrete code. For any action beyond writing code or reasoning, convert it to a step that can be implemented by writing code. For example, browsing the web can be implemented by writing code that reads and prints the content of a web page. Finally, inspect the execution result. If the plan is not good, suggest a better plan. If the execution is wrong, analyze the error and suggest a fix.",\n)\nplanner_user = autogen.UserProxyAgent(\n    name="planner_user",\n    max_consecutive_auto_reply=0,  # terminate without auto-reply\n    human_input_mode="NEVER",\n    code_execution_config={\n        "use_docker": False\n    },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n)\n\n\ndef ask_planner(message):\n    planner_user.initiate_chat(planner, message=message)\n    # return the last message received from the planner\n    return planner_user.last_message()["content"]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We construct the assistant agent and the user proxy agent. We specify\n",(0,s.jsx)(n.code,{children:"human_input_mode"})," as \u201cTERMINATE\u201d in the user proxy agent, which will\nask for feedback when it receives a \u201cTERMINATE\u201d signal from the\nassistant agent. We set the ",(0,s.jsx)(n.code,{children:"functions"})," in ",(0,s.jsx)(n.code,{children:"AssistantAgent"})," and\n",(0,s.jsx)(n.code,{children:"function_map"})," in ",(0,s.jsx)(n.code,{children:"UserProxyAgent"})," to use the created ",(0,s.jsx)(n.code,{children:"ask_planner"}),"\nfunction."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# create an AssistantAgent instance named "assistant"\nassistant = autogen.AssistantAgent(\n    name="assistant",\n    llm_config={\n        "temperature": 0,\n        "timeout": 600,\n        "cache_seed": 42,\n        "config_list": config_list,\n        "functions": [\n            {\n                "name": "ask_planner",\n                "description": "ask planner to: 1. get a plan for finishing a task, 2. verify the execution result of the plan and potentially suggest new plan.",\n                "parameters": {\n                    "type": "object",\n                    "properties": {\n                        "message": {\n                            "type": "string",\n                            "description": "question to ask planner. Make sure the question include enough context, such as the code and the execution result. The planner does not know the conversation between you and the user, unless you share the conversation with the planner.",\n                        },\n                    },\n                    "required": ["message"],\n                },\n            },\n        ],\n    },\n)\n\n# create a UserProxyAgent instance named "user_proxy"\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    human_input_mode="TERMINATE",\n    max_consecutive_auto_reply=10,\n    # is_termination_msg=lambda x: "content" in x and x["content"] is not None and x["content"].rstrip().endswith("TERMINATE"),\n    code_execution_config={\n        "work_dir": "planning",\n        "use_docker": False,\n    },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    function_map={"ask_planner": ask_planner},\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"perform-a-task",children:"Perform a task"}),"\n",(0,s.jsxs)(n.p,{children:["We invoke the ",(0,s.jsx)(n.code,{children:"initiate_chat()"})," method of the user proxy agent to start\nthe conversation. When you run the cell below, you will be prompted to\nprovide feedback after the assistant agent sends a \u201cTERMINATE\u201d signal at\nthe end of the message. If you don\u2019t provide any feedback (by pressing\nEnter directly), the conversation will finish. Before the \u201cTERMINATE\u201d\nsignal, the user proxy agent will try to execute the code suggested by\nthe assistant agent on behalf of the user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# the assistant receives a message from the user, which contains the task description\nuser_proxy.initiate_chat(\n    assistant,\n    message="""Suggest a fix to an open good first issue of flaml""",\n)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'user_proxy (to assistant):\n\nSuggest a fix to an open good first issue of flaml\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nTo suggest a fix to an open good first issue of FLAML, we first need to fetch the list of open issues labeled as "good first issue" from the FLAML GitHub repository. We can do this using the GitHub API. Here is a Python script that fetches and prints the list of open issues labeled as "good first issue" from the FLAML repository.\n\n```python\n# filename: fetch_issues.py\n\nimport requests\nimport json\n\ndef fetch_issues():\n    url = "https://api.github.com/repos/microsoft/FLAML/issues"\n    params = {\n        "state": "open",\n        "labels": "good first issue"\n    }\n    response = requests.get(url, params=params)\n    issues = json.loads(response.text)\n    for issue in issues:\n        print(f"Issue #{issue[\'number\']}: {issue[\'title\']}")\n\nif __name__ == "__main__":\n    fetch_issues()\n```\n\nPlease run this script to fetch the list of open issues. After that, I can help you analyze one of the issues and suggest a potential fix.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nuser_proxy (to assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: \nIssue #1228: include that `retrain_full = True` does not include the user provided validation data in the docs.\nIssue #1120: use_label_encoder warning with xgboost\nIssue #981: Running flaml[tune] using "-O" flag for python interpreter (optimization - disables assertions) crashes\nIssue #903: Conditional parameter flow2 crash\nIssue #884: indentation space\nIssue #882: Check if openml version is required\nIssue #834: Adjust the indent\nIssue #821: pip install flaml FAIL\nIssue #807: Isolate the ensemble part and expose it to users\nIssue #805: how to pass categorical features names or indices to learner\nIssue #785: Flaml/LightGBM - Shouldn\'t I found better/faster or equal results from FLAML than direct LightGBM?\nIssue #764: Add an announcement of the discord channel\nIssue #748: Documentation about small budget\nIssue #737: Make zero-shot automl more discoverable\nIssue #509: New HCrystalBall release\nIssue #429: samples about conversion to ONNX\nIssue #413: support anomaly detection\nIssue #304: CatBoost Fails with Keyword \'groups\'\n\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\n***** Suggested function Call: ask_planner *****\nArguments: \n{\n  "message": "Here are the open issues labeled as \'good first issue\' in the FLAML repository. Please suggest a plan to fix one of these issues. \\n\\n1. Issue #1228: include that `retrain_full = True` does not include the user provided validation data in the docs.\\n2. Issue #1120: use_label_encoder warning with xgboost\\n3. Issue #981: Running flaml[tune] using \\"-O\\" flag for python interpreter (optimization - disables assertions) crashes\\n4. Issue #903: Conditional parameter flow2 crash\\n5. Issue #884: indentation space\\n6. Issue #882: Check if openml version is required\\n7. Issue #834: Adjust the indent\\n8. Issue #821: pip install flaml FAIL\\n9. Issue #807: Isolate the ensemble part and expose it to users\\n10. Issue #805: how to pass categorical features names or indices to learner\\n11. Issue #785: Flaml/LightGBM - Shouldn\'t I found better/faster or equal results from FLAML than direct LightGBM?\\n12. Issue #764: Add an announcement of the discord channel\\n13. Issue #748: Documentation about small budget\\n14. Issue #737: Make zero-shot automl more discoverable\\n15. Issue #509: New HCrystalBall release\\n16. Issue #429: samples about conversion to ONNX\\n17. Issue #413: support anomaly detection\\n18. Issue #304: CatBoost Fails with Keyword \'groups\'"\n}\n************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION ask_planner...\nplanner_user (to planner):\n\nHere are the open issues labeled as \'good first issue\' in the FLAML repository. Please suggest a plan to fix one of these issues. \n\n1. Issue #1228: include that `retrain_full = True` does not include the user provided validation data in the docs.\n2. Issue #1120: use_label_encoder warning with xgboost\n3. Issue #981: Running flaml[tune] using "-O" flag for python interpreter (optimization - disables assertions) crashes\n4. Issue #903: Conditional parameter flow2 crash\n5. Issue #884: indentation space\n6. Issue #882: Check if openml version is required\n7. Issue #834: Adjust the indent\n8. Issue #821: pip install flaml FAIL\n9. Issue #807: Isolate the ensemble part and expose it to users\n10. Issue #805: how to pass categorical features names or indices to learner\n11. Issue #785: Flaml/LightGBM - Shouldn\'t I found better/faster or equal results from FLAML than direct LightGBM?\n12. Issue #764: Add an announcement of the discord channel\n13. Issue #748: Documentation about small budget\n14. Issue #737: Make zero-shot automl more discoverable\n15. Issue #509: New HCrystalBall release\n16. Issue #429: samples about conversion to ONNX\n17. Issue #413: support anomaly detection\n18. Issue #304: CatBoost Fails with Keyword \'groups\'\n\n--------------------------------------------------------------------------------\nplanner (to planner_user):\n\nHere are the steps to fix the first issue (Issue #1228: include that `retrain_full = True` does not include the user provided validation data in the docs):\n\n1. **Identify where the issue is**: Understand the context of `retrain_full = True` within FLAML. Figure out how it works - whether it really ignores the user-provided validation data or not.\n\n2. **Update the documentation**: Based on your understanding, update the corresponding part of the documentation to include a note or clarification about this fact. You can use Markdown language to do the documentation. The note can be written in a clear and concise way.\n\n3. **Commit and Push Code**: After making the necessary changes, commit and push the changes to your repository. Make sure to include a detailed commit message to make it clear what changes were made.\n\n4. **Submit a Pull Request (PR)**: Then submit a pull request to the FLAML repository. In the message of the PR, be sure to reference the issue number (i.e. #1228), to automatically link it.\n\n5. **Wait for Review**: Maintainers will then review your code. They may suggest changes or improvements, and once they\'re satisfied, they\'ll merge your changes into the main repository.\n\n6. **Inspect the Results**: After the pull request is merged, verify that the changes have been successfully incorporated and the documentation correctly reflects the behavior of `retrain_full = True`.\n\nPlease note, this plan does not involve writing code in any programming language. Instead, it focuses on understanding the library, editing Markdown files, and using Git and GitHub functionalities appropriately. \n\nShould any of your actions result in an error, this could be due to multiple reasons such as misinterpretation of the behaviour of `retrain_full = True`, errors in the markdown syntax, among others. You will need to debug the error based on the specific error message and review your changes. After making corrections, you should commit and push your changes and verify that the error has been fixed.\n\n--------------------------------------------------------------------------------\nuser_proxy (to assistant):\n\n***** Response from calling function "ask_planner" *****\nHere are the steps to fix the first issue (Issue #1228: include that `retrain_full = True` does not include the user provided validation data in the docs):\n\n1. **Identify where the issue is**: Understand the context of `retrain_full = True` within FLAML. Figure out how it works - whether it really ignores the user-provided validation data or not.\n\n2. **Update the documentation**: Based on your understanding, update the corresponding part of the documentation to include a note or clarification about this fact. You can use Markdown language to do the documentation. The note can be written in a clear and concise way.\n\n3. **Commit and Push Code**: After making the necessary changes, commit and push the changes to your repository. Make sure to include a detailed commit message to make it clear what changes were made.\n\n4. **Submit a Pull Request (PR)**: Then submit a pull request to the FLAML repository. In the message of the PR, be sure to reference the issue number (i.e. #1228), to automatically link it.\n\n5. **Wait for Review**: Maintainers will then review your code. They may suggest changes or improvements, and once they\'re satisfied, they\'ll merge your changes into the main repository.\n\n6. **Inspect the Results**: After the pull request is merged, verify that the changes have been successfully incorporated and the documentation correctly reflects the behavior of `retrain_full = True`.\n\nPlease note, this plan does not involve writing code in any programming language. Instead, it focuses on understanding the library, editing Markdown files, and using Git and GitHub functionalities appropriately. \n\nShould any of your actions result in an error, this could be due to multiple reasons such as misinterpretation of the behaviour of `retrain_full = True`, errors in the markdown syntax, among others. You will need to debug the error based on the specific error message and review your changes. After making corrections, you should commit and push your changes and verify that the error has been fixed.\n********************************************************\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nTo fix the issue #1228, you need to follow these steps:\n\n1. **Identify where the issue is**: Understand the context of `retrain_full = True` within FLAML. Figure out how it works - whether it really ignores the user-provided validation data or not.\n\n2. **Update the documentation**: Based on your understanding, update the corresponding part of the documentation to include a note or clarification about this fact. You can use Markdown language to do the documentation. The note can be written in a clear and concise way.\n\n3. **Commit and Push Code**: After making the necessary changes, commit and push the changes to your repository. Make sure to include a detailed commit message to make it clear what changes were made.\n\n4. **Submit a Pull Request (PR)**: Then submit a pull request to the FLAML repository. In the message of the PR, be sure to reference the issue number (i.e. #1228), to automatically link it.\n\n5. **Wait for Review**: Maintainers will then review your code. They may suggest changes or improvements, and once they\'re satisfied, they\'ll merge your changes into the main repository.\n\n6. **Inspect the Results**: After the pull request is merged, verify that the changes have been successfully incorporated and the documentation correctly reflects the behavior of `retrain_full = True`.\n\nPlease note, this plan does not involve writing code in any programming language. Instead, it focuses on understanding the library, editing Markdown files, and using Git and GitHub functionalities appropriately. \n\nShould any of your actions result in an error, this could be due to multiple reasons such as misinterpretation of the behaviour of `retrain_full = True`, errors in the markdown syntax, among others. You will need to debug the error based on the specific error message and review your changes. After making corrections, you should commit and push your changes and verify that the error has been fixed.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nuser_proxy (to assistant):\n\n\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"execute_code was called without specifying a value for use_docker. Since the python docker package is not available, code will be run natively. Note: this fallback behavior is subject to change\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the assistant needs to consult the planner, it suggests a function\ncall to ",(0,s.jsx)(n.code,{children:"ask_planner"}),". When this happens, a line like the following will\nbe displayed:"]}),"\n",(0,s.jsx)(n.p,{children:"***** Suggested function Call: ask_planner *****"})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(67294);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);