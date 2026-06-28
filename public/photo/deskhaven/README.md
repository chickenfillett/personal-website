# DeskHaven image assets

DeskHaven images are organized by website locale:

- `zh`
- `zh-tw`
- `en`
- `ja`
- `ko`
- `fr`
- `de`
- `es`
- `ru`
- `pt`

Each locale folder contains:

- `posters/poster-01.webp` ... `poster-10.webp`
- `screenshots/screenshot-01.webp` ... screenshots for that locale

The source images come from:

`D:\Users\nemon\Desktop\项目源代码及程序\DeskHaven桌面管理\宣传图片`

Notes:

- Poster images are used for the product introduction section.
- Interface screenshots are shown in the lower gallery.
- Simplified Chinese, Traditional Chinese, English, Japanese, French, Russian, and Portuguese use localized poster art from the source poster folders.
- Spanish uses 9 localized posters plus an English fallback for `poster-10.webp`, because the source Spanish poster folder currently contains 9 images.
- Korean and German currently reuse English poster art because the source poster folders for those languages are not present, while their interface screenshot folders are present and localized.
- WebP assets are exported for website display, not zoom inspection: posters are resized to about 1120px wide and screenshots to about 1180px wide with WebP quality 72.
