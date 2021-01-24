# final project: Fitness app

You could exercise at home and don't need to go to gym to work out.

## How to use

0. Click on this [link](https://github.com/b06611016/final-project.git) to access the reference code from GitHub classroom.
```
https://github.com/b06611016/final-project.git
```

1. Change directory to "own"
```
cd own
```


3. Develope your environment
```
yarn 
```

4. Start server
```
yarn start
```

5. start frontend
```
yarn server
```
6. 報告
[109-1] Web Programming Final
(Group 89) 具備
Deploy 連結：https://hsinyang0816.github.io/final-project/
Demo 影片： https://youtu.be/tRNl6q8WKwg
GITHUB LINK
https://github.com/b06611016/final-project
緣起與動機
在這個大家都很忙碌的時代，不一定大家都有時間可以去健身房運動，所以我們希望做一個在家或在宿舍就可以健身的app，幫你規劃好運動目標，安排適合你運動強度的菜單，以達到瘦身健康的目的。
功能簡介
我們的網站有註冊、登入 / 登出、更改運動強度、的功能。
註冊 & 登入 / 登出
可以新增使用者，然後在登入時我們有做一些防呆機制去提醒你有打錯密碼或是使用者名稱等，在註冊時也有做防呆是讓你一定要填完表單且不同使用者名稱才可以通過，登出時會reload頁面，且回傳你今天的完成度，但是如果當天的運動沒有完成的話，我們就不會更新完成率。
線上運動
使用者可以選擇你今天的運動課表，但是我們希望你能繼續完成下去，所以如果點選之前作過的天數課表，會提醒你繼續下去，也不希望你隨便亂執行課表內容，所以務必要按照每一天的流程，裡面有安排休息時間及動圖教學，休息時間可跳過或自行加秒。
完成度紀錄及課表規劃
如果你當天有把當天該跑的運動都做完的話，會更新你的完成度，但如果沒跑完就登出，我們會希望你能完整的完成他，因此不會記錄。
USER PROFILE
我們會紀錄每個使用者的難度及完成度，也可以換難度跟重新設置完成度。
使用套件 / 框架
· Frontend: React.js
· React Hooks
· Ant Design
· Bootstrap
· Apollo-client
· Apollo-provider
· Backend: Node.js
· Graphql-yoga
· Database: MongoDB/Mongoose
部屬方式
前端
前端是使用github去deploy
後端
放置在Heroku
心得
在這一次的專題，為了達成我們的目標，我們實際運用了上課所教的知識，整合了多個套件。開發過程有遇到一些困難。以前端的部份來說，像是要規劃各個頁面的點擊行為，及各種error message去提醒使用者正確使用方式，還有一些useEffect之間的邏輯問題，藉由這次的專題可以學到很多之前沒注意到的細節，而對於這次的project，後端就沒有到多難。
分工表(contribution)
· 陳嘉佑：
主要為刻網頁內部邏輯，為useMenu及useLogin和後端程序碼，我們這組都是一個人調整css，另一個人寫內部邏輯將其串起，兩個的貢獻度幾乎是一樣，皆為5050。
· 張鑫揚：
刻外觀及些許按鈕功能，將MenuPage中可以轉換到profile及menu的按鈕，還有倒數計時的功能，及所有網頁的css外觀。
· 未來願景
• 希望之後可以把燃燒卡路理加進來，及豐富運動課表內容
• 可以自己規劃訓練菜單
• 可以再規劃一個platform去更新個難度訓練菜單內容
## Remind
1. You should first complete your day's working schedule. Then, you could keep continuing doing if you want! However, if you didn't complete day's schedule, then we would not save your progress since we hope that you could complete it first and then log out.

2. If there are any errors, you could first try to refresh the whole page since some data may not be updated!

3. You should fill your mongoURL to complete the service!



## Contact Me

If you have any question or error regarding to this final project, please contact shes94069@gmail.com 


