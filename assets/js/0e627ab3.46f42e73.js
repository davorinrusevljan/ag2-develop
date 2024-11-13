"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4255],{56077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(85893),i=t(11151);const r={sidebar_label:"img_utils",title:"agentchat.contrib.img_utils"},a=void 0,l={id:"reference/agentchat/contrib/img_utils",title:"agentchat.contrib.img_utils",description:"get\\pil\\image",source:"@site/docs/reference/agentchat/contrib/img_utils.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/img_utils",permalink:"/ag2/docs/reference/agentchat/contrib/img_utils",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/img_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"img_utils",title:"agentchat.contrib.img_utils"},sidebar:"referenceSideBar",previous:{title:"gpt_assistant_agent",permalink:"/ag2/docs/reference/agentchat/contrib/gpt_assistant_agent"},next:{title:"llamaindex_conversable_agent",permalink:"/ag2/docs/reference/agentchat/contrib/llamaindex_conversable_agent"}},c={},o=[{value:"get_pil_image",id:"get_pil_image",level:3},{value:"get_image_data",id:"get_image_data",level:3},{value:"llava_formatter",id:"llava_formatter",level:3},{value:"pil_to_data_uri",id:"pil_to_data_uri",level:3},{value:"gpt4v_formatter",id:"gpt4v_formatter",level:3},{value:"extract_img_paths",id:"extract_img_paths",level:3},{value:"message_formatter_pil_to_b64",id:"message_formatter_pil_to_b64",level:3},{value:"num_tokens_from_gpt_image",id:"num_tokens_from_gpt_image",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"get_pil_image",children:"get_pil_image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_pil_image(image_file: Union[str, Image.Image]) -> Image.Image\n"})}),"\n",(0,s.jsx)(n.p,{children:"Loads an image from a file and returns a PIL Image object."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"image_file"})," ",(0,s.jsx)(n.em,{children:"str, or Image"})," - The filename, URL, URI, or base64 string of the image file."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Image.Image"})," - The PIL Image object."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"get_image_data",children:"get_image_data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_image_data(image_file: Union[str, Image.Image], use_b64=True) -> bytes\n"})}),"\n",(0,s.jsx)(n.p,{children:"Loads an image and returns its data either as raw bytes or in base64-encoded format."}),"\n",(0,s.jsxs)(n.p,{children:["This function first loads an image from the specified file, URL, or base64 string using\nthe ",(0,s.jsx)(n.code,{children:"get_pil_image"})," function. It then saves this image in memory in PNG format and\nretrieves its binary content. Depending on the ",(0,s.jsx)(n.code,{children:"use_b64"})," flag, this binary content is\neither returned directly or as a base64-encoded string."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"image_file"})," ",(0,s.jsx)(n.em,{children:"str, or Image"})," - The path to the image file, a URL to an image, or a base64-encoded\nstring of the image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"use_b64"})," ",(0,s.jsx)(n.em,{children:"bool"})," - If True, the function returns a base64-encoded string of the image data.\nIf False, it returns the raw byte data of the image. Defaults to True."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bytes"})," - The image data in raw bytes if ",(0,s.jsx)(n.code,{children:"use_b64"})," is False, or a base64-encoded string\nif ",(0,s.jsx)(n.code,{children:"use_b64"})," is True."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"llava_formatter",children:"llava_formatter"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def llava_formatter(prompt: str,\n                    order_image_tokens: bool = False) -> Tuple[str, List[str]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Formats the input prompt by replacing image tags and returns the new prompt along with image locations."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"prompt (str): The input string that may contain image tags like <img ...>."}),"\n",(0,s.jsx)(n.li,{children:"order_image_tokens (bool, optional): Whether to order the image tokens with numbers.\nIt will be useful for GPT-4V. Defaults to False."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tuple[str, List[str]]: A tuple containing the formatted string and a list of images (loaded in b64 format)."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"pil_to_data_uri",children:"pil_to_data_uri"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def pil_to_data_uri(image: Image.Image) -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Converts a PIL Image object to a data URI."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"image"})," ",(0,s.jsx)(n.em,{children:"Image.Image"})," - The PIL Image object."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"str"})," - The data URI string."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"gpt4v_formatter",children:"gpt4v_formatter"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def gpt4v_formatter(prompt: str,\n                    img_format: str = "uri") -> List[Union[str, dict]]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Formats the input prompt by replacing image tags and returns a list of text and images."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"prompt (str): The input string that may contain image tags like <img ...>."}),"\n",(0,s.jsx)(n.li,{children:'img_format (str): what image format should be used. One of "uri", "url", "pil".'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"List[Union[str, dict]]: A list of alternating text and image dictionary items."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"extract_img_paths",children:"extract_img_paths"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def extract_img_paths(paragraph: str) -> list\n"})}),"\n",(0,s.jsx)(n.p,{children:"Extract image paths (URLs or local paths) from a text paragraph."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"paragraph"})," ",(0,s.jsx)(n.em,{children:"str"})," - The input text paragraph."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"list"})," - A list of extracted image paths."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"message_formatter_pil_to_b64",children:"message_formatter_pil_to_b64"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def message_formatter_pil_to_b64(messages: List[Dict]) -> List[Dict]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Converts the PIL image URLs in the messages to base64 encoded data URIs."}),"\n",(0,s.jsx)(n.p,{children:"This function iterates over a list of message dictionaries. For each message,\nif it contains a 'content' key with a list of items, it looks for items\nwith an 'image_url' key. The function then converts the PIL image URL\n(pointed to by 'image_url') to a base64 encoded data URI."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"messages"})," ",(0,s.jsx)(n.em,{children:"List[Dict]"})," - A list of message dictionaries. Each dictionary\nmay contain a 'content' key with a list of items,\nsome of which might be image URLs."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"List[Dict]"})," - A new list of message dictionaries with PIL image URLs in the\n'image_url' key converted to base64 encoded data URIs."]}),"\n",(0,s.jsx)(n.p,{children:"Example Input:\n["}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'content'"})," - [{'type': 'text', 'text': 'You are a helpful AI assistant.'}], 'role': 'system'},"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'content'"})," - ["]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'type'"})," - 'text', 'text': \"What's the breed of this dog here?\n\"},"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'type'"})," - 'image_url', 'image_url': {'url': a PIL.Image.Image}},"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'type'"})," - 'text', 'text': '.'}],"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'role'"})," - 'user'}\n]"]}),"\n",(0,s.jsx)(n.p,{children:"Example Output:\n["}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'content'"})," - [{'type': 'text', 'text': 'You are a helpful AI assistant.'}], 'role': 'system'},"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'content'"})," - ["]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'type'"})," - 'text', 'text': \"What's the breed of this dog here?\n\"},"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'type'"})," - 'image_url', 'image_url': {'url': a B64 Image}},"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{'type'"})," - 'text', 'text': '.'}],"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"'role'"})," - 'user'}\n]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"num_tokens_from_gpt_image",children:"num_tokens_from_gpt_image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def num_tokens_from_gpt_image(image_data: Union[str, Image.Image],\n                              model: str = "gpt-4-vision",\n                              low_quality: bool = False) -> int\n'})}),"\n",(0,s.jsx)(n.p,{children:'Calculate the number of tokens required to process an image based on its dimensions\nafter scaling for different GPT models. Supports "gpt-4-vision", "gpt-4o", and "gpt-4o-mini".\nThis function scales the image so that its longest edge is at most 2048 pixels and its shortest\nedge is at most 768 pixels (for "gpt-4-vision"). It then calculates the number of 512x512 tiles\nneeded to cover the scaled image and computes the total tokens based on the number of these tiles.'}),"\n",(0,s.jsxs)(n.p,{children:["Reference: ",(0,s.jsx)(n.a,{href:"https://openai.com/api/pricing/",children:"https://openai.com/api/pricing/"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"image_data : Union[str, Image.Image]: The image data which can either be a base64\nencoded string, a URL, a file path, or a PIL Image object."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"model"}),' - str: The model being used for image processing. Can be "gpt-4-vision", "gpt-4o", or "gpt-4o-mini".']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int"})," - The total number of tokens required for processing the image."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"from PIL import Image\nimg = Image.new('RGB', (2500, 2500), color = 'red')\nnum_tokens_from_gpt_image(img, model=\"gpt-4-vision\")\n765"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);