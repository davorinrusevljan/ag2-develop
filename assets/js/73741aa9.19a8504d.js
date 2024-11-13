"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7243],{62534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>g});var a=n(85893),i=n(11151);const s={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_dalle_and_gpt4v.ipynb",description:"Multimodal agent chat with DALL-E and GPT-4v.",source_notebook:"/notebook/agentchat_dalle_and_gpt4v.ipynb",tags:["multimodal","gpt-4v"],title:"Agent Chat with Multimodal Models: DALLE  and GPT-4V"},o="Agent Chat with Multimodal Models: DALLE  and GPT-4V",r={id:"notebooks/agentchat_dalle_and_gpt4v",title:"Agent Chat with Multimodal Models: DALLE  and GPT-4V",description:"Multimodal agent chat with DALL-E and GPT-4v.",source:"@site/docs/notebooks/agentchat_dalle_and_gpt4v.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_dalle_and_gpt4v",permalink:"/ag2/docs/notebooks/agentchat_dalle_and_gpt4v",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_dalle_and_gpt4v.ipynb",tags:[{label:"multimodal",permalink:"/ag2/docs/tags/multimodal"},{label:"gpt-4v",permalink:"/ag2/docs/tags/gpt-4-v"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_dalle_and_gpt4v.ipynb",description:"Multimodal agent chat with DALL-E and GPT-4v.",source_notebook:"/notebook/agentchat_dalle_and_gpt4v.ipynb",tags:["multimodal","gpt-4v"],title:"Agent Chat with Multimodal Models: DALLE  and GPT-4V"},sidebar:"notebooksSidebar",previous:{title:"Agent Chat with custom model loading",permalink:"/ag2/docs/notebooks/agentchat_custom_model"},next:{title:"Use AutoGen in Databricks with DBRX",permalink:"/ag2/docs/notebooks/agentchat_databricks_dbrx"}},l={},g=[{value:"Before everything starts, install AutoGen with the <code>lmm</code> option",id:"before-everything-starts-install-autogen-with-the-lmm-option",level:3},{value:"Helper Functions",id:"helper-functions",level:2},{value:"The DALLE Agent",id:"the-dalle-agent",level:2},{value:"Simple Example: Call directly from User",id:"simple-example-call-directly-from-user",level:2},{value:"Example With Critics: Iterate several times to improve",id:"example-with-critics-iterate-several-times-to-improve",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"agent-chat-with-multimodal-models-dalle--and-gpt-4v",children:"Agent Chat with Multimodal Models: DALLE  and GPT-4V"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_dalle_and_gpt4v.ipynb",children:(0,a.jsx)(t.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_dalle_and_gpt4v.ipynb",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsx)(t.p,{children:"Requires: OpenAI V1."}),"\n",(0,a.jsxs)(t.h3,{id:"before-everything-starts-install-autogen-with-the-lmm-option",children:["Before everything starts, install AutoGen with the ",(0,a.jsx)(t.code,{children:"lmm"})," option"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'pip install "pyautogen[lmm]>=0.2.3"\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import json\nimport os\nimport pdb\nimport random\nimport re\nimport time\nfrom typing import Any, Callable, Dict, List, Optional, Tuple, Type, Union\n\nimport matplotlib.pyplot as plt\nimport PIL\nimport requests\nfrom diskcache import Cache\nfrom openai import OpenAI\nfrom PIL import Image\nfrom termcolor import colored\n\nimport autogen\nfrom autogen import Agent, AssistantAgent, ConversableAgent, UserProxyAgent\nfrom autogen.agentchat.contrib.img_utils import _to_pil, get_image_data, get_pil_image, gpt4v_formatter\nfrom autogen.agentchat.contrib.multimodal_conversable_agent import MultimodalConversableAgent\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'config_list_4v = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "model": ["gpt-4-vision-preview"],\n    },\n)\n\nconfig_list_gpt4 = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "model": ["gpt-4", "gpt-4-0314", "gpt4", "gpt-4-32k", "gpt-4-32k-0314", "gpt-4-32k-v0314"],\n    },\n)\n\nconfig_list_dalle = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "model": ["dalle"],\n    },\n)\n\ngpt4_llm_config = {"config_list": config_list_gpt4, "cache_seed": 42}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"config_list_dalle"})," should be something like:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"[\n    {\n        'model': 'dalle',\n        'api_key': 'Your API Key here',\n        'api_version': '2024-02-01'\n    }\n]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"helper-functions",children:"Helper Functions"}),"\n",(0,a.jsx)(t.p,{children:"We first create a warpper for DALLE call, make the"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'def dalle_call(client: OpenAI, model: str, prompt: str, size: str, quality: str, n: int) -> str:\n    """\n    Generate an image using OpenAI\'s DALL-E model and cache the result.\n\n    This function takes a prompt and other parameters to generate an image using OpenAI\'s DALL-E model.\n    It checks if the result is already cached; if so, it returns the cached image data. Otherwise,\n    it calls the DALL-E API to generate the image, stores the result in the cache, and then returns it.\n\n    Args:\n        client (OpenAI): The OpenAI client instance for making API calls.\n        model (str): The specific DALL-E model to use for image generation.\n        prompt (str): The text prompt based on which the image is generated.\n        size (str): The size specification of the image. TODO: This should allow specifying landscape, square, or portrait modes.\n        quality (str): The quality setting for the image generation.\n        n (int): The number of images to generate.\n\n    Returns:\n    str: The image data as a string, either retrieved from the cache or newly generated.\n\n    Note:\n    - The cache is stored in a directory named \'.cache/\'.\n    - The function uses a tuple of (model, prompt, size, quality, n) as the key for caching.\n    - The image data is obtained by making a secondary request to the URL provided by the DALL-E API response.\n    """\n    # Function implementation...\n    cache = Cache(".cache/")  # Create a cache directory\n    key = (model, prompt, size, quality, n)\n    if key in cache:\n        return cache[key]\n\n    # If not in cache, compute and store the result\n    response = client.images.generate(\n        model=model,\n        prompt=prompt,\n        size=size,\n        quality=quality,\n        n=n,\n    )\n    image_url = response.data[0].url\n    img_data = get_image_data(image_url)\n    cache[key] = img_data\n\n    return img_data\n'})}),"\n",(0,a.jsx)(t.p,{children:"Here is a helper function to extract image from a DALLE agent. We will\nshow the DALLE agent later."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'def extract_img(agent: Agent) -> PIL.Image:\n    """\n    Extracts an image from the last message of an agent and converts it to a PIL image.\n\n    This function searches the last message sent by the given agent for an image tag,\n    extracts the image data, and then converts this data into a PIL (Python Imaging Library) image object.\n\n    Parameters:\n        agent (Agent): An instance of an agent from which the last message will be retrieved.\n\n    Returns:\n        PIL.Image: A PIL image object created from the extracted image data.\n\n    Note:\n    - The function assumes that the last message contains an <img> tag with image data.\n    - The image data is extracted using a regular expression that searches for <img> tags.\n    - It\'s important that the agent\'s last message contains properly formatted image data for successful extraction.\n    - The `_to_pil` function is used to convert the extracted image data into a PIL image.\n    - If no <img> tag is found, or if the image data is not correctly formatted, the function may raise an error.\n    """\n    last_message = agent.last_message()["content"]\n\n    if isinstance(last_message, str):\n        img_data = re.findall("<img (.*)>", last_message)[0]\n    elif isinstance(last_message, list):\n        # The GPT-4V format, where the content is an array of data\n        assert isinstance(last_message[0], dict)\n        img_data = last_message[0]["image_url"]["url"]\n\n    pil_img = get_pil_image(img_data)\n    return pil_img\n'})}),"\n",(0,a.jsx)(t.h2,{id:"the-dalle-agent",children:"The DALLE Agent"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'class DALLEAgent(ConversableAgent):\n    def __init__(self, name, llm_config: dict, **kwargs):\n        super().__init__(name, llm_config=llm_config, **kwargs)\n\n        try:\n            config_list = llm_config["config_list"]\n            api_key = config_list[0]["api_key"]\n        except Exception as e:\n            print("Unable to fetch API Key, because", e)\n            api_key = os.getenv("OPENAI_API_KEY")\n        self._dalle_client = OpenAI(api_key=api_key)\n        self.register_reply([Agent, None], DALLEAgent.generate_dalle_reply)\n\n    def send(\n        self,\n        message: Union[Dict, str],\n        recipient: Agent,\n        request_reply: Optional[bool] = None,\n        silent: Optional[bool] = False,\n    ):\n        # override and always "silent" the send out message;\n        # otherwise, the print log would be super long!\n        super().send(message, recipient, request_reply, silent=True)\n\n    def generate_dalle_reply(self, messages: Optional[List[Dict]], sender: "Agent", config):\n        """Generate a reply using OpenAI DALLE call."""\n        client = self._dalle_client if config is None else config\n        if client is None:\n            return False, None\n        if messages is None:\n            messages = self._oai_messages[sender]\n\n        prompt = messages[-1]["content"]\n        # TODO: integrate with autogen.oai. For instance, with caching for the API call\n        img_data = dalle_call(\n            client=client,\n            model="dall-e-3",\n            prompt=prompt,\n            size="1024x1024",  # TODO: the size should be flexible, deciding landscape, square, or portrait mode.\n            quality="standard",\n            n=1,\n        )\n\n        img_data = _to_pil(img_data)  # Convert to PIL image\n\n        # Return the OpenAI message format\n        return True, {"content": [{"type": "image_url", "image_url": {"url": img_data}}]}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"simple-example-call-directly-from-user",children:"Simple Example: Call directly from User"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'dalle = DALLEAgent(name="Dalle", llm_config={"config_list": config_list_dalle})\n\nuser_proxy = UserProxyAgent(\n    name="User_proxy", system_message="A human admin.", human_input_mode="NEVER", max_consecutive_auto_reply=0\n)\n\n# Ask the question with an image\nuser_proxy.initiate_chat(\n    dalle,\n    message="""Create an image with black background, a happy robot is showing a sign with "I Love AutoGen".""",\n)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'User_proxy (to Dalle):\n\nCreate an image with black background, a happy robot is showing a sign with "I Love AutoGen".\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"/home/beibinli/autogen/autogen/agentchat/user_proxy_agent.py:83: UserWarning: Using None to signal a default code_execution_config is deprecated. Use {} to use default or False to disable code execution.\n  super().__init__(\n/home/beibinli/autogen/autogen/agentchat/conversable_agent.py:954: UserWarning: Cannot extract summary using last_msg: 'list' object has no attribute 'replace'\n  warnings.warn(f\"Cannot extract summary using last_msg: {e}\", UserWarning)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"ChatResult(chat_id=None, chat_history=[{'content': 'Create an image with black background, a happy robot is showing a sign with \"I Love AutoGen\".', 'role': 'assistant'}, {'content': [{'type': 'image_url', 'image_url': {'url': <PIL.PngImagePlugin.PngImageFile image mode=RGB size=1024x1024 at 0x7F8EB52561C0>}}], 'role': 'user'}], summary='', cost=({'total_cost': 0}, {'total_cost': 0}), human_input=[])\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'img = extract_img(dalle)\n\nplt.imshow(img)\nplt.axis("off")  # Turn off axis numbers\nplt.show()\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(10900).Z+"",width:"389",height:"389"})}),"\n",(0,a.jsx)(t.h2,{id:"example-with-critics-iterate-several-times-to-improve",children:"Example With Critics: Iterate several times to improve"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'class DalleCreator(AssistantAgent):\n    def __init__(self, n_iters=2, **kwargs):\n        """\n        Initializes a DalleCreator instance.\n\n        This agent facilitates the creation of visualizations through a collaborative effort among\n        its child agents: dalle and critics.\n\n        Parameters:\n            - n_iters (int, optional): The number of "improvement" iterations to run. Defaults to 2.\n            - **kwargs: keyword arguments for the parent AssistantAgent.\n        """\n        super().__init__(**kwargs)\n        self.register_reply([Agent, None], reply_func=DalleCreator._reply_user, position=0)\n        self._n_iters = n_iters\n\n    def _reply_user(self, messages=None, sender=None, config=None):\n        if all((messages is None, sender is None)):\n            error_msg = f"Either {messages=} or {sender=} must be provided."\n            logger.error(error_msg)  # noqa: F821\n            raise AssertionError(error_msg)\n\n        if messages is None:\n            messages = self._oai_messages[sender]\n\n        img_prompt = messages[-1]["content"]\n\n        ## Define the agents\n        self.critics = MultimodalConversableAgent(\n            name="Critics",\n            system_message="""You need to improve the prompt of the figures you saw.\nHow to create a figure that is better in terms of color, shape, text (clarity), and other things.\nReply with the following format:\n\nCRITICS: the image needs to improve...\nPROMPT: here is the updated prompt!\n\n""",\n            llm_config={"config_list": config_list_4v, "max_tokens": 1000},\n            human_input_mode="NEVER",\n            max_consecutive_auto_reply=3,\n        )\n\n        self.dalle = DALLEAgent(\n            name="Dalle", llm_config={"config_list": config_list_dalle}, max_consecutive_auto_reply=0\n        )\n\n        # Data flow begins\n        self.send(message=img_prompt, recipient=self.dalle, request_reply=True)\n        img = extract_img(self.dalle)\n        plt.imshow(img)\n        plt.axis("off")  # Turn off axis numbers\n        plt.show()\n        print("Image PLOTTED")\n\n        for i in range(self._n_iters):\n            # Downsample the image s.t. GPT-4V can take\n            img = extract_img(self.dalle)\n            smaller_image = img.resize((128, 128), Image.Resampling.LANCZOS)\n            smaller_image.save("result.png")\n\n            self.msg_to_critics = f"""Here is the prompt: {img_prompt}.\n            Here is the figure <img result.png>.\n            Now, critic and create a prompt so that DALLE can give me a better image.\n            Show me both "CRITICS" and "PROMPT"!\n            """\n            self.send(message=self.msg_to_critics, recipient=self.critics, request_reply=True)\n            feedback = self._oai_messages[self.critics][-1]["content"]\n            img_prompt = re.findall("PROMPT: (.*)", feedback)[0]\n\n            self.send(message=img_prompt, recipient=self.dalle, request_reply=True)\n            img = extract_img(self.dalle)\n            plt.imshow(img)\n            plt.axis("off")  # Turn off axis numbers\n            plt.show()\n            print(f"Image {i} PLOTTED")\n\n        return True, "result.jpg"\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'creator = DalleCreator(\n    name="DALLE Creator!",\n    max_consecutive_auto_reply=0,\n    system_message="Help me coordinate generating image",\n    llm_config=gpt4_llm_config,\n)\n\nuser_proxy = UserProxyAgent(name="User", human_input_mode="NEVER", max_consecutive_auto_reply=0)\n\nuser_proxy.initiate_chat(\n    creator, message="""Create an image with black background, a happy robot is showing a sign with "I Love AutoGen"."""\n)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'User (to DALLE Creator!):\n\nCreate an image with black background, a happy robot is showing a sign with "I Love AutoGen".\n\n--------------------------------------------------------------------------------\nDALLE Creator! (to Dalle):\n\nCreate an image with black background, a happy robot is showing a sign with "I Love AutoGen".\n\n--------------------------------------------------------------------------------\nImage PLOTTED\nDALLE Creator! (to Critics):\n\nHere is the prompt: Create an image with black background, a happy robot is showing a sign with "I Love AutoGen"..\n            Here is the figure <image>.\n            Now, critic and create a prompt so that DALLE can give me a better image.\n            Show me both "CRITICS" and "PROMPT"!\n            \n\n--------------------------------------------------------------------------------\nCritics (to DALLE Creator!):\n\nCRITICS: The image needs to improve in the following aspects:\n\n1. Lighting: The robot and the sign could benefit from additional lighting to enhance details and textures, ensuring that they stand out more against the black background.\n2. Legibility: The text on the sign could be more prominent and the font size increased for better readability. Additionally, a contrasting color could be used for the text to ensure it pops against the background.\n3. Robot\'s Expression: While the robot appears happy, its expression could be made more apparent with clearer facial features or more exaggerated happiness indicators in its body language or facial features.\n4. Composition: The robot and the sign could be positioned in a way that creates a more dynamic composition, keeping the viewer\u2019s eye engaged.\n5. Resolution: A higher resolution would make the image sharper, improving the overall quality and detail.\n\nPROMPT: Create a high-resolution image with a richly detailed, happy robot made of shiny metal, standing center frame against a stark black background. The robot is holding up a large, rectangular sign with rounded corners that reads "I \u2764\ufe0f AutoGen" in bold, white sans-serif font, with the heart symbol in a vivid red color. The sign should be well-lit with a soft glow that highlights the text and makes it stand out. Ensure the robot\'s features clearly convey joy, perhaps through a broad smile and posture conveying enthusiasm. The composition should be balanced and visually appealing, with an intelligent use of space that guides the viewer\'s attention to the robot and the sign.\n\n--------------------------------------------------------------------------------\nDALLE Creator! (to Dalle):\n\nCreate a high-resolution image with a richly detailed, happy robot made of shiny metal, standing center frame against a stark black background. The robot is holding up a large, rectangular sign with rounded corners that reads "I \u2764\ufe0f AutoGen" in bold, white sans-serif font, with the heart symbol in a vivid red color. The sign should be well-lit with a soft glow that highlights the text and makes it stand out. Ensure the robot\'s features clearly convey joy, perhaps through a broad smile and posture conveying enthusiasm. The composition should be balanced and visually appealing, with an intelligent use of space that guides the viewer\'s attention to the robot and the sign.\n\n--------------------------------------------------------------------------------\nImage 0 PLOTTED\nDALLE Creator! (to Critics):\n\nHere is the prompt: Create a high-resolution image with a richly detailed, happy robot made of shiny metal, standing center frame against a stark black background. The robot is holding up a large, rectangular sign with rounded corners that reads "I \u2764\ufe0f AutoGen" in bold, white sans-serif font, with the heart symbol in a vivid red color. The sign should be well-lit with a soft glow that highlights the text and makes it stand out. Ensure the robot\'s features clearly convey joy, perhaps through a broad smile and posture conveying enthusiasm. The composition should be balanced and visually appealing, with an intelligent use of space that guides the viewer\'s attention to the robot and the sign..\n            Here is the figure <image>.\n            Now, critic and create a prompt so that DALLE can give me a better image.\n            Show me both "CRITICS" and "PROMPT"!\n            \n\n--------------------------------------------------------------------------------\nCritics (to DALLE Creator!):\n\nCRITICS: The image could be improved in the following ways:\n\n1. Color Contrast: The overall color contrast between the robot and the sign could be enhanced to make the elements more distinct from one another.\n2. Clarity and Details: The details of the robot\'s material and structure could be made sharper and more intricate to accentuate its shiny metal look.\n3. Sign\'s Design: The design of the sign could be simplified by using negative space more effectively, ensuring the message "I \u2764\ufe0f AutoGen" is instantly recognizable and stands out more.\n4. Lighting and Shadows: The lighting could be diversified to cast subtle shadows, which would add depth and volume, making the image more three-dimensional.\n5. Emotion and Posture: The robot\'s expression and posture could be exaggerated further to emphasize its joyfulness and the message it is conveying.\n6. Background: While the background is appropriately black, adding a subtle texture or gradient could give the image more depth without distracting from the main subject.\n\nPROMPT: Generate a high-resolution 3D rendering of an exuberant, animated-style robot constructed from glossy, reflective metal surfaces. It stands in the center of a pure black background with a soft, radial gradient to provide subtle depth. The robot is displaying a sizable sign with prominent "I \u2764\ufe0f AutoGen" lettering in a bold, white, sans-serif font, the heart being a luminous red, creating a stark, elegant contrast. Incorporate adequate lighting from multiple angles to cast dynamic, gentle shadows around the robot, enhancing its dimensional appearance. Ensure that the robot\'s facial features and stance radiate delight, featuring an exaggerated smile and arms raised in a victorious, welcoming gesture. The sign should be backlit with a soft halo effect, making it vibrant and eye-catching. The overall composition must be striking yet harmonious, drawing attention to both the robot\u2019s delighted demeanor and the message it presents.\n\n--------------------------------------------------------------------------------\nDALLE Creator! (to Dalle):\n\nGenerate a high-resolution 3D rendering of an exuberant, animated-style robot constructed from glossy, reflective metal surfaces. It stands in the center of a pure black background with a soft, radial gradient to provide subtle depth. The robot is displaying a sizable sign with prominent "I \u2764\ufe0f AutoGen" lettering in a bold, white, sans-serif font, the heart being a luminous red, creating a stark, elegant contrast. Incorporate adequate lighting from multiple angles to cast dynamic, gentle shadows around the robot, enhancing its dimensional appearance. Ensure that the robot\'s facial features and stance radiate delight, featuring an exaggerated smile and arms raised in a victorious, welcoming gesture. The sign should be backlit with a soft halo effect, making it vibrant and eye-catching. The overall composition must be striking yet harmonious, drawing attention to both the robot\u2019s delighted demeanor and the message it presents.\n\n--------------------------------------------------------------------------------\nImage 1 PLOTTED\nDALLE Creator! (to User):\n\nresult.jpg\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(62158).Z+"",width:"389",height:"389"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(85694).Z+"",width:"389",height:"389"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(48496).Z+"",width:"389",height:"389"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"ChatResult(chat_id=None, chat_history=[{'content': 'Create an image with black background, a happy robot is showing a sign with \"I Love AutoGen\".', 'role': 'assistant'}, {'content': 'result.jpg', 'role': 'user'}], summary='result.jpg', cost=({'total_cost': 0}, {'total_cost': 0}), human_input=[])\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},62158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cell-10-output-2-0ef3c297cd7841d3e78265c280665bdc.png"},85694:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cell-10-output-3-0dfc9477399b19b10f76d6449cb04d73.png"},48496:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cell-10-output-4-37050cec32d38f7a5a08a2d534a43b28.png"},10900:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cell-8-output-1-0ef3c297cd7841d3e78265c280665bdc.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);