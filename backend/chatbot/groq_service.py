import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY is missing in environment variables")

client = Groq(api_key=api_key)


def ask_groq(message, context):
    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "system",
                    "content": f"""
You are Codex, an AI assistant.

Rules:
- Always identify yourself as AB Nexus
- Never say you are a generic chatbot
- Answer in plain text only
- No markdown
- No tables
- No bullet points
- Keep answers short and clear
- Use only the provided website data

Website data:
{context}
"""
                },
                {
                    "role": "user",
                    "content": message
                }
            ],
            temperature=0.5,
            max_tokens=300
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"
