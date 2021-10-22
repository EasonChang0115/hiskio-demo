# hiskio 面試測驗題目
## 安裝與執行

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
## 套件

### 1. vue-awesome-swiper

輪播圖片以及熱門標籤使用

### 2. cookie-universal-nuxt

方便處理 cookie 的 nuxt 套件

### 3. nuxt-lazy-load

處理懶加載

## 問題與解決方法

其實拿到題目的時候，大概心裡就有雛型要怎麼去實作了。其中最花時間的地方就是 header 的 rwd，稍微麻煩點，尤其這是我第一次認真的用 tailwindcss 刻畫面，很多 class 名稱還不是很熟悉，常常去翻閱官方網站以及 nuxt 我幫建置好的 guildline，導致 header 花比較久時間去製作。

後面還蠻多地方需要改正的，例如元件的功能其實要更單一化，確保 reuse，以及畫面的分割要再更明確點，有時候真礙於 UI/UX 的流程，元件之間的關聯性可能就沒辦法切的很漂亮。

另外，關於 Nuxt SSR 運用，我並沒有在這邊著墨太多，主要是搭配 asyncData 這個生命週期就可以達到伺服器渲染的效果(page 下才能執行)，目前主要還是在功能的實現以及畫面的還原度(RWD)，做得更細緻點。

storybook 在工作上，幾乎沒有用過，只有在一些分享或文章看過如何使用，以及他的優點。待過的公司屬於新創，開發上不會這麼著重於測試驅動，這部分是真的不是很熟悉，不過透過這次的練習，也大致上了解如何撰寫 storybook，期望將來有機會能寫出更複雜的元件流程，例如複合式元件。


