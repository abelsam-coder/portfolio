from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import MessageSerializers
import requests,os
# Create your views here.

def send_email(to_email, subject, html_content):
    url = "https://api.resend.com/emails"

    headers = {
        "Authorization": f"Bearer {os.getenv('RESEND_API_KEY')}",
        "Content-Type": "application/json",
    }

    data = {
        "from": "Abel Samuel <onboarding@resend.dev>",  
        "to": [to_email],
        "subject": subject,
        "html": html_content,
    }

    response = requests.post(url, json=data, headers=headers)
    return response.json()
class MessageApi(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = MessageSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()

            send_email(
                to_email=request.data['email'],
                subject="Message Received Successfully",
                html_content=f"""
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {{
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            padding: 20px;
                        }}

                        .container {{
                            max-width: 600px;
                            margin: auto;
                            background: white;
                            border-radius: 10px;
                            padding: 30px;
                            box-shadow: 0 0 10px rgba(0,0,0,0.1);
                        }}

                        h1 {{
                            color: #2563eb;
                        }}

                        p {{
                            color: #333;
                            line-height: 1.6;
                        }}

                        .footer {{
                            margin-top: 30px;
                            font-size: 12px;
                            color: gray;
                        }}
                    </style>
                </head>

                <body>
                    <div class="container">
                        <h1>Thank You!</h1>

                        <p>Hello {request.data.get('full_name', 'User')},</p>

                        <p>
                            Your message has been received successfully.
                            We will review it and get back to you soon.
                        </p>

                        <p>
                            Thanks for contacting us.
                        </p>

                        <div class="footer">
                            © 2026 Your Company. All rights reserved.
                        </div>
                    </div>
                </body>
                </html>
                """
            )

            return Response({"status": "success"}, status=200)

        return Response(serializer.errors, status=400)