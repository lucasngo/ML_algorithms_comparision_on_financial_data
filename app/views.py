from django.shortcuts import render
import pandas as pd 
import datetime
import numpy as np
import yfinance as yf
import math
from sklearn import preprocessing
from sklearn.metrics import mean_squared_error
from sklearn.linear_model import LinearRegression
from sklearn.neighbors import KNeighborsRegressor
from sklearn.svm import SVR
from sklearn.preprocessing import MinMaxScaler
import xgboost as xgb
import tensorflow as tf
from statsmodels.tsa.arima.model import ARIMA
import matplotlib.pyplot as plt
from objects import *
# Create your views here.

def form(request):
    return render(request,"form.html")

def stock_ticker(request):
    if request.method=="POST":
        #var=request.POST['var']
        stock=request.POST['stock']
        period=request.POST['period']
        df1=get_stock_ticker(stock,period)
        


