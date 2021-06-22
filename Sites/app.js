import express from "express";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import fs from "fs";

const app = express();
const port = 3000;
const readMe = fs.readFileSync("README.md", "utf-8");
// md 파일을 긁어옵니다.
const html_text = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(html)
  .processSync(readMe);

const htmlElements = `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MH-frontend-roadmap</title>
  </head>
  <body>
    ${html_text}
  </body>
  </html>
`;

app.get("/", (req, res) => {
  res.send(htmlElements);
});

app.listen(port, () => {
  console.log("Listening server", port);
});
