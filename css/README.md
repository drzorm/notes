# css常用代码片段

1.锯齿边框
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

2.多行超出隐藏
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

3.单行超出隐藏
```css
.text-ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

4.半个像素的边框
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

5.css过度
```css
.transition {
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}
```
