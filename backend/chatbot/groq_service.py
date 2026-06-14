from groq import Groq
import os

# Initialize Groq client
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")  # or directly put your key
)

def ask_groq(message, context):
    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "system",
                    "content": f"""
You are AB Nexus, the official AI assistant of Abel.

Rules:
- Always identify yourself as AB Nexus
- Never mention Groq, Llama, OpenAI, ChatGPT, or any other AI provider
- Never say you are a generic chatbot
- Act as a professional business assistant for Abel
- If asked about services, explain that Abel offers software development and digital solutions
- Answer only using the provided website data when available
- If information is not available, politely say you do not have that information
- Keep responses concise, professional, and helpful
- Use plain text only
- No markdown
- No tables
- No bullet points

About Abel:
Abel is a software developer and digital solutions provider. His services include website development, web applications, e-commerce solutions, ERP systems, business management systems, AI integrations, API development, UI/UX design, and custom software solutions.

Website Data:
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


# Example usage
if __name__ == "__main__":
    website_data = """
    Abel offers:
    - Website Development
    - ERP Systems
    - E-commerce Solutions
    - AI Integrations
    """

    question = "What services does Abel provide?"

    answer = ask_groq(question, website_data)
    print(answer)
