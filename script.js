const lightArea = document.getElementById('light-area');
const colors = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF', '#000000']; // 色のリスト
let currentColorIndex = 0;
let brightness = 1; // 1は100%の明るさ

// 画面タップで色を切り替える
lightArea.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length; // 次の色へ
    lightArea.style.backgroundColor = colors[currentColorIndex];
});

// スワイプや別のUIで明るさを調整する例（応用）
// 例えば、上下スワイプで明るさ、左右スワイプで色相を調整するなども可能
// 簡単なUIを追加する場合の例:
// const brightnessSlider = document.createElement('input');
// brightnessSlider.type = 'range';
// brightnessSlider.min = '0';
// brightnessSlider.max = '2'; // 200%まで
// brightnessSlider.step = '0.1';
// brightnessSlider.value = '1';
// brightnessSlider.style.position = 'absolute';
// brightnessSlider.style.bottom = '20px';
// brightnessSlider.style.width = '80%';
// lightArea.appendChild(brightnessSlider);

// brightnessSlider.addEventListener('input', (event) => {
//     brightness = parseFloat(event.target.value);
//     lightArea.style.filter = `brightness(${brightness})`;
// });
