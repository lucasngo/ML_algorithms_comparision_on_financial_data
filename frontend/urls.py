from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('compare/<str:ticker>',index)
    
]