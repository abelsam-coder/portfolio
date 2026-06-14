from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework.response import Response

import requests,os,random

User = get_user_model()

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

class Login(APIView):

    def post(self, request):

        try:
            data = request.data

            user = User.objects.filter(
                email=data.get('email')
            ).first()

            if user:

                otp = str(random.randint(100000, 999999))

                send_email(
                    to_email=data.get('email'),
                    subject="otp code",
                    html_content=f"<h1>{otp}</h1>"
                )

                return Response({
                    'success': 'success'
                }, status=200)

            else:
                return Response({
                    'error': 'no email found'
                }, status=404)

        except Exception as e:
            print(e)

            return Response({
                "error": str(e)
            }, status=500)