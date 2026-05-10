from rest_framework import serializers
from .models import ProjectInquiry

class MessageSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProjectInquiry
        fields = "__all__"

    def create(self, validated_data):
        try:
            return ProjectInquiry.objects.create(**validated_data)
        except Exception as e:
            raise serializers.ValidationError({"error": str(e)})