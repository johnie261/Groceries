from django.shortcuts import render
from django.http import HttpResponse
from .models import Feature

# Create your views here.
def index(request):
    feature1 = Feature()
    feature1.id = 0
    feature1.name = 'Vegetables'
    feature1.desc = 'upto 30% offer'

    feature2 = Feature()
    feature2.id = 1
    feature2.name = 'Juices'
    feature2.desc = 'upto 21% offer'

    feature3 = Feature()
    feature3.id = 2
    feature3.name = 'Meat'
    feature3.desc = 'upto 15% offer'

    feature4 = Feature()
    feature4.id = 3
    feature4.name = 'Fruits'
    feature4.desc = 'upto 10% offer'

    features = [feature1, feature2, feature3, feature4]
    return render(request, 'index.html', {'features': features})


def counter(request):
    text = request.POST['text']
    amount_of_words = len(text.split());
    return render(request, 'counter.html',{'amount': amount_of_words})
