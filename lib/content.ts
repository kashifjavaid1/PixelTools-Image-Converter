// SEO copy for each tool page. Every statement here is written to match what the
// tool really does, so visitors and Google get accurate information.
export interface ToolContent {
  title: string; // browser/search title (" | PixelTools" is added automatically)
  description: string; // meta description, kept to roughly 120-155 characters
  h1: string;
  intro: string[]; // paragraphs shown under the H1
  steps: string[]; // "How to use" list
  why: string[]; // short benefit bullets
  guide: { heading: string; paragraphs: string[] }[]; // deeper explanation sections
  tips: string[]; // helpful tips
  faq: [string, string][]; // tool-specific questions
  related: string[]; // slugs of related tools (internal links)
}

export const CONTENT: Record<string, ToolContent> = {
  "image-compressor": {
    title: "Image Compressor: Reduce Photo Size Online",
    description:
      "Reduce image file size without losing visible quality. Compress JPG, PNG and WebP in your browser. Free, private, no upload and no sign-up.",
    h1: "Free Image Compressor: Make Your Photos Smaller",
    intro: [
      "Large photos fail to upload, slow down websites and fill up your storage. This image compressor reduces the file size of your pictures while keeping them looking good.",
      "Everything happens in your browser. Your image is never uploaded to a server.",
    ],
    steps: [
      "Drop your image onto the upload area, or click to choose one.",
      "Move the Compression Quality slider. Lower quality means a smaller file.",
      "Compare the original and the result, and check the new file size.",
      "Click Download Image to save the compressed file.",
    ],
    why: [
      "Faster websites: smaller images load faster, which helps visitors and search engines.",
      "Easier sharing: many email services, forms and apps limit file size.",
      "Saves space on your phone and computer.",
      "Private: your photo stays on your device.",
    ],
    guide: [
      {
        heading: "How image compression works",
        paragraphs: [
          "JPG and WebP use lossy compression. They store a slightly simplified version of the picture, and a lower quality setting simplifies it more. That is why the file gets smaller. At moderate settings the change is hard to notice, and the preview lets you check before you download.",
          "PNG uses lossless compression, which keeps every pixel but usually makes larger files for photos. That is why this tool saves a JPG as a JPG, and saves other images, such as a PNG, as a WebP.",
        ],
      },
      {
        heading: "Need an exact file size?",
        paragraphs: [
          "If a form asks for a photo under a certain size, use one of our target-size tools: Compress Image to 50KB, Compress Image to 100KB or Compress Image to 200KB. They find the best quality that still fits under the limit for you.",
        ],
      },
    ],
    tips: [
      "Start around 80% quality and lower it until you can see a difference in the preview.",
      "Photos usually compress better than screenshots or graphics with sharp text.",
      "Making the picture smaller in pixels also reduces file size. Try the Image Resizer first for very large photos.",
      "Keep your original file in case you need the full quality later.",
    ],
    faq: [
      [
        "Will compression reduce the quality of my image?",
        "A little, depending on the quality you choose. At moderate settings the difference is usually hard to see, and the preview lets you check before you download.",
      ],
      [
        "Why did my file get bigger?",
        "Files that are already well optimized can grow slightly when they are saved again. If that happens, try a lower quality setting or keep your original.",
      ],
      [
        "What format will my compressed image be?",
        "A JPG stays a JPG. Other images, such as PNG files, are saved as WebP. If you need a different format, use one of the converters.",
      ],
      [
        "Why does it say my browser can't create that format?",
        "Some browsers, especially older versions of Safari, cannot create WebP files. Try a current version of Chrome, Edge or Firefox, or compress a JPG instead.",
      ],
    ],
    related: ["compress-image-to-100kb", "image-resizer", "jpg-to-webp"],
  },

  "compress-image-to-50kb": {
    title: "Compress Image to 50KB Online (Free)",
    description:
      "Compress a photo to 50 KB or less in seconds. Works with JPG, PNG and WebP, runs in your browser, no upload and no sign-up. Free and private.",
    h1: "Compress Image to 50KB Online",
    intro: [
      "Many application forms, exam portals and upload pages only accept a photo or document scan under 50 KB. This tool shrinks your image to 50 KB or less, right in your browser.",
      "You do not need to guess a quality setting. The tool searches for the highest quality that still fits under the limit. Your image is never uploaded.",
    ],
    steps: [
      "Drop your JPG, PNG or WebP image onto the upload area, or click to choose a file.",
      "Wait a moment while the tool finds the best quality that fits under 50 KB.",
      "Check the file size and the preview. A green message means the file is under 50 KB.",
      "Click Download Image to save your JPG.",
    ],
    why: [
      "A result under 50 KB, without trial and error.",
      "Highest possible quality for that size.",
      "Works on phone and computer, with no account and no watermark.",
      "Your photo never leaves your device.",
    ],
    guide: [
      {
        heading: "How the 50 KB target is reached",
        paragraphs: [
          "The tool saves your picture as a JPG and tests different quality levels until it finds the best one that is still under the limit. For 50 KB we count 1 KB as 1,000 bytes, so the file is under 50 KB whether a website counts in 1,000 or 1,024 bytes.",
          "If the picture is so large that even the lowest quality is still too big, the tool also makes it a little smaller in pixels and tries again. The result panel shows the final pixel size.",
        ],
      },
      {
        heading: "Photo size, signature size and dimensions",
        paragraphs: [
          "Some forms ask for both a file size and exact dimensions in pixels. This tool controls the file size. If you also need exact dimensions, resize the image first with the Image Resizer, then compress it here.",
          "Always check what the website asks for. Some portals want JPG only, and this tool always saves a JPG. If your image has a transparent background, the transparent area becomes white.",
        ],
      },
    ],
    tips: [
      "If your file is already under 50 KB, you do not need to compress it.",
      "Plain backgrounds and simple pictures compress best. Detailed photos lose more quality at this size.",
      "Scan or photograph documents in good light. Sharp, clean images stay readable at a small size.",
      "Keep your original image in case you need a larger version later.",
    ],
    faq: [
      [
        "Will the picture still look good at 50 KB?",
        "For passport-style photos, signatures and simple documents, usually yes. Very detailed or very large photos lose more detail. Check the preview before you download.",
      ],
      [
        "Does the tool change the width and height of my image?",
        "Only if it has to. It first reduces the quality. If that is not enough, it makes the picture slightly smaller. The final size in pixels is shown under the result.",
      ],
      [
        "What if the tool cannot reach 50 KB?",
        "That is rare, but it can happen with extremely large or very detailed images. The tool then shows the smallest version it could make. Resize the image with the Image Resizer first and try again.",
      ],
      [
        "What format is the result?",
        "Always JPG, because JPG lets us choose the exact quality needed to reach the size. Transparent areas turn white.",
      ],
    ],
    related: ["compress-image-to-100kb", "image-resizer", "image-compressor"],
  },

  "compress-image-to-100kb": {
    title: "Compress Image to 100KB Online (Free)",
    description:
      "Reduce any photo to 100 KB or less online. Supports JPG, PNG and WebP, runs in your browser, no upload and no sign-up. Free and private.",
    h1: "Compress Image to 100KB Online",
    intro: [
      "A limit of 100 KB is common for profile pictures, ID photos and document uploads. This tool reduces your image to 100 KB or less, right in your browser.",
      "It picks the best quality for you, so you do not have to try setting after setting. Nothing is uploaded.",
    ],
    steps: [
      "Drop your JPG, PNG or WebP image onto the upload area, or click to choose a file.",
      "Wait a moment while the tool finds the best quality that fits under 100 KB.",
      "Check the file size and the preview. A green message means the file is under 100 KB.",
      "Click Download Image to save your JPG.",
    ],
    why: [
      "A result under 100 KB with no guessing.",
      "More detail kept than at 50 KB, so photos and documents stay clearer.",
      "No account, no watermark, no upload.",
      "Works in modern browsers on phone and computer.",
    ],
    guide: [
      {
        heading: "What you can expect at 100 KB",
        paragraphs: [
          "At 100 KB most everyday photos, such as profile pictures and ID photos, still look clear on screen. Large, detailed photos, for example a 12-megapixel picture from a phone, need strong compression to get that small, and the tool may also reduce the picture's pixel size.",
          "The result is always a JPG. For 100 KB we count 1 KB as 1,000 bytes, so the file is under the limit whether a website counts in 1,000 or 1,024 bytes.",
        ],
      },
      {
        heading: "Need a different limit?",
        paragraphs: [
          "If the upload page asks for a smaller file, use Compress Image to 50KB. If you can allow a bit more, Compress Image to 200KB keeps more quality. For full control over the quality yourself, use the Image Compressor.",
        ],
      },
    ],
    tips: [
      "If your file is already under 100 KB, you do not need to compress it.",
      "Resize very large photos first with the Image Resizer for the sharpest result.",
      "Check the website's rules for the file type. This tool saves JPG files.",
      "Keep your original image as a backup.",
    ],
    faq: [
      [
        "Will my image lose quality?",
        "Some, because the file has to become smaller. The tool keeps the highest quality that fits under 100 KB, and you can check the preview before downloading.",
      ],
      [
        "Can I compress a PNG to 100 KB?",
        "Yes. PNG images are converted to JPG so the size can be controlled. Transparent areas turn white.",
      ],
      [
        "Is 100 KB the same as 0.1 MB?",
        "Roughly. 1 MB is about 1,000 KB, so 100 KB is about 0.1 MB.",
      ],
      [
        "Does it change the width and height?",
        "Only if needed. The tool lowers the quality first and makes the picture a little smaller only when quality alone cannot reach 100 KB.",
      ],
    ],
    related: ["compress-image-to-50kb", "compress-image-to-200kb", "image-resizer"],
  },

  "compress-image-to-200kb": {
    title: "Compress Image to 200KB Online (Free)",
    description:
      "Compress a photo to 200 KB or less and keep it sharp. JPG, PNG and WebP supported. Runs in your browser with no upload. Free and private.",
    h1: "Compress Image to 200KB Online",
    intro: [
      "A 200 KB limit gives you room for a clear photo or a readable document scan. This tool reduces your image to 200 KB or less, and keeps as much quality as that size allows.",
      "It all happens in your browser. Your image is not uploaded anywhere.",
    ],
    steps: [
      "Drop your JPG, PNG or WebP image onto the upload area, or click to choose a file.",
      "Wait a moment while the tool finds the best quality that fits under 200 KB.",
      "Check the file size and the preview. A green message means the file is under 200 KB.",
      "Click Download Image to save your JPG.",
    ],
    why: [
      "Best quality of our three size limits.",
      "Good for document scans and detailed pictures.",
      "No account, no watermark, no upload.",
      "Works on phone and computer.",
    ],
    guide: [
      {
        heading: "When 200 KB is the right choice",
        paragraphs: [
          "At 200 KB, text in a scanned document is usually still easy to read and faces stay clear. It is a good size for email attachments, online forms and website images that should load quickly.",
          "The result is always a JPG, and we count 1 KB as 1,000 bytes, so your file is under the limit whether a website counts in 1,000 or 1,024 bytes.",
        ],
      },
      {
        heading: "Other ways to make a file smaller",
        paragraphs: [
          "Reducing the width and height in pixels is the most effective way to shrink a big photo. Use the Image Resizer for that. For a smaller limit, try Compress Image to 100KB or Compress Image to 50KB.",
        ],
      },
    ],
    tips: [
      "If your file is already under 200 KB, you do not need to compress it.",
      "Screenshots with small text can look soft at low quality. Check the preview.",
      "Resize extra-large images first for a sharper result.",
      "Keep your original image as a backup.",
    ],
    faq: [
      [
        "Is 200 KB enough for a clear photo?",
        "Yes for most uses on screen. A photo of a few hundred pixels across looks good at this size. Very large pictures are made smaller to fit.",
      ],
      [
        "Can I compress a screenshot to 200 KB?",
        "Yes. The result is saved as a JPG, so very sharp text may look slightly softer. Check the preview before you download.",
      ],
      [
        "What format is the result?",
        "Always JPG. Transparent areas of a PNG or WebP image turn white.",
      ],
      [
        "How is this different from the Image Compressor?",
        "The Image Compressor lets you choose the quality yourself. This tool aims for a specific file size and picks the quality for you.",
      ],
    ],
    related: ["compress-image-to-100kb", "image-compressor", "image-resizer"],
  },

  "image-resizer": {
    title: "Image Resizer: Resize Photos to Exact Size",
    description:
      "Resize any image to the exact width and height you need, or pick a social media preset. Works in your browser. Free, fast and private, no upload.",
    h1: "Free Image Resizer: Set the Exact Width and Height",
    intro: [
      "Forms, social media, online shops and school portals often ask for a specific image size. This tool lets you set the exact dimensions in pixels, then download the resized picture right away.",
      "Your image stays on your device. Nothing is uploaded.",
    ],
    steps: [
      "Upload your image by dropping it on the upload area or choosing a file.",
      "Enter a new width and height, or pick a quick preset such as Instagram Post or YouTube Thumbnail.",
      "Keep Lock aspect ratio ticked if you do not want the picture to look stretched.",
      "Check the result size, then download your resized image.",
    ],
    why: [
      "Exact pixel sizes for forms, ID photos and online stores.",
      "Quick presets for Instagram, YouTube, Facebook and LinkedIn.",
      "Aspect ratio lock keeps your picture from looking squashed.",
      "No account, no watermark, no upload.",
    ],
    guide: [
      {
        heading: "Resizing, compressing and cropping are different",
        paragraphs: [
          "Resizing changes the width and height in pixels. Compressing changes how much space the file takes. Cropping cuts away part of the picture. This tool resizes. It does not crop.",
          "For the smallest file, resize first and then compress with the Image Compressor, or use Compress Image to 100KB if a website gives you a size limit.",
        ],
      },
      {
        heading: "About the presets",
        paragraphs: [
          "A preset sets the exact width and height shown on the button. If your photo has a different shape, for example a tall phone photo and a square preset, the picture will be stretched to fit. For the best result, crop the photo to the right shape first, or type one side yourself with Lock aspect ratio ticked.",
        ],
      },
    ],
    tips: [
      "Making an image smaller usually looks fine. Making it much larger can make it look blurry.",
      "Type only the width with Lock aspect ratio ticked, and the height follows automatically.",
      "If the file is still too big after resizing, run it through the Image Compressor.",
      "Check the exact size a website asks for before you resize.",
    ],
    faq: [
      [
        "What is the difference between resizing and compressing?",
        "Resizing changes the dimensions (width and height in pixels). Compressing reduces the file size. For the smallest result, resize first and then compress.",
      ],
      [
        "Can I keep the original proportions?",
        "Yes. Keep Lock aspect ratio ticked and the other value updates automatically when you change width or height.",
      ],
      [
        "Why does my picture look stretched after using a preset?",
        "Presets set an exact width and height. If your photo has a different shape, it is stretched to match. Crop the photo first, or enter one value with Lock aspect ratio ticked.",
      ],
      [
        "Does the resizer change the file format?",
        "No. A JPG stays a JPG and a WebP stays a WebP. Other images, such as PNG files, are saved as PNG. Use a converter if you want a different format.",
      ],
    ],
    related: ["image-compressor", "compress-image-to-100kb", "png-to-jpg"],
  },

  "jpg-to-png": {
    title: "JPG to PNG Converter: Free, No Upload",
    description:
      "Convert JPG images to PNG instantly in your browser. Free, private and simple. No sign-up, no upload and no software to install.",
    h1: "Free JPG to PNG Converter",
    intro: [
      "Need a PNG version of your JPG image? Add your photo and download it as a PNG in a moment. The conversion runs in your browser, so your picture stays private.",
    ],
    steps: [
      "Drop your JPG image onto the upload area, or click to choose a file.",
      "Wait a moment while it converts.",
      "Check the file size, then download your PNG.",
    ],
    why: [
      "PNG keeps every pixel exactly as it is, with no further quality loss.",
      "A good choice for logos, icons, screenshots and editing.",
      "No account, no watermark.",
    ],
    guide: [
      {
        heading: "JPG vs PNG: which format should you use?",
        paragraphs: [
          "JPG is lossy and made for photographs. It gives small files, but each time you save it again it can lose a little detail. PNG is lossless, so it keeps the image exactly as it is, and it supports transparency. The trade-off is that PNG files are usually larger, especially for photos.",
          "Choose PNG when you will edit the picture further, or when you need sharp edges, such as in logos, diagrams and screenshots. Choose JPG when you only need a small photo to share.",
        ],
      },
      {
        heading: "What converting does not do",
        paragraphs: [
          "Converting a JPG to PNG does not add back detail the JPG already lost, and it does not create a transparent background. The picture will look the same, in a format that does not lose more quality when saved again.",
        ],
      },
    ],
    tips: [
      "PNG files are often larger than JPG files, especially for photos.",
      "Need a smaller file instead? Try the Image Compressor or JPG to WebP.",
      "Keep your original JPG if you only need a small photo to share.",
    ],
    faq: [
      [
        "Will the quality improve after converting to PNG?",
        "No. The image will look the same, but it will not be restored to a higher quality. PNG simply avoids losing more detail.",
      ],
      [
        "Why is my PNG bigger than my JPG?",
        "PNG stores image data without lossy compression, so the files are often larger, especially for photographs.",
      ],
      [
        "Will the background become transparent?",
        "No. A JPG has no transparency, so the PNG keeps the same solid background. Removing a background needs a different kind of tool.",
      ],
    ],
    related: ["png-to-jpg", "jpg-to-webp", "image-compressor"],
  },

  "png-to-jpg": {
    title: "PNG to JPG Converter: Free and Private",
    description:
      "Convert PNG images to JPG in seconds, right in your browser. Get smaller files for easy sharing. Free, no upload, no sign-up.",
    h1: "Free PNG to JPG Converter",
    intro: [
      "PNG files can be large, and some websites and forms only accept JPG. This tool converts your PNG to a JPG so it is smaller and easier to share. Your image never leaves your device.",
    ],
    steps: [
      "Drop your PNG image onto the upload area, or click to choose a file.",
      "Adjust the quality setting if you want a smaller file, and check the preview.",
      "Check the file size, then download the JPG.",
    ],
    why: [
      "JPG files are usually much smaller than PNG files, especially for photos.",
      "Accepted almost everywhere: forms, email and social media.",
      "No account, no watermark.",
    ],
    guide: [
      {
        heading: "When to convert PNG to JPG",
        paragraphs: [
          "PNG is great for logos, icons and screenshots, but for photographs it creates big files. JPG uses lossy compression that is designed for photos, so a converted picture is usually a fraction of the size. That makes it easier to email, upload to forms and share in messaging apps.",
        ],
      },
      {
        heading: "What happens to transparency",
        paragraphs: [
          "JPG cannot store transparency. Transparent parts of your PNG are filled with white. If you need the transparent version later, keep your original PNG.",
        ],
      },
    ],
    tips: [
      "Lower the quality setting for a smaller file and check the preview.",
      "Keep your original PNG if you may need the transparent version again.",
      "If a website sets a size limit, try Compress Image to 100KB.",
    ],
    faq: [
      [
        "What happens to transparent parts of my PNG?",
        "They become white, because JPG cannot store transparency.",
      ],
      [
        "Will my file get smaller?",
        "Usually yes, particularly for photos. The new file size is shown before you download.",
      ],
      [
        "Can I choose the JPG quality?",
        "Yes. Use the quality slider. Lower values make smaller files, and the preview shows how the result looks.",
      ],
    ],
    related: ["jpg-to-png", "png-to-webp", "compress-image-to-100kb"],
  },

  "webp-to-jpg": {
    title: "WebP to JPG Converter: Free and Private",
    description:
      "Convert WebP images to JPG online in your browser. Open and share WebP pictures anywhere. Free, private, no upload and no sign-up.",
    h1: "Free WebP to JPG Converter",
    intro: [
      "Saved a picture from a website and ended up with a .webp file that your phone, editor or form will not open? This tool turns your WebP into a JPG that works almost everywhere.",
      "The conversion runs in your browser, so your image is never uploaded.",
    ],
    steps: [
      "Drop your WebP image onto the upload area, or click to choose a file.",
      "Adjust the quality setting if you want, and check the preview.",
      "Check the file size, then download your JPG.",
    ],
    why: [
      "JPG opens in practically every app, device and website form.",
      "Control the quality and file size with one slider.",
      "No account, no watermark, no upload.",
    ],
    guide: [
      {
        heading: "Why you end up with WebP files",
        paragraphs: [
          "WebP is an image format created for the web. Many websites serve WebP because the files are small, so when you save a picture from a page you may get a .webp file. Current browsers open WebP without trouble, but some older programs, document editors and upload forms still only accept JPG or PNG.",
        ],
      },
      {
        heading: "Things to know before converting",
        paragraphs: [
          "JPG has no transparency, so transparent areas in a WebP image become white. If you need to keep transparency, use WebP to PNG instead.",
          "If your WebP is animated, only the first frame is converted.",
        ],
      },
    ],
    tips: [
      "Use WebP to PNG if your image has a transparent background.",
      "Keep the original WebP if you want the smallest possible file for a website.",
      "Lower the quality for a smaller JPG, and check the preview.",
    ],
    faq: [
      [
        "Why can't I open a WebP file?",
        "Some older programs and websites do not support WebP. Converting the file to JPG makes it work almost everywhere.",
      ],
      [
        "What happens to transparent areas?",
        "They become white, because JPG cannot store transparency. Use WebP to PNG to keep them.",
      ],
      [
        "Does it convert animated WebP?",
        "Only the first frame is converted into a still JPG.",
      ],
    ],
    related: ["webp-to-png", "jpg-to-pdf", "image-compressor"],
  },

  "webp-to-png": {
    title: "WebP to PNG Converter: Free Online",
    description:
      "Convert WebP images to PNG in your browser and keep transparency. Free, private and quick. No upload, no sign-up and no software.",
    h1: "Free WebP to PNG Converter",
    intro: [
      "Need a PNG from a WebP file? This tool converts it in your browser and keeps any transparent areas, which makes it a good choice for logos, icons and pictures you want to edit.",
      "Your image stays on your device. Nothing is uploaded.",
    ],
    steps: [
      "Drop your WebP image onto the upload area, or click to choose a file.",
      "Wait a moment while it converts.",
      "Check the file size, then download your PNG.",
    ],
    why: [
      "Keeps transparent backgrounds.",
      "PNG works in almost every editor and app.",
      "No account, no watermark, no upload.",
    ],
    guide: [
      {
        heading: "WebP to PNG or WebP to JPG?",
        paragraphs: [
          "Choose PNG when your image has a transparent background, or when you want to keep it sharp for editing. Choose JPG when it is a photo and you want a smaller file. PNG files made from photos are often much larger than the WebP you started with.",
        ],
      },
      {
        heading: "Good to know",
        paragraphs: [
          "If your WebP is animated, only the first frame is converted. Converting to PNG does not restore detail lost if the WebP was saved with lossy compression.",
        ],
      },
    ],
    tips: [
      "Expect the PNG to be larger than the WebP, especially for photos.",
      "Use WebP to JPG instead if you only need a small photo to share.",
      "Keep the original WebP as a backup.",
    ],
    faq: [
      [
        "Does the PNG keep transparency?",
        "Yes. Transparent areas of your WebP stay transparent in the PNG.",
      ],
      [
        "Why is the PNG bigger than my WebP?",
        "WebP is designed to make small files, while PNG stores pixels without lossy compression. For photos the difference can be large.",
      ],
      [
        "Does it convert animated WebP?",
        "Only the first frame is converted into a still PNG.",
      ],
    ],
    related: ["webp-to-jpg", "png-to-jpg", "image-resizer"],
  },

  "jpg-to-webp": {
    title: "JPG to WebP Converter: Smaller Images",
    description:
      "Convert JPG to WebP online for smaller image files and faster websites. Runs in your browser. Free, private, no upload and no sign-up.",
    h1: "Free JPG to WebP Converter",
    intro: [
      "WebP is a modern image format made for the web. It often gives smaller files than JPG at similar quality, which helps pages load faster. Convert your JPG to WebP here in a few clicks. Your image stays in your browser.",
    ],
    steps: [
      "Drop your JPG image onto the upload area, or click to choose a file.",
      "Adjust the quality setting if needed and check the preview.",
      "Check the file size, then download the WebP file.",
    ],
    why: [
      "Smaller files that load faster on websites.",
      "Good quality for photos.",
      "Supported by all modern browsers.",
    ],
    guide: [
      {
        heading: "Why use WebP instead of JPG?",
        paragraphs: [
          "Google, who created WebP, reports that lossy WebP images are about 25-34% smaller than comparable JPG images at the same visual quality. Smaller images load faster, which gives visitors a better experience and helps your pages perform well in search.",
        ],
      },
      {
        heading: "Before you switch",
        paragraphs: [
          "All current browsers show WebP, but a few older apps and upload forms still only accept JPG. Keep your JPG as a backup, and use WebP to JPG whenever you need to go back.",
          "Creating a WebP file needs a browser that can export WebP. Current Chrome, Edge and Firefox can. If your browser cannot, the tool shows a message instead of a broken file.",
        ],
      },
    ],
    tips: [
      "Compare the file size shown with your original JPG before you download.",
      "Keep your JPG as a backup, since a few older apps cannot open WebP.",
      "Resize very large photos first for an even smaller result.",
    ],
    faq: [
      [
        "What is WebP?",
        "WebP is a modern image format designed to keep files small while still looking good on websites.",
      ],
      [
        "Will every app open WebP files?",
        "Most current browsers and apps do. Some older software may not, so keep your JPG as a backup.",
      ],
      [
        "Why does it say my browser can't create that format?",
        "Some browsers, especially older versions of Safari, cannot create WebP files. Try a current version of Chrome, Edge or Firefox.",
      ],
    ],
    related: ["png-to-webp", "webp-to-jpg", "image-compressor"],
  },

  "png-to-webp": {
    title: "PNG to WebP Converter: Free Online",
    description:
      "Convert PNG images to WebP for faster, lighter websites. Free, private and quick. Runs in your browser with no upload or sign-up.",
    h1: "Free PNG to WebP Converter",
    intro: [
      "Large PNG files slow down websites. WebP gives you a lighter file that is made for the web. Convert your PNG to WebP here, right in your browser, with no upload.",
    ],
    steps: [
      "Drop your PNG image onto the upload area, or click to choose a file.",
      "Adjust the quality setting if needed and check the preview.",
      "Check the file size, then download your WebP image.",
    ],
    why: [
      "WebP files are often much smaller than PNG files.",
      "Faster page loading for your website.",
      "WebP can keep transparency, so logos and icons can stay transparent.",
    ],
    guide: [
      {
        heading: "Why convert PNG to WebP?",
        paragraphs: [
          "PNG files keep every pixel, but they can be heavy, especially for photos and large graphics. WebP can store the same kind of picture, including transparency, in a much smaller file. Google reports that lossless WebP images are about 26% smaller than PNG images, and lossy WebP gives even smaller files.",
        ],
      },
      {
        heading: "Things to check",
        paragraphs: [
          "This tool saves a lossy WebP using the quality slider. Look at the preview, especially around text and sharp edges, before you download. Creating WebP needs a browser that can export it, such as current Chrome, Edge or Firefox.",
        ],
      },
    ],
    tips: [
      "Keep your original PNG as the master copy.",
      "Check the preview to make sure edges and text still look sharp.",
      "Resize large images first for an even smaller file.",
    ],
    faq: [
      [
        "Does WebP support transparency?",
        "Yes. Transparent areas of your PNG can stay transparent in the WebP file.",
      ],
      [
        "Why convert PNG to WebP?",
        "For smaller files and faster page loading on websites.",
      ],
      [
        "Why does it say my browser can't create that format?",
        "Some browsers, especially older versions of Safari, cannot create WebP files. Try a current version of Chrome, Edge or Firefox.",
      ],
    ],
    related: ["jpg-to-webp", "webp-to-png", "image-compressor"],
  },

  "jpg-to-pdf": {
    title: "JPG to PDF Converter: Free and Private",
    description:
      "Convert JPG and PNG images to a PDF online. Combine several pictures into one file, set the order and page size. Free, private, no upload.",
    h1: "Free JPG to PDF Converter",
    intro: [
      "Turn one photo or a whole set of pictures into a single PDF. It is handy for scanned documents, receipts, certificates and photo albums that you need to send as one file.",
      "The PDF is created in your browser, so your images are never uploaded.",
    ],
    steps: [
      "Drop your images onto the upload area, or click to choose them. You can add up to 30.",
      "Use the arrow buttons to put the pages in the right order, or remove any you do not need.",
      "Choose a page size: A4 with margins, or the same size as each image.",
      "Click Download PDF to save your file.",
    ],
    why: [
      "Combine many images into one PDF.",
      "Choose the page order and page size.",
      "Works with JPG, PNG and WebP pictures.",
      "No account, no watermark, no upload.",
    ],
    guide: [
      {
        heading: "How the PDF is made",
        paragraphs: [
          "Each image becomes one page. On A4 pages, the picture is centered and scaled to fit inside a 10 mm margin, and the page turns sideways automatically for wide images. With the same-size option, each page matches its image exactly, with no margin.",
          "To keep the PDF a sensible size, each picture is limited to 3,000 pixels on its longest side and saved inside the PDF as a high-quality JPG. Transparent areas become white.",
        ],
      },
      {
        heading: "Keep the PDF small",
        paragraphs: [
          "The PDF is roughly as big as the pictures inside it. If you need a smaller PDF for an email or upload form, compress or resize the images first with the Image Compressor or Image Resizer, then combine them here.",
          "The pages are pictures, not editable text. The tool does not read the text in your images, so you cannot select or search it in the PDF.",
        ],
      },
    ],
    tips: [
      "Photograph documents in good light and straight from above for the cleanest pages.",
      "Check the order of the list before you download, as it is the page order.",
      "Compress large photos first if your PDF must stay under a size limit.",
      "Choose the same-size option for posters or screenshots, and A4 for documents you will print.",
    ],
    faq: [
      [
        "Can I combine several images into one PDF?",
        "Yes. Add up to 30 images, put them in order with the arrow buttons and download one PDF with one page per image.",
      ],
      [
        "Does it work with PNG images?",
        "Yes. PNG and WebP pictures work too. Transparent areas are filled with white.",
      ],
      [
        "Can I search or copy the text in my PDF?",
        "No. Each page is a picture, so the text cannot be selected or searched. The tool does not do text recognition.",
      ],
      [
        "Why is my PDF large?",
        "The PDF contains your pictures at high quality. Compress or resize the images first to make it smaller.",
      ],
    ],
    related: ["image-compressor", "image-resizer", "text-to-pdf"],
  },

  "text-to-pdf": {
    title: "Text to PDF Converter: Free and Private",
    description:
      "Convert text, code or HTML files into a clean PDF in your browser. Choose a layout, preview it, then download. Free, with no upload.",
    h1: "Free Text to PDF Converter",
    intro: [
      "Sometimes you just need a clean PDF from a text file, some notes, a snippet of code or an HTML page. This tool turns your content into a PDF in a few seconds, right in your browser.",
      "You can pick a layout and design template, adjust basic formatting and preview the pages before you download.",
    ],
    steps: [
      "Upload a .txt, .md, .html, .json, .js or .css file, or type your text into the box.",
      "Choose a layout: Presentation, Original File or Auto Design with four templates.",
      "Adjust the font size, alignment and colors if you want to, and check the preview.",
      "Click Download PDF to save your file.",
    ],
    why: [
      "Four design templates for notes, documents and reports.",
      "Works with plain text, code and HTML files.",
      "PDFs open on any phone, tablet or computer.",
      "No account, no watermark.",
    ],
    guide: [
      {
        heading: "Which layout should you choose?",
        paragraphs: [
          "Auto Design applies one of four templates, with your choice of font size, color, alignment and line spacing. Original File keeps text in a plain monospace style, which suits code, and for an HTML file it keeps your own design. Presentation splits your text into sections wherever there is a blank line and shows each one as a numbered block under a title.",
        ],
      },
      {
        heading: "What to know about the PDF",
        paragraphs: [
          "The tool draws your page and places it into the PDF as pictures. The result looks the same everywhere, but the text in the PDF cannot be selected, copied or searched. If you need selectable text, print the page to PDF from your browser or word processor instead.",
          "Markdown files are accepted, but they are shown as plain text rather than converted into headings and lists. Very long documents can take a little longer to create.",
        ],
      },
    ],
    tips: [
      "Use the preview to check how the page looks before you download.",
      "For HTML files, choose Original File to keep your own design.",
      "Use Presentation when you want your paragraphs to appear as separate numbered sections.",
      "Keep your original text file as the editable copy.",
    ],
    faq: [
      [
        "Which files can I convert?",
        "You can type or paste text, or upload .txt, .md, .html, .htm, .json, .js and .css files.",
      ],
      [
        "Can I change how the PDF looks?",
        "Yes. Choose a layout, pick one of four design templates, and adjust the font size, alignment, color and line spacing. Check the preview before you download.",
      ],
      [
        "Can I select or copy the text in the PDF?",
        "No. The pages are saved as pictures, so the text cannot be selected or searched. Use your browser's print to PDF option if you need selectable text.",
      ],
      [
        "Is my text uploaded to a server?",
        "No. The PDF is created in your browser and your text is not sent to us.",
      ],
    ],
    related: ["jpg-to-pdf", "image-compressor", "image-resizer"],
  },
};

export const HOME_FAQ: [string, string][] = [
  [
    "Are PixelTools really free?",
    "Yes. All tools are free to use and you do not need an account.",
  ],
  [
    "Do you upload or store my images?",
    "No. The tools run in your browser, so your images stay on your device. You can confirm this in your browser's network tab while using a tool.",
  ],
  [
    "How do I compress an image to 50KB or 100KB?",
    "Open Compress Image to 50KB or Compress Image to 100KB, add your picture and download the result. The tool finds the best quality that fits under the limit for you.",
  ],
  [
    "Which formats can I use?",
    "You can compress, resize and convert JPG, PNG and WebP images, and create a PDF from JPG, PNG and WebP pictures or from text files. Other common image formats usually work if your browser can open them.",
  ],
  [
    "Is there a file size limit?",
    "You can use images up to 25 MB.",
  ],
  [
    "Does it work on mobile?",
    "Yes. The tools work in modern mobile browsers, though very large images may be slow on older phones.",
  ],
];
