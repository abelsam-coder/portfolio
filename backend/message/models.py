from django.db import models

class ProjectInquiry(models.Model):
    PROJECT_TYPES = [
        ("web", "Web Development"),
        ("mobile", "Mobile App"),
        ("ai", "AI / Machine Learning"),
        ("cyber", "Cybersecurity"),
        ("api", "API Development"),
        ("other", "Other"),
    ]

    BUDGET_RANGES = [
        ("low", "Under 100,000 ETB"),
        ("mid", "100,000 - 300,000 ETB"),
        ("high", "300,000 - 600,000 ETB"),
        ("enterprise", "600,000+ ETB"),
    ]

    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=200)

    project_type = models.CharField(
        max_length=50,
        choices=PROJECT_TYPES,
        blank=True,
        null=True
    )

    budget = models.CharField(
        max_length=50,
        choices=BUDGET_RANGES,
        blank=True,
        null=True
    )

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.subject}"