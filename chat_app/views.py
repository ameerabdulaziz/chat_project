from django.shortcuts import render, redirect


def home_view(request):
    context = {
        'title': 'My Chat'
    }
    return render(request, 'main.html', context)


def chat_view(request):
    if request.method != 'POST':
        return redirect('index')
    else:
        context = {
            'username': request.POST.get('username')
        }
        return render(request, 'chat.html', context)
