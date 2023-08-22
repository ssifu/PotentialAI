from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(response):
    return HttpResponse("<h1>Samiul Baree Sifat</h1>")

def home(response):
    return render(response, "main/base.html", {})