from langchain_openai import OpenAI
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate

# Initialize the language model with the API key
llm = OpenAI(model_name="text-davinci-003", openai_api_key="your_openai_api_key")

# Define a prompt template
prompt_template = PromptTemplate(template="The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\n{history}\nHuman: {input}\nAI:")

# Set up the memory component to keep track of conversation history
memory = ConversationBufferMemory(memory_key="history")

# Create a chain with the language model, prompt template, and memory
chain = LLMChain(llm=llm, prompt_template=prompt_template, memory=memory)

# Simulate a conversation
user_input1 = "Hello, who are you?"
response1 = chain.run({"input": user_input1})
print(f"AI: {response1}")

user_input2 = "What's the weather like today?"
response2 = chain.run({"input": user_input2})
print(f"AI: {response2}")

user_input3 = "Can you remind me what I asked you earlier?"
response3 = chain.run({"input": user_input3})
print(f"AI: {response3}")
