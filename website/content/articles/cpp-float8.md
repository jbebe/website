---
date: "2018-10-23"
live: false
title: "Wrappers around the world: TypeScript decorator"
description: Decorators can be used for many things. Today we go full RPC.
cover: js-wrappers/typescript.jpeg
tags:
  - programming
  - javascript
---

```cpp
#include <iostream>
#include <bitset>

#pragma pack(push, 1)
struct float8 {

    int sign : 1;
    int exponent : 3;
    int mantissa : 4;

public:

    float8(): float8(0.f) {}

    float8(float x){
        auto bits = *(uint32_t*)&x;
        sign = bits >> 31;
        auto ex8 = (bits >> 23) & 0xff;
        auto exUnderflow = ex8 < 125;
        auto exOverflow = ex8 > 130;
        if (exUnderflow || exOverflow){
            exponent = exUnderflow ? 0 : 0b111;
            mantissa = 0;
        }
        else {
            exponent = ((ex8 >> 5) & 0b0100) | (ex8 & 0b0011);
            mantissa = (bits >> 19) & 0b1111;
        }
    }

    operator float() const {
        uint32_t bits = (
            (sign << 31) |
            (exponent == 0
                ? 0
                : (exponent == UINT32_MAX
                    ? 0xff
                    : (((exponent & 0b0100) << 5) | (exponent & 0b0100 ? 0 : 0b0111'1100) | (exponent & 0b0011))) << 23) |
            ((mantissa & 0b1111) << 19)
        );
        auto result = *(float*)&bits;
        return result;
    }
};
#pragma pack(pop)

std::ostream& operator << (std::ostream& os, const float8& x)
{
    return os << (float)x;
}

int main()
{
    {
        std::cout << std::endl << "- exponent test -" << std::endl;
        for (float f = 0.125f; f <= 16.0f; f *= 2.0f) {
            float8 f8 = f;
            std::cout << f << ": " << f8 << std::endl;
        }
    }

    {
        std::cout << std::endl << "- smallest negative test -" << std::endl;
        float8 f8 = -15.5f;
        std::cout << "-15.5: " << f8 << std::endl;
    }

    {
        std::cout << std::endl << "- pack 1 byte test -" << std::endl;
        float8 f3 = 1.234567f;
        std::cout << "write (1.234567): " << f3 << std::endl;
        FILE* fp = fopen("tmp_output", "wb");
        fwrite(&f3, 1, 1, fp);
        fclose(fp);
        float8 f4;
        FILE* fr = fopen("tmp_output", "rb");
        fread(&f4, 1, 1, fr);
        fclose(fr);
        std::cout << "read: " << f4 << std::endl;
    }
}
```