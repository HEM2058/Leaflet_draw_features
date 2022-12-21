from django.db import models

# Create your models here.

class JsonSave(models.Model):
    JsonFile = models.JSONField()