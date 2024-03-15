var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁(靜態)：\xa0 https://mdewcm2024.github.io/1a-ag4/content/index.html \n 網誌: 請填入目前網站所在的 URL/blog,  https://mde.tw/cmsimde_site/blog \n 簡報: 請填入目前網站所在的 URL/reveal,  https://mde.tw/cmsimde_site/reveal \n 倉儲：\xa0 https://github.com/mdewcm2024/1a-ag4 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'W3', 'text': '在 WCM第三週 教學內容，整理重點。(都有放相關或參照連結) \n 1.關於 git常用 指。 \n 2.利用 Wink 建立操作影片。 \n 3.如何使用 submoduie 來創建個人子模組。(導師操作觀念 影片 ) \n 4.說明如何使用replit維護網站。 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '本周內容： \n 1.複習W3上課內容，', 'tags': '', 'url': 'W4.html'}, {'title': 'Git Tutorial', 'text': 'git是什麼？ \n 版本控制是一種記錄一個或若干 文件內容變化 ，以便將來 查閱特定版本修訂情況 的系統。\xa0 \n 為什麼要使用git？ \n git 是指版本控制系統(Distributed Version Control)，然而他要用來做什麼呢? \n git 具有以下優點 1.速度 \n 2.簡單的設計 \n 3.對非線性開發模式的強力支持（允許成千上萬個併行開發的分支) \n 4.完全分布式 \n 5.有能力高效管理類似 Linux 内核一樣的超大規模項目（速度和數據量） \n 而git 的用途就是 記錄每一個檔案的每次更新，防止被覆蓋或者遺失檔案告成損失。 \n \n git的優勢是什麼？ \n 有人把 Git 的分支模型稱為它的“必殺技特性”，也因為這一特性，使得 Git 從眾多版本控制系統中脫穎而出。 為何 Git 的分支模型如此出眾？  Git 處理分支的方式可謂是難以置信的輕量，創建新分支這一操作幾乎能在瞬間完成，並且在不同分支之間的切換操作也是一樣便捷。 與許多其它版本控制系統不同，Git 鼓勵在工作流程中頻繁地使用分支與合併，即使在一天之內進行許多次。  理解並精通這一特性，你便會意識到 Git 是如此的強大而又獨特，並且從此真正改變你的開發方式。 \n git的使用？ \n \n git 的指令？ \n git常用指令有： \n git add . \xa0 (新增) \n git commit -m  "內容" \xa0 (提交及名稱) \n git\xa0 push \xa0(推送) \n git version \xa0(查詢目前所使用的 git 版本) \n git status \xa0(一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull ，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git\xa0fetch \xa0(將遠端主機的最新內容拉到本地)， git\xa0merge \xa0(用於從指定的commit合併到當前分支) \n git submodule add  自己倉儲網址.git+學號 \xa0(新增分組倉儲的子模組) \n git clone --recurse-submodules\xa0(.git 指定目錄與否) \n git總結: \n 1.版本控制: Git允許您輕鬆地追蹤和管理代碼的變化，可以更容易回退到先前版本或比較不同版本之間的差異。 \n 2.多人協作與合併:多人協作時，Git使得合併不同的分支變得更加容易和安全。 \n 3.分支管理:可以輕鬆創建、合併或刪除分支。 \n 4.遠程儲存和共享:可將代碼庫儲存在git，可使共享代碼儲存更加方便 \n 5.個人化配置:git內建許多配置選項，可根據自己的需求進行配置 \n \n', 'tags': '', 'url': 'Git Tutorial.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': '如果要使用 replit 編輯網站，必須在 動態編輯頁面 設定 .ssh下的id_rsa與config 。 \n 若要簡單點請觀看 這個影片 。 \n \n https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'member', 'text': '完成加入小組成員登記：(貼上個人倉儲連結以示完成) \n \n 組長： \n 41223150 \n 組員： \n 41223110 \n 41223118 \n 41223130 \n 41223140 \n 41223144', 'tags': '', 'url': 'member.html'}, {'title': 'file', 'text': '\n', 'tags': '', 'url': 'file.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};