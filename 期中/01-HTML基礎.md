第一章：HTML
1.1 什麼是 HTML？
HTML（Hypertext Markup Language）是一種用於建立網頁的標記語言。它使用各種標籤（tags）來定義網頁的結構和內容，並且可以嵌套和組合這些標籤以創建具有結構和意義的網頁。

1.2 HTML 文件結構
HTML文件由以下結構組成：
<!DOCTYPE html>
<html>
<head>
    <title>網頁標題</title>
</head>
<body>
    <!-- 網頁內容 -->
</body>
</html>
<!DOCTYPE html> 宣告為HTML5文件類型。
<html> 標籤是HTML文件的根元素。
<head> 標籤用於定義網頁的元資料，如標題、CSS樣式和連結到外部資源的引用。
<title> 標籤用於定義網頁的標題，將顯示在瀏覽器的標題欄中。
<body> 標籤包含了網頁的實際內容，如文字、圖像、連結等。

1.3 HTML 元素與標籤
HTML元素是網頁中的不同部分，例如標題、段落、圖像、連結等。每個HTML元素由一對標籤包圍，並且可以嵌套在其他元素中。

以下是一些常見的HTML元素範例：

標題元素 <h1> 到 <h6> 用於定義不同級別的標題，其中 <h1> 是最高級別的標題，而 <h6> 是最低級別的標題。
<h1>這是一個標題</h1>
段落元素 <p> 用於定義一個段落。
<p>這是一個段落。</p>
圖像元素 <img> 用於插入圖像，並且需要指定圖像的來源（src）。
<img src="image.jpg" alt="圖像描述">
連結元素 <a> 用於創建超連結，並且需要指定目標URL（href）。
<a href="https://www.example.com">這是一個連結</a>
1.4 HTML 屬性
HTML屬性是用於提供有關HTML元素的附加信息。屬性通常包含在元素的開始標籤中，並且具有名稱和值的格式。

以下是一個示例，其中 src 是 img 元素的屬性，指定圖像的來源：
<img src="image.jpg" alt="圖像描述">
在這個例子中，src 是屬性的名稱，而 "image.jpg" 是屬性的值。


1.5 HTML 標題與段落
HTML標題（Heading）元素用於定義不同級別的標題，而段落（Paragraph）元素用於定義段落文本。

以下是一個示例，展示了不同級別的標題和一個段落：
  <h1>這是一個標題</h1>
<h2>這是一個次級標題</h2>
<p>這是一個段落。</p>
  在這個例子中，<h1> 是最高級別的標題，<h2> 是次級標題，<p> 是段落元素。你可以根據需要在網頁中使用不同級別的標題和段落來組織內容。

1.6 HTML 超連結
HTML超連結（Hyperlink）元素 <a> 用於創建頁面之間的連結。你可以使用 href 屬性指定連結的目標URL。

以下是一個示例，創建了一個指向Google的超連結：
  <a href="https://www.google.com">前往Google</a>
  當用戶點擊連結時，他們將被導航到指定的URL。

1.7 HTML 圖像
HTML圖像（Image）元素 <img> 用於在網頁中插入圖像。你需要使用 src 屬性指定圖像的來源URL，並可以使用 alt 屬性提供圖像的替代文字（用於無法顯示圖像的情況）。

以下是一個示例，插入了一個圖像：
  <img src="image.jpg" alt="圖像描述">
  在這個例子中，src 屬性指定圖像的來源URL，而 alt 屬性提供圖像的描述文字。

1.8 HTML 表格
HTML表格（Table）元素 <table> 用於展示結構化的數據。表格由行和列組成，使用 <tr>（行）和 <td>（單元格）元素來定義。

以下是一個示例，創建了一個簡單的表格：
  <table>
  <tr>
    <th>項目</th>
    <th>數量</th>
  </tr>
  <tr>
    <td>蘋果</td>
    <td>5</td>
  </tr>
  <tr>
    <td>橙子</td>
    <td>3</td>
  </tr>
</table>
  在這個例子中，<table> 定義了表格的開始，<tr> 定義了一行，<th> 定義了表頭單元格，<td> 定義了數據單元格。你可以根據需要添加更多的行和列來構建更複雜的表格。

1.9 HTML 表單
HTML表單（Form）元素 <form> 用於創建與用戶交互的表單。表單中可以包含各種輸入元素，如文本輸入框、單選按鈕、複選框、下拉選單等。

以下是一個示例，創建了一個簡單的表單：
  <form>
  <label for="name">姓名:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">郵箱:</label>
  <input type="email" id="email" name="email" required>
  
  <input type="submit" value="提交">
</form>
  在這個例子中，<form> 定義了表單的開始和結束。<label> 元素用於定義表單字段的標籤，<input> 元素用於創建不同類型的輸入字段，如文本輸入框（type="text"）、郵箱輸入框（type="email"）。required 屬性指定了必填字段。<input type="submit"> 用於創建提交按鈕。

1.10 HTML 樣式與 CSS
HTML提供了樣式（Style）屬性來直接設置元素的外觀，例如字體大小、顏色、背景等。然而，為了更好地控制和組織樣式，通常使用CSS（Cascading Style Sheets）來對HTML進行樣式設置。

CSS是一種用於描述網頁外觀和布局的樣式語言。它可以單獨存儲在一個CSS文件中，或者直接嵌入在HTML文檔中的<style>標籤內。

以下是一個使用CSS的示例：
  <!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS樣式 */
    h1 {
      color: blue;
      font-size: 24px;
    }

    p {
      color: green;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>這是一個標題</h1>
  <p>這是一個段落。</p>
</body>
</html>
  在這個例子中，CSS樣式被包含在<style>標籤內。通過選擇器（例如h1和p），我們指定了要應用樣式的HTML元素。在大括號內，我們定義了具體的樣式屬性和值（例如color: blue表示文字顏色為藍色）。這樣，所有的<h1>標籤都會應用藍色文字和24px字體大小，而所有的<p>標籤都會應用綠色文字和18px字體大小。

CSS還提供了許多其他的樣式屬性和選擇器，可以更全面地控制網頁的外觀和佈局。通過將CSS樣式與HTML結合使用，我們可以實現豐富且吸引人的網頁設計。
