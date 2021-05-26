#include <nan.h>
#include <string>

void Get(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
  int fib = info[0]->NumberValue(context).FromJust();
  int *arr = new int[fib+1];
  arr[0] = 0;
  arr[1] = 1;
  for(int i = 2; i <= fib; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  int num = arr[fib];
  info.GetReturnValue().Set(std::to_string(num));
}

void Add(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();

  if (info.Length() < 2) {
    Nan::ThrowTypeError("Wrong number of arguments");
    return;
  }

  if (!info[0]->IsNumber() || !info[1]->IsNumber()) {
    Nan::ThrowTypeError("Wrong arguments");
    return;
  }

  double arg0 = info[0]->NumberValue(context).FromJust();
  double arg1 = info[1]->NumberValue(context).FromJust();
  v8::Local<v8::Number> num = Nan::New(arg0 + arg1);

  info.GetReturnValue().Set(num);
}

void Init(v8::Local<v8::Object> exports) {
  v8::Local<v8::Context> context = exports->CreationContext();
  exports->Set(context,
               Nan::New("add").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(Add)
                   ->GetFunction(context)
                   .ToLocalChecked());
  exports->Set(context,
               Nan::New("get").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(Get)
                   ->GetFunction(context)
                   .ToLocalChecked());
}

NODE_MODULE(index, Init)
