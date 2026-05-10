from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import MessageSerializers
# Create your views here.

class MessageApi(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = MessageSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success"}, status=200)

        print(serializer.errors)  # 👈 ADD THIS
        return Response(serializer.errors, status=400)