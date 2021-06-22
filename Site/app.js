import express from "express";
import unified from "unified";
import replaceString from "replace-string";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

import { styleSheet } from "./Styles/Style.js";

const app = express();
const readMe = fs.readFileSync("README.md", "utf-8");
// md 파일을 긁어옵니다.
const html_text = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(html)
  .processSync(readMe);

const ex = html_text.toString();

const htmlEntity = replaceString(
  ex,
  '<p><img src="https://user-images.githubusercontent.com/60869316/121890668-90c9f180-cd55-11eb-9030-d8b057f586a3.gif" alt="arrow"></p>',
  "<hr />"
);

const htmlElements = `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MH-frontend-roadmap</title>
      <style>
        ${styleSheet}
      </style>
  </head>
  <body>
    <section id="roadmapWrapper">
      ${htmlEntity}
      <hr />
    </section>
  </body>
  </html>
`;

app.get("/", (req, res) => {
  res.send(htmlElements);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening server");
});
