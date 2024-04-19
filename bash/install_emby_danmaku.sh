#!/bin/bash

# 读取index.html文件内容
content=$(cat index.html)

# 检查index.html是否包含danmaku.movie.kg
if grep -q "danmaku.movie.kg" index.html; then
    echo "Index.html already contains danmaku.movie.kg, skipping insertion."
else
    code='<script type="text/javascript" src="https://danmaku.movie.kg/ext.js"></script>\n<link rel="stylesheet" href="https://danmaku.movie.kg/ext.css"/>\n'
    new_content=$(echo -e "${content/<\/body>/$code<\/body>}")
    echo -e "$new_content" > index.html
fi
