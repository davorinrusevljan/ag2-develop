"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7822],{7118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),o=t(11151);const a={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/code-execution/custom-executor.ipynb",source_notebook:"/website/docs/topics/code-execution/custom-executor.ipynb",title:"Custom Code Executor"},s="Custom Code Executor",r={id:"topics/code-execution/custom-executor",title:"Custom Code Executor",description:"Open In Colab",source:"@site/docs/topics/code-execution/custom-executor.mdx",sourceDirName:"topics/code-execution",slug:"/topics/code-execution/custom-executor",permalink:"/ag2/docs/topics/code-execution/custom-executor",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/code-execution/custom-executor.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/code-execution/custom-executor.ipynb",source_notebook:"/website/docs/topics/code-execution/custom-executor.ipynb",title:"Custom Code Executor"},sidebar:"docsSidebar",previous:{title:"Command Line Code Executor",permalink:"/ag2/docs/topics/code-execution/cli-code-executor"},next:{title:"Jupyter Code Executor",permalink:"/ag2/docs/topics/code-execution/jupyter-code-executor"}},d={},c=[];function l(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"custom-code-executor",children:"Custom Code Executor"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/website/docs/topics/code-execution/custom-executor.ipynb",children:(0,i.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/website/docs/topics/code-execution/custom-executor.ipynb",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,i.jsx)(n.p,{children:"In this guide we will show you how to create a custom code executor that\nruns code inside the same Jupyter notebook as this one."}),"\n",(0,i.jsx)(n.p,{children:"First, let\u2019s install the required dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"! pip -qqq install pyautogen matplotlib yfinance\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import os\nfrom typing import List\n\nfrom IPython import get_ipython\n\nfrom autogen import ConversableAgent\nfrom autogen.coding import CodeBlock, CodeExecutor, CodeExtractor, CodeResult, MarkdownCodeExtractor\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now we can create the custom code executor class by subclassing the\n",(0,i.jsx)(n.code,{children:"CodeExecutor"})," protocol and implementing the ",(0,i.jsx)(n.code,{children:"execute_code_blocks"}),"\nmethod."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class NotebookExecutor(CodeExecutor):\n\n    @property\n    def code_extractor(self) -> CodeExtractor:\n        # Extact code from markdown blocks.\n        return MarkdownCodeExtractor()\n\n    def __init__(self) -> None:\n        # Get the current IPython instance running in this notebook.\n        self._ipython = get_ipython()\n\n    def execute_code_blocks(self, code_blocks: List[CodeBlock]) -> CodeResult:\n        log = ""\n        for code_block in code_blocks:\n            result = self._ipython.run_cell("%%capture --no-display cap\\n" + code_block.code)\n            log += self._ipython.ev("cap.stdout")\n            log += self._ipython.ev("cap.stderr")\n            if result.result is not None:\n                log += str(result.result)\n            exitcode = 0 if result.success else 1\n            if result.error_before_exec is not None:\n                log += f"\\n{result.error_before_exec}"\n                exitcode = 1\n            if result.error_in_exec is not None:\n                log += f"\\n{result.error_in_exec}"\n                exitcode = 1\n            if exitcode != 0:\n                break\n        return CodeResult(exit_code=exitcode, output=log)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now we can use the new custom code executor in our agents."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'code_writer_agent = ConversableAgent(\n    name="CodeWriter",\n    system_message="You are a helpful AI assistant.\\n"\n    "You use your coding skill to solve problems.\\n"\n    "You have access to a IPython kernel to execute Python code.\\n"\n    "You can suggest Python code in Markdown blocks, each block is a cell.\\n"\n    "The code blocks will be executed in the IPython kernel in the order you suggest them.\\n"\n    "All necessary libraries have already been installed.\\n"\n    "Once the task is done, returns \'TERMINATE\'.",\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.getenv("OPENAI_API_KEY")}]},\n)\n\ncode_executor_agent = ConversableAgent(\n    name="CodeExecutor",\n    llm_config=False,\n    code_execution_config={"executor": NotebookExecutor()},\n    is_termination_msg=lambda msg: "TERMINATE" in msg.get("content", "").strip().upper(),\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Let\u2019s use the agents to complete a simple task of drawing a plot showing\nthe market caps of the top 7 publicly listed companies."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'chat_result = code_executor_agent.initiate_chat(\n    code_writer_agent,\n    message="Create a plot showing the market caps of the top 7 publicly listed companies using data from Yahoo Finance.",\n)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"CodeExecutor (to CodeWriter):\n\nCreate a plot showing the market caps of the top 7 publicly listed companies using data from Yahoo Finance.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeWriter (to CodeExecutor):\n\nTo accomplish this task, we would use the `yfinance` library to fetch data from Yahoo Finance, `pandas` library for data manipulation, and `matplotlib` for data visualization.\n\nSteps:\n1. Identify the tickers for the top 7 largest publicly listed companies. Currently, these companies are: Apple (AAPL), Microsoft (MSFT), Google (GOOGL), Amazon (AMZN), Facebook (FB), Tesla (TSLA), and Berkshire Hathaway (BRK-A).\n2. Fetch market cap information for these companies using yfinance.\n3. Clean and process the fetched data into a usable format (a pandas DataFrame).\n4. Plot the market caps for these companies.\n\nLet's start by fetching data for these companies.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeExecutor (to CodeWriter):\n\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeWriter (to CodeExecutor):\n\nGreat! Before I continue, I need to know if the necessary libraries are installed.\n\nThe libraries needed for this task are:\n1. `yfinance`\n2. `pandas`\n3. `matplotlib`\n\nIf these libraries are not installed, you can install them using pip:\n\n```python\n!pip install yfinance pandas matplotlib\n```\n\nAssuming these libraries are installed, we would import them and proceed with fetching the market cap data:\n\n```python\nimport yfinance as yf\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Define tickers \ntickers = [\"AAPL\", \"MSFT\", \"GOOGL\", \"AMZN\", \"FB\", \"TSLA\", \"BRK-A\"]\n\n# Fetch data\ndata = yf.download(tickers, start=\"2022-02-01\", end=\"2022-02-28\")\n\n# Extract only 'Close' values for each ticker\ndata = data['Close']\n\n# Create empty dictionary to hold market cap data\nmarket_caps = {}\n\n# Calculate market caps\nfor ticker in tickers:\n    info = yf.Ticker(ticker).info\n    market_caps[ticker] = info[\"marketCap\"]\n\n# Convert market_caps dictionary to pandas DataFrame\ndf = pd.DataFrame(list(market_caps.items()), columns=['Company', 'Market_Cap'])\n\n# Sort DataFrame by Market_Cap in descending order\ndf = df.sort_values('Market_Cap', ascending=False)\n\n# Plot data\nplt.figure(figsize=(10,6))\nplt.barh(df['Company'], df['Market_Cap'], color='skyblue')\nplt.xlabel('Market Cap (in trillions)')\nplt.title('Market Caps of Top 7 Publicly Listed Companies')\nplt.gca().invert_yaxis()\nplt.show()\n```\n\nPlease note that the start and end dates used while fetching data specifies the time period we are interested in. Feel free to modify these as needed. The 'marketCap' obtained from the 'info' property of the Ticker object represents the market cap as of the end date.\n\nAlso note that the final plot shows the companies in descending order of market cap, with the company with the highest market cap at the top of the chart.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING 2 CODE BLOCKS (inferred languages are [python, python])...\nCodeExecutor (to CodeWriter):\n\nexitcode: 0 (execution succeeded)\nCode output: Requirement already satisfied: yfinance in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (0.2.36)\nRequirement already satisfied: pandas in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (2.2.1)\nRequirement already satisfied: matplotlib in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (3.8.3)\nRequirement already satisfied: numpy>=1.16.5 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (1.26.4)\nRequirement already satisfied: requests>=2.31 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (2.31.0)\nRequirement already satisfied: multitasking>=0.0.7 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (0.0.11)\nRequirement already satisfied: lxml>=4.9.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (5.0.1)\nRequirement already satisfied: appdirs>=1.4.4 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (1.4.4)\nRequirement already satisfied: pytz>=2022.5 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (2023.3.post1)\nRequirement already satisfied: frozendict>=2.3.4 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (2.4.0)\nRequirement already satisfied: peewee>=3.16.2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (3.17.0)\nRequirement already satisfied: beautifulsoup4>=4.11.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (4.12.2)\nRequirement already satisfied: html5lib>=1.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from yfinance) (1.1)\nRequirement already satisfied: python-dateutil>=2.8.2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from pandas) (2.8.2)\nRequirement already satisfied: tzdata>=2022.7 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from pandas) (2023.4)\nRequirement already satisfied: contourpy>=1.0.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (1.2.0)\nRequirement already satisfied: cycler>=0.10 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (0.12.1)\nRequirement already satisfied: fonttools>=4.22.0 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (4.47.2)\nRequirement already satisfied: kiwisolver>=1.3.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (1.4.5)\nRequirement already satisfied: packaging>=20.0 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (23.2)\nRequirement already satisfied: pillow>=8 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (10.2.0)\nRequirement already satisfied: pyparsing>=2.3.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from matplotlib) (3.1.1)\nRequirement already satisfied: soupsieve>1.2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from beautifulsoup4>=4.11.1->yfinance) (2.5)\nRequirement already satisfied: six>=1.9 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from html5lib>=1.1->yfinance) (1.16.0)\nRequirement already satisfied: webencodings in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from html5lib>=1.1->yfinance) (0.5.1)\nRequirement already satisfied: charset-normalizer<4,>=2 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (3.3.2)\nRequirement already satisfied: idna<4,>=2.5 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (3.6)\nRequirement already satisfied: urllib3<3,>=1.21.1 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (1.26.18)\nRequirement already satisfied: certifi>=2017.4.17 in /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages (from requests>=2.31->yfinance) (2024.2.2)\n/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[**************        29%%                      ]  2 of 7 completed/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[********************* 43%%                      ]  3 of 7 completed/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[**********************57%%*                     ]  4 of 7 completed/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[**********************71%%********              ]  5 of 7 completed/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[*********************100%%**********************]  7 of 7 completed\n\n1 Failed download:\n['FB']: Exception('%ticker%: No timezone found, symbol may be delisted')\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeWriter (to CodeExecutor):\n\nFrom the error message, it seems that the 'FB' ticker (Facebook) failed to download because it might have been delisted. This is likely due to Facebook's corporate rebranding to Meta Platforms Inc. in late 2021, which resulted in a ticker change from 'FB' to 'META'.\n\nTo resolve this, we'll replace 'FB' in our tickers list with 'META' and then retrieve the data again. Here is the modified code:\n\n```python\n# Define tickers \ntickers = [\"AAPL\", \"MSFT\", \"GOOGL\", \"AMZN\", \"META\", \"TSLA\", \"BRK-A\"]\n\n# Fetch data\ndata = yf.download(tickers, start=\"2022-02-01\", end=\"2022-02-28\")\n\n# Extract only 'Close' values for each ticker\ndata = data['Close']\n\n# Create empty dictionary to hold market cap data\nmarket_caps = {}\n\n# Calculate market caps\nfor ticker in tickers:\n    info = yf.Ticker(ticker).info\n    market_caps[ticker] = info[\"marketCap\"]\n\n# Convert market_caps dictionary to pandas DataFrame\ndf = pd.DataFrame(list(market_caps.items()), columns=['Company', 'Market_Cap'])\n\n# Sort DataFrame by Market_Cap in descending order\ndf = df.sort_values('Market_Cap', ascending=False)\n\n# Plot data\nplt.figure(figsize=(10,6))\nplt.barh(df['Company'], df['Market_Cap'], color='skyblue')\nplt.xlabel('Market Cap (in trillions)')\nplt.title('Market Caps of Top 7 Publicly Listed Companies')\nplt.gca().invert_yaxis()\nplt.show()\n```\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK (inferred language is python)...\nCodeExecutor (to CodeWriter):\n\nexitcode: 0 (execution succeeded)\nCode output: /Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[                       0%%                      ]/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[********************* 43%%                      ]  3 of 7 completed/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[**********************57%%*                     ]  4 of 7 completed/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[**********************71%%********              ]  5 of 7 completed/Users/ekzhu/miniconda3/envs/autogen/lib/python3.11/site-packages/yfinance/utils.py:775: FutureWarning: The 'unit' keyword in TimedeltaIndex construction is deprecated and will be removed in a future version. Use pd.to_timedelta instead.\n  df.index += _pd.TimedeltaIndex(dst_error_hours, 'h')\n[*********************100%%**********************]  7 of 7 completed\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeWriter (to CodeExecutor):\n\nI see that the fetched data was successfully retrieved and processed. However, it looks like the result of the plot isn't visible, so we don't know whether the plot was generated successfully. Please run the code again and provide the output of the plot.\n\nIf there are any issues or any other points you would like me to help with, let me know!\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeExecutor (to CodeWriter):\n\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeWriter (to CodeExecutor):\n\nI'm glad we were able to retrieve and process the data successfully. Please try running the last part of the code again to generate and display the plot:\n\n```python\n# Plot data\nplt.figure(figsize=(10,6))\nplt.barh(df['Company'], df['Market_Cap'], color='skyblue')\nplt.xlabel('Market Cap (in trillions)')\nplt.title('Market Caps of Top 7 Publicly Listed Companies')\nplt.gca().invert_yaxis()\nplt.show()\n```\n\nThis section of the code creates a horizontal bar plot of the market capitalizations of the companies. The `plt.gca().invert_yaxis()` line is included to invert the y-axis, so the company with the highest market cap is at the top of the chart.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK (inferred language is python)...\nCodeExecutor (to CodeWriter):\n\nexitcode: 0 (execution succeeded)\nCode output: \n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeWriter (to CodeExecutor):\n\nI see that the code has executed successfully, but unfortunately, the generated plot is not visible here. However, given that there are no errors, it's likely that the plot has been created as expected when you executed the code on your end.\n\nIf you have any other questions related to this code or need further assistance with Python coding or data visualization, please let me know! I'm here to help.\n\nOtherwise, if this completes your initial request, I will end this task. Just let me know your decision.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeExecutor (to CodeWriter):\n\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nCodeWriter (to CodeExecutor):\n\nAlright. If you have any more questions regarding this task, or if you need help with other tasks in the future, don't hesitate to ask. Have a great day!\n\n'---TERMINATE---'\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"KeyError: 'marketCap'\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(63414).Z+"",width:"855",height:"547"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(44452).Z+"",width:"855",height:"547"})}),"\n",(0,i.jsx)(n.p,{children:"You can see the plots are now displayed in the current notebook."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},63414:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cell-6-output-3-e986f8fd86f1cecf3505515d4a852952.png"},44452:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cell-6-output-4-e986f8fd86f1cecf3505515d4a852952.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);