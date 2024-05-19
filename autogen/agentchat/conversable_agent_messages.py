from autogen.io.messages import StreamMessageWrapper
from pydantic import BaseModel
from typing import Any, Dict, Union


@StreamMessageWrapper.register_message_type("agent.message")
class AgentMessage(BaseModel):
    """Represents a message sent between agents."""

    sender: str
    """The sender of the message."""

    receiver: str
    """The receiver of the message."""

    message: Union[str, Dict]
    """The content of the message, which can be a string or a dictionary."""


@StreamMessageWrapper.register_message_type("agent.suggest_tool_call")
class AgentSuggestToolCall(BaseModel):
    """Represents a suggestion to call a tool."""

    sender: str
    """The sender of the message associated with this tool call."""

    receiver: str
    """The receiver of the message associated with this tool call."""

    function_name: str
    """The name of the suggested function."""

    function_arguments: str
    """The function arguments as a JSON string."""


@StreamMessageWrapper.register_message_type("agent.executing_function")
class AgentExecutingFunctionMessage(BaseModel):
    """Indicates that a function is about to be executed."""

    id: str
    """The ID of the function execution. Used to correlate with the function execution result."""

    executor: str
    """The executor of the function."""

    function_name: str
    """The name of the function to be executed."""

    function_args: Dict[str, Any]
    """The arguments for the function, represented as a dictionary."""


@StreamMessageWrapper.register_message_type("agent.executed_function")
class AgentExecutedFunctionMessage(BaseModel):
    """Indicates that a function has been executed."""

    id: str
    """The ID of the function execution. Used to correlate with the function execution result."""

    executor: str
    """The executor of the function."""

    function_name: str
    """The name of the executed function."""

    function_args: Dict[str, Any]
    """The arguments for the function, represented as a dictionary."""

    result: str
    """The result of the function execution."""
