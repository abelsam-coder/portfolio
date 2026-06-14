from django.shortcuts import render
from django.template.loader import render_to_string
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

class StartServer(APIView):
    def get(self, request):
        return Response({"message": "Server is running"}, status=200)

class MessageApi(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = MessageSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()

            # Prepare context for email template
            context = {
                'full_name': request.data.get('full_name', 'User'),
                'email': request.data.get('email'),
                'subject': request.data.get('subject', 'N/A'),
                'message': request.data.get('message'),
                'phone': request.data.get('phone', None),
            }

            # Render email template
            html_content = render_to_string('message_received_email.html', context)

            send_email(
                to_email=request.data['email'],
                subject="Message Received Successfully ✓",
                html_content=html_content
            )

            return Response({"status": "success"}, status=200)

        return Response(serializer.errors, status=400)
