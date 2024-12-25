from unittest.mock import MagicMock

import pytest

from autogen.agentchat.conversable_agent import ConversableAgent
from autogen.formatting_utils import colored
from autogen.messages import (
    ContentMessage,
    FunctionCall,
    FunctionCallMessage,
    FunctionResponseMessage,
    ToolCall,
    ToolCallMessage,
    ToolResponse,
    ToolResponseMessage,
    create_message_model,
)

# def test_context():
#     agent = ConversableAgent("a0", max_consecutive_auto_reply=0, llm_config=False, human_input_mode="NEVER")
#     agent1 = ConversableAgent("a1", max_consecutive_auto_reply=0, llm_config=False, human_input_mode="NEVER")
#     m1 = {
#             "content": "hello {name}",
#             "context": {
#                 "name": "there",
#             },
#         }

#     actual = create_message_model(m1, agent)

#     expected = BaseMessage(content="hello there")

#     # expect hello {name} to be printed
#     agent1.send(
#         {
#             "content": lambda context: f"hello {context['name']}",
#             "context": {
#                 "name": "there",
#             },
#         },
#         agent,
#     )
#     # expect hello there to be printed
#     agent.llm_config = {"allow_format_str_template": True}
#     agent1.send(
#         {
#             "content": "hello {name}",
#             "context": {
#                 "name": "there",
#             },
#         },
#         agent,
#     )
#     # expect hello there to be printed


@pytest.fixture
def sender() -> ConversableAgent:
    return ConversableAgent("sender", max_consecutive_auto_reply=0, llm_config=False, human_input_mode="NEVER")


@pytest.fixture
def receiver() -> ConversableAgent:
    return ConversableAgent("receiver", max_consecutive_auto_reply=0, llm_config=False, human_input_mode="NEVER")


def test_tool_responses(sender: ConversableAgent, receiver: ConversableAgent):
    message = {
        "role": "tool",
        "tool_responses": [
            {"tool_call_id": "call_rJfVpHU3MXuPRR2OAdssVqUV", "role": "tool", "content": "Timer is done!"},
            {"tool_call_id": "call_zFZVYovdsklFYgqxttcOHwlr", "role": "tool", "content": "Stopwatch is done!"},
        ],
        "content": "Timer is done!\\n\\nStopwatch is done!",
    }
    actual = create_message_model(message, sender=sender, receiver=receiver)

    assert isinstance(actual, ToolResponseMessage)
    assert actual.role == "tool"
    assert actual.sender_name == "sender"
    assert actual.receiver_name == "receiver"
    assert actual.content == "Timer is done!\\n\\nStopwatch is done!"
    assert len(actual.tool_responses) == 2

    assert isinstance(actual.tool_responses[0], ToolResponse)
    assert actual.tool_responses[0].tool_call_id == "call_rJfVpHU3MXuPRR2OAdssVqUV"
    assert actual.tool_responses[0].role == "tool"
    assert actual.tool_responses[0].content == "Timer is done!"

    assert isinstance(actual.tool_responses[1], ToolResponse)
    assert actual.tool_responses[1].tool_call_id == "call_zFZVYovdsklFYgqxttcOHwlr"
    assert actual.tool_responses[1].role == "tool"
    assert actual.tool_responses[1].content == "Stopwatch is done!"

    mock = MagicMock()
    actual.print(f=mock)

    expected_call_args_list = [
        (("\x1b[33msender\x1b[0m (to receiver):\n",), {"flush": True}),
        (("\x1b[32m***** Response from calling tool (call_rJfVpHU3MXuPRR2OAdssVqUV) *****\x1b[0m",), {"flush": True}),
        (("Timer is done!",), {"flush": True}),
        (("\x1b[32m**********************************************************************\x1b[0m",), {"flush": True}),
        (
            ("\n", "--------------------------------------------------------------------------------"),
            {"flush": True, "sep": ""},
        ),
        (("\x1b[32m***** Response from calling tool (call_zFZVYovdsklFYgqxttcOHwlr) *****\x1b[0m",), {"flush": True}),
        (("Stopwatch is done!",), {"flush": True}),
        (("\x1b[32m**********************************************************************\x1b[0m",), {"flush": True}),
        (
            ("\n", "--------------------------------------------------------------------------------"),
            {"flush": True, "sep": ""},
        ),
    ]

    assert mock.call_args_list == expected_call_args_list


def test_function_response(sender: ConversableAgent, receiver: ConversableAgent):
    message = {"name": "get_random_number", "role": "function", "content": "76"}

    actual = create_message_model(message, sender=sender, receiver=receiver)

    assert isinstance(actual, FunctionResponseMessage)

    assert actual.name == "get_random_number"
    assert actual.role == "function"
    assert actual.content == "76"
    assert actual.sender_name == "sender"
    assert actual.receiver_name == "receiver"

    mock = MagicMock()
    actual.print(f=mock)

    expected_call_args_list = [
        (("\x1b[33msender\x1b[0m (to receiver):\n",), {"flush": True}),
        (("\x1b[32m***** Response from calling function (get_random_number) *****\x1b[0m",), {"flush": True}),
        (("76",), {"flush": True}),
        (("\x1b[32m**************************************************************\x1b[0m",), {"flush": True}),
        (
            ("\n", "--------------------------------------------------------------------------------"),
            {"flush": True, "sep": ""},
        ),
    ]

    assert mock.call_args_list == expected_call_args_list


def test_function_call(sender: ConversableAgent, receiver: ConversableAgent):
    message = {"content": "Let's play a game.", "function_call": {"name": "get_random_number", "arguments": "{}"}}

    actual = create_message_model(message, sender=sender, receiver=receiver)

    assert isinstance(actual, FunctionCallMessage)

    assert actual.content == "Let's play a game."
    assert actual.sender_name == "sender"
    assert actual.receiver_name == "receiver"

    assert isinstance(actual.function_call, FunctionCall)
    assert actual.function_call.name == "get_random_number"
    assert actual.function_call.arguments == "{}"

    mock = MagicMock()
    actual.print(f=mock)

    expected_call_args_list = [
        (("\x1b[33msender\x1b[0m (to receiver):\n",), {"flush": True}),
        (("Let's play a game.",), {"flush": True}),
        (("\x1b[32m***** Suggested function call: get_random_number *****\x1b[0m",), {"flush": True}),
        (("Arguments: \n", "{}"), {"flush": True, "sep": ""}),
        (("\x1b[32m******************************************************\x1b[0m",), {"flush": True}),
        (
            ("\n", "--------------------------------------------------------------------------------"),
            {"flush": True, "sep": ""},
        ),
    ]

    assert mock.call_args_list == expected_call_args_list


def test_tool_calls(sender: ConversableAgent, receiver: ConversableAgent):
    message = {
        "content": None,
        "refusal": None,
        "role": "assistant",
        "audio": None,
        "function_call": None,
        "tool_calls": [
            {
                "id": "call_rJfVpHU3MXuPRR2OAdssVqUV",
                "function": {"arguments": '{"num_seconds": "1"}', "name": "timer"},
                "type": "function",
            },
            {
                "id": "call_zFZVYovdsklFYgqxttcOHwlr",
                "function": {"arguments": '{"num_seconds": "2"}', "name": "stopwatch"},
                "type": "function",
            },
        ],
    }

    actual = create_message_model(message, sender=sender, receiver=receiver)

    assert isinstance(actual, ToolCallMessage)

    assert actual.content is None
    assert actual.refusal is None
    assert actual.role == "assistant"
    assert actual.audio is None
    assert actual.function_call is None
    assert actual.sender_name == "sender"
    assert actual.receiver_name == "receiver"

    assert len(actual.tool_calls) == 2

    assert isinstance(actual.tool_calls[0], ToolCall)
    assert actual.tool_calls[0].id == "call_rJfVpHU3MXuPRR2OAdssVqUV"
    assert actual.tool_calls[0].function.name == "timer"
    assert actual.tool_calls[0].function.arguments == '{"num_seconds": "1"}'
    assert actual.tool_calls[0].type == "function"

    assert isinstance(actual.tool_calls[1], ToolCall)
    assert actual.tool_calls[1].id == "call_zFZVYovdsklFYgqxttcOHwlr"
    assert actual.tool_calls[1].function.name == "stopwatch"
    assert actual.tool_calls[1].function.arguments == '{"num_seconds": "2"}'
    assert actual.tool_calls[1].type == "function"

    mock = MagicMock()
    actual.print(f=mock)

    expected_call_args_list = [
        (("\x1b[33msender\x1b[0m (to receiver):\n",), {"flush": True}),
        (("\x1b[32m***** Suggested tool call (call_rJfVpHU3MXuPRR2OAdssVqUV): timer *****\x1b[0m",), {"flush": True}),
        (("Arguments: \n", '{"num_seconds": "1"}'), {"flush": True, "sep": ""}),
        (("\x1b[32m**********************************************************************\x1b[0m",), {"flush": True}),
        (
            ("\x1b[32m***** Suggested tool call (call_zFZVYovdsklFYgqxttcOHwlr): stopwatch *****\x1b[0m",),
            {"flush": True},
        ),
        (("Arguments: \n", '{"num_seconds": "2"}'), {"flush": True, "sep": ""}),
        (
            ("\x1b[32m**************************************************************************\x1b[0m",),
            {"flush": True},
        ),
        (
            ("\n", "--------------------------------------------------------------------------------"),
            {"flush": True, "sep": ""},
        ),
    ]

    assert mock.call_args_list == expected_call_args_list


def test_context_message(sender: ConversableAgent, receiver: ConversableAgent):
    message = {"content": "hello {name}", "context": {"name": "there"}}

    actual = create_message_model(message, sender=sender, receiver=receiver)

    assert isinstance(actual, ContentMessage)

    assert actual.content == "hello {name}"
    assert actual.context == {"name": "there"}
    assert actual.llm_config is False

    mock = MagicMock()
    actual.print(f=mock)

    expected_call_args_list = [
        (("\x1b[33msender\x1b[0m (to receiver):\n",), {"flush": True}),
        (("hello {name}",), {"flush": True}),
        (
            ("\n", "--------------------------------------------------------------------------------"),
            {"flush": True, "sep": ""},
        ),
    ]

    assert mock.call_args_list == expected_call_args_list


def test_context_lambda_message(sender: ConversableAgent, receiver: ConversableAgent):
    message = {
        "content": lambda context: f"hello {context['name']}",
        "context": {
            "name": "there",
        },
    }

    actual = create_message_model(message, sender=sender, receiver=receiver)

    assert isinstance(actual, ContentMessage)

    assert callable(actual.content)
    assert actual.context == {"name": "there"}
    assert actual.llm_config is False

    mock = MagicMock()
    actual.print(f=mock)

    expected_call_args_list = [
        (("\x1b[33msender\x1b[0m (to receiver):\n",), {"flush": True}),
        (("hello there",), {"flush": True}),
        (
            ("\n", "--------------------------------------------------------------------------------"),
            {"flush": True, "sep": ""},
        ),
    ]

    assert mock.call_args_list == expected_call_args_list
