from autogen.io.messages import StreamMessageWrapper
from pydantic import BaseModel
from typing import Any, Dict
from openai.types.chat import ChatCompletion


@StreamMessageWrapper.register_message_type("openai.completion.fragment")
class OpenAICompletionFragment(BaseModel):
    """Represents a fragment of a completion response from OpenAI's language model."""

    request_id: str
    """The unique identifier for the request."""

    content: str
    """The content of the completion fragment."""


@StreamMessageWrapper.register_message_type("openai.completion.request")
class OpenAICompletionRequest(BaseModel):
    """Represents a request for a completion from OpenAI's language model."""

    request_id: str
    """The unique identifier for the request."""

    params: Dict[str, Any]
    """The parameters of the completion request."""


@StreamMessageWrapper.register_message_type("openai.completion.response.openai")
class OpenAICompletionResponse(BaseModel):
    """Represents a response from OpenAI's language model for a completion request."""

    request_id: str
    """The unique identifier for the request."""

    response: ChatCompletion
    """The response from OpenAI's language model, represented as a ChatCompletion object."""
