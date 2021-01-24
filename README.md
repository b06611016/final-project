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
```
[109-1] Web Programming Final
(Group 89) 具備
Deploy 連結：https://hsinyang0816.github.io/final-project/
Demo 影片： https://youtu.be/tRNl6q8WKwg
GITHUB LINK：
https://github.com/b06611016/final-project
```
```
緣起與動機：
在這個大家都很忙碌的時代，不一定大家都有時間可以去健身房運動，所以我們希望做一個在家或在宿舍就可以健身的app，
幫你規劃好運動目標，安排適合你運動強度的菜單，以達到瘦身健康的目的。
功能簡介：
我們的網站有註冊、登入 / 登出、更改運動強度、的功能。
註冊 & 登入 / 登出：
可以新增使用者，然後在登入時我們有做一些防呆機制去提醒你有打錯密碼或是使用者名稱等，
在註冊時也有做防呆是讓你一定要填完表單且不同使用者名稱才可以通過，
登出時會reload頁面，且回傳你今天的完成度，但是如果當天的運動沒有完成的話，我們就不會更新完成率。
線上運動：
使用者可以選擇你今天的運動課表，但是我們希望你能繼續完成下去，所以如果點選之前作過的天數課表，會提醒你繼續下去，
也不希望你隨便亂執行課表內容，所以務必要按照每一天的流程，裡面有安排休息時間及動圖教學，休息時間可跳過或自行加秒。
完成度紀錄及課表規劃：
如果你當天有把當天該跑的運動都做完的話，會更新你的完成度，但如果沒跑完就登出，我們會希望你能完整的完成他，因此不會記錄。
USER PROFILE：
我們會紀錄每個使用者的難度及完成度，也可以換難度跟重新設置完成度。
```
```
使用套件 / 框架：
· Frontend: React.js
   · React Hooks
   · Ant Design
   · Bootstrap
   · Apollo-client
   · Apollo-provider
· Backend: Node.js
   · Graphql-yoga
· Database: MongoDB/Mongoose
部屬方式：
1.前端：
前端是使用github去deploy
2.後端：
放置在Heroku
```
```
心得：
在這一次的專題，為了達成我們的目標，我們實際運用了上課所教的知識，整合了多個套件。開發過程有遇到一些困難。
以前端的部份來說，像是要規劃各個頁面的點擊行為，及各種error message去提醒使用者正確使用方式，
還有一些useEffect之間的邏輯問題，藉由這次的專題可以學到很多之前沒注意到的細節，而對於這次的project，
後端就沒有到多難，因此在實行上並沒有為此造成太大的困難。

分工表(contribution)
· 陳嘉佑(Contribution rate:50%)：
    主要負責撰寫網頁前端內部邏輯與後端的resolver、schema等，一開始先與組員討論前端應該具備的元素，
    隨後自行設計後端資料庫的資料型態與resolver，設法使其與前端串聯起來。之後當組員陸陸續續完成前端頁面設計後，
    協助組員將這些頁面link起來，統籌網頁前端邏輯架構，將本來組員在前端寫死的部分實際與後端串聯，成為一個動態網頁。
    這樣一來才能夠紀錄用戶的訓練紀錄，還能讓用戶能自適應更改訓練強度與重設訓練進度，使其成為一個真正的網頁API。
    主要著重於開發APP.js、useMenu.js與useLogin.js這三支程式與支援組員那六個頁面的連結性，此外還設計了一些
    防呆機制，引導使用者正確地使用此API服務。
· useLogin： 
  為控制登入頁面及創建帳號的頁面管理，創建帳號不可有重複username

· useMenu： 
  為控制前端使用者使用課表情形，會有提示希望使用者如何使用，
  當登出或完成當天課表時會將更新的部分推到database裡
  
· 後端：為拿取課表，及個人資料，且處理前端當有資訊進入時，即時更新使用者資料 
  

· 張鑫揚(Contribution rate:50%)：
    負責網頁UI/UX設計，主要著重於調整各頁面外觀的html與CSS，並建立頁面的一些基礎功能，如部分換頁功能、倒計時等。
    採用的分工方法為先把前端會用到database的部分先寫死(但仍是用map的方式，可依資料庫array大小進行調整，
    以方便後續前端開發)，然後先依序設計完所有頁面，同時可以把已經設計好的頁面交給組員，
    告知一些我本來寫死但加入database會動到的地方，組員再依這些地方去串接內部邏輯，用react去設計網頁邏輯架構，
    最終完成此次的期末專題。所設計所有的頁面如下所示：
· LoginPage：
    登入頁面，可以讓使用者填入使用者名稱與密碼，下方的兩個按鈕一個是登入，另一個是創建帳戶，按下去後會進入
    FormPage。
    
· FormPage：
    創建帳戶頁面，會請新用戶填入用戶名、密碼、運動強度與性別。
    
· MenuPage：
    個人主頁，上方有一個Navbar，有三個小頁面可以切換，從左邊數來第一個下方是進入各天訓練菜單的按鈕，
    其中按鈕右方有一個Circular bar是當天的訓練完成比率。第二個是個人基本資料，其中包含了四個元素，
    分別是用戶名、當前訓練強度、重設進度鈕與重設運動強度下拉式選單。第三個是登出鈕，也就是按了會回到LoginPage。

· DayPage：
    當天的訓練菜單頁面，下方有不同運動的按鈕，代表是今日的運動菜單，點擊即會進入數秒頁面。
    
· CountingPage：
    數秒頁面，上方會有Gif動圖教你這個運動的動作該如何完成，此外下方的讀秒進度條是透過結合settimeout()
    與react-bootstrap的progress bar去完成，當讀秒結束後下方的next button才會顯示，
    按下next button進入休息頁面。

· RelaxPage
    休息頁面，具有普通的讀秒功能，有一個加秒鍵能讓用戶自己加秒，還有一個跳過鍵能讓用戶自行決定是否跳過休息。
    

· 未來願景：
• 希望之後可以把燃燒卡路理加進來，及豐富運動課表內容
• 可以自己規劃訓練菜單
• 可以再規劃一個platform去更新個難度訓練菜單內容
```
6. deploy [link](https://hsinyang0816.github.io/final-project/)
```
click the following link: https://hsinyang0816.github.io/final-project/
```
## Remind
1. You should first complete your day's working schedule. Then, you could keep continuing doing if you want! However, if you didn't complete day's schedule, then we would not save your progress since we hope that you could complete it first and then log out.

2. If there are any errors, you could first try to refresh the whole page since some data may not be updated!

3. You should fill your mongoURL to complete the service!



## Contact Me

If you have any question or error regarding to this final project, please contact shes94069@gmail.com 


