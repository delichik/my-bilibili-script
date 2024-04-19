#!/bin/bash

rm -rf ./danmaku.movie.kg
mkdir -p ./danmaku.movie.kg

wget https://raw.githubusercontent.com/delichik/my-script/main/bash/emby/danmaku.movie.kg.js -P ./danmaku.movie.kg/
wget https://raw.githubusercontent.com/delichik/my-script/main/bash/emby/danmaku.movie.kg.css -P ./danmaku.movie.kg/

# 读取index.html文件内容
content=$(cat index.html)

# 检查index.html是否包含danmaku.movie.kg
if grep -q "danmaku.movie.kg" index.html; then
    echo "Index.html already contains danmaku.movie.kg, skipping insertion."
else
    code='<script type="text/javascript" src="danmaku.movie.kg/danmaku.movie.kg.js"></script>\n<link rel="stylesheet" href="danmaku.movie.kg/danmaku.movie.kg.css"/>\n'
    new_content=$(echo -e "${content/<\/body>/$code<\/body>}")
    echo -e "$new_content" > index.html
fi
