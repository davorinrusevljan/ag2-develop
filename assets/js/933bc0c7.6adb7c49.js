"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3536],{48510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(85893),s=t(11151);const i={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_custom_model.ipynb",description:"Define and laod a custom model",source_notebook:"/notebook/agentchat_custom_model.ipynb",tags:["integration","custom model"],title:"Agent Chat with custom model loading"},a="Agent Chat with custom model loading",l={id:"notebooks/agentchat_custom_model",title:"Agent Chat with custom model loading",description:"Define and laod a custom model",source:"@site/docs/notebooks/agentchat_custom_model.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_custom_model",permalink:"/ag2/docs/notebooks/agentchat_custom_model",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_custom_model.ipynb",tags:[{label:"integration",permalink:"/ag2/docs/tags/integration"},{label:"custom model",permalink:"/ag2/docs/tags/custom-model"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_custom_model.ipynb",description:"Define and laod a custom model",source_notebook:"/notebook/agentchat_custom_model.ipynb",tags:["integration","custom model"],title:"Agent Chat with custom model loading"},sidebar:"notebooksSidebar",previous:{title:"Usage tracking with AutoGen",permalink:"/ag2/docs/notebooks/agentchat_cost_token_tracking"},next:{title:"Agent Chat with Multimodal Models: DALLE  and GPT-4V",permalink:"/ag2/docs/notebooks/agentchat_dalle_and_gpt4v"}},r={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Create and configure the custom model",id:"create-and-configure-the-custom-model",level:2},{value:"Example of simple custom client",id:"example-of-simple-custom-client",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Set the config for the custom model",id:"set-the-config-for-the-custom-model",level:2},{value:"Construct Agents",id:"construct-agents",level:2},{value:"Register the custom client class to the assistant agent",id:"register-the-custom-client-class-to-the-assistant-agent",level:2},{value:"Register a custom client class with a pre-loaded model",id:"register-a-custom-client-class-with-a-pre-loaded-model",level:2},{value:"Add the config of the new custom model",id:"add-the-config-of-the-new-custom-model",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"agent-chat-with-custom-model-loading",children:"Agent Chat with custom model loading"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_custom_model.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_custom_model.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsx)(n.p,{children:"In this notebook, we demonstrate how a custom model can be defined and\nloaded, and what protocol it needs to comply to."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE: Depending on what model you use, you may need to play with the\ndefault prompts of the Agent\u2019s"})}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.admonition,{title:"Requirements",type:"info",children:[(0,o.jsx)(n.p,{children:"Some extra dependencies are needed for this notebook, which can be installed via pip:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen torch transformers sentencepiece\n"})}),(0,o.jsxs)(n.p,{children:["For more information, please refer to the ",(0,o.jsx)(n.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from types import SimpleNamespace\n\nfrom transformers import AutoModelForCausalLM, AutoTokenizer, GenerationConfig\n\nimport autogen\nfrom autogen import AssistantAgent, UserProxyAgent\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-and-configure-the-custom-model",children:"Create and configure the custom model"}),"\n",(0,o.jsxs)(n.p,{children:["A custom model class can be created in many ways, but needs to adhere to\nthe ",(0,o.jsx)(n.code,{children:"ModelClient"})," protocol and response structure which is defined in\nclient.py and shown below."]}),"\n",(0,o.jsxs)(n.p,{children:["The response protocol has some minimum requirements, but can be extended\nto include any additional information that is needed. Message retrieval\ntherefore can be customized, but needs to return a list of strings or a\nlist of ",(0,o.jsx)(n.code,{children:"ModelClientResponseProtocol.Choice.Message"})," objects."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class ModelClient(Protocol):\n    """\n    A client class must implement the following methods:\n    - create must return a response object that implements the ModelClientResponseProtocol\n    - cost must return the cost of the response\n    - get_usage must return a dict with the following keys:\n        - prompt_tokens\n        - completion_tokens\n        - total_tokens\n        - cost\n        - model\n\n    This class is used to create a client that can be used by OpenAIWrapper.\n    The response returned from create must adhere to the ModelClientResponseProtocol but can be extended however needed.\n    The message_retrieval method must be implemented to return a list of str or a list of messages from the response.\n    """\n\n    RESPONSE_USAGE_KEYS = ["prompt_tokens", "completion_tokens", "total_tokens", "cost", "model"]\n\n    class ModelClientResponseProtocol(Protocol):\n        class Choice(Protocol):\n            class Message(Protocol):\n                content: Optional[str]\n\n            message: Message\n\n        choices: List[Choice]\n        model: str\n\n    def create(self, params) -> ModelClientResponseProtocol:\n        ...\n\n    def message_retrieval(\n        self, response: ModelClientResponseProtocol\n    ) -> Union[List[str], List[ModelClient.ModelClientResponseProtocol.Choice.Message]]:\n        """\n        Retrieve and return a list of strings or a list of Choice.Message from the response.\n\n        NOTE: if a list of Choice.Message is returned, it currently needs to contain the fields of OpenAI\'s ChatCompletion Message object,\n        since that is expected for function or tool calling in the rest of the codebase at the moment, unless a custom agent is being used.\n        """\n        ...\n\n    def cost(self, response: ModelClientResponseProtocol) -> float:\n        ...\n\n    @staticmethod\n    def get_usage(response: ModelClientResponseProtocol) -> Dict:\n        """Return usage summary of the response using RESPONSE_USAGE_KEYS."""\n        ...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"example-of-simple-custom-client",children:"Example of simple custom client"}),"\n",(0,o.jsxs)(n.p,{children:["Following the huggingface example for using ",(0,o.jsx)(n.a,{href:"https://huggingface.co/Open-Orca/Mistral-7B-OpenOrca",children:"Mistral\u2019s\nOpen-Orca"})]}),"\n",(0,o.jsxs)(n.p,{children:["For the response object, python\u2019s ",(0,o.jsx)(n.code,{children:"SimpleNamespace"})," is used to create a\nsimple object that can be used to store the response data, but any\nobject that follows the ",(0,o.jsx)(n.code,{children:"ClientResponseProtocol"})," can be used."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# custom client with custom model loader\n\n\nclass CustomModelClient:\n    def __init__(self, config, **kwargs):\n        print(f"CustomModelClient config: {config}")\n        self.device = config.get("device", "cpu")\n        self.model = AutoModelForCausalLM.from_pretrained(config["model"]).to(self.device)\n        self.model_name = config["model"]\n        self.tokenizer = AutoTokenizer.from_pretrained(config["model"], use_fast=False)\n        self.tokenizer.pad_token_id = self.tokenizer.eos_token_id\n\n        # params are set by the user and consumed by the user since they are providing a custom model\n        # so anything can be done here\n        gen_config_params = config.get("params", {})\n        self.max_length = gen_config_params.get("max_length", 256)\n\n        print(f"Loaded model {config[\'model\']} to {self.device}")\n\n    def create(self, params):\n        if params.get("stream", False) and "messages" in params:\n            raise NotImplementedError("Local models do not support streaming.")\n        else:\n            num_of_responses = params.get("n", 1)\n\n            # can create my own data response class\n            # here using SimpleNamespace for simplicity\n            # as long as it adheres to the ClientResponseProtocol\n\n            response = SimpleNamespace()\n\n            inputs = self.tokenizer.apply_chat_template(\n                params["messages"], return_tensors="pt", add_generation_prompt=True\n            ).to(self.device)\n            inputs_length = inputs.shape[-1]\n\n            # add inputs_length to max_length\n            max_length = self.max_length + inputs_length\n            generation_config = GenerationConfig(\n                max_length=max_length,\n                eos_token_id=self.tokenizer.eos_token_id,\n                pad_token_id=self.tokenizer.eos_token_id,\n            )\n\n            response.choices = []\n            response.model = self.model_name\n\n            for _ in range(num_of_responses):\n                outputs = self.model.generate(inputs, generation_config=generation_config)\n                # Decode only the newly generated text, excluding the prompt\n                text = self.tokenizer.decode(outputs[0, inputs_length:])\n                choice = SimpleNamespace()\n                choice.message = SimpleNamespace()\n                choice.message.content = text\n                choice.message.function_call = None\n                response.choices.append(choice)\n\n            return response\n\n    def message_retrieval(self, response):\n        """Retrieve the messages from the response."""\n        choices = response.choices\n        return [choice.message.content for choice in choices]\n\n    def cost(self, response) -> float:\n        """Calculate the cost of the response."""\n        response.cost = 0\n        return 0\n\n    @staticmethod\n    def get_usage(response):\n        # returns a dict of prompt_tokens, completion_tokens, total_tokens, cost, model\n        # if usage needs to be tracked, else None\n        return {}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,o.jsxs)(n.p,{children:["The\n",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/autogen/docs/reference/oai/openai_utils#config_list_from_json",children:(0,o.jsx)(n.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,o.jsx)(n.p,{children:"It first looks for an environment variable of a specified name\n(\u201cOAI_CONFIG_LIST\u201d in this example), which needs to be a valid json\nstring. If that variable is not found, it looks for a json file with the\nsame name. It filters the configs by models (you can filter by other\nkeys as well)."}),"\n",(0,o.jsx)(n.p,{children:"The json looks like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "model": "gpt-4",\n        "api_key": "<your OpenAI API key here>"\n    },\n    {\n        "model": "gpt-4",\n        "api_key": "<your Azure OpenAI API key here>",\n        "base_url": "<your Azure OpenAI API base here>",\n        "api_type": "azure",\n        "api_version": "2024-02-01"\n    },\n    {\n        "model": "gpt-4-32k",\n        "api_key": "<your Azure OpenAI API key here>",\n        "base_url": "<your Azure OpenAI API base here>",\n        "api_type": "azure",\n        "api_version": "2024-02-01"\n    }\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can set the value of config_list in any way you prefer. Please refer\nto this\n",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_openai_utils.ipynb",children:"notebook"}),"\nfor full code examples of the different methods."]}),"\n",(0,o.jsx)(n.h2,{id:"set-the-config-for-the-custom-model",children:"Set the config for the custom model"}),"\n",(0,o.jsx)(n.p,{children:"You can add any paramteres that are needed for the custom model loading\nin the same configuration list."}),"\n",(0,o.jsxs)(n.p,{children:["It is important to add the ",(0,o.jsx)(n.code,{children:"model_client_cls"})," field and set it to a\nstring that corresponds to the class name: ",(0,o.jsx)(n.code,{children:'"CustomModelClient"'}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "model": "Open-Orca/Mistral-7B-OpenOrca",\n    "model_client_cls": "CustomModelClient",\n    "device": "cuda",\n    "n": 1,\n    "params": {\n        "max_length": 1000,\n    }\n},\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'config_list_custom = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={"model_client_cls": ["CustomModelClient"]},\n)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"construct-agents",children:"Construct Agents"}),"\n",(0,o.jsx)(n.p,{children:"Consturct a simple conversation between a User proxy and an Assistent\nagent"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'assistant = AssistantAgent("assistant", llm_config={"config_list": config_list_custom})\nuser_proxy = UserProxyAgent(\n    "user_proxy",\n    code_execution_config={\n        "work_dir": "coding",\n        "use_docker": False,  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    },\n)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"register-the-custom-client-class-to-the-assistant-agent",children:"Register the custom client class to the assistant agent"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"assistant.register_model_client(model_client_cls=CustomModelClient)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'user_proxy.initiate_chat(assistant, message="Write python code to print Hello World!")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"register-a-custom-client-class-with-a-pre-loaded-model",children:"Register a custom client class with a pre-loaded model"}),"\n",(0,o.jsx)(n.p,{children:"If you want to have more control over when the model gets loaded, you\ncan load the model yourself and pass it as an argument to the\nCustomClient during registration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# custom client with custom model loader\n\n\nclass CustomModelClientWithArguments(CustomModelClient):\n    def __init__(self, config, loaded_model, tokenizer, **kwargs):\n        print(f"CustomModelClientWithArguments config: {config}")\n\n        self.model_name = config["model"]\n        self.model = loaded_model\n        self.tokenizer = tokenizer\n\n        self.device = config.get("device", "cpu")\n\n        gen_config_params = config.get("params", {})\n        self.max_length = gen_config_params.get("max_length", 256)\n        print(f"Loaded model {config[\'model\']} to {self.device}")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# load model here\n\n\nconfig = config_list_custom[0]\ndevice = config.get("device", "cpu")\nloaded_model = AutoModelForCausalLM.from_pretrained(config["model"]).to(device)\ntokenizer = AutoTokenizer.from_pretrained(config["model"], use_fast=False)\ntokenizer.pad_token_id = tokenizer.eos_token_id\n'})}),"\n",(0,o.jsx)(n.h2,{id:"add-the-config-of-the-new-custom-model",children:"Add the config of the new custom model"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "model": "Open-Orca/Mistral-7B-OpenOrca",\n    "model_client_cls": "CustomModelClientWithArguments",\n    "device": "cuda",\n    "n": 1,\n    "params": {\n        "max_length": 1000,\n    }\n},\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'config_list_custom = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={"model_client_cls": ["CustomModelClientWithArguments"]},\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'assistant = AssistantAgent("assistant", llm_config={"config_list": config_list_custom})\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"assistant.register_model_client(\n    model_client_cls=CustomModelClientWithArguments,\n    loaded_model=loaded_model,\n    tokenizer=tokenizer,\n)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'user_proxy.initiate_chat(assistant, message="Write python code to print Hello World!")\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var o=t(67294);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);