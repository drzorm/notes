# css常用代码片段

#### 锯齿边框
```css
.border-sawtooth {
    position: relative;
}
.border-sawtooth:before,
.border-sawtooth:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background-size: 8px 10px;
    background-repeat: repeat;
}
.border-sawtooth:before {
    left: 0;
    background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 3px, #ebebeb 3px);
    background-position: 0 -3px;
    }
    .border-sawtooth:after {
    right: 0;
    background-image: radial-gradient( #ebebeb 3px, rgba(0, 0, 0, 0) 3px, rgba(0, 0, 0, 0) 0);
    background-position: 0 1px;
}
```

#### 多行超出隐藏
```css
.line-clamp-2{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
```

#### 单行超出隐藏
```css
.text-ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

#### 半个像素的边框
```css
.s-border-bottom {
    position: relative;
    margin-bottom: 0.5px;
}
.s-border-bottom:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #e6e6e6;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
```

#### css过度
```css
.transition {
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}
```
#### flex
```css
.flex-box {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.flex-box .item {
  position: relative;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 0.7rem;
}
```
#### 设置滚动条样式
```
/* 设置滚动条的样式 */
.ibox-content::-webkit-scrollbar {
    width: 6px;
}
/* 滚动槽 */
.ibox-content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 滚动条滑块 */
.ibox-content::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #c0becc;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); */
}
.ibox-content::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4);
}
```
