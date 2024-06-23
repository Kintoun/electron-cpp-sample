//===========================================================================================================
// exmaple.h
// test impl of exposing C++ to Electron

#include <napi.h>
#include <iostream>

namespace example
{
    // add number function
    int Add(int x, int y);

    // add function wrapper
    Napi::Number AddWrapped(const Napi::CallbackInfo& info);

    //Export API
    Napi::Object Init(Napi::Env env, Napi::Object exports);

    NODE_API_MODULE(Addon, Init)
} // namespace example

//===========================================================================================================
